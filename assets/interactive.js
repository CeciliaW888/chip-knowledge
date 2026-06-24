/* Reusable interactivity for course lessons.
   1) Explorer: inside [data-explore], any [data-pick="key"] trigger (HTML or SVG <g>)
      reveals the matching [data-panel="key"] and highlights itself.
   2) Jargon tooltips: <span class="term" data-def="...">word</span> — hover, or tap on touch. */

document.querySelectorAll('[data-explore]').forEach(function (root) {
  var triggers = root.querySelectorAll('[data-pick]');
  var panels = root.querySelectorAll('[data-panel]');

  function show(key) {
    triggers.forEach(function (t) {
      t.classList.toggle('is-active', t.getAttribute('data-pick') === key);
    });
    panels.forEach(function (p) {
      p.hidden = p.getAttribute('data-panel') !== key;
    });
  }

  triggers.forEach(function (t) {
    t.setAttribute('tabindex', '0');
    t.setAttribute('role', 'button');
    t.addEventListener('click', function () { show(t.getAttribute('data-pick')); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(t.getAttribute('data-pick')); }
    });
  });
});

// jargon tooltips — tap toggles on touch devices; hover handles the rest via CSS
document.querySelectorAll('.term[data-def]').forEach(function (el) {
  var def = document.createElement('span');
  def.className = 'def';
  def.textContent = el.getAttribute('data-def');
  el.appendChild(def);
  el.setAttribute('tabindex', '0');
  el.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelectorAll('.term.open').forEach(function (o) { if (o !== el) o.classList.remove('open'); });
    el.classList.toggle('open');
  });
});
document.addEventListener('click', function () {
  document.querySelectorAll('.term.open').forEach(function (o) { o.classList.remove('open'); });
});
