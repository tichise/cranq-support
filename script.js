// ==========================================================
// Cranq LP — interactions
// ==========================================================

(() => {
  const STORAGE_KEY = "cranq.lang";

  // ---- Language switching --------------------------------
  function detectInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ja" || saved === "en") return saved;
    const ua = navigator.userAgent;
    if (/bot|crawler|spider|crawling/i.test(ua)) return "ja";
    const browser = (navigator.language || "ja").toLowerCase();
    return browser.startsWith("ja") ? "ja" : "en";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-lang-ja]").forEach((el) => {
      const value = el.getAttribute(`data-lang-${lang}`);
      if (!value) return;
      const tag = el.tagName.toLowerCase();
      if (tag === "title") {
        document.title = value;
      } else if (el.hasAttribute("content")) {
        el.setAttribute("content", value);
      } else {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-lang-ja-alt]").forEach((el) => {
      const value = el.getAttribute(`data-lang-${lang}-alt`);
      if (value) el.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-src-ja]").forEach((el) => {
      const src = el.getAttribute(`data-src-${lang}`);
      if (src) el.setAttribute("src", src);
    });

    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  function bindLangToggle() {
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
        renderActivity(currentDemoIdx);
      });
    });
  }

  // ---- Nav scroll state ----------------------------------
  function bindNav() {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---- Reveal on scroll ----------------------------------
  function bindReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  // ---- Smooth scroll for in-page anchors -----------------
  function bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }

  // ---- Activity demo: cycle workout summaries ------------
  const ACTIVITY_DEMO = [
    {
      icon: "fa-bicycle",
      name: { ja: "朝のライド", en: "Morning ride" },
      when: { ja: "06:42 — 08:15 · GPS", en: "06:42 — 08:15 · GPS" },
      badge: { ja: "PR", en: "PR" },
      stats: [
        { icon: "fa-route",            label: { ja: "距離", en: "Distance" }, value: "42.6 km" },
        { icon: "fa-stopwatch",        label: { ja: "時間", en: "Duration" }, value: "1:33:20" },
        { icon: "fa-mountain",         label: { ja: "標高", en: "Elevation" }, value: "612 m" },
        { icon: "fa-heart-pulse",      label: { ja: "平均心拍", en: "Avg HR" }, value: "142 bpm" },
        { icon: "fa-cloud-sun",        label: { ja: "天気", en: "Weather" }, value: { ja: "晴れ 14°C", en: "Sunny 14°C" } },
        { icon: "fa-fire",             label: { ja: "消費", en: "Calories" }, value: "1,284 kcal" }
      ]
    },
    {
      icon: "fa-person-running",
      name: { ja: "夕方のラン", en: "Evening run" },
      when: { ja: "18:05 — 18:42 · GPS", en: "18:05 — 18:42 · GPS" },
      badge: { ja: "Z2", en: "Z2" },
      stats: [
        { icon: "fa-route",            label: { ja: "距離", en: "Distance" }, value: "7.2 km" },
        { icon: "fa-stopwatch",        label: { ja: "時間", en: "Duration" }, value: "37:14" },
        { icon: "fa-gauge-high",       label: { ja: "ペース", en: "Pace" }, value: "5:10 /km" },
        { icon: "fa-heart-pulse",      label: { ja: "平均心拍", en: "Avg HR" }, value: "138 bpm" },
        { icon: "fa-cloud-moon",       label: { ja: "天気", en: "Weather" }, value: { ja: "曇り 19°C", en: "Cloudy 19°C" } },
        { icon: "fa-fire",             label: { ja: "消費", en: "Calories" }, value: "486 kcal" }
      ]
    },
    {
      icon: "fa-person-walking",
      name: { ja: "週末の山歩き", en: "Weekend hike" },
      when: { ja: "09:18 — 12:04 · GPS", en: "09:18 — 12:04 · GPS" },
      badge: { ja: "STREAK 14", en: "STREAK 14" },
      stats: [
        { icon: "fa-route",            label: { ja: "距離", en: "Distance" }, value: "11.8 km" },
        { icon: "fa-stopwatch",        label: { ja: "時間", en: "Duration" }, value: "2:46:31" },
        { icon: "fa-mountain",         label: { ja: "標高", en: "Elevation" }, value: "823 m" },
        { icon: "fa-heart-pulse",      label: { ja: "平均心拍", en: "Avg HR" }, value: "118 bpm" },
        { icon: "fa-temperature-half", label: { ja: "気温", en: "Temp" }, value: { ja: "9 → 16°C", en: "9 → 16°C" } },
        { icon: "fa-fire",             label: { ja: "消費", en: "Calories" }, value: "742 kcal" }
      ]
    }
  ];

  let currentDemoIdx = 0;

  function getCurrentLang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "ja";
  }

  function pickLocalized(value, lang) {
    if (typeof value === "string") return value;
    if (value && typeof value === "object") return value[lang] ?? value.ja ?? "";
    return "";
  }

  function renderActivity(idx) {
    const lang = getCurrentLang();
    const demo = ACTIVITY_DEMO[idx % ACTIVITY_DEMO.length];

    const iconEl = document.getElementById("activityIcon");
    const nameEl = document.getElementById("activityName");
    const whenEl = document.getElementById("activityWhen");
    const badgeEl = document.getElementById("activityBadge");
    const listEl = document.getElementById("activityStats");
    if (!iconEl || !nameEl || !whenEl || !badgeEl || !listEl) return;

    iconEl.className = `fas ${demo.icon}`;
    nameEl.textContent = pickLocalized(demo.name, lang);
    whenEl.textContent = pickLocalized(demo.when, lang);
    badgeEl.textContent = pickLocalized(demo.badge, lang);

    listEl.innerHTML = demo.stats
      .map(
        (s) => `
          <li>
            <span class="stat-icon"><i class="fas ${s.icon}"></i></span>
            <span class="stat-body">
              <span class="stat-label">${pickLocalized(s.label, lang)}</span>
              <span class="stat-value">${pickLocalized(s.value, lang)}</span>
            </span>
          </li>`
      )
      .join("");
    void listEl.offsetWidth; // restart CSS keyframes
  }

  function bindActivityDemo() {
    if (!document.getElementById("activityStats")) return;
    renderActivity(currentDemoIdx);
    setInterval(() => {
      currentDemoIdx = (currentDemoIdx + 1) % ACTIVITY_DEMO.length;
      renderActivity(currentDemoIdx);
    }, 6500);
  }

  // ---- Footer year ---------------------------------------
  function setYear() {
    const el = document.getElementById("copyYear");
    if (el) el.textContent = new Date().getFullYear();
  }

  // ---- Boot ----------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    applyLang(detectInitialLang());
    bindLangToggle();
    bindNav();
    bindReveal();
    bindSmoothScroll();
    bindActivityDemo();
    setYear();
  });
})();
