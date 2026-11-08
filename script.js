// ---- Project data: edit this list to change what appears in "Selected work" ----
const PROJECTS = [
  {
    name: "GitSage",
    kind: "AI / RAG",
    cats: ["ai"],
    tagline: "Ask any codebase a question, get file:line citations.",
    desc: "A retrieval-augmented system for GitHub repositories. AST-aware chunking splits code by functions and classes, two-stage retrieval pairs embedding search with cross-encoder reranking, and Llama 3.3 70B writes answers backed by exact source locations.",
    stack: ["FastAPI", "ChromaDB", "MiniLM", "Groq", "Streamlit"],
    url: "https://github.com/AniMahou/GitSage",
  },
  {
    name: "CareerPilot",
    kind: "Agents",
    cats: ["ai", "hack"],
    event: "CodeSprint 2026 · Finalist",
    tagline: "An agentic career co-pilot grounded in your CV.",
    desc: "Hunts for jobs, scores your fit, drafts applications and builds learning roadmaps, with retrieval grounded in the user's own CV.",
    stack: ["TypeScript", "RAG", "Agents"],
    url: "https://github.com/IUT-Dhongorsho/CareerPilot",
  },
  {
    name: "GridWise LLM",
    kind: "AI / Optimization",
    cats: ["ai", "hack"],
    event: "BUP CSE Fest 2026",
    tagline: "Verifiable 24-hour microgrid energy optimization.",
    desc: "Turns plain-English operator notes into structured constraints with Gemini, guards them with deterministic arithmetic checks, and solves battery/solar/grid dispatch to the exact cost optimum with linear programming (SciPy HiGHS). Shipped with CI and a Docker image on GHCR.",
    stack: ["Python", "FastAPI", "SciPy HiGHS", "Gemini", "GitHub Actions"],
    url: "https://github.com/AniMahou/BUP_Hackathon",
  },
  {
    name: "Muse",
    kind: "Speech → Data",
    cats: ["ai"],
    tagline: "Bangla voice into structured field intelligence.",
    desc: "A sales rep speaks for fifteen seconds; Muse extracts competitor promos, stock-outs, price changes and demand signals as structured records, resolving outlets from GPS and products against a catalogue.",
    stack: ["TypeScript", "ASR", "LLMs", "Python"],
    url: "https://github.com/AniMahou/Muse",
  },
  {
    name: "CareForAll",
    kind: "Microservices",
    cats: ["systems", "hack"],
    event: "CUET API Avengers · National Finalist",
    tagline: "A donation platform built to survive peak traffic.",
    desc: "Auth, Campaign, Donation, Payment and Notification services behind an API gateway, with atomic financial transactions, message queues and full metrics.",
    stack: ["Node.js", "RabbitMQ", "Redis", "Prisma", "PostgreSQL", "Grafana"],
    url: "https://github.com/IUT-Dhongorsho/API_Avengers_IUT",
  },
  {
    name: "VOX",
    kind: "Mesh networking",
    cats: ["systems", "hack"],
    event: "July Revolution Hackathon · Crisis Tech",
    tagline: "Crisis communication for internet shutdowns.",
    desc: "Phones relay messages hop by hop over Bluetooth Low Energy — no internet, towers, servers or accounts. Anonymous onboarding, SOS broadcast with GPS, shared danger pins and a panic wipe that destroys the encryption key.",
    stack: ["TypeScript", "React Native", "Kotlin", "BLE"],
    url: "https://github.com/AniMahou/Fortis",
  },
  {
    name: "AetherAI",
    kind: "Multi-agent",
    cats: ["ai", "hack"],
    tagline: "AI triage for rural pharmacists.",
    desc: "A multi-agent system that screens respiratory conditions from reported symptoms and cough audio.",
    stack: ["Python", "Multi-Agent", "Audio ML"],
    url: "https://github.com/IUT-Dhongorsho/AetherAI",
  },
  {
    name: "Token-Efficient Routing Agent",
    kind: "Agents",
    cats: ["ai", "hack"],
    event: "AMD Developer Hackathon · Act II",
    tagline: "Solve tasks with the fewest tokens possible.",
    desc: "A cost-aware multi-model router that combines caching, verification and fallback to keep accuracy high while minimizing token spend.",
    stack: ["Python", "Fireworks AI", "Docker"],
    url: "https://github.com/AniMahou/AMD-Developer-Hackathon",
  },
  {
    name: "DevSprint",
    kind: "Realtime systems",
    cats: ["systems", "hack"],
    event: "DevSprint · Finalist",
    tagline: "Fault-tolerant realtime platform for student workflows.",
    desc: "Event-driven microservices with caching and queues designed to stay responsive when individual services fail.",
    stack: ["Node.js", "PostgreSQL", "Redis", "RabbitMQ"],
    url: "https://github.com/IUT-Dhongorsho/DevSprint",
  },
  {
    name: "UniComs",
    kind: "Security / C++",
    cats: ["systems"],
    tagline: "End-to-end encrypted terminal chat.",
    desc: "Diffie-Hellman key exchange, AES encryption and SHA-256 auth, plus peer-to-peer file transfer and UDP voice calls. Built for Software Project Lab I.",
    stack: ["C++17", "Sockets", "PortAudio"],
    url: "https://github.com/IUT-Dhongorsho/UniComs_SPL1",
  },
  {
    name: "Observability Lab",
    kind: "DevOps",
    cats: ["systems"],
    tagline: "Surviving the cafeteria's Ramadan rush.",
    desc: "Microservices instrumented with structured JSON logs and Prometheus metrics, piped through Grafana Alloy into Loki and Grafana, with a chaos toggle to study thundering-herd failures.",
    stack: ["Node.js", "Prometheus", "Loki", "Grafana", "Docker"],
    url: "https://github.com/AniMahou/Observability-Lab",
  },
  {
    name: "Ticket Investigator",
    kind: "AI pipeline",
    cats: ["ai", "systems", "hack"],
    event: "SUST CSE Carnival 2026",
    tagline: "Resilient support-ticket classification.",
    desc: "An AI classification pipeline for support tickets, designed for retries and graceful degradation.",
    stack: ["Bun", "Express", "TypeScript", "PostgreSQL"],
    url: "https://github.com/IUT-Dhongorsho/SUST_Preli",
  },
];

