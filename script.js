const STORAGE_KEY = "lexos-control-demo-v1";
const SESSION_KEY = "lexos-control-session";
const SIDEBAR_KEY = "lexos-control-sidebar-collapsed";
const PROFILE_KEY = "lexos-control-profile";
const THEME_KEY = "lexos-control-theme";
const INTERNAL_DEPTH_KEY = "lexos-control-internal-depth";
const NOTIFICATION_READ_KEY = "lexos-control-notifications-read";

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
      document: "12.345.678/0001-90",
      email: "juridico@almeidatorres.demo",
      phone: "(98) 98888-0101",
      createdAt: "2026-05-10",
      updatedAt: "2026-06-18",
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
      document: "123.456.789-10",
      email: "joao.nunes@email.demo",
      phone: "(98) 98888-0202",
      createdAt: "2026-04-22",
      updatedAt: "2026-06-01",
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
      document: "22.333.444/0001-55",
      email: "contato@aurorasaude.demo",
      phone: "(98) 98888-0303",
      createdAt: "2026-03-08",
      updatedAt: "2026-06-17",
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
      document: "987.654.321-00",
      email: "carolina.mendes@email.demo",
      phone: "(98) 98888-0404",
      createdAt: "2026-02-14",
      updatedAt: "2026-05-04",
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
      statusPrincipal: "Em andamento",
      prioridadeOperacional: "Exige decisão",
      exigeDecisao: true,
      revisaoUrgente: false,
      risk: "Alto",
      owner: "Marina Costa",
      deadline: "vence amanhã",
      nextDeadline: "2026-06-23",
      lastMove: "há 2 dias",
      value: 78000,
    },
    {
      id: "PROC-1034",
      clientId: "CLI-002",
      title: "Defesa em reclamação trabalhista",
      area: "Trabalhista",
      status: "Em atenção",
      statusPrincipal: "Em acompanhamento",
      prioridadeOperacional: "Revisão urgente",
      exigeDecisao: true,
      revisaoUrgente: true,
      risk: "Médio",
      owner: "Rafael Lima",
      deadline: "vencido",
      nextDeadline: "2026-06-17",
      lastMove: "há 12 dias",
      value: 22000,
    },
    {
      id: "PROC-1041",
      clientId: "CLI-003",
      title: "Mandado de segurança tributário",
      area: "Tributário",
      status: "Ativo",
      statusPrincipal: "Em andamento",
      prioridadeOperacional: "Não urgente",
      exigeDecisao: false,
      revisaoUrgente: false,
      risk: "Baixo",
      owner: "Bianca Reis",
      deadline: "em 6 dias",
      nextDeadline: "2026-06-24",
      lastMove: "ontem",
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
      category: "Processual",
      description: "Confirmar providência antes de qualquer nova movimentação.",
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
      category: "Atendimento",
      description: "Contato ativo para evitar perda de oportunidade comercial.",
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
      category: "Interna",
      description: "Organizar síntese para reunião dos sócios.",
      due: "em 3 dias",
    },
  ],
  agenda: [
    {
      id: "AGE-301",
      title: "Audiência trabalhista",
      type: "Audiência",
      date: "Hoje, 14:30",
      start: "2026-06-18T14:30",
      end: "2026-06-18T15:30",
      origin: "PROC-1034",
      clientId: "CLI-002",
      caseId: "PROC-1034",
      owner: "Rafael Lima",
      owners: ["Rafael Lima"],
      status: "Crítico",
    },
    {
      id: "AGE-302",
      title: "Reunião com Almeida & Torres",
      type: "Reunião",
      date: "Amanhã, 09:00",
      start: "2026-06-19T09:00",
      end: "2026-06-19T10:00",
      origin: "CLI-001",
      clientId: "CLI-001",
      caseId: "",
      owner: "Marina Costa",
      owners: ["Marina Costa", "Rafael Lima"],
      status: "Confirmado",
    },
    {
      id: "AGE-303",
      title: "Prazo de manifestação",
      type: "Prazo",
      date: "Em 6 dias",
      start: "2026-06-24T16:00",
      end: "2026-06-24T16:30",
      origin: "PROC-1041",
      clientId: "CLI-003",
      caseId: "PROC-1041",
      owner: "Bianca Reis",
      owners: ["Bianca Reis"],
      status: "Próximo",
    },
  ],
  finance: [
    {
      id: "FIN-401",
      clientId: "CLI-001",
      description: "Honorários mensais",
      type: "Entrada",
      category: "Recebível",
      amount: 8500,
      status: "Vencido",
      expectedDate: "2026-06-10",
      paidDate: "",
      owner: "Marina Costa",
      visibility: "Sócios",
      due: "há 8 dias",
    },
    {
      id: "FIN-402",
      clientId: "CLI-003",
      description: "Êxito previsto",
      type: "Entrada",
      category: "Recebível",
      amount: 18000,
      status: "A receber",
      expectedDate: "2026-06-28",
      paidDate: "",
      owner: "Bianca Reis",
      visibility: "Sócios",
      due: "em 10 dias",
    },
    {
      id: "FIN-403",
      clientId: "CLI-002",
      description: "Parcela de entrada",
      type: "Entrada",
      category: "Recebido",
      amount: 3200,
      status: "Recebido",
      expectedDate: "2026-06-03",
      paidDate: "2026-06-03",
      owner: "Rafael Lima",
      visibility: "Equipe",
      due: "este mês",
    },
    {
      id: "FIN-404",
      clientId: "CLI-001",
      caseId: "PROC-1029",
      description: "Custas e diligência externa",
      type: "Saída",
      category: "Despesa processual",
      amount: 1450,
      status: "Pago",
      expectedDate: "2026-06-12",
      paidDate: "2026-06-12",
      owner: "Marina Costa",
      visibility: "Sócios",
      due: "este mês",
    },
    {
      id: "FIN-405",
      clientId: "",
      caseId: "",
      description: "Assinaturas operacionais do escritório",
      type: "Saída",
      category: "Despesa administrativa",
      amount: 980,
      status: "Pendente",
      expectedDate: "2026-06-25",
      paidDate: "",
      owner: "Marina Costa",
      visibility: "Sócios",
      due: "em 7 dias",
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
    return normalizeData(structuredClone(demoSeed));
  }
  try {
    return normalizeData(JSON.parse(saved));
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoSeed));
    return normalizeData(structuredClone(demoSeed));
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeData(data) {
  const next = { ...structuredClone(demoSeed), ...data };
  ["clients", "cases", "tasks", "agenda", "finance", "reports", "centralHistory"].forEach((key) => {
    const existing = Array.isArray(data?.[key]) ? data[key] : [];
    const byId = new Map(existing.map((item) => [item.id, item]));
    demoSeed[key].forEach((item) => {
      if (!byId.has(item.id)) byId.set(item.id, item);
    });
    next[key] = [...byId.values()];
  });
  next.office = { ...demoSeed.office, ...(data?.office || {}) };
  return next;
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

function agendaActionIcon(icon) {
  const svgAttrs = 'viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';
  const icons = {
    event: `<svg ${svgAttrs}><path d="M7 3v4"/><path d="M17 3v4"/><path d="M5 6h14v15H5z"/><path d="M5 10h14"/><path d="M12 13v5"/><path d="M9.5 15.5h5"/></svg>`,
    month: `<svg ${svgAttrs}><path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><path d="M5 5h14v16H5z"/><path d="M8 12h2"/><path d="M12 12h2"/><path d="M16 12h2"/><path d="M8 16h2"/><path d="M12 16h2"/></svg>`,
  };
  return icons[icon] || icons.event;
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

function caseTitle(id) {
  const item = state.cases.find((current) => current.id === id);
  return item ? `${item.title} · ${clientName(item.clientId)}` : id ? "Processo vinculado" : "Sem processo";
}

function caseNumber(id) {
  const map = {
    "PROC-1029": "0801029-21.2026.8.10.0001",
    "PROC-1034": "0801034-48.2026.5.16.0002",
    "PROC-1041": "0801041-33.2026.8.10.0003",
  };
  return map[id] || "número em validação";
}

function clientContact(client) {
  return {
    document: client.document || (client.type === "Pessoa jurídica" ? "00.000.000/0001-00" : "000.000.000-00"),
    email: client.email || `${client.id.toLowerCase()}@lexos.demo`,
    phone: client.phone || "(98) 90000-0000",
    createdAt: client.createdAt || "2026-06-01",
    updatedAt: client.updatedAt || client.lastContact || "sem atualização",
  };
}

function linkedCases(clientId) {
  return state.cases.filter((item) => item.clientId === clientId);
}

function caseOperational(item) {
  const deadline = item.deadline || "";
  const risk = item.risk || "";
  const urgent = item.prioridadeOperacional === "Urgente" || item.prioridadeOperacional === "Revisão urgente" || risk === "Alto" || deadline === "vencido";
  const decision = item.exigeDecisao || risk === "Alto" || deadline === "vencido";
  return {
    statusPrincipal: item.statusPrincipal || (item.status === "Ativo" ? "Em andamento" : item.status === "Em atenção" ? "Em acompanhamento" : item.status || "Em andamento"),
    prioridade: item.prioridadeOperacional || (deadline === "vencido" ? "Revisão urgente" : risk === "Alto" ? "Exige decisão" : risk === "Médio" ? "Em atenção" : "Não urgente"),
    urgent,
    decision,
    attention: item.status === "Em atenção" || item.statusPrincipal === "Em acompanhamento" || risk === "Médio",
    review: item.revisaoUrgente || deadline === "vencido",
  };
}

function taskInfo(task) {
  return {
    category: task.category || (task.caseId ? "Processual" : "Operacional"),
    description: task.description || "Providência operacional registrada no modo demo.",
    status: task.status || "Pendente",
    priority: task.urgency || task.priority || "Normal",
    clientLabel: task.clientId ? clientName(task.clientId) : "Sem cliente vinculado",
    caseLabel: task.caseId ? caseTitle(task.caseId) : "Sem processo vinculado",
  };
}

function agendaOwners(event) {
  return Array.isArray(event.owners) && event.owners.length ? event.owners : [event.owner].filter(Boolean);
}

function agendaLinkLabel(event) {
  if (event.caseId || event.origin?.startsWith("PROC-")) return caseTitle(event.caseId || event.origin);
  if (event.clientId || event.origin?.startsWith("CLI-")) return clientName(event.clientId || event.origin);
  return "Evento interno";
}

function financeType(item) {
  if (item.type) return item.type;
  return item.status === "Recebido" || item.status === "A receber" || item.status === "Vencido" ? "Entrada" : "Saída";
}

function financeDateBucket(item) {
  const date = item.paidDate || item.expectedDate || "";
  if (date === "2026-06-18") return "hoje";
  if (date.startsWith("2026-06-") && Number(date.slice(-2)) >= 18 && Number(date.slice(-2)) <= 25) return "semana";
  if (date.startsWith("2026-06")) return "mes";
  return "todos";
}

function filterTags(values) {
  return values.filter(Boolean).map((value) => String(value).toLowerCase()).join("|");
}

function escapeAttr(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function moduleFilters(scope, placeholder, filtersConfig) {
  return `
    <div class="module-filter-panel" data-filter-panel="${scope}">
      <label class="sr-only" for="${scope}Search">Buscar em ${scope}</label>
      <input class="search-input" id="${scope}Search" data-filter-search="${scope}" autocomplete="off" placeholder="${placeholder}" />
      <div class="module-filter-selects">
        ${filtersConfig.map((filter, index) => `
          <label class="sr-only" for="${scope}Filter${index}">${filter.label}</label>
          <select id="${scope}Filter${index}" data-filter-select="${scope}" data-filter-label="${filter.label}">
            <option value="">${filter.label}: Todos</option>
            ${filter.options.map((option) => `<option value="${escapeAttr(option.value)}">${option.label}</option>`).join("")}
          </select>
        `).join("")}
      </div>
      <div class="module-filter-footer">
        <div class="filter-chips" data-filter-chips="${scope}"></div>
        <button class="btn" type="button" data-filter-clear="${scope}">Limpar filtros</button>
      </div>
    </div>
  `;
}

function moduleEmpty(scope, text) {
  return `<div class="module-empty hidden" data-empty-for="${scope}"><strong>Nenhum resultado encontrado.</strong><span>${text}</span><button class="btn" type="button" data-filter-clear="${scope}">Limpar filtros</button></div>`;
}

function riskBadge(value) {
  const kind = value === "Alto" || value === "Atrasada" || value === "Vencido" || value === "Crítico" || value === "Revisão urgente" ? "danger" : value === "Médio" || value === "Em atenção" || value === "Urgente" || value === "Pendente" ? "warn" : "ok";
  return `<span class="badge ${kind}">${value}</span>`;
}

function betaBadge() {
  return `<span class="badge beta">Beta</span>`;
}

function betaNotice(title, text) {
  return `
    <div class="drawer-body beta-notice">
      <div class="badges">${betaBadge()}</div>
      <h3>${title}</h3>
      <p>${text}</p>
      <p class="demo-note">Recurso preparado na interface. A ativação completa depende de back-end, permissões e credenciais quando aplicável.</p>
    </div>
  `;
}

function entityTimeline(type, id) {
  const now = "22/06/2026";
  const events = [];
  if (type === "cliente") {
    const client = state.clients.find((item) => item.id === id);
    if (!client) return events;
    linkedCases(id).forEach((item) => events.push(`${now} - Processo vinculado: ${caseTitle(item.id)}`));
    state.tasks.filter((item) => item.clientId === id).forEach((task) => events.push(`${now} - Tarefa registrada: ${task.title}`));
    state.agenda.filter((item) => item.clientId === id).forEach((event) => events.push(`${now} - Evento marcado: ${event.title}`));
    state.finance.filter((item) => item.clientId === id).forEach((item) => events.push(`${now} - Financeiro: ${item.description} (${item.status})`));
    events.push(`${client.updatedAt || now} - Cadastro atualizado por ${client.owner}`);
  }
  if (type === "processo") {
    const item = state.cases.find((current) => current.id === id);
    if (!item) return events;
    events.push(`${now} - Prioridade atual: ${caseOperational(item).prioridade}`);
    events.push(`${now} - Próxima ação: ${item.proximaAcao || caseOperational(item).prioridade}`);
    state.tasks.filter((task) => task.caseId === id).forEach((task) => events.push(`${now} - Tarefa vinculada: ${task.title}`));
    state.agenda.filter((event) => event.caseId === id).forEach((event) => events.push(`${now} - Evento vinculado: ${event.title}`));
  }
  return events;
}

function quickViews(scope, views) {
  return `
    <div class="quick-views" data-quick-views="${scope}">
      ${views.map((view) => `<button class="quick-view" type="button" data-quick-filter="${scope}" data-filter-value="${escapeAttr(view.value)}">${view.label}</button>`).join("")}
    </div>
  `;
}

function bulkActions(scope, actions) {
  return `
    <div class="bulk-actions" data-bulk-actions="${scope}">
      <label><input type="checkbox" data-select-all="${scope}" /> Selecionar visíveis</label>
      <span data-bulk-count="${scope}">0 selecionados</span>
      ${actions.map((action) => `<button class="btn" type="button" data-bulk-action="${scope}" data-title="${escapeAttr(action)}">${action}</button>`).join("")}
    </div>
  `;
}

function betaActionCard(title, text, actionTitle) {
  return `
    <article class="beta-card">
      <div class="badges">${betaBadge()}</div>
      <h3>${title}</h3>
      <p>${text}</p>
      <button class="btn" type="button" data-action="simulate" data-title="${escapeAttr(actionTitle || title)}">Abrir preparação</button>
    </article>
  `;
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
          <p>Ambiente local para demonstrar operação, carteira, prazos, financeiro, relatórios e apoio assistido por IA com revisão supervisionada.</p>
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
          <div class="global-search-wrap">
            <input class="search-input" id="globalSearch" name="globalSearch" autocomplete="off" placeholder="Buscar cliente, processo, tarefa, agenda ou financeiro…" />
            <div class="global-search-panel hidden" id="globalSearchPanel"></div>
          </div>
          <button class="notification-trigger" id="notificationTrigger" type="button" aria-label="Abrir notificações internas">
            <span aria-hidden="true">!</span>
            <strong>${unreadNotifications().length}</strong>
          </button>
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
  document.getElementById("notificationTrigger")?.addEventListener("click", () => {
    openInternalWindow("Notificações internas", notificationsContent());
  });
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
  const globalSearchInput = document.getElementById("globalSearch");
  globalSearchInput.addEventListener("input", () => renderGlobalSearchPanel(globalSearchInput.value));
  globalSearchInput.addEventListener("focus", () => renderGlobalSearchPanel(globalSearchInput.value));
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".global-search-wrap")) document.getElementById("globalSearchPanel")?.classList.add("hidden");
  });
  globalSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      openInternalWindow("Busca global", globalSearch(event.target.value));
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
  const actionItems = [
    ...state.cases.filter((item) => caseOperational(item).decision).map((item) => ({ title: caseTitle(item.id), text: `${caseOperational(item).prioridade} · ${item.owner}`, tags: ["Processo", "Decisão"], route: "processos" })),
    ...state.tasks.filter((item) => item.status === "Atrasada").map((item) => ({ title: item.title, text: `${taskInfo(item).clientLabel} · ${item.owner}`, tags: ["Tarefa", "Atrasada"], route: "tarefas" })),
    ...state.agenda.filter((item) => agendaDay(item) === 18).map((item) => ({ title: item.title, text: `${item.date} · ${agendaOwners(item).join(", ")}`, tags: ["Agenda", item.type], route: "agenda" })),
    ...state.finance.filter((item) => item.status === "Vencido").map((item) => ({ title: item.description, text: `${clientName(item.clientId)} · ${money(item.amount)}`, tags: ["Financeiro", "Vencido"], route: "financeiro" })),
  ].slice(0, 6);

  return `
    ${pageHeader("Dashboard executivo", "Operação do escritório", "Visão geral de clientes, processos, tarefas, financeiro e Central LEX.OS.", '<button class="btn primary" data-action="simulate" data-title="Adicionar rápido">+ Adicionar</button><button class="btn" data-action="simulate" data-title="Resumo executivo">Gerar apoio assistido</button>')}
    <section class="grid metrics">
      ${metric("Clientes ativos", state.clients.filter((item) => item.status === "Ativo").length, `${attentionClients} em atenção`, "clientes")}
      ${metric("Processos", state.cases.length, `${riskyCases} com risco ou prazo crítico`, "processos")}
      ${metric("Tarefas abertas", state.tasks.filter((item) => item.status !== "Concluída").length, `${overdueTasks} atrasada`, "tarefas")}
      ${metric("Financeiro vencido", money(overdueFinance), "sem cobrança automática", "financeiro")}
      ${metric("Central LEX.OS", state.centralHistory.length, "execuções supervisionadas", "central")}
    </section>
    <section class="panel action-center">
      <div class="panel-title"><h2>Central de Ação</h2><span>prioridade real</span></div>
      <div class="action-grid">
        ${actionItems.map((item) => `
          <button class="action-card" type="button" data-shortcut="${item.route}">
            <div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </div>
            <div class="badges">${item.tags.map(riskBadge).join("")}</div>
            <strong>Abrir</strong>
          </button>
        `).join("")}
      </div>
    </section>
    <section class="grid two" style="margin-top:14px">
      <div class="panel">
        <div class="panel-title"><h2>Fila de prioridades</h2><span>decisão</span></div>
        <div class="list">
          ${record("Prazo vencido em processo trabalhista", "Defesa em reclamação trabalhista exige revisão antes de nova movimentação.", ["Prazo", "Risco médio", "Rafael Lima"], "processos")}
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
          ${front("Agenda", state.agenda.length, "eventos da agenda", "agenda")}
          ${front("A receber", money(state.finance.filter((item) => financeType(item) === "Entrada" && item.status !== "Recebido").reduce((s, f) => s + f.amount, 0)), "recebíveis", "financeiro")}
          ${front("Central LEX.OS", state.centralHistory.length, "ações assistidas", "central")}
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
    ${moduleFilters("clientes", "Buscar cliente, CPF/CNPJ, telefone, e-mail ou processo", [
      { label: "Tipo", options: [{ value: "pessoa física", label: "Pessoa física" }, { value: "pessoa jurídica", label: "Pessoa jurídica" }] },
      { label: "Status", options: [{ value: "ativo", label: "Ativo" }, { value: "arquivado", label: "Arquivado" }, { value: "em atenção", label: "Em atenção" }] },
      { label: "Vínculo", options: [{ value: "com-processo", label: "Com processo" }, { value: "sem-processo", label: "Sem processo" }, { value: "processo-urgente", label: "Processo urgente" }, { value: "exige-decisao", label: "Exige decisão" }] },
      { label: "Responsável", options: ["Marina Costa", "Rafael Lima", "Bianca Reis"].map((name) => ({ value: name.toLowerCase(), label: name })) },
    ])}
    ${quickViews("clientes", [
      { label: "Ativos", value: "ativo" },
      { label: "Com pendência", value: "cobrança pendente" },
      { label: "Processo urgente", value: "processo-urgente" },
      { label: "Sem processo", value: "sem-processo" },
    ])}
    ${bulkActions("clientes", ["Alterar responsável", "Marcar ativo/inativo", "Aplicar status"])}
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
        ${moduleEmpty("clientes", "Ajuste a busca ou limpe os filtros para voltar à carteira completa.")}
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
    ${moduleFilters("processos", "Buscar processo, cliente, área, responsável ou prazo", [
      { label: "Prioridade", options: [{ value: "urgente", label: "Urgente" }, { value: "nao-urgente", label: "Não urgente" }, { value: "em-acompanhamento", label: "Em acompanhamento" }, { value: "exige-decisao", label: "Exige decisão" }, { value: "em-atencao", label: "Em atenção" }, { value: "revisao-urgente", label: "Revisão urgente" }] },
      { label: "Status", options: [{ value: "em andamento", label: "Em andamento" }, { value: "em acompanhamento", label: "Em acompanhamento" }, { value: "arquivado", label: "Arquivado" }] },
      { label: "Área", options: ["Cível", "Trabalhista", "Tributário"].map((area) => ({ value: area.toLowerCase(), label: area })) },
      { label: "Responsável", options: ["Marina Costa", "Rafael Lima", "Bianca Reis"].map((name) => ({ value: name.toLowerCase(), label: name })) },
    ])}
    ${quickViews("processos", [
      { label: "Urgentes", value: "urgente" },
      { label: "Exigem decisão", value: "exige-decisao" },
      { label: "Revisão urgente", value: "revisao-urgente" },
      { label: "Em acompanhamento", value: "em-acompanhamento" },
    ])}
    ${bulkActions("processos", ["Marcar em acompanhamento", "Marcar revisão urgente", "Alterar responsável", "Exportar Beta"])}
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
      ${moduleEmpty("processos", "Nenhum processo combina com os filtros selecionados.")}
    </section>
  `;
}

