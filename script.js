const STORAGE_KEY = "lexos-control-demo-v1";
const SESSION_KEY = "lexos-control-session";
const SIDEBAR_KEY = "lexos-control-sidebar-collapsed";
const PROFILE_KEY = "lexos-control-profile";
const THEME_KEY = "lexos-control-theme";
const INTERNAL_DEPTH_KEY = "lexos-control-internal-depth";

const demoSeed = {
  office: {
    name: "Escritório Demo Lexos",
    owner: "Dra. Marina Costa",
    mode: "Demo local",
  },
  clients: [
    {
      id: "CLI-001",
      name: "Almeida & Torres Ltda.",
      type: "Pessoa jurídica",
      status: "Ativo",
      owner: "Marina Costa",
      situation: "Em atenção",
      lastContact: "há 12 dias",
      pendingBilling: true,
      activeCase: true,
    },
    {
      id: "CLI-002",
      name: "João Ricardo Nunes",
      type: "Pessoa física",
      status: "Ativo",
      owner: "Rafael Lima",
      situation: "Sem retorno",
      lastContact: "há 21 dias",
      pendingBilling: false,
      activeCase: true,
    },
    {
      id: "CLI-003",
      name: "Grupo Aurora Saúde",
      type: "Pessoa jurídica",
      status: "Ativo",
      owner: "Bianca Reis",
      situation: "Operação regular",
      lastContact: "ontem",
      pendingBilling: false,
      activeCase: true,
    },
    {
      id: "CLI-004",
      name: "Carolina Mendes",
      type: "Pessoa física",
      status: "Arquivado",
      owner: "Marina Costa",
      situation: "Encerrado",
      lastContact: "há 45 dias",
      pendingBilling: false,
      activeCase: false,
    },
  ],
  cases: [
    {
      id: "PROC-1029",
      clientId: "CLI-001",
      title: "Ação de cobrança contratual",
      area: "Cível",
      status: "Ativo",
      risk: "Alto",
      owner: "Marina Costa",
      deadline: "vence amanhã",
      value: 78000,
    },
    {
      id: "PROC-1034",
      clientId: "CLI-002",
      title: "Defesa em reclamação trabalhista",
      area: "Trabalhista",
      status: "Em atenção",
      risk: "Médio",
      owner: "Rafael Lima",
      deadline: "vencido",
      value: 22000,
    },
    {
      id: "PROC-1041",
      clientId: "CLI-003",
      title: "Mandado de segurança tributário",
      area: "Tributário",
      status: "Ativo",
      risk: "Baixo",
      owner: "Bianca Reis",
      deadline: "em 6 dias",
      value: 130000,
    },
  ],
  tasks: [
    {
      id: "TAR-201",
      title: "Revisar contestação antes do protocolo",
      clientId: "CLI-002",
      caseId: "PROC-1034",
      owner: "Rafael Lima",
      status: "Atrasada",
      urgency: "Urgente",
      due: "ontem",
    },
    {
      id: "TAR-202",
      title: "Enviar follow-up de proposta",
      clientId: "CLI-001",
      caseId: "PROC-1029",
      owner: "Sem responsável",
      status: "Aberta",
      urgency: "Alta",
      due: "hoje",
    },
    {
      id: "TAR-203",
      title: "Preparar dossiê de reunião executiva",
      clientId: "CLI-003",
      caseId: "PROC-1041",
      owner: "Bianca Reis",
      status: "Aberta",
      urgency: "Normal",
      due: "em 3 dias",
    },
  ],
  agenda: [
    {
      id: "AGE-301",
      title: "Audiência trabalhista",
      type: "Audiência",
      date: "Hoje, 14:30",
      origin: "PROC-1034",
      owner: "Rafael Lima",
      status: "Crítico",
    },
    {
      id: "AGE-302",
      title: "Reunião com Almeida & Torres",
      type: "Reunião",
      date: "Amanhã, 09:00",
      origin: "CLI-001",
      owner: "Marina Costa",
      status: "Confirmado",
    },
    {
      id: "AGE-303",
      title: "Prazo de manifestação",
      type: "Prazo",
      date: "Em 6 dias",
      origin: "PROC-1041",
      owner: "Bianca Reis",
      status: "Próximo",
    },
  ],
  finance: [
    {
      id: "FIN-401",
      clientId: "CLI-001",
      description: "Honorários mensais",
      amount: 8500,
      status: "Vencido",
      due: "há 8 dias",
    },
    {
      id: "FIN-402",
      clientId: "CLI-003",
      description: "Êxito previsto",
      amount: 18000,
      status: "A receber",
      due: "em 10 dias",
    },
    {
      id: "FIN-403",
      clientId: "CLI-002",
      description: "Parcela de entrada",
      amount: 3200,
      status: "Recebido",
      due: "este mês",
    },
  ],
  reports: [
    {
      id: "REL-501",
      model: "Relatório executivo semanal",
      status: "Rascunho",
      created: "Hoje",
      reviewer: "Marina Costa",
    },
    {
      id: "REL-502",
      model: "Carteira de risco processual",
      status: "Revisado",
      created: "Ontem",
      reviewer: "Bianca Reis",
    },
  ],
  centralHistory: [
    {
      id: "IA-601",
      module: "Dossiê rápido",
      title: "Resumo operacional Almeida & Torres",
      status: "Gerado para revisão",
      created: "Hoje, 10:14",
    },
    {
      id: "IA-602",
      module: "Plano de ação",
      title: "Providências para processo trabalhista",
      status: "Reutilizável",
      created: "Ontem, 16:40",
    },
  ],
};

const navItems = [
  ["dashboard", "dashboard", "Dashboard"],
  ["clientes", "client", "Clientes"],
  ["processos", "scale", "Processos"],
  ["tarefas", "task", "Tarefas"],
  ["agenda", "calendar", "Agenda"],
  ["financeiro", "finance", "Financeiro"],
  ["socios", "partners", "Painel dos Sócios"],
  ["relatorios", "report", "Relatórios"],
  ["central", "lexos", "Central LEX.OS"],
  ["onboarding", "onboarding", "Onboarding"],
];

let state = loadData();
let currentPage = pageFromLocation();
let currentTab = "Dossiê rápido";
let sidebarCollapsed = localStorage.getItem(SIDEBAR_KEY) === "true";
let agendaMonthlyVisible = false;
let profileState = loadProfile();
let pendingProfilePhoto = "";
let internalNavigationDepth = Number(sessionStorage.getItem(INTERNAL_DEPTH_KEY) || "0");

applyTheme(loadTheme());

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoSeed));
    return structuredClone(demoSeed);
  }
  try {
    return JSON.parse(saved);
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoSeed));
    return structuredClone(demoSeed);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadProfile() {
  try {
    return JSON.parse(localStorage.getItem(PROFILE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProfile() {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profileState));
}

function avatarSrc() {
  return profileState.photo || "/assets/lexos-symbol.png";
}

function navIcon(icon) {
  const svgAttrs = 'viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"';
  const icons = {
    dashboard: `<svg ${svgAttrs}><path d="M4 10.5 12 4l8 6.5"/><path d="M6.5 9.5V20h11V9.5"/><path d="M10 20v-5h4v5"/></svg>`,
    client: `<svg ${svgAttrs}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>`,
    scale: `<svg ${svgAttrs}><path d="M12 3v18"/><path d="M5 6h14"/><path d="m7 6-4 7h8L7 6Z"/><path d="m17 6-4 7h8l-4-7Z"/></svg>`,
    task: `<svg ${svgAttrs}><path d="m5 13 4 4L19 7"/><path d="M4 4h16v16H4z"/></svg>`,
    calendar: `<svg ${svgAttrs}><path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><path d="M5 5h14v16H5z"/><path d="M8 12h2"/><path d="M14 12h2"/><path d="M8 16h2"/></svg>`,
    finance: `<svg ${svgAttrs}><path d="M12 3c4.42 0 8 1.57 8 3.5S16.42 10 12 10 4 8.43 4 6.5 7.58 3 12 3Z"/><path d="M4 6.5v5C4 13.43 7.58 15 12 15s8-1.57 8-3.5v-5"/><path d="M4 11.5v5C4 18.43 7.58 20 12 20s8-1.57 8-3.5v-5"/></svg>`,
    partners: `<svg ${svgAttrs}><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M2.5 21a6.5 6.5 0 0 1 13 0"/><path d="M17 10a3 3 0 1 0-1-5.8"/><path d="M16.5 14.5A5.5 5.5 0 0 1 21.5 21"/></svg>`,
    report: `<svg ${svgAttrs}><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/><path d="M9 9h2"/></svg>`,
    lexos: '<img class="nav-symbol" src="/assets/lexos-symbol.png" alt="" />',
    onboarding: `<svg ${svgAttrs}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/><path d="M4 5v14"/></svg>`,
  };
  return icons[icon] || icons.dashboard;
}

function cropProfilePhoto(file, size = 420) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("error", () => reject(new Error("Não foi possível ler a imagem.")));
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("error", () => reject(new Error("Não foi possível carregar a imagem.")));
      image.addEventListener("load", () => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d");
        const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
        const sourceX = Math.max(0, (image.naturalWidth - sourceSize) / 2);
        const sourceY = Math.max(0, (image.naturalHeight - sourceSize) / 2);
        context.drawImage(image, sourceX, sourceY, sourceSize, sourceSize, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.86));
      });
      image.src = String(reader.result || "");
    });
    reader.readAsDataURL(file);
  });
}