const MORE = [
  ["Vero", "https://github.com/IUT-Dhongorsho/Vero_SPL2", "Productivity platform with a Whisper transcription worker (SPL II)"],
  ["GPS Simulation", "https://github.com/AniMahou/GPS-Simulation", "Uber-style realtime tracking with Kafka consumer groups"],
  ["CoWork API", "https://github.com/IUT-Dhongorsho/ICT_Fest_Hackathon_Preliminary", "Thread-safe multi-tenant booking API (ICT Fest)"],
  ["FusionPlay", "https://github.com/AniMahou/FusionPlay", "Event quiz kiosk with admin dashboard and SQLite"],
  ["Grub", "https://github.com/AniMahou/Grub", "Food delivery app: React frontend, custom Java backend"],
  ["University Finder", "https://github.com/AniMahou/University-Finder", "Next.js app to search and compare universities"],
  ["Naksha Note", "https://github.com/AniMahou/Naksha-Note", "AI note enhancement — summarize, paraphrase, keywords"],
  ["DevOps Hackathon", "https://github.com/AniMahou/cuet-cse-fest-devops-hackathon-preli", "Containerized microservices with gateway + MongoDB"],
  ["RAG & retrieval experiments", "https://github.com/AniMahou/Rag-Pipeline", "Rag-Pipeline, LangChain, ChromaDB, Vector-Embedding"],
  ["ML fundamentals", "https://github.com/AniMahou/ML-practice", "ML-practice, Data-Science, Supervised-Training"],
  ["CP Practice", "https://github.com/AniMahou/CP-Practice", "Competitive programming in C++"],
];

