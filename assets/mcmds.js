export function attachMcmFloatingScrollbar(scrollRegion, { root = document.body } = {}) {
  if (!(scrollRegion instanceof HTMLElement)) {
    throw new TypeError("attachMcmFloatingScrollbar requires an HTMLElement scroll region");
  }

  scrollRegion.classList.add("mcm-scroll-region--window");
  const track = document.createElement("div");
  const thumb = document.createElement("div");
  track.className = "mcm-floating-scrollbar";
  track.setAttribute("aria-hidden", "true");
  thumb.className = "mcm-floating-scrollbar__thumb";
  track.append(thumb);
  root.append(track);

  let frame = 0;
  const update = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const styles = getComputedStyle(scrollRegion);
      const endInset = Number.parseFloat(styles.getPropertyValue("--mcm-scrollbar-end-inset")) || 16;
      const trackHeight = Math.max(0, scrollRegion.clientHeight - endInset);
      const scrollRange = scrollRegion.scrollHeight - scrollRegion.clientHeight;
      if (scrollRange <= 0 || trackHeight <= 0) {
        thumb.style.opacity = "0";
        return;
      }

      const thumbHeight = Math.max(24, trackHeight * (scrollRegion.clientHeight / scrollRegion.scrollHeight));
      const travel = Math.max(0, trackHeight - thumbHeight);
      const top = travel * (scrollRegion.scrollTop / scrollRange);
      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${top}px)`;
      thumb.style.opacity = "1";
    });
  };

  const resizeObserver = new ResizeObserver(update);
  const observeChildren = () => {
    resizeObserver.disconnect();
    resizeObserver.observe(scrollRegion);
    Array.from(scrollRegion.children).forEach((child) => resizeObserver.observe(child));
    update();
  };
  const mutationObserver = new MutationObserver(observeChildren);
  mutationObserver.observe(scrollRegion, { childList: true });
  scrollRegion.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  observeChildren();

  return () => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    mutationObserver.disconnect();
    scrollRegion.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
    scrollRegion.classList.remove("mcm-scroll-region--window");
    track.remove();
  };
}