function loadTheme() {
  return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const next = loadTheme() === "light" ? "dark" : "light";
  applyTheme(next);
  renderApp();
}

function pageFromLocation() {
  const page = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return navItems.some(([id]) => id === page) || page === "perfil" || page === "config" ? page : "dashboard";
}

function pageUrl(page) {
  return page === "dashboard" ? "/" : `/${page}`;
}

function goToPage(page, options = {}) {
  const normalized = navItems.some(([id]) => id === page) || page === "perfil" || page === "config" ? page : "dashboard";
  currentPage = normalized;
  const method = options.replace ? "replaceState" : "pushState";
  history[method]({ lexos: true, page: currentPage }, "", pageUrl(currentPage));
  if (!options.replace) {
    internalNavigationDepth += 1;
    sessionStorage.setItem(INTERNAL_DEPTH_KEY, String(internalNavigationDepth));
  }
  renderApp();
}

function returnToPreviousPage() {
  if (internalNavigationDepth > 0) {
    history.back();
    return;
  }
  goToPage("dashboard", { replace: true });
}

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function clientName(id) {
  return state.clients.find((client) => client.id === id)?.name || id;
}

function riskBadge(value) {
  const kind = value === "Alto" || value === "Atrasada" || value === "Vencido" ? "danger" : value === "Médio" || value === "Em atenção" || value === "Urgente" ? "warn" : "ok";
  return `<span class="badge ${kind}">${value}</span>`;
}

function toast(message) {
  const announcer = document.getElementById("announcer");
  if (announcer) announcer.textContent = message;
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 2400);
}

function renderLogin() {
  document.getElementById("app").innerHTML = `
    <section class="login-shell">
      <div class="login-visual">
        <div class="brand-lockup"><div class="brand-mark"><img class="brand-symbol" src="/assets/lexos-symbol.png" alt="" /></div><span>LEX.OS</span></div>
        <div class="login-title">
          <span class="eyebrow">Sistema interno demonstrativo</span>
          <h1>Gestão jurídica sem dispersão.</h1>
          <p>Ambiente local para demonstrar operação, carteira, prazos, financeiro, relatórios e apoio assistido por IA com revisão humana.</p>
        </div>
        <div class="sidebar-footer">MVP sem integrações externas reais. Dados fictícios persistem apenas neste navegador.</div>
      </div>
      <div class="login-aside">
        <form class="login-card" id="loginForm">
          <span class="eyebrow">Acesso demo</span>
          <h2>Entrar no ambiente</h2>
          <p class="demo-note">Use o botão de demonstração. A estrutura já separa o ponto de login para futura autenticação conectada.</p>
          <div class="form-grid">
            <div class="field">
              <label for="email">E-mail</label>
              <input id="email" name="email" type="email" value="demo@lexos.control" autocomplete="email" spellcheck="false" />
            </div>
            <div class="field">
              <label for="password">Senha</label>
              <input id="password" name="password" type="password" value="demonstracao" autocomplete="current-password" />
            </div>
            <button class="btn primary" type="submit">Entrar em modo demonstração</button>
          </div>
          <p class="demo-note">Autenticação real, permissões e banco externo ficam preparados para uma fase posterior.</p>
        </form>
      </div>
    </section>
  `;
  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    sessionStorage.setItem(SESSION_KEY, "demo");
    renderApp();
  });
}

function renderApp() {
  document.getElementById("app").innerHTML = `
    <section class="app-shell ${sidebarCollapsed ? "sidebar-collapsed" : ""}">
      <aside class="sidebar">
        <div class="sidebar-head">
          <div class="brand-lockup"><div class="brand-mark"><img class="brand-symbol" src="/assets/lexos-symbol.png" alt="" /></div><span>LEX.OS</span></div>
          <button class="sidebar-toggle" id="sidebarToggle" type="button" aria-label="${sidebarCollapsed ? "Expandir menu lateral" : "Minimizar menu lateral"}" aria-pressed="${sidebarCollapsed}">
            <span aria-hidden="true">${sidebarCollapsed ? "›" : "‹"}</span>
          </button>
        </div>
        <nav class="nav">
          ${navItems.map(([id, icon, label]) => `<button data-page="${id}" class="${id === currentPage ? "active" : ""}" title="${label}"><span class="nav-icon">${navIcon(icon)}</span><span>${label}</span></button>`).join("")}
        </nav>
        <div class="sidebar-footer">
          <strong>${state.office.name}</strong><br />
          Ambiente demonstrativo local. Sem gateway, banco, API jurídica ou envio externo automático.
        </div>
      </aside>
      <main class="main" id="workspace" tabindex="-1">
        <header class="topbar">
          <label class="sr-only" for="globalSearch">Busca global</label>
          <input class="search-input" id="globalSearch" name="globalSearch" autocomplete="off" placeholder="Buscar cliente, processo, tarefa ou relatório…" />
          <button class="theme-toggle" id="themeToggle" type="button" aria-label="Alternar modo claro e escuro" title="Alternar tema">
            <span aria-hidden="true">${loadTheme() === "light" ? "☀" : "☾"}</span>
          </button>
          <div class="office-profile">
            <button class="office-main" id="officeProfileToggle" type="button" aria-expanded="false" aria-controls="officeProfileMenu">
              <img class="${profileState.photo ? "profile-photo" : ""}" src="${avatarSrc()}" alt="" />
              <span>
                <strong>${state.office.name}</strong>
                <em>${state.office.mode} · ${state.office.owner}</em>
              </span>
            </button>
            <div class="office-actions hidden" id="officeProfileMenu">
              <button class="btn" type="button" data-shortcut="perfil">Perfil</button>
              <button class="btn" type="button" data-shortcut="config">Configurações</button>
              <button class="btn" id="resetData" type="button">Restaurar</button>
              <button class="btn warn" id="logout" type="button">Sair</button>
            </div>
          </div>
        </header>
        <div class="workspace" id="screen"></div>
      </main>
      <button class="return-control" type="button" data-history-back aria-label="Retornar à página anterior" title="Retornar à página anterior">
        <span aria-hidden="true">←</span>
      </button>
    </section>
    <aside class="drawer hidden" id="drawer"></aside>
  `;

  document.getElementById("sidebarToggle").addEventListener("click", () => {
    sidebarCollapsed = !sidebarCollapsed;
    localStorage.setItem(SIDEBAR_KEY, String(sidebarCollapsed));
    renderApp();
  });

  document.getElementById("officeProfileToggle").addEventListener("click", () => {
    const menu = document.getElementById("officeProfileMenu");
    const expanded = menu.classList.toggle("hidden") === false;
    document.getElementById("officeProfileToggle").setAttribute("aria-expanded", String(expanded));
  });
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.querySelector("[data-history-back]")?.addEventListener("click", () => {
    document.getElementById("officeProfileMenu")?.classList.add("hidden");
    returnToPreviousPage();
  });

  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      goToPage(button.dataset.page);
    });
  });
  document.getElementById("logout").addEventListener("click", () => {
    sessionStorage.removeItem(SESSION_KEY);
    renderLogin();
  });
  document.getElementById("resetData").addEventListener("click", () => {
    state = structuredClone(demoSeed);
    saveData();
    toast("Dados fictícios restaurados.");
    renderApp();
  });
  document.getElementById("globalSearch").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      openDrawer("Busca global", globalSearch(event.target.value));
    }
  });
  renderPage();
}