// ---- Stack: [label, simple-icons slug or null, brand hex] ----
const STACK = [
  ["AI / ML", "models & retrieval", [
    ["PyTorch", "pytorch", "EE4C2C"], ["Hugging Face", "huggingface", "E8A800"], ["OpenCV", "opencv", "5C3EE8"],
    ["scikit-learn", "scikitlearn", "F7931E"], ["NumPy", "numpy", "013243"], ["LangChain", "langchain", "1C3C3C"],
    ["ChromaDB", null, "FF6F00", "C"], ["OpenAI", "openai", "412991"], ["Gemini", "googlegemini", "8E75B2"],
    ["Groq", null, "F55036", "G"], ["Kaggle", "kaggle", "20BEFF"], ["Streamlit", "streamlit", "FF4B4B"],
  ]],
  ["Backend", "services & data", [
    ["Node.js", "nodedotjs", "5FA04E"], ["NestJS", "nestjs", "E0234E"], ["Express", "express", "000000"],
    ["FastAPI", "fastapi", "009688"], ["Bun", "bun", "000000"], ["Hono", "hono", "E36002"],
    ["GraphQL", "graphql", "E10098"], ["Prisma", "prisma", "2D3748"], ["PostgreSQL", "postgresql", "4169E1"],
    ["MongoDB", "mongodb", "47A248"], ["Redis", "redis", "FF4438"], ["Supabase", "supabase", "3FCF8E"],
    ["Kafka", "apachekafka", "231F20"], ["RabbitMQ", "rabbitmq", "FF6600"],
  ]],
  ["DevOps", "ship & observe", [
    ["Docker", "docker", "2496ED"], ["GitHub Actions", "githubactions", "2088FF"], ["Prometheus", "prometheus", "E6522C"],
    ["Grafana", "grafana", "F46800"], ["Nginx", "nginx", "009639"], ["AWS", "amazonwebservices", "232F3E"], ["n8n", "n8n", "EA4B71"],
  ]],
  ["Frontend", "interfaces", [
    ["React", "react", "149ECA"], ["Next.js", "nextdotjs", "000000"], ["Tailwind", "tailwindcss", "06B6D4"],
    ["Vite", "vite", "646CFF"], ["Framer Motion", "framer", "0055FF"],
  ]],
  ["Languages", "daily drivers", [
    ["Python", "python", "3776AB"], ["TypeScript", "typescript", "3178C6"], ["JavaScript", "javascript", "D4B800"],
    ["C++", "cplusplus", "00599C"], ["C", "c", "5C6BC0"], ["Java", "openjdk", "000000"], ["Kotlin", "kotlin", "7F52FF"],
  ]],
];

const LANG_COLORS = {
  Python: "#3572A5", TypeScript: "#3178c6", JavaScript: "#e2c400", "C++": "#f34b7d", C: "#555555",
  Java: "#b07219", "C#": "#178600", HTML: "#e34c26", CSS: "#663399", Kotlin: "#A97BFF", "Jupyter Notebook": "#DA5B0B",
};

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = window.matchMedia("(pointer: fine)").matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Split text intro (ReactBits: SplitText) ---------- */
function splitName() {
  const el = $("[data-split]");
  const lines = el.innerHTML.split(/<br\s*\/?>/i);
  let i = 0;
  el.innerHTML = lines.map((line) => `<span class="line" aria-hidden="true">${
    [...line.trim()].map((c) => `<span class="ch" style="transition-delay:${(i++) * 45}ms">${c}</span>`).join("")
  }</span>`).join("<br>");
  requestAnimationFrame(() => requestAnimationFrame(() => $$(".ch", el).forEach((c) => c.classList.add("in"))));
}

/* ---------- Rotating text (ReactBits: RotatingText) ---------- */
function rotator() {
  const words = ["computer-vision pipelines", "RAG systems that cite sources", "multi-agent tools", "event-driven backends", "observability stacks"];
  const el = $("#rot");
  if (REDUCED) return;
  let i = 0;
  setInterval(() => {
    el.classList.add("out");
    setTimeout(() => {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.classList.remove("out"); el.classList.add("pre");
      void el.offsetWidth;
      el.classList.remove("pre");
    }, 450);
  }, 2600);
}

/* ---------- Interactive dot grid background (ReactBits: DotGrid) ---------- */
function dotGrid() {
  const cv = $("#dots"), ctx = cv.getContext("2d");
  const GAP = 28, R = 1.2, REACH = 140;
  let w, h, dpr, dots = [], mx = -999, my = -999, raf = null;
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dots = [];
    for (let y = GAP / 2; y < h; y += GAP) for (let x = GAP / 2; x < w; x += GAP) dots.push({ x, y, ox: 0, oy: 0 });
    draw();
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    let moving = false;
    for (const d of dots) {
      const dx = d.x - mx, dy = d.y - my, dist = Math.hypot(dx, dy);
      let tx = 0, ty = 0, near = 0;
      if (dist < REACH) { near = 1 - dist / REACH; const push = near * 14; tx = (dx / (dist || 1)) * push; ty = (dy / (dist || 1)) * push; }
      d.ox += (tx - d.ox) * 0.15; d.oy += (ty - d.oy) * 0.15;
      if (Math.abs(tx - d.ox) > 0.05 || Math.abs(ty - d.oy) > 0.05) moving = true;
      ctx.fillStyle = near > 0 ? `rgba(255,90,31,${0.25 + near * 0.6})` : "rgba(22,21,19,0.13)";
      ctx.beginPath(); ctx.arc(d.x + d.ox, d.y + d.oy, R + near * 1.4, 0, 6.283); ctx.fill();
    }
    raf = moving ? requestAnimationFrame(draw) : null;
  };
  addEventListener("resize", resize);
  if (FINE && !REDUCED) {
    addEventListener("pointermove", (e) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(draw); }, { passive: true });
    document.addEventListener("pointerleave", () => { mx = my = -999; if (!raf) raf = requestAnimationFrame(draw); });
  }
  resize();
}