function renderTasks() {
  const delayed = state.tasks.filter((task) => task.status === "Atrasada").length;
  const noOwner = state.tasks.filter((task) => task.owner === "Sem responsável").length;
  const urgent = state.tasks.filter((task) => task.urgency === "Urgente" || task.urgency === "Alta").length;
  return `
    ${pageHeader("Tarefas", "Fila operacional de providências", "Controle de tarefas abertas, atrasadas, urgentes, próximas e sem responsável.", '<button class="btn primary" data-action="simulate" data-title="Nova tarefa">Criar tarefa</button>')}
    ${moduleFilters("tarefas", "Buscar tarefa, categoria, cliente, processo ou responsável", [
      { label: "Categoria", options: ["Processual", "Administrativa", "Financeira", "Operacional", "Atendimento", "Interna", "Intimação", "Protocolo", "Revisão", "Cobrança"].map((label) => ({ value: label.toLowerCase(), label })) },
      { label: "Status", options: [{ value: "aberta", label: "Pendente/Aberta" }, { value: "atrasada", label: "Atrasada" }, { value: "em andamento", label: "Em andamento" }, { value: "concluída", label: "Concluída" }] },
      { label: "Vínculo", options: [{ value: "com-cliente", label: "Com cliente" }, { value: "com-processo", label: "Com processo" }, { value: "sem-vinculo", label: "Sem vínculo" }] },
      { label: "Prioridade", options: [{ value: "urgente", label: "Urgente" }, { value: "alta", label: "Alta" }, { value: "normal", label: "Normal" }, { value: "sem-responsavel", label: "Sem responsável" }] },
    ])}
    ${quickViews("tarefas", [
      { label: "Hoje", value: "hoje" },
      { label: "Atrasadas", value: "atrasada" },
      { label: "Sem responsável", value: "sem-responsavel" },
      { label: "Administrativas", value: "administrativa" },
      { label: "Processuais", value: "processual" },
    ])}
    ${bulkActions("tarefas", ["Marcar concluídas", "Alterar prazo", "Alterar prioridade", "Reatribuir"])}
    <section class="task-layout">
      <div class="task-rail panel">
        <div class="panel-title"><h2>Comando</h2><span>operação</span></div>
        <button class="task-pulse danger" type="button" data-quick-filter="tarefas" data-filter-value="atrasada"><strong>${delayed}</strong><span>atrasada</span></button>
        <button class="task-pulse warn" type="button" data-quick-filter="tarefas" data-filter-value="urgente"><strong>${urgent}</strong><span>urgentes/altas</span></button>
        <button class="task-pulse info" type="button" data-quick-filter="tarefas" data-filter-value="sem-responsavel"><strong>${noOwner}</strong><span>sem responsável</span></button>
      </div>
      <div class="task-queue">
        ${state.tasks.map(taskQueueItem).join("")}
        ${moduleEmpty("tarefas", "Nenhuma tarefa encontrada. Tente remover filtros ou criar uma nova providência.")}
      </div>
    </section>
  `;
}

