/* The only JavaScript on nadiasrana.com.
 *
 * Motion 3 of 3: images reveal by clip-path as they enter, once, never
 * repeating. See the Motion section of DESIGN.md.
 *
 * This script only ARMS the reveal. Nothing here is required to read the
 * page: with JS off, or if this file fails to load, neither class is ever
 * added and every image is simply visible. Motion is never a gate.
 */
(function () {
  'use strict';

  // Reduced motion: do not arm anything. Final state is the default state.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  if (!('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  var i;
  for (i = 0; i < targets.length; i++) targets[i].classList.add('is-armed');

  function reveal(el) {
    el.classList.add('is-revealed');
  }

  var io = new IntersectionObserver(function (entries) {
    for (var j = 0; j < entries.length; j++) {
      if (!entries[j].isIntersecting) continue;
      reveal(entries[j].target);
      // Once. Unobserving is what stops it replaying on re-entry, which is
      // the single clearest tell of a generated site.
      io.unobserve(entries[j].target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.2 });

  for (i = 0; i < targets.length; i++) io.observe(targets[i]);

  // Failsafe. Arming hides content, so nothing may stay armed indefinitely:
  // if the observer has not fired for an element within four seconds, show
  // it anyway. A missed animation is a rounding error; a permanently hidden
  // photograph is a broken page.
  window.setTimeout(function () {
    for (var k = 0; k < targets.length; k++) {
      if (!targets[k].classList.contains('is-revealed')) reveal(targets[k]);
    }
    io.disconnect();
  }, 4000);
})();
