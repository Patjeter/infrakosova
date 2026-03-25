// InfraKosova · Shared navigation
// Inkluder denne fil på alle sider: <script src="nav.js"></script>
// Placer <div id="ik-nav"></div> i <body> som første element efter #map

(function(){
  const PAGE = {
    'index.html'      : 'projektet',
    'faq.html'        : 'faq',
    'rreth.html'      : 'rreth',
    'burimet.html'    : 'burimet',
  };

  // Detect current page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const active = PAGE[path] || 'projektet';

  const LINKS = [
    { id:'projektet', href:'index.html',   label:'Projektet'       },
    { id:'faq',       href:'faq.html',     label:'FAQ'             },
    { id:'rreth',     href:'rreth.html',   label:'Rreth platformës'},
    { id:'burimet',   href:'burimet.html', label:'Burimet'         },
  ];

  const logoSVG = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;

  const navLinks = LINKS.map(l =>
    `<a class="ik-nav-item${l.id===active?' ik-active':''}" href="${l.href}">${l.label}</a>`
  ).join('');

  const html = `
    <div class="ik-hdr">
      <a class="ik-logo" href="index.html">${logoSVG} InfraKosova</a>
      <span class="ik-version">v1.1</span>
      <div class="ik-sep"></div>
      <span class="ik-date">Mars 2026</span>
    </div>
    <nav class="ik-nav">
      ${navLinks}
    </nav>`;

  const css = `
    :root { --ik-hdr:44px; --ik-nav:36px; --ik-top:80px; }
    .ik-hdr {
      position:fixed;top:0;left:0;right:0;height:var(--ik-hdr);z-index:1000;
      background:#fff;border-bottom:1px solid #dde3ec;
      display:flex;align-items:center;padding:0 16px;gap:10px;
      box-shadow:0 1px 4px rgba(0,0,0,.06);
    }
    .ik-logo {
      background:#1a5fd4;color:#fff;font-family:'JetBrains Mono',monospace;
      font-size:12px;font-weight:600;padding:4px 10px;border-radius:6px;
      letter-spacing:.3px;white-space:nowrap;display:flex;align-items:center;gap:6px;
      text-decoration:none;
    }
    .ik-logo:hover { background:#1550b8; }
    .ik-logo svg { flex-shrink:0; }
    .ik-version { font-size:10px;color:#9aaccc;font-family:'JetBrains Mono',monospace; }
    .ik-sep { flex:1; }
    .ik-date { font-size:10px;color:#9aaccc; }
    .ik-nav {
      position:fixed;top:var(--ik-hdr);left:0;right:0;height:var(--ik-nav);z-index:999;
      background:#fff;border-bottom:1px solid #dde3ec;
      display:flex;align-items:stretch;padding:0 16px;
    }
    .ik-nav-item {
      display:flex;align-items:center;padding:0 14px;
      font-size:12px;font-weight:500;color:#6b7a99;
      text-decoration:none;border-bottom:2px solid transparent;
      transition:color .15s;white-space:nowrap;font-family:'Inter',sans-serif;
    }
    .ik-nav-item:hover { color:#18243a; }
    .ik-nav-item.ik-active { color:#1a5fd4;border-bottom-color:#1a5fd4; }
  `;

  // Inject styles
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Inject HTML into #ik-nav placeholder
  const target = document.getElementById('ik-nav');
  if(target) {
    target.innerHTML = html;
  } else {
    // Fallback: prepend to body
    const wrapper = document.createElement('div');
    wrapper.id = 'ik-nav';
    wrapper.innerHTML = html;
    document.body.prepend(wrapper);
  }
})();