function clientCard(client) {
  const contact = clientContact(client);
  const cases = linkedCases(client.id);
  const urgent = cases.some((item) => caseOperational(item).urgent);
  const decision = cases.some((item) => caseOperational(item).decision);
  const search = [client.name, client.id, client.type, contact.document, contact.email, contact.phone, client.owner, client.situation, ...cases.map((item) => `${item.id} ${item.title}`)].join(" ");
  const tags = filterTags([
    client.type,
    client.status,
    client.situation,
    client.owner,
    cases.length ? "com-processo" : "sem-processo",
    urgent ? "processo-urgente" : "",
    decision ? "exige-decisao" : "",
  ]);
  const initials = client.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  return `
    <article class="client-card filterable-card" data-filter-item="clientes" data-search="${escapeAttr(search.toLowerCase())}" data-tags="${escapeAttr(tags)}">
      <label class="select-row"><input type="checkbox" data-row-select="clientes" /></label>
      <div class="client-avatar" aria-hidden="true">${initials}</div>
      <div class="client-card-main">
        <div class="client-card-head">
          <div>
            <span class="record-meta">${client.type} · atualizado ${contact.updatedAt}</span>
            <h2>${client.name}</h2>
          </div>
          <strong>${client.owner}</strong>
        </div>
        <div class="client-contact-row">
          <span>${contact.document}</span>
          <span>${contact.phone}</span>
          <span>${contact.email}</span>
          <span>${client.status}</span>
        </div>
        <div class="badges">${riskBadge(client.situation)}${client.pendingBilling ? riskBadge("Cobrança pendente") : ""}${cases.length ? riskBadge(`${cases.length} processo${cases.length > 1 ? "s" : ""}`) : riskBadge("Sem processo")}${urgent ? riskBadge("Processo urgente") : ""}${decision ? riskBadge("Exige decisão") : ""}</div>
        <p class="client-case-line">${cases[0] ? `Principal vínculo: ${caseTitle(cases[0].id)}` : "Sem processo vinculado nesta carteira."}</p>
        <div class="client-actions">${actionButtons(["Abrir detalhes", "Criar processo", "Criar tarefa", "Ver financeiro", "Arquivar cliente"], client.name)}</div>
      </div>
    </article>
  `;
}

function caseBoardCard(item) {
  const op = caseOperational(item);
  const tags = filterTags([
    op.urgent ? "urgente" : "nao-urgente",
    op.attention ? "em-atencao" : "",
    op.statusPrincipal,
    op.prioridade,
    op.decision ? "exige-decisao" : "",
    op.review ? "revisao-urgente" : "",
    op.statusPrincipal === "Em acompanhamento" ? "em-acompanhamento" : "",
    item.area,
    item.owner,
    clientName(item.clientId),
  ]);
  const search = [item.id, item.title, item.area, item.owner, clientName(item.clientId), item.deadline, item.lastMove, op.statusPrincipal, op.prioridade].join(" ");
  return `
    <article class="case-card filterable-card" data-filter-item="processos" data-search="${escapeAttr(search.toLowerCase())}" data-tags="${escapeAttr(tags)}">
      <label class="select-row"><input type="checkbox" data-row-select="processos" /></label>
      <div class="case-id">${caseNumber(item.id)}</div>
      <h3>${item.title}</h3>
      <p>${clientName(item.clientId)}</p>
      <div class="case-meta-grid">
        <span>${item.area}</span>
        <span>${item.owner}</span>
        <span>${money(item.value)}</span>
        <span>${item.lastMove || "sem movimentação recente"}</span>
      </div>
      <div class="badges">${riskBadge(op.statusPrincipal)}${riskBadge(op.prioridade)}${riskBadge(item.deadline)}</div>
      <div class="case-actions">${actionButtons(["Abrir processo", "Criar tarefa", "Lançar prazo", "Registrar andamento"], item.title)}</div>
    </article>
  `;
}