function pageHeader(kicker, title, description, action = "") {
  return `
    <div class="page-title">
      <div>
        <span class="eyebrow">${kicker}</span>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
      <div class="toolbar">${action}</div>
    </div>
  `;
}

function renderPage() {
  const pages = {
    dashboard: renderDashboard,
    clientes: renderClients,
    processos: renderCases,
    tarefas: renderTasks,
    agenda: renderAgenda2,
    financeiro: renderFinance,
    socios: renderPartners,
    relatorios: renderReports,
    central: renderCentral,
    perfil: renderProfile,
    config: renderSettings,
    onboarding: renderOnboarding,
  };
  const render = pages[currentPage] || pages.dashboard;
  if (!pages[currentPage]) currentPage = "dashboard";
  document.getElementById("screen").innerHTML = render();
  bindActions2();
}

function renderDashboard() {
  const overdueTasks = state.tasks.filter((task) => task.status === "Atrasada").length;
  const attentionClients = state.clients.filter((client) => client.situation !== "Operação regular" && client.status !== "Arquivado").length;
  const riskyCases = state.cases.filter((item) => item.risk === "Alto" || item.deadline === "vencido").length;
  const overdueFinance = state.finance.filter((item) => item.status === "Vencido").reduce((sum, item) => sum + item.amount, 0);

  return `
    ${pageHeader("Dashboard executivo", "Operação do escritório", "Visão geral de clientes, processos, tarefas, financeiro e Central LEX.OS.", '<button class="btn primary" data-action="simulate" data-title="Adicionar rápido">+ Adicionar</button><button class="btn" data-action="simulate" data-title="Resumo executivo">Gerar apoio assistido</button>')}
    <section class="grid metrics">
      ${metric("Clientes ativos", state.clients.filter((item) => item.status === "Ativo").length, `${attentionClients} em atenção`, "clientes")}
      ${metric("Processos", state.cases.length, `${riskyCases} com risco ou prazo crítico`, "processos")}
      ${metric("Tarefas abertas", state.tasks.filter((item) => item.status !== "Concluída").length, `${overdueTasks} atrasada`, "tarefas")}
      ${metric("Financeiro vencido", money(overdueFinance), "sem cobrança automática", "financeiro")}
      ${metric("Central LEX.OS", state.centralHistory.length, "execuções supervisionadas", "central")}
    </section>
    <section class="grid two" style="margin-top:14px">
      <div class="panel">
        <div class="panel-title"><h2>Fila de prioridades</h2><span>decisão</span></div>
        <div class="list">
          ${record("Prazo vencido em processo trabalhista", "PROC-1034 exige revisão humana antes de nova movimentação.", ["Prazo", "Risco médio", "Rafael Lima"], "processos")}
          ${record("Cliente sem retorno", "João Ricardo Nunes está há 21 dias sem retorno registrado.", ["Follow-up", "Carteira"], "clientes")}
          ${record("Cobrança vencida", "Almeida & Torres possui honorários mensais vencidos há 8 dias.", ["Financeiro", "Vencido"], "financeiro")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Mapa das frentes</h2><span>escritório</span></div>
        <div class="map-grid">
          ${front("Carteira", state.clients.length, "clientes monitorados", "clientes")}
          ${front("Processos em andamento", state.cases.length, "processos ativos", "processos")}
          ${front("Operação", state.tasks.length, "providências abertas", "tarefas")}
          ${front("Agenda", state.agenda.length, "eventos jurídicos", "agenda")}
          ${front("Recebíveis", money(state.finance.reduce((s, f) => s + f.amount, 0)), "total demonstrativo", "financeiro")}
          ${front("IA assistida", state.centralHistory.length, "registros revisáveis", "central")}
        </div>
      </div>
    </section>
  `;
}

function renderClients() {
  const activeClients = state.clients.filter((client) => client.status === "Ativo").length;
  const attentionClients = state.clients.filter((client) => client.situation !== "Operação regular" && client.status !== "Arquivado").length;
  const pendingBilling = state.clients.filter((client) => client.pendingBilling).length;
  return `
    ${pageHeader("Clientes", "Cadastro e gestão de clientes", "Filtros por status, tipo, responsável e situação operacional.", '<button class="btn primary" data-action="simulate" data-title="Novo cliente">Cadastrar cliente</button>')}
    ${filters(["Status", "Tipo", "Responsável", "Situação"])}
    <section class="client-layout">
      <aside class="client-summary panel">
        <div class="panel-title"><h2>Carteira</h2><span>visão rápida</span></div>
        <div class="client-summary-grid">
          <div><strong>${activeClients}</strong><span>ativos</span></div>
          <div><strong>${attentionClients}</strong><span>em atenção</span></div>
          <div><strong>${pendingBilling}</strong><span>cobrança</span></div>
        </div>
        <div class="client-focus">
          <span class="record-meta">Prioridade da carteira</span>
          <h3>${state.clients.find((client) => client.situation === "Sem retorno")?.name || state.clients[0].name}</h3>
          <p>Cliente com maior necessidade de retorno humano nesta demonstração.</p>
          <button class="btn primary" type="button" data-action="simulate" data-title="Plano de contato da carteira">Gerar plano de contato</button>
        </div>
      </aside>
      <div class="client-directory">
        ${state.clients.map(clientCard).join("")}
      </div>
    </section>
  `;
}

function renderCases() {
  const columns = [
    ["Alto risco", (item) => item.risk === "Alto" || item.deadline === "vencido"],
    ["Em atenção", (item) => item.status === "Em atenção" || item.risk === "Médio"],
    ["Em andamento", (item) => item.status === "Ativo" && item.risk !== "Alto" && item.risk !== "Médio"],
  ];
  return `
    ${pageHeader("Processos", "Carteira processual", "Controle de processos ativos, em atenção, suspensos, arquivados e de alto risco.", '<button class="btn primary" data-action="simulate" data-title="Lançar processo">Novo processo</button>')}
    ${filters(["Status", "Risco", "Área", "Responsável"])}
    <section class="case-board">
      ${columns.map(([label, matcher]) => {
        const cases = state.cases.filter(matcher);
        return `
          <div class="case-column">
            <div class="case-column-head">
              <h2>${label}</h2>
              <span>${cases.length}</span>
            </div>
            <div class="case-column-list">
              ${cases.map(caseBoardCard).join("") || `<div class="empty-state">Nenhum processo nesta faixa.</div>`}
            </div>
          </div>
        `;
      }).join("")}
    </section>
  `;
}

function renderTasks() {
  const delayed = state.tasks.filter((task) => task.status === "Atrasada").length;
  const noOwner = state.tasks.filter((task) => task.owner === "Sem responsável").length;
  const urgent = state.tasks.filter((task) => task.urgency === "Urgente" || task.urgency === "Alta").length;
  return `
    ${pageHeader("Tarefas", "Fila operacional de providências", "Controle de tarefas abertas, atrasadas, urgentes, próximas e sem responsável.", '<button class="btn primary" data-action="simulate" data-title="Nova tarefa">Criar tarefa</button>')}
    ${filters(["Status", "Urgência", "Responsável", "Vínculo"])}
    <section class="task-layout">
      <div class="task-rail panel">
        <div class="panel-title"><h2>Comando</h2><span>operação</span></div>
        <div class="task-pulse danger"><strong>${delayed}</strong><span>atrasada</span></div>
        <div class="task-pulse warn"><strong>${urgent}</strong><span>urgentes/altas</span></div>
        <div class="task-pulse info"><strong>${noOwner}</strong><span>sem responsável</span></div>
      </div>
      <div class="task-queue">
        ${state.tasks.map(taskQueueItem).join("")}
      </div>
    </section>
  `;
}

