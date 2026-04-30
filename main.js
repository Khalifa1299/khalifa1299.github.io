/* ============================================================
   main.js — ahmedkhalifa.dev
   Vanilla JS. No dependencies. No excuses.
   ============================================================ */

// ============================================================
// 1. DATA
// ============================================================

const SKILLS_DATA = {
  mobile: [
    { name: 'Android (Native)', certified: false },
    { name: 'Flutter', certified: false },
    { name: 'Kotlin', certified: false },
    { name: 'Dart', certified: false },
    { name: 'Jetpack Compose', certified: false },
    { name: 'BLoC / Provider', certified: false },
    { name: 'Room / SQLite', certified: false },
    { name: 'Retrofit / Dio', certified: false },
    { name: 'Firebase', certified: false },
  ],
  devops: [
    { name: 'Kubernetes', certified: false },
    { name: 'Docker', certified: false },
    { name: 'Jenkins', certified: false },
    { name: 'Terraform', certified: false },
    { name: 'Ansible', certified: false },
    { name: 'AWS', certified: false },
    { name: 'Linux', certified: false },
    { name: 'Helm', certified: false },
    { name: 'GitHub Actions', certified: false },
    { name: 'Prometheus / Grafana', certified: false },
    { name: 'Nginx', certified: false },
    { name: 'Bash', certified: false },
  ],
  security: [
    { name: 'CCNA', certified: true },
    { name: 'eJPT', certified: true },
    { name: 'TCP/IP', certified: false },
    { name: 'Network Security', certified: false },
    { name: 'Penetration Testing', certified: false },
    { name: 'Wireshark', certified: false },
    { name: 'VPN / WireGuard', certified: false },
    { name: 'Firewall / VLAN', certified: false },
    { name: 'RADIUS / AAA', certified: false },
  ],
  cs: [
    { name: 'Data Structures', certified: false },
    { name: 'Algorithms', certified: false },
    { name: 'System Design', certified: false },
    { name: 'PostgreSQL', certified: false },
    { name: 'REST API Design', certified: false },
    { name: 'Microservices', certified: false },
    { name: 'OOP / SOLID', certified: false },
    { name: 'Design Patterns', certified: false },
    { name: 'Git', certified: false },
  ],
};

const PROJECTS_DATA = [
  {
    title: 'Belron',
    subtitle: 'Enterprise NOC Automation',
    description: 'Flutter + Django platform for Cisco Meraki network monitoring integrated with ServiceNow. Auto-detects connectivity, cellular, and config issues across multi-country deployments and creates standardized incident tickets.',
    tags: ['Flutter', 'Django', 'Cisco Meraki API', 'ServiceNow OAuth', 'BLoC', 'Hive', 'Python'],
    category: 'mobile',
    link: 'https://github.com/khalifa1299',
  },
  {
    title: 'MetaWMS',
    subtitle: 'AR Indoor Mall Navigation',
    description: 'Flutter app providing AR-powered indoor navigation for large shopping malls. WiFi-based positioning without GPS, 3D AR wayfinding overlays, store discovery, and real-time crowd-flow awareness across multi-floor environments.',
    tags: ['Flutter', 'AR Flutter Plugin', 'Firebase', 'Google Maps', 'BLoC', 'WiFi Positioning', 'Indoor Nav'],
    category: 'mobile',
    link: 'https://github.com/khalifa1299',
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Kubernetes-Native Microservices',
    description: '6-service microservices architecture: Auth, Products, Orders, Cart, Inventory, and Payments — each with its own PostgreSQL database. Deployed on Kubernetes with Docker, Stripe payments, and JWT authorization.',
    tags: ['Kubernetes', 'Docker', 'Django', 'PostgreSQL', 'Stripe', 'JWT', 'Microservices'],
    category: 'devops',
    link: 'https://github.com/khalifa1299',
  },
  {
    title: 'api_service',
    subtitle: 'Flutter Network Library',
    description: 'Reusable Flutter/Dart package providing a production-grade HTTP layer with interceptors for auth, retry, connectivity, and logging. Features secure token storage via Android Keystore / iOS Keychain and a sealed Result<T> type.',
    tags: ['Flutter', 'Dart', 'Dio', 'Android Keystore', 'iOS Keychain', 'Exponential Backoff'],
    category: 'mobile',
    link: 'https://github.com/khalifa1299',
  },
  {
    title: 'VProfile',
    subtitle: 'Multi-Tier DevOps Platform',
    description: 'Java Spring MVC enterprise app demonstrating multi-tier architecture with DevOps automation: Vagrant VM provisioning, Ansible configuration management, Jenkins CI/CD, and a full stack of MySQL, Memcached, RabbitMQ, and Elasticsearch.',
    tags: ['Java', 'Spring MVC', 'Ansible', 'Jenkins', 'Vagrant', 'MySQL', 'RabbitMQ', 'Elasticsearch'],
    category: 'devops',
    link: 'https://github.com/khalifa1299',
  },
  {
    title: 'MK Shop Backend',
    subtitle: 'Django REST E-Commerce API',
    description: 'Full-featured Django REST Framework backend with 40+ API endpoints covering products, variants, shopping cart, orders, inventory, and Stripe payment processing. JWT auth with user profiles and review system.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Stripe', 'JWT', 'Python'],
    category: 'backend',
    link: 'https://github.com/khalifa1299',
  },
];