function taskQueueItem(task) {
  const info = taskInfo(task);
  const tone = info.status === "Atrasada" ? "danger" : info.priority === "Urgente" || info.priority === "Alta" ? "warn" : "info";
  const actions = ["Ver tarefa", "Editar", "Concluir", "Alterar prazo", "Reatribuir"];
  if (task.caseId) actions.push("Abrir processo");
  if (task.clientId) actions.push("Abrir cliente");
  actions.push("Arquivar tarefa");
  const tags = filterTags([
    info.category,
    info.status,
    info.priority,
    task.owner,
    task.owner === "Sem responsável" ? "sem-responsavel" : "",
    task.clientId ? "com-cliente" : "sem-vinculo",
    task.caseId ? "com-processo" : "",
  ]);
  const search = [task.id, task.title, info.description, info.category, info.status, info.priority, task.owner, info.clientLabel, info.caseLabel].join(" ");
  return `
    <article class="task-item ${tone} filterable-card" data-filter-item="tarefas" data-search="${escapeAttr(search.toLowerCase())}" data-tags="${escapeAttr(tags)}">
      <label class="select-row"><input type="checkbox" data-row-select="tarefas" /></label>
      <div class="task-check" aria-hidden="true"></div>
      <div class="task-content">
        <div class="task-head">
          <div>
            <span class="record-meta">Prazo: ${task.due}</span>
            <h2>${task.title}</h2>
          </div>
          <div class="badges">${riskBadge(info.status)}${riskBadge(info.priority)}${riskBadge(info.category)}</div>
        </div>
        <p>${info.description}</p>
        <div class="task-context">
          <span>${info.clientLabel}</span>
          <span>${info.caseLabel}</span>
          <span>${task.owner}</span>
        </div>
        <div class="task-actions">${actionButtons(actions, task.title)}</div>
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
  const entries = state.finance.filter((item) => financeType(item) === "Entrada");
  const exits = state.finance.filter((item) => financeType(item) === "Saída");
  const received = entries.filter((item) => item.status === "Recebido").reduce((sum, item) => sum + item.amount, 0);
  const receivable = entries.filter((item) => item.status !== "Recebido").reduce((sum, item) => sum + item.amount, 0);
  const paidExits = exits.filter((item) => item.status === "Pago").reduce((sum, item) => sum + item.amount, 0);
  const pendingExits = exits.filter((item) => item.status !== "Pago").reduce((sum, item) => sum + item.amount, 0);
  const overdue = state.finance.filter((item) => item.status === "Vencido").reduce((sum, item) => sum + item.amount, 0);
  const projectedIn = entries.filter((item) => item.status !== "Recebido").reduce((sum, item) => sum + item.amount, 0);
  const projectedOut = exits.filter((item) => item.status !== "Pago").reduce((sum, item) => sum + item.amount, 0);
  return `
    ${pageHeader("Financeiro", "Controle financeiro interno", "Entradas, saídas, recebíveis, pendências e visão líquida demonstrativa.", '<button class="btn primary" data-action="simulate" data-title="Nova cobrança">Nova movimentação</button>')}
    <section class="grid metrics">
      ${metric("Entradas recebidas", money(received), "realizado no período", "financeiro")}
      ${metric("A receber", money(receivable), "receita prevista", "financeiro")}
      ${metric("Saídas pagas", money(paidExits), "gastos realizados", "financeiro")}
      ${metric("Líquido realizado", money(received - paidExits), "visível para sócio/admin", "financeiro")}
      ${metric("Líquido projetado", money(projectedIn - projectedOut), "entradas previstas menos saídas", "financeiro")}
      ${metric("Pendências", money(overdue + pendingExits), "vencidos e pendentes", "financeiro")}
    </section>
    ${moduleFilters("financeiro", "Buscar cliente, descrição, responsável, entrada ou saída", [
      { label: "Tipo", options: [{ value: "entrada", label: "Entrada" }, { value: "saída", label: "Saída" }] },
      { label: "Status", options: [{ value: "recebido", label: "Recebido" }, { value: "a receber", label: "A receber" }, { value: "vencido", label: "Vencido" }, { value: "pago", label: "Pago" }, { value: "pendente", label: "Pendente" }] },
      { label: "Período", options: [{ value: "hoje", label: "Hoje" }, { value: "semana", label: "Esta semana" }, { value: "mes", label: "Este mês" }, { value: "todos", label: "Todos" }] },
      { label: "Visibilidade", options: [{ value: "sócios", label: "Sócios/admin" }, { value: "equipe", label: "Equipe" }] },
    ])}
    ${quickViews("financeiro", [
      { label: "Vencidos", value: "vencido" },
      { label: "A receber", value: "a receber" },
      { label: "Gastos do mês", value: "saída" },
      { label: "Recebidos", value: "recebido" },
    ])}
    ${bulkActions("financeiro", ["Marcar selecionados como pagos", "Exportar selecionados Beta", "Enviar lembrete Beta"])}
    <section class="finance-layout">
      <div class="finance-ledger">
        ${state.finance.map(financeCard).join("")}
        ${moduleEmpty("financeiro", "Nenhuma movimentação financeira combina com os filtros selecionados.")}
      </div>
      <aside class="panel finance-guard">
        <div class="panel-title"><h2>Acesso sensível</h2><span>sócios</span></div>
        <p>Lucro, líquido geral, gastos internos e recebíveis consolidados ficam marcados como dados sensíveis nesta versão demonstrativa.</p>
        <ul class="check-list">
          <li>Proteção real depende de autenticação e permissões no back-end.</li>
          <li>Integração Gmail/N8N preparada como ponto futuro, sem webhook ou segredo no código.</li>
        </ul>
      </aside>
    </section>
  `;
}

function financeCard(item) {
  const type = financeType(item);
  const visibility = item.visibility || "Sócios";
  const dateBucket = financeDateBucket(item);
  const tags = filterTags([type, item.status, dateBucket, dateBucket === "semana" ? "mes" : "", visibility, item.owner, item.category, item.clientId ? "com-cliente" : "sem-cliente", item.caseId ? "com-processo" : "sem-processo"]);
  const search = [item.id, item.description, type, item.category, item.status, item.owner, clientName(item.clientId), caseTitle(item.caseId), item.due].join(" ");
  return `
    <article class="finance-card ${type === "Saída" ? "expense" : "income"} filterable-card" data-filter-item="financeiro" data-search="${escapeAttr(search.toLowerCase())}" data-tags="${escapeAttr(tags)}">
      <label class="select-row"><input type="checkbox" data-row-select="financeiro" /></label>
      <div>
        <span class="record-meta">${type} · ${item.category || "Movimentação"} · ${item.expectedDate || item.due}</span>
        <h2>${item.description}</h2>
        <p>${item.clientId ? clientName(item.clientId) : "Sem cliente vinculado"}${item.caseId ? ` · ${caseTitle(item.caseId)}` : ""}</p>
      </div>
      <strong>${type === "Saída" ? "-" : "+"}${money(item.amount)}</strong>
      <div class="badges">${riskBadge(item.status)}${riskBadge(item.due)}${visibility.toLowerCase().includes("sócio") ? riskBadge("Restrito") : riskBadge("Equipe")}</div>
      <div class="finance-actions">${actionButtons(type === "Saída" ? ["Marcar como pago", "Reagendar", "Arquivar"] : ["Marcar como recebido", "Enviar lembrete", "Reagendar"], item.description)}</div>
    </article>
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
          ${record("Repriorizar prazo vencido", "A revisão trabalhista e sua tarefa vinculada devem ser tratadas antes de novas demandas.", ["Alta prioridade"], "processos")}
          ${record("Ativar cobrança consultiva", "Almeida & Torres possui valor vencido e processo ativo sensível.", ["Financeiro", "Carteira"], "financeiro")}
          ${record("Delegar follow-up sem dono", "O follow-up de proposta está sem responsável e vence hoje.", ["Operação"], "tarefas")}
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
    ${pageHeader("Relatórios", "Geração de relatórios assistidos", "Modelos prontos e histórico com revisão supervisionada obrigatória.", '<button class="btn primary" data-action="simulate" data-title="Gerar relatório">Gerar relatório</button>')}
    <section class="beta-grid">
      ${betaActionCard("Exportação PDF/CSV/Excel", "Saídas planejadas para relatórios, listas e financeiro.", "Exportar relatório Beta")}
      ${betaActionCard("Produtividade por responsável", "Indicadores por pessoa, prazo e conclusão.", "Relatório Beta de produtividade")}
      ${betaActionCard("Fluxo financeiro", "Entradas, saídas, previsto, realizado e pendências.", "Relatório Beta financeiro")}
    </section>
    <section class="grid two">
      <div class="panel">
        <div class="panel-title"><h2>Modelos prontos</h2><span>templates</span></div>
        <div class="list">
          ${reportPreview("Relatório executivo semanal", "Resumo de carteira, prazos, financeiro e decisões pendentes.", ["Sócios", "Beta"])}
          ${reportPreview("Relatório de risco processual", "Processos críticos, próximos prazos e plano de ação.", ["Processos", "Beta"])}
          ${reportPreview("Relatório financeiro interno", "A receber, vencidos, gastos e previsão de caixa.", ["Financeiro", "Beta"])}
        </div>
      </div>
      <div class="panel">
        <div class="panel-title"><h2>Histórico</h2><span>revisão</span></div>
        <div class="list">
          ${state.reports.map((report) => reportPreview(report.model, `${report.created} · revisor: ${report.reviewer}`, [report.status, "Exportar Beta"])).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCentral() {
  const tabs = ["Dossiê rápido", "Prompts", "Agentes guiados", "Fluxos", "Playbooks", "Relatórios"];
  return `
    ${pageHeader("Central LEX.OS", "Bancada assistida por IA supervisionada", "Apoio para dossiês, prompts, sínteses, planos de ação e relatórios. Sem envio externo automático.", '<button class="btn primary" data-action="simulate" data-title="Executar apoio assistido">Executar apoio assistido</button>')}
    <section class="beta-grid">
      ${betaActionCard("Sugerir prioridade com IA", "Preparado para processos, tarefas e agenda.", "Sugerir prioridade com IA")}
      ${betaActionCard("Identificar pendências", "Apoio supervisionado em clientes e financeiro.", "Identificar pendências com IA")}
      ${betaActionCard("Gerar resumo operacional", "Rascunhos internos com revisão supervisionada.", "Gerar resumo com IA")}
    </section>
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
          ${state.centralHistory.map((item) => record(item.title, `${item.module} · ${item.created}`, [item.status, "Copiar", "Reutilizar", "Arquivar"])).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSettings() {
  return `
    ${pageHeader("Configurações", "Identidade, equipe e ambiente", "Perfil do usuário, permissões, LGPD, auditoria e implantação.")}
    <section class="beta-grid">
      ${betaActionCard("Gestão de acessos", "Perfis de sócio/admin, advogado, financeiro, atendimento e visão limitada.", "Permissões avançadas Beta")}
      ${betaActionCard("Integração Gmail/N8N", "Importar comprovantes, lembretes, webhooks e automações futuras.", "Integração Gmail/N8N Beta")}
      ${betaActionCard("Auditoria conectada", "Histórico real por usuário, entidade, data e ação.", "Auditoria Beta")}
    </section>
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

function reportPreview(title, text, badges) {
  return `
    <button class="record record-link" type="button" data-action="simulate" data-title="Prévia do relatório: ${escapeAttr(title)}">
      <h3>${title}</h3>
      <p>${text}</p>
      <div class="badges">${badges.map((badge) => badge === "Beta" ? betaBadge() : riskBadge(badge)).join("")}</div>
    </button>
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
    "Central LEX.OS": "Executar apoio assistido com supervisão e histórico local.",
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

function readNotificationIds() {
  try {
    return JSON.parse(localStorage.getItem(NOTIFICATION_READ_KEY)) || [];
  } catch {
    return [];
  }
}

function markNotificationRead(id) {
  const ids = new Set(readNotificationIds());
  ids.add(id);
  localStorage.setItem(NOTIFICATION_READ_KEY, JSON.stringify([...ids]));
}

function buildNotifications() {
  return [
    ...state.tasks.filter((task) => task.status === "Atrasada").map((task) => ({ id: `task-${task.id}`, type: "Tarefa vencida", title: task.title, route: "tarefas", badge: task.owner, text: `${task.owner} · prazo ${task.due}` })),
    ...state.tasks.filter((task) => String(task.due).toLowerCase().includes("hoje")).map((task) => ({ id: `task-today-${task.id}`, type: "Tarefa para hoje", title: task.title, route: "tarefas", badge: task.owner, text: taskInfo(task).clientLabel })),
    ...state.cases.filter((item) => caseOperational(item).decision).map((item) => ({ id: `decision-${item.id}`, type: "Processo exige decisão", title: caseTitle(item.id), route: "processos", badge: item.owner, text: `${item.area} · ${caseOperational(item).prioridade}` })),
    ...state.cases.filter((item) => caseOperational(item).review).map((item) => ({ id: `review-${item.id}`, type: "Revisão urgente", title: caseTitle(item.id), route: "processos", badge: item.owner, text: `Prazo ${item.deadline}` })),
    ...state.clients.filter((client) => client.situation === "Sem retorno").map((client) => ({ id: `client-${client.id}`, type: "Cliente sem retorno", title: client.name, route: "clientes", badge: client.owner, text: client.lastContact || "sem retorno recente" })),
    ...state.finance.filter((item) => item.status === "Vencido" || item.status === "Pendente").map((item) => ({ id: `finance-${item.id}`, type: "Financeiro pendente", title: item.description, route: "financeiro", badge: money(item.amount), text: `${clientName(item.clientId)} · ${item.status}` })),
    ...state.agenda.filter((event) => agendaDay(event) === 18).map((event) => ({ id: `event-${event.id}`, type: "Evento de hoje", title: event.title, route: "agenda", badge: agendaOwners(event).join(", "), text: event.date })),
  ].slice(0, 12);
}

function unreadNotifications() {
  const read = new Set(readNotificationIds());
  return buildNotifications().filter((item) => !read.has(item.id));
}

function notificationsContent() {
  const notifications = buildNotifications();
  const read = new Set(readNotificationIds());
  return `
    <div class="drawer-body">
      <div class="panel-title"><h2>Alertas operacionais</h2><span>beta</span></div>
      <div class="badges">${betaBadge()}</div>
      <p>Notificações internas geradas com base nos dados locais demonstrativos. Alertas externos dependem de integração futura.</p>
      <div class="list">
        ${notifications.map((item) => `
          <article class="record notification-item ${read.has(item.id) ? "read" : ""}">
            <div class="record-head"><div><h3>${item.title}</h3><p>${item.type} · ${item.text}</p></div>${riskBadge(item.badge)}</div>
            <div class="table-actions">
              <button class="btn" type="button" data-shortcut="${item.route}">Abrir</button>
              <button class="btn" type="button" data-notification-read="${escapeAttr(item.id)}">${read.has(item.id) ? "Lida" : "Marcar como lida"}</button>
            </div>
          </article>
        `).join("") || `<div class="empty-state">Nenhuma notificação crítica agora.</div>`}
      </div>
    </div>
  `;
}

function globalSearchEntries() {
  return [
    ...state.clients.map((item) => ({
      type: "Cliente",
      title: item.name,
      subtitle: `${item.type} · ${linkedCases(item.id).length} processo(s) · ${item.owner}`,
      badge: item.status,
      route: "clientes",
      haystack: [item.name, item.type, item.document, item.phone, item.email, item.owner, item.situation, ...linkedCases(item.id).map((caseItem) => `${caseItem.title} ${caseNumber(caseItem.id)}`)].join(" "),
    })),
    ...state.cases.map((item) => ({
      type: "Processo",
      title: `${item.title} · ${caseNumber(item.id)}`,
      subtitle: `${clientName(item.clientId)} · ${item.area} · responsável: ${item.owner}`,
      badge: caseOperational(item).prioridade,
      route: "processos",
      haystack: [item.title, caseNumber(item.id), clientName(item.clientId), item.area, item.owner, item.status, item.risk, item.deadline, caseOperational(item).prioridade].join(" "),
    })),
    ...state.tasks.map((item) => ({
      type: "Tarefa",
      title: item.title,
      subtitle: `${taskInfo(item).category} · ${taskInfo(item).clientLabel} · ${item.owner}`,
      badge: item.status,
      route: "tarefas",
      haystack: [item.title, item.description, taskInfo(item).category, taskInfo(item).clientLabel, taskInfo(item).caseLabel, item.owner, item.status, item.urgency].join(" "),
    })),
    ...state.agenda.map((item) => ({
      type: "Agenda",
      title: item.title,
      subtitle: `${item.date} · ${agendaOwners(item).join(", ")} · ${agendaLinkLabel(item)}`,
      badge: item.type,
      route: "agenda",
      haystack: [item.title, item.type, item.date, agendaOwners(item).join(" "), agendaLinkLabel(item), item.status].join(" "),
    })),
    ...state.finance.map((item) => ({
      type: "Financeiro",
      title: item.description,
      subtitle: `${financeType(item)} · ${clientName(item.clientId)} · ${item.owner}`,
      badge: item.status,
      route: "financeiro",
      haystack: [item.description, financeType(item), item.category, item.status, clientName(item.clientId), item.owner, money(item.amount)].join(" "),
    })),
    ...state.reports.map((item) => ({
      type: "Relatório",
      title: item.model,
      subtitle: `${item.created} · revisor: ${item.reviewer}`,
      badge: item.status,
      route: "relatorios",
      haystack: [item.model, item.status, item.created, item.reviewer].join(" "),
    })),
    ...state.centralHistory.map((item) => ({
      type: "Central LEX.OS",
      title: item.title,
      subtitle: `${item.module} · ${item.created}`,
      badge: item.status,
      route: "central",
      haystack: [item.title, item.module, item.status, item.created].join(" "),
    })),
  ];
}

function searchMatches(query, limit = 12) {
  const term = query.toLowerCase().trim();
  if (!term) return [];
  return globalSearchEntries().filter((item) => item.haystack.toLowerCase().includes(term)).slice(0, limit);
}

function renderGlobalSearchPanel(query) {
  const panel = document.getElementById("globalSearchPanel");
  if (!panel) return;
  const term = query.trim();
  if (term.length < 2) {
    panel.classList.add("hidden");
    panel.innerHTML = "";
    return;
  }
  const matches = searchMatches(term, 7);
  panel.innerHTML = matches.length ? matches.map((item) => `
    <button class="global-search-result" type="button" data-shortcut="${item.route}">
      <span>${item.type}</span>
      <strong>${item.title}</strong>
      <em>${item.subtitle}</em>
    </button>
  `).join("") : `<div class="global-search-empty">Nenhum resultado para "${escapeAttr(term)}".</div>`;
  panel.classList.remove("hidden");
  panel.querySelectorAll("[data-shortcut]").forEach((button) => {
    button.addEventListener("click", () => {
      panel.classList.add("hidden");
      goToPage(button.dataset.shortcut);
    });
  });
}

function globalSearch(query) {
  const term = query.toLowerCase().trim();
  if (!term) return `<div class="drawer-body"><p>Digite um termo para buscar em clientes, processos, tarefas, agenda e financeiro.</p></div>`;
  const matches = searchMatches(term, 12);
  return `
    <div class="drawer-body">
      <p>${matches.length ? `${matches.length} resultado(s) para "${term}".` : `Nenhum resultado localizado para "${term}".`}</p>
      <div class="list global-results">
        ${matches.map((item) => `
          <button class="record record-link" type="button" data-shortcut="${item.route}">
            <div class="record-head"><div><span class="record-meta">${item.type}</span><h3>${item.title}</h3><p>${item.subtitle}</p></div>${riskBadge(item.badge)}</div>
          </button>
        `).join("") || `<div class="module-empty"><strong>Nenhum resultado encontrado.</strong><span>Tente buscar por nome, número do processo, telefone, responsável, prazo ou status.</span></div>`}
      </div>
    </div>
  `;
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

  document.querySelectorAll("[data-agenda-day]").forEach((button) => {
    button.addEventListener("click", () => {
      openInternalWindow(`Agenda do dia ${button.dataset.agendaDay}`, agendaDayContent(Number(button.dataset.agendaDay)));
    });
  });

  document.querySelectorAll("[data-shortcut]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("officeProfileMenu")?.classList.add("hidden");
      goToPage(button.dataset.shortcut);
      toast(`Atalho aberto: ${button.querySelector("span")?.textContent || "módulo"}.`);
    });
  });

  bindProfileForm(document.getElementById("screen"));
  bindModuleFilters();
  bindQuickViews();
  bindBulkActions();
  bindEmptyFilterClear();

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
      const text = document.getElementById("centralInput")?.value || "";
      try {
        await navigator.clipboard.writeText(text);
        toast("Prompt copiado.");
      } catch {
        openInternalWindow("Copiar prompt", `<div class="drawer-body"><p>Não foi possível acessar a área de transferência automaticamente. Use o texto abaixo:</p><div class="demo-note">${text || "Sem prompt preenchido."}</div></div>`);
      }
    });
  }
}

function bindModuleFilters() {
  document.querySelectorAll("[data-filter-panel]").forEach((panel) => {
    const scope = panel.dataset.filterPanel;
    const search = panel.querySelector(`[data-filter-search="${scope}"]`);
    const selects = [...panel.querySelectorAll(`[data-filter-select="${scope}"]`)];
    const clear = panel.querySelector(`[data-filter-clear="${scope}"]`);
    const chips = panel.querySelector(`[data-filter-chips="${scope}"]`);
    const apply = () => {
      const query = (search?.value || "").trim().toLowerCase();
      const active = selects.map((select) => ({ label: select.dataset.filterLabel, value: select.value, text: select.selectedOptions[0]?.textContent || "" })).filter((item) => item.value);
      const items = [...document.querySelectorAll(`[data-filter-item="${scope}"]`)];
      let visible = 0;
      items.forEach((item) => {
        const haystack = item.dataset.search || "";
        const tags = item.dataset.tags || "";
        const show = (!query || haystack.includes(query)) && active.every((filter) => tags.includes(filter.value));
        item.classList.toggle("hidden", !show);
        if (show) visible += 1;
      });
      document.querySelector(`[data-empty-for="${scope}"]`)?.classList.toggle("hidden", visible > 0);
      if (chips) {
        chips.innerHTML = [
          query ? `<button type="button" data-clear-query="${scope}">Busca: ${query}</button>` : "",
          ...active.map((filter) => `<button type="button" data-clear-filter="${scope}" data-value="${escapeAttr(filter.value)}">${filter.label}: ${filter.text.replace(/^.*?:\s*/, "")}</button>`),
        ].join("");
        chips.querySelectorAll("[data-clear-query]").forEach((button) => button.addEventListener("click", () => {
          if (search) search.value = "";
          apply();
        }));
        chips.querySelectorAll("[data-clear-filter]").forEach((button) => button.addEventListener("click", () => {
          selects.filter((select) => select.value === button.dataset.value).forEach((select) => {
            select.value = "";
          });
          apply();
        }));
      }
    };
    search?.addEventListener("input", apply);
    selects.forEach((select) => select.addEventListener("change", apply));
    clear?.addEventListener("click", () => {
      if (search) search.value = "";
      selects.forEach((select) => {
        select.value = "";
      });
      apply();
    });
    apply();
  });
}

function bindQuickViews() {
  document.querySelectorAll("[data-quick-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const scope = button.dataset.quickFilter;
      const value = button.dataset.filterValue || "";
      const panel = document.querySelector(`[data-filter-panel="${scope}"]`);
      if (!panel) return;
      const selects = [...panel.querySelectorAll(`[data-filter-select="${scope}"]`)];
      const target = selects.find((select) => [...select.options].some((option) => option.value === value));
      if (target) {
        target.value = value;
        target.dispatchEvent(new Event("change", { bubbles: true }));
        toast(`Visão rápida aplicada: ${button.textContent.trim()}.`);
      }
    });
  });
}

function bindBulkActions() {
  document.querySelectorAll("[data-bulk-actions]").forEach((panel) => {
    const scope = panel.dataset.bulkActions;
    const all = panel.querySelector(`[data-select-all="${scope}"]`);
    const count = panel.querySelector(`[data-bulk-count="${scope}"]`);
    const actionButtons = [...panel.querySelectorAll(`[data-bulk-action="${scope}"]`)];
    const rows = () => [...document.querySelectorAll(`[data-row-select="${scope}"]`)].filter((input) => !input.closest(".filterable-card")?.classList.contains("hidden"));
    const update = () => {
      const selected = rows().filter((input) => input.checked).length;
      if (count) count.textContent = `${selected} selecionado${selected === 1 ? "" : "s"}`;
      if (all) all.checked = selected > 0 && selected === rows().length;
      actionButtons.forEach((button) => {
        button.disabled = selected === 0;
      });
    };
    all?.addEventListener("change", () => {
      rows().forEach((input) => {
        input.checked = all.checked;
      });
      update();
    });
    rows().forEach((input) => input.addEventListener("change", update));
    actionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selected = rows().filter((input) => input.checked).length;
        if (!selected) {
          toast("Selecione pelo menos um item visível.");
          return;
        }
        openInternalWindow(button.dataset.title || "Ação em massa", confirmationShell(button.dataset.title || "Ação em massa", `${selected} item(ns) selecionado(s). A execução real será controlada por permissões no back-end.`));
      });
    });
    update();
  });
}

function bindEmptyFilterClear() {
  document.querySelectorAll(".module-empty [data-filter-clear]").forEach((button) => {
    button.addEventListener("click", () => {
      const scope = button.dataset.filterClear;
      const panel = document.querySelector(`[data-filter-panel="${scope}"]`);
      if (!panel) return;
      panel.querySelector(`[data-filter-clear="${scope}"]`)?.click();
    });
  });
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
    return `
      <form class="drawer-form" data-client-form>
        ${field("Nome do cliente", "Novo cliente demonstrativo")}
        ${selectField("Tipo", ["Pessoa jurídica", "Pessoa física"])}
        ${field("CPF/CNPJ", "00.000.000/0001-00")}
        ${field("Telefone", "(98) 90000-0000")}
        ${field("E-mail", "cliente@lexos.demo")}
        ${selectField("Status", ["Ativo", "Em atenção", "Arquivado"])}
        ${selectField("Responsável", ["Marina Costa", "Rafael Lima", "Bianca Reis"])}
        ${selectField("Situação operacional", ["Operação regular", "Em atenção", "Sem retorno", "Cobrança pendente"])}
        <button class="btn primary" type="submit">Salvar cliente no modo demo</button>
      </form>
    `;
  }

  if (normalized.includes("novo processo") || normalized.includes("lançar processo") || normalized.includes("criar processo")) {
    return `
      <form class="drawer-form" data-case-form>
        ${field("Título do processo", "Ação de cobrança contratual")}
        ${selectField("Cliente vinculado", state.clients.map((client) => client.name))}
        ${selectField("Área", ["Cível", "Trabalhista", "Tributário", "Consumidor", "Empresarial"])}
        ${selectField("Status processual", ["Em andamento", "Em acompanhamento", "Suspenso", "Arquivado", "Aguardando movimentação"])}
        ${selectField("Prioridade operacional", ["Não urgente", "Baixa", "Normal", "Alta", "Urgente", "Revisão urgente", "Exige decisão"])}
        ${selectField("Próxima ação", ["Analisar intimação", "Elaborar peça", "Revisar peça", "Protocolar", "Aguardar cliente", "Exige decisão", "Acompanhar movimentação"])}
        ${selectField("Risco", ["Baixo", "Médio", "Alto"])}
        ${selectField("Responsável", ["Marina Costa", "Rafael Lima", "Bianca Reis"])}
        ${field("Próximo prazo", "2026-06-30")}
        <button class="btn primary" type="submit">Salvar processo no modo demo</button>
      </form>
    `;
  }

  if (normalized.includes("nova tarefa") || normalized.includes("criar tarefa")) {
    return `
      <form class="drawer-form" data-task-form>
        ${field("Título da tarefa", "Chamar encarregado para resolver intimação")}
        ${textAreaField("Descrição", "Registrar providência operacional, mesmo sem processo vinculado.")}
        ${selectField("Categoria", ["Processual", "Administrativa", "Financeira", "Operacional", "Atendimento", "Interna", "Externa", "Intimação", "Protocolo", "Revisão", "Cobrança", "Outro"])}
        ${selectField("Status", ["Aberta", "Em andamento", "Em atenção", "Aguardando terceiro", "Aguardando cliente", "Concluída", "Atrasada", "Cancelada"])}
        ${selectField("Prioridade", ["Normal", "Alta", "Urgente"])}
        ${selectField("Cliente opcional", ["Sem cliente", ...state.clients.map((client) => client.name)])}
        ${selectField("Processo opcional", ["Sem processo", ...state.cases.map((item) => `${item.title} · ${clientName(item.clientId)}`)])}
        ${selectField("Responsável", ["Sem responsável", "Marina Costa", "Rafael Lima", "Bianca Reis"])}
        ${field("Prazo", "Hoje, 17:00")}
        <button class="btn primary" type="submit">Salvar tarefa no modo demo</button>
      </form>
    `;
  }

  if (normalized.includes("adicionar evento")) {
    return `
      <form class="drawer-form" data-event-form>
        ${field("Título do evento", "Reunião interna de alinhamento")}
        ${selectField("Tipo", ["Audiência", "Reunião", "Atendimento", "Prazo", "Diligência", "Protocolo", "Ligação", "Retorno ao cliente", "Perícia", "Intimação", "Reunião interna", "Tarefa administrativa", "Financeiro", "Outro"])}
        ${field("Tipo personalizado", "")}
        ${selectField("Cliente opcional", ["Sem cliente", ...state.clients.map((client) => client.name)])}
        ${selectField("Processo opcional", ["Sem processo", ...state.cases.map((item) => `${item.title} · ${clientName(item.clientId)}`)])}
        ${field("Data", "2026-06-18")}
        ${field("Hora inicial", "14:30")}
        ${field("Hora final", "15:30")}
        ${selectField("Responsáveis", ["Marina Costa", "Rafael Lima", "Bianca Reis", "Marina Costa + Rafael Lima", "Equipe operacional"])}
        ${textAreaField("Observações", "Evento demonstrativo com verificação local de conflito de agenda.")}
        <div class="availability-note" data-availability-note>Informe data e horário para verificar disponibilidade.</div>
        <button class="btn primary" type="submit">Salvar evento no modo demo</button>
      </form>
    `;
  }

  if (normalized.includes("nova cobrança")) {
    return `
      <form class="drawer-form" data-finance-form>
        ${selectField("Tipo", ["Entrada", "Saída"])}
        ${selectField("Categoria", ["Honorários contratuais", "Honorários sucumbenciais", "Consultoria", "Mensalidade", "Acordo", "Reembolso", "Custas", "Diligência", "Correspondente", "Ferramenta/software", "Marketing", "Impostos", "Pessoal", "Escritório", "Deslocamento", "Outro"])}
        ${selectField("Centro de custo", ["Administrativo", "Processo específico", "Cliente específico", "Operação", "Marketing", "Comercial", "Outro"])}
        ${selectField("Cliente opcional", ["Sem cliente", ...state.clients.map((client) => client.name)])}
        ${selectField("Processo opcional", ["Sem processo", ...state.cases.map((item) => `${item.title} · ${clientName(item.clientId)}`)])}
        ${field("Descrição", "Honorários mensais")}
        ${field("Valor", "8500")}
        ${selectField("Status", ["A receber", "Recebido", "Vencido", "Pendente", "Pago", "Cancelado"])}
        ${field("Data prevista", "2026-06-25")}
        ${field("Data de pagamento/recebimento", "")}
        ${selectField("Responsável", ["Marina Costa", "Rafael Lima", "Bianca Reis"])}
        ${selectField("Forma de pagamento", ["Não informado", "PIX", "Boleto", "Transferência", "Cartão", "Dinheiro", "Outro"])}
        ${selectField("Visibilidade", ["Sócios", "Equipe"])}
        ${textAreaField("Observações", "Registro financeiro demonstrativo.")}
        <button class="btn primary" type="submit">Salvar movimentação no modo demo</button>
      </form>
    `;
  }

  if (normalized.includes("gerar relatório")) {
    return formShell("Relatório assistido", [
      selectField("Modelo", ["Relatório executivo semanal", "Carteira de risco processual", "Financeiro interno"]),
      selectField("Período", ["Hoje", "7 dias", "30 dias", "Mês atual", "Todos os dados"]),
      selectField("Revisor responsável", ["Marina Costa", "Rafael Lima", "Bianca Reis"]),
      textAreaField("Observações", "Gerar rascunho para revisão antes de compartilhar."),
    ]);
  }

  if (normalized.includes("prévia do relatório")) {
    return `
      <div class="drawer-body">
        <div class="badges">${betaBadge()}</div>
        <h3>${title.replace(/^Prévia do relatório:\s*/i, "")}</h3>
        <p>Prévia demonstrativa com dados locais: clientes ativos, processos em atenção, tarefas vencidas e visão financeira resumida.</p>
        <ul class="check-list">
          <li>${state.clients.length} clientes monitorados.</li>
          <li>${state.cases.filter((item) => caseOperational(item).urgent).length} processos urgentes ou em revisão.</li>
          <li>${state.tasks.filter((item) => item.status === "Atrasada").length} tarefas atrasadas.</li>
          <li>${state.finance.filter((item) => item.status === "Vencido").length} lançamento financeiro vencido.</li>
        </ul>
        <div class="table-actions">
          <button class="btn" data-action="simulate" data-title="Exportar relatório Beta">Exportar CSV/PDF Beta</button>
          <button class="btn" data-shortcut="relatorios">Voltar aos relatórios</button>
        </div>
      </div>
    `;
  }

  if (normalized.includes("resumo executivo") || normalized.includes("executar apoio assistido")) {
    return `
      <div class="drawer-body">
        <p>Saída demonstrativa da Central LEX.OS para apoio interno supervisionado.</p>
        <ul class="check-list">
          <li>2 frentes exigem decisão hoje: prazo vencido e cobrança pendente.</li>
          <li>1 tarefa está sem responsável e deve ser redistribuída.</li>
          <li>O relatório pode ser gerado, mas precisa de revisão antes de envio.</li>
        </ul>
        <button class="btn primary" data-drawer-action="register-ai">Registrar no histórico local</button>
      </div>
    `;
  }

  if (normalized.includes("detalhe do evento")) {
    const eventTitle = title.replace(/^Detalhe do evento:\s*/, "");
    const event = state.agenda.find((item) => item.title === eventTitle) || state.agenda[0];
    return eventDetailContent(event);
  }

  if (normalized.includes("abrir detalhes")) {
    const context = title.split(":").slice(1).join(":").trim();
    const client = state.clients.find((item) => item.name === context);
    if (client) return clientDetailContent(client);
  }

  if (normalized.includes("abrir processo") || normalized.includes("ver processo")) {
    const context = title.split(":").slice(1).join(":").trim();
    const item = state.cases.find((current) => current.title === context || context.includes(current.title));
    if (item) return processDetailContent(item);
  }

  if (normalized.includes("exportar") || normalized.includes("relatório beta")) {
    return betaNotice("Exportação em Beta", "Este recurso está preparado para PDF, CSV e Excel. A exportação completa será ativada quando a camada de relatórios/back-end estiver conectada.");
  }

  if (normalized.includes("permiss") || normalized.includes("gestão de acessos")) {
    return betaNotice("Permissões avançadas em Beta", "Perfis por módulo, dados financeiros sensíveis e visão por responsável dependem de autenticação conectada e regras no back-end.");
  }

  if (normalized.includes("gmail") || normalized.includes("n8n") || normalized.includes("integração")) {
    return betaNotice("Integração Gmail/N8N em Beta", "Status atual: não conectado. Credenciais, webhooks e automações devem ser configurados em ambiente seguro, sem segredos no front-end.");
  }

  if (normalized.includes("ia") || normalized.includes("sugerir") || normalized.includes("classificar")) {
    return betaNotice("IA assistida em Beta", "A interface está pronta para sugestões e resumos supervisionados. Chamadas reais dependem da API de IA e revisão humana.");
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

  if (normalized.includes("ver tarefa") || normalized.includes("editar") || normalized.includes("reatribuir") || normalized.includes("alterar prioridade") || normalized.includes("alterar responsável")) {
    return formShell("Ajuste operacional", [
      selectField("Responsável", ["Marina Costa", "Rafael Lima", "Bianca Reis", "Sem responsável"]),
      selectField("Prioridade", ["Normal", "Alta", "Urgente", "Revisão urgente"]),
      textAreaField("Observação", "Registrar ajuste no histórico local demonstrativo."),
    ]);
  }

  if (normalized.includes("enviar lembrete")) {
    return betaNotice("Lembrete em Beta", "O envio externo de lembretes por e-mail, WhatsApp ou automação depende de integração segura. Nenhum disparo automático será feito nesta versão.");
  }

  if (normalized.includes("concluir") || normalized.includes("marcar como pago") || normalized.includes("marcar como recebido")) {
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

function eventDetailContent(event) {
  return `
    <div class="drawer-body">
      <div class="event-detail">
        <span class="record-meta">${event.type} · ${event.status}</span>
        <h3>${event.title}</h3>
        <p>${event.date}</p>
        <div class="badges">
          ${riskBadge(event.status)}
          <span class="badge">${agendaOwners(event).join(", ")}</span>
          <span class="badge">${agendaLinkLabel(event)}</span>
        </div>
        <ul class="check-list">
          <li>Cliente: ${event.clientId ? clientName(event.clientId) : "Sem cliente vinculado"}</li>
          <li>Processo: ${event.caseId ? caseTitle(event.caseId) : "Sem processo vinculado"}</li>
          <li>Horário: ${event.start || event.date}${event.end ? ` até ${event.end.split("T")[1]}` : ""}</li>
          <li>Observações: ${event.description || "Sem observações registradas."}</li>
        </ul>
        <div class="table-actions">
          <button class="btn" data-shortcut="agenda">Voltar para agenda</button>
          <button class="btn" data-shortcut="${agendaShortcut(event)}">Abrir vínculo</button>
        </div>
      </div>
    </div>
  `;
}

function clientDetailContent(client) {
  const cases = linkedCases(client.id);
  const tasks = state.tasks.filter((task) => task.clientId === client.id);
  const events = state.agenda.filter((event) => event.clientId === client.id);
  const finance = state.finance.filter((item) => item.clientId === client.id);
  const pending = finance.filter((item) => item.status === "Vencido" || item.status === "A receber" || item.status === "Pendente").reduce((sum, item) => sum + item.amount, 0);
  const contact = clientContact(client);
  return `
    <div class="drawer-body client-detail">
      <div class="detail-hero">
        <div>
          <span class="record-meta">${client.type} · ${client.status}</span>
          <h3>${client.name}</h3>
          <p>${cases.length} processo(s) · ${tasks.filter((task) => task.status !== "Concluída").length} tarefa(s) aberta(s) · ${events.length} evento(s) · ${money(pending)} pendente</p>
        </div>
        <div class="badges">${riskBadge(client.situation)}${client.pendingBilling ? riskBadge("Cobrança pendente") : ""}</div>
      </div>
      <div class="detail-tabs">
        <section><h4>Dados cadastrais</h4><p>${contact.document}<br>${contact.phone}<br>${contact.email}<br>Responsável: ${client.owner}</p></section>
        <section><h4>Processos</h4>${cases.map((item) => `<p>${caseTitle(item.id)} · ${caseOperational(item).prioridade}</p>`).join("") || "<p>Sem processo vinculado.</p>"}</section>
        <section><h4>Tarefas</h4>${tasks.map((task) => `<p>${task.title} · ${task.status}</p>`).join("") || "<p>Sem tarefas vinculadas.</p>"}</section>
        <section><h4>Agenda</h4>${events.map((event) => `<p>${event.title} · ${event.date}</p>`).join("") || "<p>Sem eventos futuros.</p>"}</section>
        <section><h4>Financeiro</h4>${finance.map((item) => `<p>${item.description} · ${item.status} · ${money(item.amount)}</p>`).join("") || "<p>Sem lançamentos vinculados.</p>"}</section>
        <section><h4>Documentos ${betaBadge()}</h4><p>Área preparada para anexos e documentos quando o armazenamento seguro for ativado.</p></section>
        <section><h4>Histórico</h4>${timelineList(entityTimeline("cliente", client.id))}</section>
        <section><h4>Observações</h4><p>Observações internas serão sincronizadas na fase conectada.</p></section>
      </div>
      <div class="table-actions">
        <button class="btn" data-action="simulate" data-title="Criar processo: ${escapeAttr(client.name)}">Novo processo</button>
        <button class="btn" data-action="simulate" data-title="Criar tarefa: ${escapeAttr(client.name)}">Nova tarefa</button>
        <button class="btn" data-action="simulate" data-title="Adicionar evento">Novo evento</button>
        <button class="btn" data-action="simulate" data-title="Nova cobrança">Lançar financeiro</button>
      </div>
    </div>
  `;
}

function processDetailContent(item) {
  const op = caseOperational(item);
  return `
    <div class="drawer-body client-detail">
      <div class="detail-hero">
        <div>
          <span class="record-meta">${item.area} · ${caseNumber(item.id)}</span>
          <h3>${item.title}</h3>
          <p>${clientName(item.clientId)} · responsável: ${item.owner}</p>
        </div>
        <div class="badges">${riskBadge(op.statusPrincipal)}${riskBadge(op.prioridade)}${op.decision ? riskBadge("Exige decisão") : ""}${op.review ? riskBadge("Revisão urgente") : ""}</div>
      </div>
      <div class="detail-tabs">
        <section><h4>Status processual</h4><p>${op.statusPrincipal}</p></section>
        <section><h4>Prioridade operacional</h4><p>${op.prioridade}</p></section>
        <section><h4>Próxima ação</h4><p>${item.proximaAcao || op.prioridade || "Acompanhar movimentação"}</p></section>
        <section><h4>Prazo</h4><p>${item.deadline} · ${item.nextDeadline || "sem data"}</p></section>
        <section><h4>Histórico</h4>${timelineList(entityTimeline("processo", item.id))}</section>
        <section><h4>IA operacional ${betaBadge()}</h4><p>Sugerir prioridade, próxima ação e resumo depende da API de IA configurada.</p></section>
      </div>
    </div>
  `;
}

function timelineList(items) {
  return `<ol class="timeline">${items.map((item) => `<li>${item}</li>`).join("") || "<li>Histórico preparado para auditoria futura.</li>"}</ol>`;
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
  bindOperationalForms(drawer);
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
  drawer.querySelectorAll("[data-notification-read]").forEach((button) => {
    button.addEventListener("click", () => {
      markNotificationRead(button.dataset.notificationRead);
      toast("Notificação marcada como lida.");
      const counter = document.querySelector("#notificationTrigger strong");
      if (counter) counter.textContent = String(unreadNotifications().length);
      openInternalWindow("Notificações internas", notificationsContent());
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

function bindOperationalForms(drawer) {
  bindClientForm(drawer);
  bindCaseForm(drawer);
  bindTaskForm(drawer);
  bindEventForm(drawer);
  bindFinanceForm(drawer);
}

function selectedClientId(label) {
  return state.clients.find((client) => client.name === label)?.id || "";
}

function selectedCaseId(label) {
  return state.cases.find((item) => label?.startsWith(item.id) || label?.includes(item.title) || label?.includes(caseNumber(item.id)))?.id || "";
}

function bindClientForm(drawer) {
  const form = drawer.querySelector("[data-client-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const [name, type, documentValue, phone, email, status, owner, situation] = [...form.querySelectorAll("input, select")].map((item) => item.value.trim());
    state.clients.unshift({
      id: `CLI-${Math.floor(Math.random() * 800 + 200)}`,
      name,
      type,
      status,
      owner,
      situation,
      document: documentValue,
      email,
      phone,
      createdAt: "2026-06-22",
      updatedAt: "2026-06-22",
      lastContact: "hoje",
      pendingBilling: situation === "Cobrança pendente",
      activeCase: false,
    });
    saveData();
    toast("Cliente salvo no modo demo.");
    drawer.classList.add("hidden");
    renderPage();
  });
}

function bindCaseForm(drawer) {
  const form = drawer.querySelector("[data-case-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const [title, clientLabel, area, statusPrincipal, priority, nextAction, risk, owner, deadline] = [...form.querySelectorAll("input, select")].map((item) => item.value.trim());
    state.cases.unshift({
      id: `PROC-${Math.floor(Math.random() * 800 + 1200)}`,
      clientId: selectedClientId(clientLabel) || state.clients[0]?.id || "",
      title,
      area,
      status: statusPrincipal === "Arquivado" ? "Arquivado" : statusPrincipal === "Em acompanhamento" ? "Em atenção" : "Ativo",
      statusPrincipal,
      prioridadeOperacional: priority,
      proximaAcao: nextAction,
      exigeDecisao: priority === "Exige decisão" || nextAction === "Exige decisão",
      revisaoUrgente: priority === "Revisão urgente",
      risk,
      owner,
      deadline: deadline ? `prazo em ${deadline}` : "sem prazo",
      nextDeadline: deadline,
      lastMove: "hoje",
      value: 0,
    });
    saveData();
    toast("Processo salvo no modo demo.");
    drawer.classList.add("hidden");
    renderPage();
  });
}

function bindTaskForm(drawer) {
  const form = drawer.querySelector("[data-task-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = [...form.querySelectorAll("input, textarea, select")];
    const [title, description, category, status, priority, clientLabel, caseLabel, owner, due] = inputs.map((item) => item.value.trim());
    state.tasks.unshift({
      id: `TAR-${Math.floor(Math.random() * 800 + 300)}`,
      title,
      description,
      category,
      clientId: selectedClientId(clientLabel),
      caseId: selectedCaseId(caseLabel),
      owner,
      status,
      urgency: priority,
      due,
    });
    saveData();
    toast("Tarefa salva no modo demo.");
    drawer.classList.add("hidden");
    renderPage();
  });
}

function bindEventForm(drawer) {
  const form = drawer.querySelector("[data-event-form]");
  if (!form) return;
  const note = form.querySelector("[data-availability-note]");
  const inputs = [...form.querySelectorAll("input, textarea, select")];
  const updateAvailability = () => {
    const data = inputs.map((item) => item.value.trim());
    const date = data[5];
    const start = data[6];
    const end = data[7];
    const owners = data[8]?.split("+").map((item) => item.trim()).filter(Boolean) || [];
    if (!date || !start || !end || !note) return;
    const conflict = state.agenda.some((event) => {
      const eventOwners = agendaOwners(event);
      return event.start?.startsWith(`${date}T${start}`) && owners.some((owner) => eventOwners.includes(owner));
    });
    note.textContent = conflict ? "Conflito: já existe compromisso para responsável nesse horário." : "Horário livre para os responsáveis selecionados.";
    note.classList.toggle("danger", conflict);
  };
  inputs.forEach((input) => input.addEventListener("input", updateAvailability));
  inputs.forEach((input) => input.addEventListener("change", updateAvailability));
  updateAvailability();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = inputs.map((item) => item.value.trim());
    const [title, type, customType, clientLabel, caseLabel, date, start, end, ownersLabel, notes] = data;
    const owners = ownersLabel.split("+").map((item) => item.trim()).filter(Boolean);
    const finalType = type === "Outro" && customType ? customType : type;
    state.agenda.unshift({
      id: `AGE-${Math.floor(Math.random() * 800 + 400)}`,
      title,
      type: finalType,
      date: `${date}, ${start}`,
      start: `${date}T${start}`,
      end: `${date}T${end}`,
      clientId: selectedClientId(clientLabel),
      caseId: selectedCaseId(caseLabel),
      origin: selectedCaseId(caseLabel) || selectedClientId(clientLabel) || "Interno",
      owner: owners[0] || "Equipe operacional",
      owners: owners.length ? owners : ["Equipe operacional"],
      description: notes,
      status: "Confirmado",
    });
    saveData();
    toast("Evento salvo no modo demo.");
    drawer.classList.add("hidden");
    renderPage();
  });
}

function bindFinanceForm(drawer) {
  const form = drawer.querySelector("[data-finance-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const [type, category, costCenter, clientLabel, caseLabel, description, amount, status, expectedDate, paidDate, owner, paymentMethod, visibility, notes] = [...form.querySelectorAll("input, select, textarea")].map((item) => item.value.trim());
    state.finance.unshift({
      id: `FIN-${Math.floor(Math.random() * 800 + 500)}`,
      clientId: selectedClientId(clientLabel),
      caseId: selectedCaseId(caseLabel),
      description,
      type,
      category,
      costCenter,
      amount: Number(String(amount).replace(/\D/g, "")) || 0,
      status,
      expectedDate,
      paidDate: paidDate || (status === "Recebido" || status === "Pago" ? expectedDate : ""),
      owner,
      paymentMethod,
      visibility,
      notes,
      due: expectedDate,
    });
    saveData();
    toast("Movimentação financeira salva no modo demo.");
    drawer.classList.add("hidden");
    renderPage();
  });
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
        <span>${agendaActionIcon("event")}</span>
        <strong>Adicionar evento</strong>
        <em>Audiência, reunião, follow-up ou prazo crítico</em>
      </button>
      <button class="agenda-action-card" type="button" data-action="monthly-calendar">
        <span>${agendaActionIcon("month")}</span>
        <strong>Calendário mensal</strong>
        <em>Visualizar eventos distribuídos por dia</em>
      </button>
    </section>
    <div class="module-tabs">${["Hoje", "Próximos 7 dias", "Vencidos", "Audiências", "Reuniões", "Tarefas/processos"].map((tab, index) => `<button class="${index === 0 ? "active" : ""}" data-action="simulate" data-title="Filtro ${tab}">${tab}</button>`).join("")}</div>
    <section class="grid three">
      ${state.agenda.map((event) => `
        <button class="record record-link" type="button" data-action="simulate" data-title="Detalhe do evento: ${event.title}" aria-label="Abrir detalhe de ${event.title}">
          <div class="record-head"><div><h3>${event.title}</h3><p>${event.date}</p></div>${riskBadge(event.status)}</div>
          <div class="badges"><span class="badge info">${event.type}</span><span class="badge">${agendaLinkLabel(event)}</span><span class="badge">${agendaOwners(event).join(", ")}</span></div>
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
  if (event.start?.startsWith("2026-06-")) return Number(event.start.slice(8, 10));
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
      <button class="calendar-cell ${events.length ? "has-event" : ""}" type="button" data-agenda-day="${day}" ${events.length ? "" : "disabled"}>
        <strong>${day}</strong>
        <div class="calendar-events">
          ${events.slice(0, 3).map((event) => `<span>${event.title}</span>`).join("")}
          ${events.length > 3 ? `<em>+${events.length - 3} eventos</em>` : ""}
        </div>
      </button>
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

function agendaDayContent(day) {
  const events = state.agenda
    .filter((event) => agendaDay(event) === day)
    .sort((a, b) => String(a.start || a.date).localeCompare(String(b.start || b.date)));
  return `
    <div class="drawer-body">
      <div class="calendar-head">
        <div>
          <span class="record-meta">Dia ${day} · Junho de 2026</span>
          <h3>${events.length} evento${events.length === 1 ? "" : "s"} no dia</h3>
        </div>
        <button class="btn" type="button" data-action="simulate" data-title="Adicionar evento">Adicionar evento</button>
      </div>
      <div class="list">
        ${events.map((event) => `
          <button class="record record-link" type="button" data-action="simulate" data-title="Detalhe do evento: ${event.title}">
            <div class="record-head"><div><h3>${event.title}</h3><p>${event.start?.split("T")[1] || event.date}</p></div>${riskBadge(event.status)}</div>
            <div class="badges"><span class="badge info">${event.type}</span><span class="badge">${agendaOwners(event).join(", ")}</span><span class="badge">${agendaLinkLabel(event)}</span></div>
          </button>
        `).join("") || `<div class="empty-state">Nenhum evento neste dia.</div>`}
      </div>
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