function clientCard(client) {
  const initials = client.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  return `
    <article class="client-card">
      <div class="client-avatar" aria-hidden="true">${initials}</div>
      <div class="client-card-main">
        <div class="client-card-head">
          <div>
            <span class="record-meta">${client.id} · ${client.type}</span>
            <h2>${client.name}</h2>
          </div>
          <strong>${client.owner}</strong>
        </div>
        <div class="client-contact-row">
          <span>Último contato ${client.lastContact}</span>
          <span>${client.status}</span>
        </div>
        <div class="badges">${riskBadge(client.situation)}${client.pendingBilling ? riskBadge("Cobrança pendente") : ""}${client.activeCase ? riskBadge("Processo ativo") : ""}</div>
        <div class="client-actions">${actionButtons(["Abrir detalhes", "Criar processo", "Criar tarefa", "Ver financeiro", "Arquivar cliente"], client.name)}</div>
      </div>
    </article>
  `;
}

function caseBoardCard(item) {
  return `
    <article class="case-card">
      <div class="case-id">${item.id}</div>
      <h3>${item.title}</h3>
      <p>${clientName(item.clientId)}</p>
      <div class="case-meta-grid">
        <span>${item.area}</span>
        <span>${item.owner}</span>
        <span>${money(item.value)}</span>
      </div>
      <div class="badges">${riskBadge(item.risk)}${riskBadge(item.deadline)}</div>
      <div class="case-actions">${actionButtons(["Abrir processo", "Criar tarefa", "Lançar prazo", "Registrar andamento"], item.title)}</div>
    </article>
  `;
}

function taskQueueItem(task) {
  const tone = task.status === "Atrasada" ? "danger" : task.urgency === "Urgente" || task.urgency === "Alta" ? "warn" : "info";
  return `
    <article class="task-item ${tone}">
      <div class="task-check" aria-hidden="true"></div>
      <div class="task-content">
        <div class="task-head">
          <div>
            <span class="record-meta">${task.id} · ${task.due}</span>
            <h2>${task.title}</h2>
          </div>
          <div class="badges">${riskBadge(task.status)}${riskBadge(task.urgency)}</div>
        </div>
        <div class="task-context">
          <span>${clientName(task.clientId)}</span>
          <span>${task.caseId}</span>
          <span>${task.owner}</span>
        </div>
        <div class="task-actions">${actionButtons(["Concluir", "Editar prazo", "Abrir processo", "Abrir cliente", "Arquivar tarefa"], task.title)}</div>
      </div>
    </article>
  `;
}

