(function () {
  "use strict";

  var DICT = window.I18N;
  var PROJECTS = window.PROJECTS;
  var WHATSAPP = "923017147110";
  var EMAIL = "mujtabaazhar110@gmail.com";
  var CATS = ["all", "saas", "mobile", "industrial", "ai", "enterprise", "ecommerce", "web"];
  var INITIAL_COUNT = 10; // with 2 wide cards this fills 4 rows of 3

  var root = document.documentElement;
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };

  var state = {
    lang: root.lang === "ar" ? "ar" : "en",
    filter: "all",
    query: "",
    expanded: false,
    visible: [],
    current: null
  };

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function t(key) { return (DICT[state.lang] && DICT[state.lang][key]) || DICT.en[key] || key; }
  function L(p) { return p[state.lang] || p.en; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- i18n ---------------- */
  function applyI18n() {
    root.lang = state.lang;
    root.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.title = t("meta.title");
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    $$("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    $$(".cv-link").forEach(function (a) {
      a.href = state.lang === "ar" ? "cv/Mujtaba_Azhar_AR.pdf" : "cv/Mujtaba_Azhar_en.pdf";
    });
  }

  function setLang(lang) {
    state.lang = lang;
    store("lang", lang);
    applyI18n();
    renderFilters();
    renderWork();
    setLayer(activeLayer, true);
    if (state.current) openCase(state.current, true);
    var u = new URL(location.href);
    if (u.searchParams.has("lang")) { u.searchParams.set("lang", lang); history.replaceState(null, "", u); }
  }

  $("#langBtn").addEventListener("click", function () { setLang(state.lang === "ar" ? "en" : "ar"); });

  /* ---------------- theme ---------------- */
  $("#themeBtn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    store("theme", next);
    $('meta[name="theme-color"]').setAttribute("content", next === "light" ? "#f6f5f0" : "#07090d");
  });

  /* ---------------- nav ---------------- */
  var nav = $(".nav");
  var navLinks = $(".nav-links");
  var menuBtn = $("#menuBtn");
  window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", scrollY > 8); }, { passive: true });
  menuBtn.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  $$(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); });
  });

  if ("IntersectionObserver" in window) {
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        $$(".nav-links a").forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["work", "machine", "experience", "about", "contact"].forEach(function (id) { var s = document.getElementById(id); if (s) secObs.observe(s); });
  }

  /* ---------------- reveal + counters ---------------- */
  function countUp(el) {
    var to = +el.getAttribute("data-count"), t0 = null, dur = 1400;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var revealObs = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      $$("[data-count]", e.target).forEach(countUp);
      revealObs.unobserve(e.target);
    });
  }, { threshold: 0.12 }) : null;
  $$(".reveal").forEach(function (el) {
    if (revealObs) revealObs.observe(el);
    else { el.classList.add("in"); $$("[data-count]", el).forEach(countUp); }
  });

  /* ---------------- spotlight ---------------- */
  document.addEventListener("pointermove", function (e) {
    var el = e.target.closest && e.target.closest(".spot, .card-p");
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty("--mx", (e.clientX - r.left) + "px");
    el.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, { passive: true });

  /* ---------------- marquee (duplicate for a seamless loop) ---------------- */
  var track = $(".marquee-track");
  if (track) track.innerHTML += track.innerHTML;

  /* ---------------- live console ---------------- */
  (function consoleSim() {
    var clock = $("#consoleClock"), log = $("#consoleLog"), nodes = $$(".pipeline .node");
    var wash = $("#mWash"), queue = $("#mQueue");
    var washes = 128, q = 0, tick = 0;
    var branches = ["MKK-01", "MKK-02", "JED-01", "MKK-04", "TAIF-01"];
    var plates = ["1234 ABJ", "4471 RSD", "908 KHT", "2210 LNA", "77 BGZ", "5603 DXE"];
    function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
    function now() { return new Date().toTimeString().slice(0, 8); }
    function line(cls, tag, msg) {
      var li = document.createElement("li");
      li.innerHTML = "<time>" + now() + "</time><span class='tag " + cls + "'>" + tag + "</span><span>" + esc(msg) + "</span>";
      log.appendChild(li);
      while (log.children.length > 7) log.removeChild(log.firstChild);
    }
    var events = [
      function () { washes++; wash.textContent = washes; line("ok", "PLC", "wash cycle done · " + pick(branches) + " · D200=" + (3400 + washes)); },
      function () { line("info", "GW", "modbus poll ok · 42 regs · 61 ms"); },
      function () { line("ok", "API", "POST /machines/telemetry 201"); },
      function () { line("app", "APP", "loyalty +1 · plate " + pick(plates) + " · WhatsApp sent"); },
      function () { q = 3; queue.textContent = q; line("warn", "GW", "wifi lost · buffering to flash (" + q + ")"); },
      function () { line("ok", "GW", "wifi back · flushed " + q + " events"); q = 0; queue.textContent = q; },
      function () { line("app", "APP", "BLE login · operator PIN ok"); },
      function () { line("info", "API", "unlock code verified · lock date +30d"); }
    ];
    var seq = [0, 1, 2, 3, 0, 1, 4, 0, 5, 6, 2, 0, 7, 3];
    if (clock) clock.textContent = now();
    for (var i = 0; i < 4; i++) events[seq[i]]();
    var pos = 4;
    setInterval(function () { if (clock) clock.textContent = now(); }, 1000);
    // The SVG dot crosses the pipe in 2.6s; light each node as it passes.
    setInterval(function () {
      nodes.forEach(function (n, i) { n.classList.toggle("hit", i === tick % 4); });
      if (tick % 4 === 0) { events[seq[pos % seq.length]](); pos++; }
      tick++;
    }, 650);
  })();

  /* ---------------- card art ---------------- */
  var ART = {
    saas: '<svg viewBox="0 0 200 140"><rect class="fill" x="6" y="10" width="188" height="124" rx="10"/><path d="M6 30h188"/><circle class="solid" cx="18" cy="20" r="3"/><circle class="solid" cx="28" cy="20" r="3" opacity=".5"/><path d="M50 30v104"/><path d="M16 44h22M16 56h18M16 68h22M16 80h14"/><rect x="62" y="42" width="56" height="30" rx="6"/><rect x="126" y="42" width="56" height="30" rx="6"/><path d="M68 62l10-8 9 5 12-11 12 6"/><path d="M62 118l18-14 16 8 20-22 18 10 20-18 26 12" stroke-width="2.2"/><circle class="solid" cx="152" cy="64" r="8" opacity=".6"/></svg>',
    mobile: '<svg viewBox="0 0 200 140"><rect class="fill" x="44" y="14" width="62" height="124" rx="12"/><path d="M66 22h18"/><rect x="54" y="34" width="42" height="42" rx="4"/><path d="M60 40h8v8h-8zM82 40h8v8h-8zM60 62h8v8h-8zM74 54h4v4h-4zM84 64h6"/><path d="M54 88h42M54 98h30"/><rect x="54" y="108" width="42" height="12" rx="6" class="solid" opacity=".7"/><rect class="fill" x="116" y="34" width="56" height="104" rx="11"/><path d="M126 52h36M126 62h24"/><circle cx="144" cy="94" r="16"/><path d="M144 84v10l7 5"/></svg>',
    industrial: '<svg viewBox="0 0 200 140"><rect class="fill" x="20" y="22" width="160" height="96" rx="8"/><path d="M20 40h160M20 100h160"/><g class="solid" opacity=".85"><circle cx="34" cy="31" r="3"/><circle cx="46" cy="31" r="3" opacity=".5"/><circle cx="58" cy="31" r="3"/></g><path d="M32 109h4M44 109h4M56 109h4M68 109h4M80 109h4M92 109h4M104 109h4M116 109h4M128 109h4M140 109h4M152 109h4M164 109h4"/><path d="M36 52v36M164 52v36M36 60h26M74 60h40M126 60h38M36 80h50M98 80h66"/><path d="M62 54v12M74 54v12M86 74v12M98 74v12"/><circle cx="120" cy="60" r="6"/></svg>',
    ai: '<svg viewBox="0 0 200 140"><rect class="fill" x="16" y="26" width="104" height="34" rx="14"/><path d="M30 40h60M30 48h40"/><rect class="fill" x="70" y="72" width="114" height="44" rx="14"/><path d="M84 88h82M84 98h60"/><path d="M40 60l-6 12 16-12"/><path d="M160 22l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" class="solid" opacity=".8"/><path d="M146 54l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" class="solid" opacity=".5"/></svg>',
    ecommerce: '<svg viewBox="0 0 200 140"><path class="fill" d="M54 50h92l-8 84H62z"/><path d="M78 50v-10a22 22 0 0 1 44 0v10"/><circle class="solid" cx="80" cy="64" r="3"/><circle class="solid" cx="120" cy="64" r="3"/><rect class="fill" x="140" y="18" width="46" height="30" rx="6"/><path d="M148 30h22M148 38h14"/><circle cx="34" cy="96" r="16"/><path d="M28 96l4 4 8-8"/></svg>',
    enterprise: '<svg viewBox="0 0 200 140"><rect class="fill" x="14" y="16" width="172" height="118" rx="10"/><path d="M14 38h172M14 60h172M14 82h172M14 104h172M62 38v96M112 38v96M150 38v96"/><path d="M24 27h40" stroke-width="3"/><rect class="solid" x="120" y="66" width="22" height="10" rx="3" opacity=".7"/><rect class="solid" x="120" y="88" width="16" height="10" rx="3" opacity=".4"/><path d="M24 49h26M24 71h30M24 93h22M24 115h28"/></svg>',
    web: '<svg viewBox="0 0 200 140"><rect class="fill" x="10" y="14" width="180" height="124" rx="10"/><path d="M10 34h180"/><circle class="solid" cx="22" cy="24" r="3"/><circle class="solid" cx="32" cy="24" r="3" opacity=".6"/><circle class="solid" cx="42" cy="24" r="3" opacity=".3"/><rect x="58" y="19" width="90" height="10" rx="5"/><path d="M26 56h80M26 68h60" stroke-width="3"/><rect class="solid" x="26" y="80" width="40" height="12" rx="6" opacity=".7"/><rect class="fill" x="120" y="48" width="56" height="48" rx="8"/><path d="M26 112h40M80 112h40M134 112h40"/></svg>'
  };

  /* Project photo from assets/projects/<slug>.webp, falling back to .png.
   * Until a file exists the drawn art stays visible (img removes itself). */
  function imgHTML(slug) {
    return '<img class="cp-img" src="assets/projects/' + slug + '.webp" alt="" loading="lazy" decoding="async">';
  }
  // load/error don't bubble, so listen in the capture phase.
  document.addEventListener("load", function (e) {
    var img = e.target;
    if (img.classList && img.classList.contains("cp-img")) img.parentNode.classList.add("has-img");
  }, true);
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (!img.classList || !img.classList.contains("cp-img")) return;
    // Try .webp → .png → .jpg, then give up and keep the drawn art.
    var next = { webp: "png", png: "jpg" }[img.src.split(".").pop()];
    if (next) img.src = img.src.replace(/\.\w+$/, "." + next);
    else img.remove();
  }, true);

  /* ---------------- work grid ---------------- */
  var grid = $("#workGrid"), filtersEl = $("#filters"), moreBtn = $("#moreBtn"), emptyEl = $("#workEmpty");

  function matches(p) {
    if (state.filter !== "all" && p.cat.indexOf(state.filter) === -1) return false;
    if (!state.query) return true;
    var q = state.query.toLowerCase();
    var hay = [p.en.title, p.en.tagline, p.ar.title, p.ar.tagline, p.stack.join(" "), t("country." + p.country), DICT.en["country." + p.country], p.cat.join(" ")].join(" ").toLowerCase();
    return q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function renderFilters() {
    filtersEl.innerHTML = CATS.map(function (c) {
      var n = c === "all" ? PROJECTS.length : PROJECTS.filter(function (p) { return p.cat.indexOf(c) !== -1; }).length;
      return '<button class="chip-btn" role="tab" type="button" data-f="' + c + '" aria-selected="' + (state.filter === c) + '">' +
        esc(t("filter." + c)) + ' <span class="n">' + n + "</span></button>";
    }).join("");
  }

  filtersEl.addEventListener("click", function (e) {
    var b = e.target.closest("[data-f]");
    if (!b) return;
    setFilter(b.getAttribute("data-f"));
  });

  function setFilter(f) {
    state.filter = f;
    state.expanded = f !== "all";
    $$("[data-f]", filtersEl).forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-f") === f); });
    renderWork();
  }

  function cardHTML(p, big) {
    var d = L(p), c = p.cat[0];
    return '<button type="button" class="card-p cat-' + c + (big ? " big" : "") + '" data-slug="' + p.slug + '">' +
      '<div class="cp-visual"><div class="cp-tags">' +
        '<span class="pill status ' + p.status + '">' + esc(t("status." + p.status)) + "</span>" +
        '<span class="pill">' + esc(t("country." + p.country)) + "</span>" +
      '</div>' + imgHTML(p.slug) + '<div class="cp-art">' + ART[c] + "</div></div>" +
      '<div class="cp-body"><span class="cp-cat">' + p.cat.map(function (k) { return esc(t("filter." + k)); }).join(" · ") + "</span>" +
        "<h3>" + esc(d.title) + "</h3><p>" + esc(d.tagline) + "</p>" +
        '<div class="cp-stack" dir="ltr">' + p.stack.slice(0, big ? 6 : 4).map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("") + "</div>" +
        '<span class="cp-go">' + esc(t("work.view")) + ' <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>' +
      "</div></button>";
  }

  function renderWork() {
    var list = PROJECTS.filter(matches);
    var browsingAll = state.filter === "all" && !state.query;
    var shown = browsingAll && !state.expanded ? list.slice(0, INITIAL_COUNT) : list;
    state.visible = list;
    grid.innerHTML = shown.map(function (p, i) {
      return cardHTML(p, p.featured && browsingAll && (i === 0 || i === 3));
    }).join("");
    $$(".card-p", grid).forEach(function (el, i) { el.style.animationDelay = Math.min(i * 40, 400) + "ms"; });
    emptyEl.hidden = list.length > 0;
    moreBtn.parentElement.hidden = !browsingAll;
    moreBtn.textContent = t(state.expanded ? "work.less" : "work.more") + (state.expanded ? "" : " (" + list.length + ")");
  }

  grid.addEventListener("click", function (e) {
    var c = e.target.closest("[data-slug]");
    if (c) openCase(c.getAttribute("data-slug"));
  });
  moreBtn.addEventListener("click", function () {
    state.expanded = !state.expanded;
    renderWork();
    if (!state.expanded) $("#work").scrollIntoView();
  });
  var searchT;
  $("#workSearch").addEventListener("input", function (e) {
    clearTimeout(searchT);
    searchT = setTimeout(function () { state.query = e.target.value.trim(); renderWork(); }, 120);
  });

  $$("[data-filter-jump]").forEach(function (tile) {
    tile.addEventListener("click", function () {
      setFilter(tile.getAttribute("data-filter-jump"));
      $("#work").scrollIntoView();
    });
  });

  /* ---------------- case drawer ---------------- */
  var drawer = $("#drawer"), lastFocus = null;

  function findProject(slug) {
    for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].slug === slug) return PROJECTS[i];
    return null;
  }

  function openCase(slug, silent) {
    var p = findProject(slug);
    if (!p) return;
    var d = L(p), c = p.cat[0];
    state.current = slug;
    var panel = $(".drawer-panel", drawer);
    panel.className = "drawer-panel cat-" + c;
    $("#dMeta").innerHTML =
      '<span class="pill status ' + p.status + '">' + esc(t("status." + p.status)) + "</span>" +
      '<span class="pill">' + esc(t("country." + p.country)) + "</span>" +
      '<span class="pill">' + p.year + "</span>";
    $("#dBody").innerHTML =
      '<div class="d-hero cp-visual">' + imgHTML(p.slug) + '<div class="cp-art">' + ART[c] + "</div></div>" +
      '<div class="d-content">' +
        '<span class="d-cat">' + p.cat.map(function (k) { return esc(t("filter." + k)); }).join(" · ") + "</span>" +
        '<h2 id="dTitle">' + esc(d.title) + '</h2><p class="d-tag">' + esc(d.tagline) + "</p>" +
        (p.link ? '<a class="btn btn-sm btn-ghost d-visit" href="' + p.link + '" target="_blank" rel="noopener">' + esc(t("case.visit")) + ' ↗</a>' : "") +
        '<section class="d-sec"><h4>' + esc(t("case.problem")) + "</h4><p>" + esc(d.problem) + "</p></section>" +
        '<section class="d-sec"><h4>' + esc(t("case.built")) + "</h4><p>" + esc(d.built) + "</p></section>" +
        '<section class="d-sec"><h4>' + esc(t("case.outcome")) + "</h4><p>" + esc(d.outcome) + "</p></section>" +
        '<section class="d-sec"><h4>' + esc(t("case.stack")) + '</h4><div class="cp-stack">' + p.stack.map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("") + "</div></section>" +
      "</div>";
    $("#dBody").scrollTop = 0;
    if (silent && drawer.hidden) return;
    if (drawer.hidden) {
      lastFocus = document.activeElement;
      drawer.hidden = false;
      document.body.style.overflow = "hidden";
      $("[data-close].icon-only", drawer).focus();
    }
    if (location.hash !== "#/work/" + slug) history.replaceState(null, "", "#/work/" + slug);
  }

  function closeCase() {
    if (drawer.hidden) return;
    drawer.hidden = true;
    state.current = null;
    document.body.style.overflow = "";
    var u = new URL(location.href); u.searchParams.delete("p"); u.hash = "";
    history.replaceState(null, "", u.pathname + u.search);
    if (lastFocus) lastFocus.focus();
  }

  function stepCase(dir) {
    var list = state.visible.length ? state.visible : PROJECTS;
    var i = list.findIndex(function (p) { return p.slug === state.current; });
    if (i === -1) list = PROJECTS, i = PROJECTS.findIndex(function (p) { return p.slug === state.current; });
    openCase(list[(i + dir + list.length) % list.length].slug);
  }

  drawer.addEventListener("click", function (e) { if (e.target.closest("[data-close]")) closeCase(); });
  $("#dPrev").addEventListener("click", function () { stepCase(-1); });
  $("#dNext").addEventListener("click", function () { stepCase(1); });

  /* ---------------- machine layers ---------------- */
  var LAYER_LINKS = {
    1: ["speed-s3-plc-hmi", "machine-control-panel"],
    2: ["speed-s3-gateway", "smart-tracker"],
    3: ["speed-s3-gateway", "installment-lock"],
    4: ["speed-s3-gateway", "installment-lock"],
    5: ["speed-s3-remote", "washtrack-apps"]
  };
  var LAYER_COLORS = { 1: "var(--amber)", 2: "var(--lime)", 3: "var(--sky)", 4: "var(--accent)", 5: "var(--violet)" };
  var activeLayer = 1, layerTimer = null, layerInteracted = false;

  function setLayer(n, force) {
    if (n === activeLayer && !force) return;
    activeLayer = n;
    $$(".layer").forEach(function (li) { li.classList.toggle("active", +li.getAttribute("data-l") === n); });
    $$(".slab").forEach(function (s, i) { s.classList.toggle("on", 5 - i === n); });
    var det = $("#layerDetail");
    det.style.setProperty("--c", LAYER_COLORS[n]);
    $("#ldNum").textContent = "0" + n + " / 05";
    $("#ldTitle").textContent = t("machine.l" + n + ".t");
    $("#ldSub").textContent = t("machine.l" + n + ".s");
    $("#ldText").textContent = t("machine.l" + n + ".d");
    $("#ldLinks").innerHTML = LAYER_LINKS[n].map(function (slug) {
      return '<button type="button" data-slug="' + slug + '">' + esc(L(findProject(slug)).title) + " →</button>";
    }).join("");
  }
  $$(".layer").forEach(function (li) {
    var n = +li.getAttribute("data-l");
    function pick() { layerInteracted = true; clearInterval(layerTimer); setLayer(n); }
    li.addEventListener("mouseenter", pick);
    li.addEventListener("click", pick);
    li.addEventListener("focus", pick);
  });
  $("#ldLinks").addEventListener("click", function (e) {
    var b = e.target.closest("[data-slug]");
    if (b) openCase(b.getAttribute("data-slug"));
  });
  layerTimer = setInterval(function () { if (!layerInteracted) setLayer(activeLayer % 5 + 1); }, 3800);

  /* ---------------- command palette ---------------- */
  var palette = $("#palette"), pInput = $("#paletteInput"), pList = $("#paletteList"), pItems = [], pSel = 0;
  var SECTIONS = [
    ["#capabilities", "cap.title"], ["#work", "nav.work"], ["#machine", "nav.machine"],
    ["#experience", "nav.experience"], ["#about", "nav.about"], ["#contact", "nav.contact"]
  ];

  function renderPalette() {
    var q = pInput.value.trim().toLowerCase();
    var secs = SECTIONS.filter(function (s) { return !q || t(s[1]).toLowerCase().indexOf(q) !== -1; })
      .map(function (s) { return { type: "sec", href: s[0], label: t(s[1]), sub: "" }; });
    var projs = PROJECTS.filter(function (p) {
      if (!q) return true;
      return (p.en.title + " " + p.ar.title + " " + p.en.tagline + " " + p.ar.tagline + " " + p.stack.join(" ")).toLowerCase().indexOf(q) !== -1;
    }).map(function (p) { return { type: "proj", slug: p.slug, label: L(p).title, sub: t("filter." + p.cat[0]), cat: p.cat[0] }; });
    pItems = secs.concat(projs);
    pSel = Math.min(pSel, Math.max(pItems.length - 1, 0));
    var html = "", idx = 0;
    function item(it) {
      var h = '<li class="it' + (idx === pSel ? " sel" : "") + (it.cat ? " cat-" + it.cat : "") + '" role="option" data-i="' + idx + '"><i class="sw"></i><span>' + esc(it.label) + "</span><small>" + esc(it.sub) + "</small></li>";
      idx++;
      return h;
    }
    if (secs.length) html += '<li class="grp">' + esc(t("palette.sections")) + "</li>" + secs.map(item).join("");
    if (projs.length) html += '<li class="grp">' + esc(t("palette.projects")) + "</li>" + projs.map(item).join("");
    pList.innerHTML = html || '<li class="none">' + esc(t("palette.empty")) + "</li>";
    var sel = $(".it.sel", pList);
    if (sel) sel.scrollIntoView({ block: "nearest" });
  }
  function openPalette() {
    palette.hidden = false;
    pInput.value = "";
    pSel = 0;
    renderPalette();
    setTimeout(function () { pInput.focus(); }, 10);
  }
  function closePalette() { palette.hidden = true; }
  function runPalette(i) {
    var it = pItems[i];
    if (!it) return;
    closePalette();
    if (it.type === "sec") document.querySelector(it.href).scrollIntoView();
    else openCase(it.slug);
  }
  pInput.addEventListener("input", function () { pSel = 0; renderPalette(); });
  pInput.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); pSel = (pSel + 1) % Math.max(pItems.length, 1); renderPalette(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); pSel = (pSel - 1 + pItems.length) % Math.max(pItems.length, 1); renderPalette(); }
    else if (e.key === "Enter") { e.preventDefault(); runPalette(pSel); }
  });
  pList.addEventListener("click", function (e) { var li = e.target.closest("[data-i]"); if (li) runPalette(+li.getAttribute("data-i")); });
  palette.addEventListener("click", function (e) { if (e.target.closest("[data-close-palette]")) closePalette(); });
  $$("[data-open-palette]").forEach(function (b) { b.addEventListener("click", openPalette); });

  document.addEventListener("keydown", function (e) {
    var typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); return; }
    if (e.key === "/" && !typing && palette.hidden) { e.preventDefault(); openPalette(); return; }
    if (e.key === "Escape") { if (!palette.hidden) closePalette(); else closeCase(); return; }
    if (!drawer.hidden && !typing) {
      var rtl = state.lang === "ar";
      if (e.key === "ArrowRight") stepCase(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") stepCase(rtl ? 1 : -1);
    }
  });

  /* ---------------- contact form ---------------- */
  var form = $("#contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var via = (e.submitter && e.submitter.value) || "wa";
    var f = form.elements, name = f["name"].value.trim(), email = f["email"].value.trim(), msg = f["msg"].value.trim();
    $("#formErr").hidden = !!(name && msg);
    if (!name || !msg) return;
    var body = t("form.greeting") + " " + name + (email ? " (" + email + ")" : "") + ".\n\n" + msg;
    if (via === "mail") {
      location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Project enquiry — " + name) + "&body=" + encodeURIComponent(body);
    } else {
      window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(body), "_blank", "noopener");
    }
  });

  /* ---------------- boot ---------------- */
  $("#year").textContent = new Date().getFullYear();
  applyI18n();
  renderFilters();
  renderWork();
  setLayer(1, true);

  function routeFromURL() {
    var m = location.hash.match(/^#\/work\/([\w-]+)/);
    var p = new URLSearchParams(location.search).get("p");
    var slug = m ? m[1] : p;
    if (slug && findProject(slug)) openCase(slug);
  }
  routeFromURL();
  window.addEventListener("hashchange", routeFromURL);
})();