/* ---------- Lottie hero graph ---------- */
function graph() {
  if (!window.lottie) return;
  const anim = lottie.loadAnimation({ container: $("#graph"), renderer: "svg", loop: !REDUCED, autoplay: !REDUCED, path: "assets/signal-graph.json" });
  if (REDUCED) anim.addEventListener("DOMLoaded", () => anim.goToAndStop(90, true));
}

/* ---------- Projects (always expanded) ---------- */
function renderWork() {
  $("#projects").innerHTML = PROJECTS.map((p, i) => `
    <li class="proj up" data-cats="${p.cats.join(" ")}">
      <span class="proj-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="proj-title">
        <h3 class="proj-name"><a href="${p.url}" target="_blank" rel="noopener">${esc(p.name)}</a></h3>
        <p class="proj-kind">${esc(p.kind)}</p>
        ${p.event ? `<span class="proj-event">★ ${esc(p.event)}</span>` : ""}
      </div>
      <div class="proj-body">
        <p class="proj-line">${esc(p.tagline)}</p>
        <p class="proj-desc">${esc(p.desc)}</p>
        <div class="proj-foot">
          <ul class="chips mono">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
          <a class="proj-link ulink" href="${p.url}" target="_blank" rel="noopener">View code ↗</a>
        </div>
      </div>
    </li>`).join("");

  $("#more-list").innerHTML = MORE.map(([n, u, d]) =>
    `<li><a href="${u}" target="_blank" rel="noopener"><b>${esc(n)}</b><span>${esc(d)}</span></a></li>`).join("");

  for (const k of ["all", "ai", "systems", "hack"]) $("#c-" + k).textContent = k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cats.includes(k)).length;

  $$(".filter").forEach((f) => f.addEventListener("click", () => {
    $$(".filter").forEach((x) => { x.classList.toggle("is-active", x === f); x.setAttribute("aria-selected", x === f); });
    const k = f.dataset.filter;
    $$(".proj").forEach((r) => { r.hidden = k !== "all" && !r.dataset.cats.split(" ").includes(k); });
  }));
}