function renderAgenda() {
  return `
    ${pageHeader("Agenda", "Agenda jurídica operacional", "Audiências, reuniões, follow-ups e prazos críticos em um mesmo quadro.")}
    <div class="module-tabs">${["Hoje", "Próximos 7 dias", "Vencidos", "Audiências", "Reuniões", "Tarefas/processos"].map((tab, index) => `<button class="${index === 0 ? "active" : ""}" data-action="simulate" data-title="Filtro ${tab}">${tab}</button>`).join("")}</div>
    <section class="grid three">
      ${state.agenda.map((event) => `
        <article class="record">
          <div class="record-head"><div><h3>${event.title}</h3><p>${event.date}</p></div>${riskBadge(event.status)}</div>
          <div class="badges"><span class="badge info">${event.type}</span><span class="badge">${event.origin}</span><span class="badge">${event.owner}</span></div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderFinance() {
  const totalOpen = state.finance.filter((item) => item.status !== "Recebido").reduce((sum, item) => sum + item.amount, 0);
  const overdue = state.finance.filter((item) => item.status === "Vencido").reduce((sum, item) => sum + item.amount, 0);
  const received = state.finance.filter((item) => item.status === "Recebido").reduce((sum, item) => sum + item.amount, 0);
  return `
    ${pageHeader("Financeiro", "Controle interno de recebíveis", "MVP sem gateway, PIX, boleto ou banco real.", '<button class="btn primary" data-action="simulate" data-title="Nova cobrança">Nova cobrança</button>')}
    <section class="grid metrics">
      ${metric("A receber", money(totalOpen), "receita prevista", "financeiro")}
      ${metric("Vencidos", money(overdue), "clientes inadimplentes", "financeiro")}
      ${metric("Recebido no mês", money(received), "lançamento manual", "financeiro")}
      ${metric("Cobranças", state.finance.length, "controle interno", "financeiro")}
      ${metric("Integrações", "0", "sem bancos reais", "config")}
    </section>
    <div style="margin-top:14px">
      ${table(["Cobrança", "Cliente", "Valor", "Status", "Ações"], state.finance.map((item) => [
        `<strong>${item.description}</strong><span class="record-meta">${item.id} · ${item.due}</span>`,
        clientName(item.clientId),
        money(item.amount),
        riskBadge(item.status),
        actionButtons(["Marcar como pago", "Reagendar", "Arquivar"], item.description),
      ]))}
    </div>
  `;
}

function renderPartners() {
  return `
    ${pageHeader("Painel dos Sócios", "Sala executiva de decisões", "Visão consolidada de riscos, clientes em atenção, processos críticos, tarefas e valores vencidos.")}
    <div class="module-tabs">${["Hoje", "7 dias", "30 dias", "Mês atual", "Todos os dados"].map((tab, index) => `<button class="${index === 1 ? "active" : ""}" data-action="simulate" data-title="Período ${tab}">${tab}</button>`).join("")}</div>
    <section class="grid two">
      <div class="panel">
        <div class="panel-title"><h2>Decisões recomendadas</h2><span>humano no controle</span></div>
        <div class="list">
          ${record("Repriorizar prazo vencido", "Tarefa TAR-201 e processo PROC-1034 devem ser tratados antes de novas demandas.", ["Alta prioridade"], "processos")}
          ${record("Ativar cobrança consultiva", "Cliente CLI-001 possui valor vencido e processo ativo sensível.", ["Financeiro", "Carteira"], "financeiro")}
          ${record("Delegar follow-up sem dono", "Tarefa TAR-202 está sem responsável e vence hoje.", ["Operação"], "tarefas")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Riscos consolidados</h2><span>síntese</span></div>
        <div class="map-grid">
          ${front("Clientes atenção", 2, "sem retorno ou cobrança", "clientes")}
          ${front("Processos críticos", 2, "alto risco ou prazo vencido", "processos")}
          ${front("Tarefas urgentes", 2, "atrasadas ou hoje", "tarefas")}
          ${front("Vencido", money(8500), "recebível pendente", "financeiro")}
          ${front("Sem responsável", 1, "providência aberta", "tarefas")}
          ${front("Relatórios", 2, "histórico interno", "relatorios")}
        </div>
      </div>
    </section>
  `;
}

function renderReports() {
  return `
    ${pageHeader("Relatórios", "Geração de relatórios assistidos", "Modelos prontos e histórico com revisão humana obrigatória.", '<button class="btn primary" data-action="simulate" data-title="Gerar relatório">Gerar relatório</button>')}
    <section class="grid two">
      <div class="panel">
        <div class="panel-title"><h2>Modelos prontos</h2><span>templates</span></div>
        <div class="list">
          ${record("Relatório executivo semanal", "Resumo de carteira, prazos, financeiro e decisões pendentes.", ["Sócios"], "socios")}
          ${record("Relatório de risco processual", "Processos críticos, próximos prazos e plano de ação.", ["Processos"], "processos")}
          ${record("Relatório financeiro interno", "Recebíveis, vencidos e previsão de caixa.", ["Financeiro"], "financeiro")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Histórico</h2><span>revisão</span></div>
        <div class="list">
          ${state.reports.map((report) => record(report.model, `${report.id} · ${report.created} · revisor: ${report.reviewer}`, [report.status])).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCentral() {
  const tabs = ["Dossiê rápido", "Prompts", "Agentes guiados", "Fluxos", "Playbooks", "Relatórios"];
  return `
    ${pageHeader("Central LEX.OS", "Bancada assistida por IA supervisionada", "Apoio para dossiês, prompts, sínteses, planos de ação e relatórios. Sem envio externo automático.", '<button class="btn primary" data-action="simulate" data-title="Executar apoio assistido">Executar apoio assistido</button>')}
    <div class="module-tabs">${tabs.map((tab) => `<button class="${tab === currentTab ? "active" : ""}" data-tab="${tab}">${tab}</button>`).join("")}</div>
    <section class="grid two">
      <div class="panel">
        <div class="panel-title"><h2>${currentTab}</h2><span>supervisionado</span></div>
        <div class="field">
          <label>Briefing interno</label>
          <textarea rows="7" id="centralInput" name="centralInput" autocomplete="off">Gerar apoio para a equipe revisar antes de qualquer envio ao cliente.</textarea>
        </div>
        <div class="toolbar" style="margin-top:12px">
          <button class="btn primary" data-action="central-run">Executar apoio assistido</button>
          <button class="btn" data-action="copy-template">Copiar prompt</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Histórico de execuções</h2><span>local</span></div>
        <div class="list">
          ${state.centralHistory.map((item) => record(item.title, `${item.id} · ${item.module} · ${item.created}`, [item.status, "Copiar", "Reutilizar", "Arquivar"])).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSettings() {
  return `
    ${pageHeader("Configurações", "Identidade, equipe e ambiente", "Perfil do usuário, permissões, LGPD, auditoria e implantação.")}
    <section class="grid three">
      ${settingsCard("Identidade do escritório", ["Nome: " + state.office.name, "Responsável: " + state.office.owner, "Preferências visuais no topo direito"])}
      ${settingsCard("Equipe e permissões", ["Sócios", "Advogados", "Operação", "Financeiro"])}
      ${settingsCard("Segurança, LGPD e auditoria", ["Dados fictícios", "Sem integrações externas", "Logs locais demonstrativos"])}
      ${settingsCard("Preferências operacionais", ["Prazos críticos", "Follow-up de clientes", "Alertas financeiros"])}
      ${settingsCard("Ambiente demo", ["Restaurar dados", "Limpar navegador", "Validar implantação"])}
      ${settingsCard("Próxima fase", ["Autenticação conectada", "Banco de dados", "Permissões reais"])}
    </section>
  `;
}

function renderProfile() {
  return `
    ${pageHeader("Perfil", "Perfil do escritório", "Dados de identificação, contato e recuperação do ambiente demonstrativo.", '<button class="btn" type="button" data-shortcut="config">Abrir configurações</button>')}
    <section class="profile-page-grid">
      <article class="panel profile-identity-panel">
          <div class="profile-hero">
            <div class="profile-avatar-large">
            <img class="${profileState.photo ? "profile-photo" : ""}" src="${avatarSrc()}" alt="" />
          </div>
          <div>
            <span class="record-meta">Ambiente local</span>
            <h2>${state.office.name}</h2>
            <p>${state.office.owner} · perfil administrativo demonstrativo</p>
          </div>
        </div>
        <form class="profile-form-grid" data-demo-form>
          <div class="field profile-file">
            <label for="profilePhoto">Foto do perfil</label>
            <input id="profilePhoto" name="profilePhoto" type="file" accept="image/png,image/jpeg,image/webp" data-profile-photo-input />
            <small>A imagem será recortada em 1:1, exibida em círculo e salva neste navegador.</small>
            <button class="btn ghost profile-remove-photo" type="button" data-remove-profile-photo ${profileState.photo ? "" : "disabled"}>Remover foto</button>
          </div>
          ${field("Nome do escritório", state.office.name)}
          ${field("Responsável principal", state.office.owner)}
          ${field("E-mail administrativo", "contato@lexos.demo")}
          ${field("Telefone/WhatsApp", "(98) 90000-0000")}
          ${field("E-mail de recuperação", "recuperacao@lexos.demo")}
          ${field("Contato de recuperação", "Dra. Marina Costa")}
          ${selectField("Preferência de contato", ["E-mail administrativo", "WhatsApp", "Telefone", "Equipe operacional"])}
          ${selectField("Visibilidade do perfil", ["Somente equipe interna", "Sócios e administração", "Equipe jurídica completa"])}
          ${textAreaField("Observações internas", "Perfil demonstrativo para identificação do escritório no Lexos Control.")}
          <div class="profile-actions">
            <button class="btn primary" type="submit">Salvar perfil no modo demo</button>
            <button class="btn" type="button" data-shortcut="config">Configurações gerais</button>
          </div>
        </form>
      </article>
      <aside class="panel profile-side-panel">
        <div class="panel-title"><h2>Segurança do perfil</h2><span>demo</span></div>
        <div class="profile-status-list">
          ${settingsCard("Acesso", ["Login em modo demonstração", "Autenticação conectada preparada", "Sessão local no navegador"])}
          ${settingsCard("Recuperação", ["E-mail de recuperação cadastrado", "Contato responsável definido", "Sem disparo automático externo"])}
          ${settingsCard("Auditoria", ["Alterações simuladas", "Dados fictícios", "Histórico preparado para próxima fase"])}
        </div>
      </aside>
    </section>
  `;
}

function renderOnboarding() {
  const steps = ["Configurações", "Clientes", "Processos", "Tarefas", "Agenda", "Financeiro", "Painel dos Sócios", "Relatórios", "Central LEX.OS"];
  return `
    ${pageHeader("Onboarding", "Roteiro guiado para começar", "Sequência prática para configurar o escritório e colocar a operação em uso.")}
    <section class="grid">
      ${steps.map((step, index) => `
        <article class="record">
          <div class="record-head">
            <div><span class="record-meta">Etapa ${index + 1}</span><h3>${step}</h3><p>${onboardingText(step)}</p></div>
            ${riskBadge(index < 2 ? "Pronto" : "Pendente")}
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function metric(label, value, note, page = "") {
  const valueText = String(value);
  const valueClass = valueText.length > 8 ? "metric-value compact" : "metric-value";
  if (!page) {
    return `<article class="metric"><span>${label}</span><strong class="${valueClass}">${value}</strong><em>${note}</em></article>`;
  }
  return `<button class="metric metric-link" type="button" data-shortcut="${page}" aria-label="Abrir ${label}: ${note}"><span>${label}</span><strong class="${valueClass}">${value}</strong><em>${note}</em></button>`;
}

function front(label, value, note, page = "") {
  const valueText = String(value);
  const valueClass = valueText.length > 7 ? "front-value compact" : "front-value";
  if (!page) {
    return `<div class="front-card"><strong class="${valueClass}">${value}</strong><span>${label}<br>${note}</span></div>`;
  }
  return `<button class="front-card front-link" type="button" data-shortcut="${page}" aria-label="Abrir ${label}: ${note}"><strong class="${valueClass}">${value}</strong><span>${label}<br>${note}</span><em>Abrir</em></button>`;
}

function record(title, text, badges, page = "") {
  const tag = page ? "button" : "article";
  const attrs = page ? ` type="button" data-shortcut="${page}" aria-label="Abrir ${title}"` : "";
  return `
    <${tag} class="record ${page ? "record-link" : ""}"${attrs}>
      <h3>${title}</h3>
      <p>${text}</p>
      <div class="badges">${badges.map((badge) => riskBadge(badge)).join("")}</div>
    </${tag}>
  `;
}

function filters(labels) {
  return `
    <div class="filters">
      <label class="sr-only" for="screenFilter">Filtrar nesta tela</label>
      <input class="search-input" id="screenFilter" name="screenFilter" autocomplete="off" placeholder="Filtrar nesta tela…" />
      ${labels.map((label, index) => `<label class="sr-only" for="filter${index}">${label}</label><select id="filter${index}" name="filter${index}"><option>${label}: Todos</option><option>Ativo</option><option>Em atenção</option><option>Arquivado</option></select>`).join("")}
    </div>
  `;
}

function table(headers, rows) {
  return `
    <table class="table">
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function actionButtons(actions, context) {
  return `<div class="table-actions">${actions.map((action) => `<button class="btn" data-action="simulate" data-title="${action}: ${context}">${action}</button>`).join("")}</div>`;
}

function settingsCard(title, items) {
  return `<article class="panel"><div class="panel-title"><h2>${title}</h2><span>MVP</span></div><div class="list">${items.map((item) => `<p>${item}</p>`).join("")}</div></article>`;
}

function onboardingText(step) {
  const map = {
    "Configurações": "Definir identidade, responsáveis, preferências e validação de ambiente demo.",
    "Clientes": "Cadastrar carteira inicial e marcar clientes em atenção, sem retorno ou inadimplentes.",
    "Processos": "Vincular processos aos clientes e classificar status, risco, área e responsável.",
    "Tarefas": "Converter providências em fila operacional com prazo, urgência e responsável.",
    "Agenda": "Consolidar audiências, reuniões, follow-ups e prazos críticos.",
    "Financeiro": "Registrar recebíveis internos, vencimentos e cobranças pendentes.",
    "Painel dos Sócios": "Usar a sala executiva para decisões estratégicas de curto prazo.",
    "Relatórios": "Gerar rascunhos assistidos e revisar antes de compartilhar.",
    "Central LEX.OS": "Executar apoio assistido com supervisão humana e histórico local.",
  };
  return map[step];
}

function bindActions() {
  document.querySelectorAll("[data-action='simulate']").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.title || "Ação", "Esta ação está simulada no MVP. Na próxima fase, ela abre formulário, grava histórico e aplica permissões reais."));
  });
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      currentTab = button.dataset.tab;
      renderPage();
    });
  });
  const centralRun = document.querySelector("[data-action='central-run']");
  if (centralRun) {
    centralRun.addEventListener("click", () => {
      const entry = {
        id: `IA-${Math.floor(Math.random() * 900 + 100)}`,
        module: currentTab,
        title: `Apoio gerado em ${currentTab}`,
        status: "Gerado para revisão",
        created: "agora",
      };
      state.centralHistory.unshift(entry);
      saveData();
      toast("Execução registrada no histórico local.");
      renderPage();
    });
  }
  const copy = document.querySelector("[data-action='copy-template']");
  if (copy) {
    copy.addEventListener("click", async () => {
      const text = document.getElementById("centralInput").value;
      await navigator.clipboard.writeText(text);
      toast("Prompt copiado.");
    });
  }

  const monthlyCalendar = document.querySelector("[data-action='monthly-calendar']");
  if (monthlyCalendar) {
    monthlyCalendar.addEventListener("click", () => {
      openInternalWindow("Calendário mensal", monthlyCalendarContent());
    });
  }

  document.querySelectorAll("[data-action='office-profile']").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("officeProfileMenu")?.classList.add("hidden");
      openInternalWindow("Perfil do escritório", officeProfileContent());
    });
  });
}

function openDrawer(title, content) {
  const drawer = document.getElementById("drawer");
  drawer.classList.remove("hidden");
  drawer.innerHTML = `
    <div class="record-head">
      <h3>${title}</h3>
      <button class="btn icon" id="closeDrawer" aria-label="Fechar">×</button>
    </div>
    <p>${content}</p>
    <div class="demo-note">Registro demonstrativo. Nenhum dado foi enviado para fora do navegador.</div>
  `;
  document.getElementById("closeDrawer").addEventListener("click", () => drawer.classList.add("hidden"));
}

function globalSearch(query) {
  const term = query.toLowerCase().trim();
  if (!term) return "Digite um termo para buscar nos dados fictícios.";
  const matches = [
    ...state.clients.map((item) => ["Cliente", item.name]),
    ...state.cases.map((item) => ["Processo", item.title]),
    ...state.tasks.map((item) => ["Tarefa", item.title]),
    ...state.reports.map((item) => ["Relatório", item.model]),
  ].filter(([, text]) => text.toLowerCase().includes(term));
  if (!matches.length) return "Nenhum resultado localizado nos dados fictícios.";
  return matches.map(([type, text]) => `<strong>${type}</strong>: ${text}`).join("<br>");
}

function bindActions2() {
  document.querySelectorAll("[data-action='monthly-calendar']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      agendaMonthlyVisible = !agendaMonthlyVisible;
      renderPage();
    });
  });

  mountAgendaMonthlyCalendar();

  document.querySelectorAll("[data-shortcut]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("officeProfileMenu")?.classList.add("hidden");
      goToPage(button.dataset.shortcut);
      toast(`Atalho aberto: ${button.querySelector("span")?.textContent || "módulo"}.`);
    });
  });

  bindProfileForm(document.getElementById("screen"));

  document.querySelectorAll("[data-action='simulate']").forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.dataset.title || "Ação";
      openInternalWindow(title, actionContent(title));
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      currentTab = button.dataset.tab;
      renderPage();
    });
  });

  const centralRun = document.querySelector("[data-action='central-run']");
  if (centralRun) {
    centralRun.addEventListener("click", () => {
      const entry = {
        id: `IA-${Math.floor(Math.random() * 900 + 100)}`,
        module: currentTab,
        title: `Apoio gerado em ${currentTab}`,
        status: "Gerado para revisão",
        created: "agora",
      };
      state.centralHistory.unshift(entry);
      saveData();
      toast("Execução registrada no histórico local.");
      renderPage();
    });
  }

  const copy = document.querySelector("[data-action='copy-template']");
  if (copy) {
    copy.addEventListener("click", async () => {
      const text = document.getElementById("centralInput").value;
      await navigator.clipboard.writeText(text);
      toast("Prompt copiado.");
    });
  }
}

function bindProfileForm(root) {
  if (!root || currentPage !== "perfil") return;
  const form = root.querySelector(".profile-form-grid");
  const input = root.querySelector("[data-profile-photo-input]");
  const preview = root.querySelector(".profile-avatar-large img");
  const removePhoto = root.querySelector("[data-remove-profile-photo]");
  if (!form || form.dataset.profileBound === "true") return;
  form.dataset.profileBound = "true";

  if (input) {
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        pendingProfilePhoto = await cropProfilePhoto(file);
        if (preview && pendingProfilePhoto) {
          preview.src = pendingProfilePhoto;
          preview.classList.add("profile-photo");
        }
        if (removePhoto) removePhoto.disabled = false;
      } catch {
        toast("Não foi possível preparar a foto.");
      }
    });
  }

  if (removePhoto) {
    removePhoto.addEventListener("click", () => {
      pendingProfilePhoto = "";
      profileState.photo = "";
      saveProfile();
      if (preview) {
        preview.src = avatarSrc();
        preview.classList.remove("profile-photo");
      }
      removePhoto.disabled = true;
      toast("Foto de perfil removida.");
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (pendingProfilePhoto) {
      profileState.photo = pendingProfilePhoto;
      pendingProfilePhoto = "";
    }
    const textInputs = [...form.querySelectorAll("input")].filter((item) => item.type !== "file");
    const officeName = textInputs[0]?.value?.trim();
    const ownerName = textInputs[1]?.value?.trim();
    if (officeName) state.office.name = officeName;
    if (ownerName) state.office.owner = ownerName;
    saveData();
    saveProfile();
    toast("Perfil salvo no modo demo.");
    renderApp();
  });
}

function actionContent(title) {
  const normalized = title.toLowerCase();

  if (normalized.includes("adicionar rápido")) {
    return `
      <div class="drawer-body">
        <p>Criação rápida pelo Dashboard. Use os atalhos abaixo para abrir o fluxo correspondente sem sair procurando nos módulos.</p>
        <div class="quick-create-grid">
          <button class="quick-create-card" type="button" data-action="simulate" data-title="Novo processo">
            <strong>Novo processo</strong>
            <span>Cliente, área, risco e responsável.</span>
          </button>
          <button class="quick-create-card" type="button" data-action="simulate" data-title="Novo cliente">
            <strong>Novo cliente</strong>
            <span>Cadastro básico e situação operacional.</span>
          </button>
          <button class="quick-create-card" type="button" data-action="simulate" data-title="Nova cobrança">
            <strong>Item financeiro</strong>
            <span>Recebível, status e vencimento.</span>
          </button>
          <button class="quick-create-card" type="button" data-action="simulate" data-title="Adicionar evento">
            <strong>Evento/agenda</strong>
            <span>Audiência, reunião, prazo ou follow-up.</span>
          </button>
          <button class="quick-create-card" type="button" data-shortcut="tarefas">
            <strong>Outros atalhos</strong>
            <span>Abrir fila operacional.</span>
          </button>
        </div>
      </div>
    `;
  }

  if (normalized.includes("novo cliente") || normalized.includes("cadastrar cliente")) {
    return formShell("Cliente", [
      field("Nome do cliente", "Almeida & Torres Ltda."),
      selectField("Tipo", ["Pessoa jurídica", "Pessoa física"]),
      selectField("Status", ["Ativo", "Em atenção", "Arquivado"]),
      selectField("Responsável", ["Marina Costa", "Rafael Lima", "Bianca Reis"]),
      selectField("Situação operacional", ["Operação regular", "Em atenção", "Sem retorno", "Cobrança pendente"]),
    ]);
  }

  if (normalized.includes("novo processo") || normalized.includes("lançar processo") || normalized.includes("criar processo")) {
    return formShell("Processo", [
      field("Título do processo", "Ação de cobrança contratual"),
      selectField("Cliente vinculado", state.clients.map((client) => client.name)),
      selectField("Área", ["Cível", "Trabalhista", "Tributário", "Consumidor", "Empresarial"]),
      selectField("Risco", ["Baixo", "Médio", "Alto"]),
      selectField("Responsável", ["Marina Costa", "Rafael Lima", "Bianca Reis"]),
    ]);
  }

  if (normalized.includes("nova tarefa") || normalized.includes("criar tarefa")) {
    return formShell("Tarefa", [
      field("Providência", "Revisar documento antes do protocolo"),
      selectField("Cliente", state.clients.map((client) => client.name)),
      selectField("Processo", state.cases.map((item) => item.id)),
      selectField("Urgência", ["Normal", "Alta", "Urgente"]),
      field("Prazo", "Hoje, 17:00"),
    ]);
  }

  if (normalized.includes("adicionar evento")) {
    return formShell("Evento de agenda", [
      field("Título do evento", "Reunião de alinhamento com cliente"),
      selectField("Tipo", ["Audiência", "Reunião", "Follow-up", "Prazo", "Compromisso interno"]),
      selectField("Vínculo", [...state.clients.map((client) => client.id), ...state.cases.map((item) => item.id)]),
      field("Data e horário", "Amanhã, 09:00"),
      selectField("Responsável", ["Marina Costa", "Rafael Lima", "Bianca Reis"]),
    ]);
  }

  if (normalized.includes("nova cobrança")) {
    return formShell("Cobrança", [
      selectField("Cliente", state.clients.map((client) => client.name)),
      field("Descrição", "Honorários mensais"),
      field("Valor", "8500"),
      selectField("Status", ["A receber", "Vencido", "Recebido"]),
      field("Vencimento", "Em 10 dias"),
    ]);
  }

  if (normalized.includes("gerar relatório")) {
    return formShell("Relatório assistido", [
      selectField("Modelo", ["Relatório executivo semanal", "Carteira de risco processual", "Financeiro interno"]),
      selectField("Período", ["Hoje", "7 dias", "30 dias", "Mês atual", "Todos os dados"]),
      selectField("Revisor humano", ["Marina Costa", "Rafael Lima", "Bianca Reis"]),
      textAreaField("Observações", "Gerar rascunho para revisão antes de compartilhar."),
    ]);
  }

  if (normalized.includes("resumo executivo") || normalized.includes("executar apoio assistido")) {
    return `
      <div class="drawer-body">
        <p>Saída demonstrativa da Central LEX.OS para apoio interno supervisionado.</p>
        <ul class="check-list">
          <li>2 frentes exigem decisão humana hoje: prazo vencido e cobrança pendente.</li>
          <li>1 tarefa está sem responsável e deve ser redistribuída.</li>
          <li>O relatório pode ser gerado, mas precisa de revisão antes de envio.</li>
        </ul>
        <button class="btn primary" data-drawer-action="register-ai">Registrar no histórico local</button>
      </div>
    `;
  }

  if (normalized.includes("abrir detalhes") || normalized.includes("abrir processo") || normalized.includes("abrir cliente") || normalized.includes("ver cliente") || normalized.includes("ver financeiro")) {
    return `
      <div class="drawer-body">
        <p>Visão de detalhe interna para <strong>${title}</strong>.</p>
        <ul class="check-list">
          <li>Resumo operacional do registro.</li>
          <li>Vínculos com cliente, processo, tarefas, agenda e financeiro.</li>
          <li>Linha do tempo de atividades e próximos passos.</li>
          <li>Área preparada para anexos e observações na fase conectada.</li>
        </ul>
      </div>
    `;
  }

  if (normalized.includes("lançar prazo") || normalized.includes("editar prazo") || normalized.includes("reagendar")) {
    return formShell("Prazo ou reagendamento", [
      field("Novo prazo", "Amanhã, 17:00"),
      selectField("Criticidade", ["Normal", "Próximo", "Urgente", "Crítico"]),
      textAreaField("Justificativa", "Registrar motivo da alteração para auditoria interna."),
    ]);
  }

  if (normalized.includes("registrar andamento")) {
    return formShell("Andamento processual", [
      selectField("Tipo de andamento", ["Petição protocolada", "Decisão", "Intimação", "Contato com cliente", "Observação interna"]),
      textAreaField("Descrição", "Registrar andamento com linguagem objetiva."),
      selectField("Gerar tarefa vinculada", ["Não", "Sim"]),
    ]);
  }

  if (normalized.includes("concluir") || normalized.includes("marcar como pago")) {
    return confirmationShell(title, "Atualiza status local, registra evento de auditoria e mantém reversão manual para implantação futura.");
  }

  if (normalized.includes("arquivar")) {
    return confirmationShell(title, "Arquivamento exige confirmação humana, não apaga dados definitivamente e prepara status arquivado.");
  }

  if (normalized.includes("filtro") || normalized.includes("período")) {
    return `
      <div class="drawer-body">
        <p>Filtro demonstrativo: <strong>${title}</strong>.</p>
        <p>A estrutura está pronta para atualizar listas, indicadores e relatórios sem sair da tela.</p>
      </div>
    `;
  }

  return `
    <div class="drawer-body">
      <p>Esta janela já está conectada ao esqueleto da SPA e não redireciona para outra página.</p>
      <ul class="check-list">
        <li>Pronta para receber formulário real.</li>
        <li>Pronta para gravar histórico local ou banco conectado.</li>
        <li>Pronta para validação de permissões.</li>
      </ul>
    </div>
  `;
}

function field(label, value) {
  const id = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return `<div class="field"><label for="${id}">${label}</label><input id="${id}" name="${id}" value="${value}" autocomplete="off" /></div>`;
}

function selectField(label, options) {
  const id = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return `<div class="field"><label for="${id}">${label}</label><select id="${id}" name="${id}">${options.map((option) => `<option>${option}</option>`).join("")}</select></div>`;
}

function textAreaField(label, value) {
  const id = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return `<div class="field"><label for="${id}">${label}</label><textarea id="${id}" name="${id}" rows="4" autocomplete="off">${value}</textarea></div>`;
}

function formShell(title, controls) {
  return `
    <form class="drawer-form" data-demo-form>
      <p>Formulário estrutural de <strong>${title}</strong>. Nesta fase, ele valida o fluxo sem enviar dados externos.</p>
      ${controls.join("")}
      <button class="btn primary" type="submit">Salvar no modo demo</button>
    </form>
  `;
}

function confirmationShell(title, text) {
  return `
    <div class="drawer-body">
      <p>Confirmação demonstrativa para <strong>${title}</strong>.</p>
      <ul class="check-list">
        <li>${text}</li>
        <li>Nenhuma integração externa será acionada.</li>
      </ul>
      <button class="btn primary" data-drawer-action="confirm-local">Confirmar no modo demo</button>
    </div>
  `;
}

function openInternalWindow(title, content) {
  const drawer = document.getElementById("drawer");
  drawer.classList.remove("hidden");
  drawer.setAttribute("role", "dialog");
  drawer.setAttribute("aria-modal", "true");
  drawer.setAttribute("aria-label", title);
  drawer.innerHTML = `
    <div class="record-head">
      <h3>${title}</h3>
      <button class="btn icon" id="closeDrawer" aria-label="Fechar">×</button>
    </div>
    ${content}
    <div class="demo-note">Registro demonstrativo. Nenhum dado foi enviado para fora do navegador.</div>
  `;
  document.getElementById("closeDrawer").addEventListener("click", () => drawer.classList.add("hidden"));
  bindOfficeProfileDrawer(drawer);
  drawer.querySelectorAll("[data-demo-form]:not([data-profile-drawer-form])").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      toast("Registro salvo no modo demo.");
      drawer.classList.add("hidden");
    });
  });
  drawer.querySelectorAll("[data-drawer-action]").forEach((button) => {
    button.addEventListener("click", () => {
      toast("Ação registrada no modo demo.");
      drawer.classList.add("hidden");
    });
  });
  drawer.querySelectorAll("[data-shortcut]").forEach((button) => {
    button.addEventListener("click", () => {
      drawer.classList.add("hidden");
      goToPage(button.dataset.shortcut);
    });
  });
  drawer.querySelectorAll("[data-action='simulate']").forEach((button) => {
    button.addEventListener("click", () => {
      openInternalWindow(button.dataset.title || "Ação", actionContent(button.dataset.title || "Ação"));
    });
  });
  document.getElementById("closeDrawer").focus();
}

function bindOfficeProfileDrawer(drawer) {
  const form = drawer.querySelector("[data-profile-drawer-form]");
  if (!form) return;
  const input = form.querySelector("[data-profile-photo-input]");
  const preview = form.querySelector(".profile-photo-preview img");
  const removePhoto = form.querySelector("[data-remove-profile-photo]");

  if (input) {
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        pendingProfilePhoto = await cropProfilePhoto(file);
        if (preview && pendingProfilePhoto) {
          preview.src = pendingProfilePhoto;
          preview.classList.add("profile-photo");
        }
        if (removePhoto) removePhoto.disabled = false;
      } catch {
        toast("Não foi possível preparar a foto.");
      }
    });
  }

  if (removePhoto) {
    removePhoto.addEventListener("click", () => {
      pendingProfilePhoto = "";
      profileState.photo = "";
      saveProfile();
      if (preview) {
        preview.src = avatarSrc();
        preview.classList.remove("profile-photo");
      }
      removePhoto.disabled = true;
      toast("Foto de perfil removida.");
      renderApp();
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const textInputs = [...form.querySelectorAll("input")].filter((item) => item.type !== "file");
    const officeName = textInputs[0]?.value?.trim();
    const ownerName = textInputs[1]?.value?.trim();
    if (officeName) state.office.name = officeName;
    if (ownerName) state.office.owner = ownerName;
    if (pendingProfilePhoto) {
      profileState.photo = pendingProfilePhoto;
      pendingProfilePhoto = "";
    }
    saveData();
    saveProfile();
    toast("Perfil salvo no modo demo.");
    drawer.classList.add("hidden");
    renderApp();
  });
}

function renderAgenda2() {
  return `
    ${pageHeader("Agenda", "Agenda jurídica operacional", "Audiências, reuniões, follow-ups e prazos críticos em um mesmo quadro.")}
    <section class="agenda-actions">
      <button class="agenda-action-card" type="button" data-action="simulate" data-title="Adicionar evento">
        <span>+</span>
        <strong>Adicionar evento</strong>
        <em>Audiência, reunião, follow-up ou prazo crítico</em>
      </button>
      <button class="agenda-action-card" type="button" data-action="monthly-calendar">
        <span>□</span>
        <strong>Calendário mensal</strong>
        <em>Visualizar eventos distribuídos por dia</em>
      </button>
    </section>
    <div class="module-tabs">${["Hoje", "Próximos 7 dias", "Vencidos", "Audiências", "Reuniões", "Tarefas/processos"].map((tab, index) => `<button class="${index === 0 ? "active" : ""}" data-action="simulate" data-title="Filtro ${tab}">${tab}</button>`).join("")}</div>
    <section class="grid three">
      ${state.agenda.map((event) => `
        <button class="record record-link" type="button" data-shortcut="${agendaShortcut(event)}" aria-label="Abrir vínculo de ${event.title}">
          <div class="record-head"><div><h3>${event.title}</h3><p>${event.date}</p></div>${riskBadge(event.status)}</div>
          <div class="badges"><span class="badge info">${event.type}</span><span class="badge">${event.origin}</span><span class="badge">${event.owner}</span></div>
        </button>
      `).join("")}
    </section>
  `;
}

function agendaShortcut(event) {
  if (event.origin.startsWith("PROC-")) return "processos";
  if (event.origin.startsWith("CLI-")) return "clientes";
  if (event.type === "Prazo" || event.type === "Audiência") return "processos";
  return "agenda";
}

function agendaDay(event) {
  if (event.date.includes("Hoje")) return 14;
  if (event.date.includes("Amanhã")) return 15;
  if (event.date.includes("6 dias")) return 20;
  return 14;
}

function monthlyCalendarContent() {
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const leading = 1;
  const totalDays = 30;
  const cells = [];

  for (let i = 0; i < leading; i += 1) cells.push(`<div class="calendar-cell muted"></div>`);
  for (let day = 1; day <= totalDays; day += 1) {
    const events = state.agenda.filter((event) => agendaDay(event) === day);
    cells.push(`
      <div class="calendar-cell ${events.length ? "has-event" : ""}">
        <strong>${day}</strong>
        <div class="calendar-events">
          ${events.map((event) => `<button type="button" data-shortcut="${agendaShortcut(event)}">${event.title}</button>`).join("")}
        </div>
      </div>
    `);
  }

  return `
    <div class="drawer-body">
      <div class="calendar-head">
        <div>
          <span class="record-meta">Visual mensal</span>
          <h3>Junho de 2026</h3>
        </div>
        <button class="btn" type="button" data-action="simulate" data-title="Adicionar evento">Adicionar evento</button>
      </div>
      <div class="calendar-grid calendar-weekdays">
        ${weekdays.map((day) => `<span>${day}</span>`).join("")}
      </div>
      <div class="calendar-grid">
        ${cells.join("")}
      </div>
      <p class="demo-note">Clique em um evento para abrir o módulo vinculado. Visual mensal demonstrativo, sem sincronização externa.</p>
    </div>
  `;
}

function officeProfileContent() {
  return `
    <form class="drawer-form" data-demo-form data-profile-drawer-form>
      <div class="profile-editor">
        <div class="profile-photo-preview">
          <img class="${profileState.photo ? "profile-photo" : ""}" src="${avatarSrc()}" alt="" />
        </div>
        <div class="field">
          <label for="officePhoto">Foto do perfil</label>
          <input id="officePhoto" name="officePhoto" type="file" accept="image/png,image/jpeg,image/webp" data-profile-photo-input />
          <small>Recorte automático em 1:1 para exibição circular.</small>
          <button class="btn ghost profile-remove-photo" type="button" data-remove-profile-photo ${profileState.photo ? "" : "disabled"}>Remover foto</button>
        </div>
      </div>
      ${field("Nome do escritório", state.office.name)}
      ${field("Responsável principal", state.office.owner)}
      ${selectField("Modo do ambiente", ["Demo local", "Implantação assistida", "Produção conectada"])}
      ${textAreaField("Descrição interna", "Perfil demonstrativo do escritório para identificação no sistema.")}
      <button class="btn primary" type="submit">Salvar perfil no modo demo</button>
    </form>
  `;
}

function mountAgendaMonthlyCalendar() {
  if (currentPage !== "agenda" || !agendaMonthlyVisible) return;
  const actions = document.querySelector(".agenda-actions");
  if (!actions || document.querySelector(".agenda-monthly-panel")) return;
  actions.insertAdjacentHTML("afterend", monthlyCalendarSection());
}

function monthlyCalendarSection() {
  return `
    <section class="panel agenda-monthly-panel">
      ${monthlyCalendarContent()}
    </section>
  `;
}

window.addEventListener("popstate", () => {
  internalNavigationDepth = Math.max(0, internalNavigationDepth - 1);
  sessionStorage.setItem(INTERNAL_DEPTH_KEY, String(internalNavigationDepth));
  currentPage = pageFromLocation();
  if (sessionStorage.getItem(SESSION_KEY) === "demo") renderApp();
});

history.replaceState({ lexos: true, page: currentPage }, "", pageUrl(currentPage));

if (sessionStorage.getItem(SESSION_KEY) === "demo") {
  renderApp();
} else {
  renderLogin();
}