const CERTS_DATA = [
  {
    cls: 'ccna',
    icon: '🛡',
    name: 'CCNA',
    issuer: 'Cisco Systems',
    year: '2023',
  },
  {
    cls: 'ejpt',
    icon: '⚔',
    name: 'eJPT',
    issuer: 'eLearnSecurity',
    year: '2023',
  },
  {
    cls: 'android',
    icon: '◈',
    name: 'Android Dev',
    issuer: 'Google',
    year: '2022',
  },
  {
    cls: 'sysdesign',
    icon: '⬡',
    name: 'Sys. Design',
    issuer: 'Software Architecture',
    year: '2024',
  },
];

const TERMINAL_SEQUENCE = [
  { type: 'input',  text: 'cat about.txt' },
  { type: 'output', text: 'Software Engineer. Cairo, Egypt.' },
  { type: 'output', text: 'Mobile · DevOps · Networking · Security' },
  { type: 'blank' },
  { type: 'input',  text: 'ls certifications/' },
  { type: 'output', text: 'CCNA/   eJPT/   Android-Dev/' },
  { type: 'blank' },
  { type: 'input',  text: 'kubectl get pods -n prod' },
  { type: 'output', text: 'NAME                 READY   STATUS    AGE' },
  { type: 'output', text: 'api-gateway-7d9f8b   1/1     Running   14d' },
  { type: 'output', text: 'auth-svc-4c2a1e      1/1     Running   14d' },
  { type: 'blank' },
  { type: 'input',  text: 'echo $PASSION' },
  { type: 'output', text: 'Building things that scale.' },
];

// ============================================================
// 2. CANVAS — Network Topology Background
// ============================================================

function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

  const isMobile = window.innerWidth < 768;
  const NODE_COUNT = isMobile ? 38 : 75;
  const MAX_DIST   = isMobile ? 120 : 155;

  const COLOR_MAP = {
    server: '#5fa8f5',
    pod:    '#00d4ff',
    router: '#b060f0',
  };

  function resize() {
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width  = w * DPR;
    canvas.height = h * DPR;
    ctx.scale(DPR, DPR);
    canvas._w = w;
    canvas._h = h;
  }

  function makeNode() {
    const types = ['server', 'pod', 'pod', 'router'];
    return {
      x: Math.random() * (canvas._w || window.innerWidth),
      y: Math.random() * (canvas._h || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.8 + 1.2,
      type: types[Math.floor(Math.random() * types.length)],
      phase: Math.random() * Math.PI * 2,
    };
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  const nodes = Array.from({ length: NODE_COUNT }, makeNode);

  let mouseX = -9999, mouseY = -9999;
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }, { passive: true });
  canvas.addEventListener('mouseleave', () => {
    mouseX = -9999; mouseY = -9999;
  }, { passive: true });

  let rafId = null;
  let isVisible = true;

  function hexagon(x, y, r) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      const px = x + r * Math.cos(a);
      const py = y + r * Math.sin(a);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function draw() {
    if (!isVisible) { rafId = requestAnimationFrame(draw); return; }

    const W = canvas._w || canvas.offsetWidth;
    const H = canvas._h || canvas.offsetHeight;

    ctx.fillStyle = 'rgba(10, 10, 15, 0.18)';
    ctx.fillRect(0, 0, W, H);

    nodes.forEach(n => {
      n.phase += 0.018;

      const dx = n.x - mouseX;
      const dy = n.y - mouseY;
      const md = Math.sqrt(dx * dx + dy * dy);
      if (md < 90 && md > 0) {
        n.vx += (dx / md) * 0.06;
        n.vy += (dy / md) * 0.06;
      }

      n.vx *= 0.994;
      n.vy *= 0.994;
      n.x  += n.vx;
      n.y  += n.vy;

      if (n.x < 0)  { n.x = 0;  n.vx = Math.abs(n.vx); }
      if (n.x > W)  { n.x = W;  n.vx = -Math.abs(n.vx); }
      if (n.y < 0)  { n.y = 0;  n.vy = Math.abs(n.vy); }
      if (n.y > H)  { n.y = H;  n.vy = -Math.abs(n.vy); }
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.22;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(95, 168, 245, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      const pulse = (Math.sin(n.phase) * 0.5 + 0.5);
      const r = n.r + pulse * 1.4;
      const color = COLOR_MAP[n.type];

      ctx.beginPath();
      ctx.arc(n.x, n.y, r * 3.5, 0, Math.PI * 2);
      const glowAlpha = 0.04 + pulse * 0.04;
      if (n.type === 'server') ctx.fillStyle = `rgba(95, 168, 245, ${glowAlpha})`;
      else if (n.type === 'pod') ctx.fillStyle = `rgba(0, 212, 255, ${glowAlpha})`;
      else ctx.fillStyle = `rgba(176, 96, 240, ${glowAlpha})`;
      ctx.fill();

      ctx.fillStyle = color;
      hexagon(n.x, n.y, r);
      ctx.fill();
    });

    rafId = requestAnimationFrame(draw);
  }

  const heroObserver = new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0 });
  heroObserver.observe(canvas.closest('#hero') || canvas);

  draw();
}