/* ---------- Stack logo grid ---------- */
function renderStack() {
  const icon = (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/${slug}.svg`;
  $("#stack-grid").innerHTML = STACK.map(([cat, sub, items]) => `
    <div class="stack-row up">
      <h3 class="stack-cat">${esc(cat)}<small>${esc(sub)}</small></h3>
      <ul class="tiles">${items.map(([name, slug, hex, letter]) => `
        <li class="tile" title="${esc(name)}" style="--c:#${hex}">
          ${slug ? `<span class="tile-logo" style="--i:url('${icon(slug)}')" aria-hidden="true"></span>`
                 : `<span class="tile-txt" aria-hidden="true">${esc(letter)}</span>`}
          <span class="tile-name">${esc(name)}</span>
        </li>`).join("")}
      </ul>
    </div>`).join("");
}

/* ---------- Count up (ReactBits: CountUp) ---------- */
function countUp(el) {
  const to = +el.dataset.count, t0 = performance.now(), dur = 1400;
  const step = (t) => { const k = Math.min(1, (t - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
  REDUCED ? (el.textContent = to) : requestAnimationFrame(step);
}

/* ---------- Fade-ups (staggered) + counters on view ---------- */
function onView() {
  $$(".contact-lead, .email, .elsewhere, .about-lead").forEach((e) => e.classList.add("up"));
  $$(".jobs, .also, .focus, .more-list").forEach((g) => [...g.children].forEach((c, i) => (c.style.transitionDelay = i * 90 + "ms")));
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    if (e.target.dataset.count) countUp(e.target);
    // stagger tiles inside a stack row
    $$(".tile", e.target).forEach((t, i) => {
      if (REDUCED) return;
      t.animate([{ opacity: 0, transform: "translateY(12px) scale(.9)" }, { opacity: 1, transform: "none" }],
        { duration: 450, delay: i * 35, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" });
    });
    io.unobserve(e.target);
  }), { rootMargin: "0px 0px -60px 0px" });
  $$(".up, [data-count]").forEach((e) => io.observe(e));
  // clear stagger delay after reveal so hovers stay snappy
  setTimeout(() => $$(".jobs > *, .also > *, .focus > *").forEach((c) => c.addEventListener("transitionend", () => (c.style.transitionDelay = ""), { once: true })), 0);
}

/* ---------- Scramble on hover (ReactBits: DecryptedText) ---------- */
function scramble() {
  const el = $("[data-scramble]"); if (!el || REDUCED) return;
  const final = el.textContent, chars = "abcdefghijklmnopqrstuvwxyz0123456789@._";
  let run = 0;
  el.addEventListener("pointerenter", () => {
    const id = ++run; let f = 0;
    const tick = () => {
      if (id !== run) return;
      el.textContent = [...final].map((c, i) => (i < f / 2 ? c : chars[(Math.random() * chars.length) | 0])).join("");
      if (f++ < final.length * 2) requestAnimationFrame(tick); else el.textContent = final;
    };
    tick();
  });
}

/* ---------- Magnetic buttons (ReactBits: Magnet) ---------- */
function magnet() {
  if (!FINE || REDUCED) return;
  $$(".magnet").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transition = "transform .4s cubic-bezier(.2,.8,.2,1), background .2s, color .2s"; b.style.transform = ""; setTimeout(() => (b.style.transition = ""), 400); });
  });
}

/* ---------- Click sparks (ReactBits: ClickSpark) ---------- */
function clickSpark() {
  if (REDUCED) return;
  addEventListener("pointerdown", (e) => {
    for (let i = 0; i < 8; i++) {
      const s = document.createElement("span"); s.className = "spark";
      const a = (i / 8) * 360;
      s.style.left = e.clientX + "px"; s.style.top = e.clientY + "px";
      document.body.appendChild(s);
      s.animate([
        { transform: `translate(-50%,-50%) rotate(${a}deg) translateY(-6px) scaleY(1)`, opacity: 1 },
        { transform: `translate(-50%,-50%) rotate(${a}deg) translateY(-26px) scaleY(0)`, opacity: 0 },
      ], { duration: 420, easing: "cubic-bezier(.2,.8,.2,1)" }).onfinish = () => s.remove();
    }
  });
}

/* ---------- Live GitHub log ---------- */
function timeAgo(iso) {
  const d = Math.floor((Date.now() - new Date(iso)) / 86400000);
  if (d < 1) return "today"; if (d < 2) return "yesterday"; if (d < 30) return `${d}d ago`;
  const m = Math.floor(d / 30); return m < 12 ? `${m}mo ago` : `${Math.floor(m / 12)}y ago`;
}
async function loadRecent() {
  const list = $("#recent-list");
  try {
    const res = await fetch("https://api.github.com/users/AniMahou/repos?sort=pushed&per_page=30");
    if (!res.ok) throw 0;
    const repos = (await res.json()).filter((r) => !r.fork && r.name.toLowerCase() !== "animahou" && !r.name.endsWith(".github.io")).slice(0, 6);
    if (!repos.length) throw 0;
    list.innerHTML = repos.map((r) => `<li><a href="${r.html_url}" target="_blank" rel="noopener">
      <span class="l-name">${esc(r.name)}</span>
      <span class="l-lang">${r.language ? `<span class="lang-dot" style="background:${LANG_COLORS[r.language] || "#999"}"></span>${esc(r.language)}` : "—"}</span>
      <span class="l-time">${timeAgo(r.pushed_at)}</span></a></li>`).join("");
  } catch {
    list.innerHTML = `<li class="log-empty">couldn't reach github — <a class="ulink" href="https://github.com/AniMahou?tab=repositories" target="_blank" rel="noopener">browse repositories</a></li>`;
  }
}

/* ---------- Misc ---------- */
function bar() {
  const b = $(".bar"), on = () => b.classList.toggle("scrolled", scrollY > 10);
  addEventListener("scroll", on, { passive: true }); on();
  const c = $("#clock"), fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit" });
  const t = () => (c.textContent = fmt.format(new Date())); t(); setInterval(t, 15000);
  $("#year").textContent = new Date().getFullYear();
}

splitName(); rotator(); dotGrid(); graph(); renderWork(); renderStack(); onView(); scramble(); magnet(); clickSpark(); bar(); loadRecent();
