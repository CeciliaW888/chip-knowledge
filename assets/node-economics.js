/* Interactive "leading-edge collapse" slider.
   Drop <div data-node-eco></div> into a lesson; this builds the widget inside.
   Figures marked book-confirmed come from《芯片战争》ch.18 (Gartner data cited there):
   130nm ≈ 30 players · 28nm ≈ 10 · 7nm = 4 ; design cost 28nm $30M, 16/14nm $80M, 7nm $271M.
   Values with * are reasonable estimates extending that trend to current nodes. */

var NE_NODES = [
  { node: '130 nm', era: '~2002', survivors: '≈ 30', design: '~$15M*', costM: 15, names: [] },
  { node: '90 nm',  era: '~2004', survivors: '≈ 20', design: '~$20M*', costM: 20, names: [] },
  { node: '28 nm',  era: '~2011', survivors: '≈ 10', design: '$30M',   costM: 30, names: [] },
  { node: '16/14 nm', era: '~2015', survivors: '≈ 6', design: '$80M',  costM: 80, names: [] },
  { node: '7 nm',   era: '~2018', survivors: '4',     design: '$271M',  costM: 271, names: ['TSMC','Samsung','Intel','SMIC'] },
  { node: '5 nm',   era: '~2020', survivors: '3',     design: '~$540M*', costM: 540, names: ['TSMC','Samsung','Intel'] },
  { node: '3 nm',   era: '~2023', survivors: '2–3',   design: '~$1.0B*', costM: 1000, names: ['TSMC','Samsung'] },
  { node: '2 nm',   era: '~2025', survivors: '2–3',   design: '~$1.5B*', costM: 1500, names: ['TSMC','Samsung','Intel?'] }
];

var NE_MAXCOST = 1500;

function neInsight(d) {
  if (d.survivors === '≈ 30') return 'Plenty of room. Dozens of firms can build chips here — almost no manufacturing moat. Competing on price.';
  if (d.survivors === '≈ 20' || d.survivors === '≈ 10') return 'The field is thinning. Each new node costs more, and weaker players start dropping out.';
  if (d.survivors === '≈ 6') return 'Below 28 nm the economics broke: shrinking the node now makes chips MORE expensive — first time in Moore’s Law history.';
  if (d.survivors === '4') return 'Only four firms can still play — and design alone costs a quarter-billion dollars per chip. The moat is now enormous.';
  return 'Just two or three companies on Earth can manufacture here. This scarcity IS the foundry moat — and why TSMC is so hard to displace.';
}

document.querySelectorAll('[data-node-eco]').forEach(function (root) {
  root.classList.add('node-eco');
  root.innerHTML =
    '<div class="ne-top"><div><div class="ne-node"></div><div class="ne-era"></div></div></div>' +
    '<input type="range" min="0" max="' + (NE_NODES.length - 1) + '" value="0" step="1" aria-label="process node">' +
    '<div class="ne-ticks"><span>130nm · older</span><span>2nm · leading edge</span></div>' +
    '<div class="ne-stats">' +
      '<div class="ne-stat"><div class="ne-label">Companies still in the race</div><div class="ne-val ne-surv"></div></div>' +
      '<div class="ne-stat"><div class="ne-label">Cost to design one chip</div><div class="ne-val ne-design"></div>' +
        '<div class="ne-bar-track"><div class="ne-bar-fill"></div></div></div>' +
    '</div>' +
    '<div class="ne-names"></div>' +
    '<div class="ne-insight"></div>' +
    '<div class="ne-foot">Source:《芯片战争》ch.18 (Gartner data) for 130nm/28nm/7nm survivors &amp; design cost; * = trend estimate for current nodes.</div>';

  var slider = root.querySelector('input');
  var elNode = root.querySelector('.ne-node');
  var elEra = root.querySelector('.ne-era');
  var elSurv = root.querySelector('.ne-surv');
  var elDesign = root.querySelector('.ne-design');
  var elBar = root.querySelector('.ne-bar-fill');
  var elNames = root.querySelector('.ne-names');
  var elInsight = root.querySelector('.ne-insight');

  function render() {
    var d = NE_NODES[+slider.value];
    elNode.textContent = d.node;
    elEra.textContent = d.era;
    elSurv.textContent = d.survivors;
    elDesign.textContent = d.design;
    elBar.style.width = Math.max(2, (d.costM / NE_MAXCOST) * 100) + '%';
    elNames.innerHTML = d.names.length
      ? d.names.map(function (n) { return '<span class="ne-chip">' + n + '</span>'; }).join('')
      : '<span style="color:var(--ink-faint);font-size:0.78rem;font-style:italic;">too many to name</span>';
    elInsight.textContent = neInsight(d);
  }
  slider.addEventListener('input', render);
  render();
});