// ============================================================
// 3. TYPEWRITER
// ============================================================

function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'Flutter Mobile Developer',
    'DevOps engineer',
    'Kubernetes Operator',
    'Android Developer',
    'Django Backend Engineer',
    'Cyber Security Enthusiast',
    'AWS Engineer',
    'System Design Aficionado',
  ];

  const TYPE_SPEED   = 78;
  const DELETE_SPEED = 38;
  const PAUSE_FULL   = 2200;
  const PAUSE_EMPTY  = 420;

  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const word = roles[ri];
    if (deleting) {
      el.textContent = word.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
        setTimeout(tick, PAUSE_EMPTY);
        return;
      }
    } else {
      el.textContent = word.slice(0, ci + 1);
      ci++;
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, PAUSE_FULL);
        return;
      }
    }
    setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
  }

  tick();
}

// ============================================================
// 4. TERMINAL — About Section
// ============================================================

function initAboutTerminal() {
  const body = document.getElementById('terminal-body');
  if (!body) return;

  let started = false;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      observer.disconnect();
      runTerminal();
    }
  }, { threshold: 0.3 });

  observer.observe(body);

  function runTerminal() {
    let i = 0;

    function nextLine() {
      if (i >= TERMINAL_SEQUENCE.length) return;
      const item = TERMINAL_SEQUENCE[i++];

      if (item.type === 'blank') {
        const br = document.createElement('span');
        br.className = 'terminal-line blank';
        body.appendChild(br);
        setTimeout(nextLine, 80);
        return;
      }

      if (item.type === 'output') {
        const line = document.createElement('span');
        line.className = 'terminal-line output';
        line.textContent = item.text;
        line.style.opacity = '0';
        body.appendChild(line);
        requestAnimationFrame(() => {
          line.style.transition = 'opacity 0.25s ease';
          line.style.opacity = '1';
        });
        setTimeout(nextLine, 120);
        return;
      }

      if (item.type === 'input') {
        const line = document.createElement('span');
        line.className = 'terminal-line input';
        body.appendChild(line);
        typeInto(line, item.text, 55, () => {
          setTimeout(nextLine, 200);
        });
      }
    }

    nextLine();
  }

  function typeInto(el, text, speed, done) {
    let j = 0;
    function t() {
      el.textContent = text.slice(0, j + 1);
      j++;
      if (j < text.length) setTimeout(t, speed + (Math.random() * 20 - 10));
      else if (done) setTimeout(done, 120);
    }
    t();
  }
}

// ============================================================
// 5. SKILLS
// ============================================================

function initSkills() {
  const domainMap = {
    mobile:   'skills-mobile',
    devops:   'skills-devops',
    security: 'skills-security',
    cs:       'skills-cs',
  };

  Object.entries(SKILLS_DATA).forEach(([domain, skills]) => {
    const container = document.getElementById(domainMap[domain]);
    if (!container) return;

    skills.forEach(skill => {
      const badge = document.createElement('span');
      badge.className = 'skill-badge' + (skill.certified ? ' certified' : '');
      badge.setAttribute('role', 'listitem');
      badge.textContent = skill.name;
      container.appendChild(badge);
    });
  });

  Object.keys(domainMap).forEach(domain => {
    const card = document.querySelector(`[data-domain="${domain}"]`);
    if (!card) return;

    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      const badges = card.querySelectorAll('.skill-badge');
      badges.forEach((b, idx) => {
        setTimeout(() => b.classList.add('visible'), idx * 55);
      });
    }, { threshold: 0.2 });

    observer.observe(card);
  });
}

// ============================================================
// 6. PROJECTS
// ============================================================

function initProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  PROJECTS_DATA.forEach((proj, idx) => {
    const delay = (idx % 3) * 100;
    const catClass = `cat-${proj.category}`;

    const frontTagsHtml = proj.tags.slice(0, 3).map(t =>
      `<span class="project-tag">${t}</span>`
    ).join('');

    const backTagsHtml = proj.tags.map(t =>
      `<span class="project-back-tag">${t}</span>`
    ).join('');

    const flipHint = isTouchDevice ? '' :
      `<p class="project-flip-hint">hover to reveal →</p>`;

    const container = document.createElement('div');
    container.className = 'project-card-container reveal';
    container.dataset.revealDelay = String(delay);

    container.innerHTML = `
      <div class="project-card" role="article" aria-label="${proj.title}: ${proj.subtitle}">
        <div class="project-card-front" data-category="${proj.category}">
          <div class="project-header">
            <span class="project-cat-dot ${catClass}" aria-hidden="true"></span>
            <h3 class="project-title">${proj.title}</h3>
          </div>
          <p class="project-subtitle">${proj.subtitle}</p>
          <div class="project-front-tags">${frontTagsHtml}</div>
          ${flipHint}
        </div>
        <div class="project-card-back">
          <p class="project-back-desc">${proj.description}</p>
          <div class="project-back-tags">${backTagsHtml}</div>
          <div class="project-back-links">
            <a href="${proj.link}" class="project-link" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    `;

    if (isTouchDevice) {
      const card = container.querySelector('.project-card');
      const front = container.querySelector('.project-card-front');
      front.addEventListener('click', () => card.classList.toggle('is-flipped'));
    }

    grid.appendChild(container);
  });
}

// ============================================================
// 7. CERTIFICATIONS
// ============================================================

function initCerts() {
  const grid = document.getElementById('certs-grid');
  if (!grid) return;

  CERTS_DATA.forEach((cert, idx) => {
    const card = document.createElement('div');
    card.className = `cert-card ${cert.cls}`;
    card.innerHTML = `
      <div class="cert-icon-wrap" aria-hidden="true">${cert.icon}</div>
      <p class="cert-name">${cert.name}</p>
      <p class="cert-issuer">${cert.issuer}</p>
      <p class="cert-year">${cert.year}</p>
    `;
    grid.appendChild(card);
  });

  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    grid.querySelectorAll('.cert-card').forEach((card, idx) => {
      setTimeout(() => card.classList.add('visible'), idx * 120);
    });
  }, { threshold: 0.2 });

  observer.observe(grid);
}

// ============================================================
// 8. NAVIGATION
// ============================================================

function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  }, { passive: true });

  const sections = document.querySelectorAll('section[id]');
  const linkObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

  sections.forEach(s => linkObserver.observe(s));

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!open));
      hamburger.classList.toggle('hamburger--open');
      navLinks.classList.toggle('nav-links--open');
      document.body.style.overflow = open ? '' : 'hidden';
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('hamburger--open');
        navLinks.classList.remove('nav-links--open');
        document.body.style.overflow = '';
      });
    });
  }

  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

// ============================================================
// 9. SCROLL REVEAL
// ============================================================

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.revealDelay || 0;
      entry.target.style.transitionDelay = `${delay}ms`;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

  els.forEach(el => observer.observe(el));
}

// ============================================================
// 10. CUSTOM CURSOR
// ============================================================

function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const ring = document.getElementById('cursor-ring');
  const dot  = document.getElementById('cursor-dot');
  if (!ring || !dot) return;

  let rx = 0, ry = 0;
  let mx = 0, my = 0;
  let rafId;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = `${mx}px`;
    dot.style.top  = `${my}px`;
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    ring.style.opacity = '0';
    dot.style.opacity  = '0';
  }, { passive: true });

  document.addEventListener('mouseenter', () => {
    ring.style.opacity = '1';
    dot.style.opacity  = '1';
  }, { passive: true });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animate() {
    rx = lerp(rx, mx, 0.12);
    ry = lerp(ry, my, 0.12);
    ring.style.left = `${rx}px`;
    ring.style.top  = `${ry}px`;
    rafId = requestAnimationFrame(animate);
  }
  animate();

  const clickables = document.querySelectorAll('a, button, .project-card-container, .skill-badge');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor--hover'), { passive: true });
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor--hover'), { passive: true });
  });
}

// ============================================================
// 11. GLITCH
// ============================================================

function initGlitch() {
  const name = document.querySelector('.hero-name');
  if (!name) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function trigger() {
    name.classList.add('is-glitching');
    setTimeout(() => name.classList.remove('is-glitching'), 580);
    setTimeout(trigger, 4200 + Math.random() * 4800);
  }

  setTimeout(trigger, 2200);
}

// ============================================================
// 12. KONAMI CODE + MATRIX RAIN
// ============================================================

function initKonami() {
  const SEQ = [
    'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
    'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
    'b','a',
  ];
  let progress = 0;

  const overlay  = document.getElementById('konami-overlay');
  const matCanvas = document.getElementById('matrix-canvas');
  const closeBtn = document.getElementById('konami-close');
  if (!overlay || !matCanvas) return;

  let matRafId = null;

  function startMatrix() {
    const ctx  = matCanvas.getContext('2d');
    matCanvas.width  = window.innerWidth;
    matCanvas.height = window.innerHeight;

    const fontSize = 13;
    const cols = Math.floor(matCanvas.width / fontSize);
    const drops = Array(cols).fill(0);

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]|/\\';

    let lastTime = 0;
    const FPS_CAP = 30;
    const FRAME_MIN = 1000 / FPS_CAP;

    function draw(ts) {
      if (ts - lastTime < FRAME_MIN) { matRafId = requestAnimationFrame(draw); return; }
      lastTime = ts;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, matCanvas.width, matCanvas.height);

      ctx.fillStyle = '#00ff88';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > matCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      matRafId = requestAnimationFrame(draw);
    }
    matRafId = requestAnimationFrame(draw);
  }

  function stopMatrix() {
    if (matRafId) cancelAnimationFrame(matRafId);
    matRafId = null;
  }

  function open() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    startMatrix();
  }

  function close() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    stopMatrix();
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      close(); return;
    }
    if (e.key === SEQ[progress]) {
      progress++;
      if (progress === SEQ.length) { progress = 0; open(); }
    } else {
      progress = e.key === SEQ[0] ? 1 : 0;
    }
  });

  closeBtn.addEventListener('click', close);
}

// ============================================================
// 13. EASTER EGGS
// ============================================================

function initEasterEggs() {
  // Console ASCII art
  const art = `
%c
  █████╗ ██╗  ██╗███╗   ███╗███████╗██████╗
 ██╔══██╗██║  ██║████╗ ████║██╔════╝██╔══██╗
 ███████║███████║██╔████╔██║█████╗  ██║  ██║
 ██╔══██║██╔══██║██║╚██╔╝██║██╔══╝  ██║  ██║
 ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██████╔╝
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═════╝
%c
 Hello, fellow developer. 👋
 You opened DevTools. I respect that.

 → Source: github.com/khalifa1299/khalifa1299.github.io
 → Try the Konami code on this page.
   You know the one. ↑↑↓↓←→←→BA
`;

  console.log(
    art,
    'color: #5fa8f5; font-family: monospace; font-size: 10px; line-height: 1.2;',
    'color: #00d4ff; font-family: monospace; font-size: 12px; line-height: 1.8;',
  );

  // Keyboard buffer: type "help" anywhere → flash hint
  let buf = '';
  document.addEventListener('keydown', e => {
    if (document.activeElement.tagName === 'INPUT' ||
        document.activeElement.tagName === 'TEXTAREA') return;

    buf += e.key.toLowerCase();
    buf = buf.slice(-6);

    if (buf.endsWith('help')) flashHint('[ try typing "sudo" for another surprise ]');
    if (buf.endsWith('sudo')) flashHint('[ access denied — nice try ]');
  });

  function flashHint(msg) {
    const existing = document.querySelector('.secret-hint');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.className = 'secret-hint';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { if (el.parentNode) el.remove(); }, 3000);
  }
}

// ============================================================
// 14. BOOT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initTypewriter();
  initAboutTerminal();
  initSkills();
  initProjects();
  initCerts();
  initNav();
  initScrollReveal();
  initCursor();
  initKonami();
  initEasterEggs();
});
