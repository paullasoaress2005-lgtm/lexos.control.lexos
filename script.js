const STORAGE_KEY = "lexos-control-demo-v1";
const SESSION_KEY = "lexos-control-session";
const SIDEBAR_KEY = "lexos-control-sidebar-collapsed";

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
  ["dashboard", "⌂", "Dashboard", "Operação"],
  ["clientes", "♙", "Clientes", "Carteira"],
  ["processos", "§", "Processos", "Prazos"],
  ["tarefas", "✓", "Tarefas", "Fila"],
  ["agenda", "▣", "Agenda", "Jurídica"],
  ["financeiro", "$", "Financeiro", "Recebíveis"],
  ["socios", "♙♙", "Painel dos Sócios", "Decisão"],
  ["relatorios", "▤", "Relatórios", "Assistidos"],
  ["central", "__logo__", "Central LEX.OS", "Supervisão"],
  ["onboarding", "→", "Onboarding", "Roteiro"],
];

let state = loadData();
let currentPage = pageFromLocation();
let currentTab = "Dossiê rápido";
let sidebarCollapsed = localStorage.getItem(SIDEBAR_KEY) === "true";
let agendaMonthlyVisible = false;

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

function pageFromLocation() {
  const page = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return navItems.some(([id]) => id === page) || page === "perfil" || page === "config" ? page : "dashboard";
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
          ${navItems.map(([id, icon, label, meta]) => `<button data-page="${id}" class="${id === currentPage ? "active" : ""}" title="${label}"><span>${icon === "__logo__" ? '<img class="nav-symbol" src="/assets/lexos-symbol.png" alt="" />' : icon}</span><span>${label}</span><small>${meta}</small></button>`).join("")}
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
          <div class="office-profile">
            <button class="office-main" id="officeProfileToggle" type="button" aria-expanded="false" aria-controls="officeProfileMenu">
              <img src="/assets/lexos-symbol.png" alt="" />
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

  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = button.dataset.page;
      history.replaceState(null, "", currentPage === "dashboard" ? "/" : `/${currentPage}`);
      renderApp();
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
  history.replaceState(null, "", currentPage === "dashboard" ? "/" : `/${currentPage}`);
  document.getElementById("screen").innerHTML = render();
  bindActions2();
}

function renderDashboard() {
  const overdueTasks = state.tasks.filter((task) => task.status === "Atrasada").length;
  const attentionClients = state.clients.filter((client) => client.situation !== "Operação regular" && client.status !== "Arquivado").length;
  const riskyCases = state.cases.filter((item) => item.risk === "Alto" || item.deadline === "vencido").length;
  const overdueFinance = state.finance.filter((item) => item.status === "Vencido").reduce((sum, item) => sum + item.amount, 0);

  return `
    ${pageHeader("Dashboard executivo", "Operação do escritório", "Visão geral de clientes, processos, tarefas, financeiro e Central LEX.OS.", '<button class="btn primary" data-action="simulate" data-title="Resumo executivo">Gerar apoio assistido</button>')}
    <section class="grid metrics">
      ${metric("Clientes ativos", state.clients.filter((item) => item.status === "Ativo").length, `${attentionClients} em atenção`, "clientes")}
      ${metric("Processos", state.cases.length, `${riskyCases} com risco ou prazo crítico`, "processos")}
      ${metric("Tarefas abertas", state.tasks.filter((item) => item.status !== "Concluída").length, `${overdueTasks} atrasada`, "tarefas")}
      ${metric("Financeiro vencido", money(overdueFinance), "sem cobrança automática", "financeiro")}
      ${metric("Central LEX.OS", state.centralHistory.length, "execuções supervisionadas", "central")}
    </section>
    <section class="grid two" style="margin-top:14px">
      <div class="panel">
        <div class="panel-title"><h2>Fila de prioridades humanas</h2><span>decisão</span></div>
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
          ${front("Contencioso", state.cases.length, "processos em carteira", "processos")}
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
  return `
    ${pageHeader("Clientes", "Cadastro e gestão de clientes", "Filtros por status, tipo, responsável e situação operacional.", '<button class="btn primary" data-action="simulate" data-title="Novo cliente">Cadastrar cliente</button>')}
    ${filters(["Status", "Tipo", "Responsável", "Situação"])}
    ${table(["Cliente", "Tipo", "Responsável", "Situação", "Ações"], state.clients.map((client) => [
      `<strong>${client.name}</strong><span class="record-meta">${client.id} · último contato ${client.lastContact}</span>`,
      client.type,
      client.owner,
      `${riskBadge(client.situation)} ${client.pendingBilling ? riskBadge("Cobrança pendente") : ""} ${client.activeCase ? riskBadge("Processo ativo") : ""}`,
      actionButtons(["Abrir detalhes", "Criar processo", "Criar tarefa", "Ver financeiro", "Arquivar cliente"], client.name),
    ]))}
  `;
}

function renderCases() {
  return `
    ${pageHeader("Processos", "Carteira processual", "Controle de processos ativos, em atenção, suspensos, arquivados e de alto risco.", '<button class="btn primary" data-action="simulate" data-title="Lançar processo">Novo processo</button>')}
    ${filters(["Status", "Risco", "Área", "Responsável"])}
    ${table(["Processo", "Cliente", "Área", "Risco e prazo", "Ações"], state.cases.map((item) => [
      `<strong>${item.title}</strong><span class="record-meta">${item.id}</span>`,
      clientName(item.clientId),
      `${item.area}<br><span class="record-meta">${item.owner}</span>`,
      `${riskBadge(item.risk)} ${riskBadge(item.deadline)}`,
      actionButtons(["Abrir processo", "Criar tarefa", "Lançar prazo", "Registrar andamento", "Ver cliente", "Arquivar"], item.title),
    ]))}
  `;
}

function renderTasks() {
  return `
    ${pageHeader("Tarefas", "Fila operacional de providências", "Controle de tarefas abertas, atrasadas, urgentes, próximas e sem responsável.", '<button class="btn primary" data-action="simulate" data-title="Nova tarefa">Criar tarefa</button>')}
    ${filters(["Status", "Urgência", "Responsável", "Vínculo"])}
    ${table(["Tarefa", "Cliente", "Processo", "Prazo", "Ações"], state.tasks.map((task) => [
      `<strong>${task.title}</strong><span class="record-meta">${task.id} · ${task.owner}</span>`,
      clientName(task.clientId),
      task.caseId,
      `${riskBadge(task.status)} ${riskBadge(task.urgency)}<br><span class="record-meta">${task.due}</span>`,
      actionButtons(["Concluir", "Editar prazo", "Abrir processo", "Abrir cliente", "Arquivar tarefa"], task.title),
    ]))}
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
    ${pageHeader("Configurações", "Identidade, equipe e ambiente", "Modo claro, perfil do usuário, permissões, LGPD, auditoria e implantação.")}
    <section class="grid three">
      ${settingsCard("Identidade do escritório", ["Nome: " + state.office.name, "Responsável: " + state.office.owner, "Tema: modo claro"])}
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
            <img src="/assets/lexos-symbol.png" alt="" />
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
            <input id="profilePhoto" name="profilePhoto" type="file" accept="image/png,image/jpeg,image/webp" />
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
      currentPage = button.dataset.shortcut;
      history.replaceState(null, "", currentPage === "dashboard" ? "/" : `/${currentPage}`);
      renderApp();
      toast(`Atalho aberto: ${button.querySelector("span")?.textContent || "módulo"}.`);
    });
  });

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

function actionContent(title) {
  const normalized = title.toLowerCase();

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
  drawer.querySelectorAll("[data-demo-form]").forEach((form) => {
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
      currentPage = button.dataset.shortcut;
      history.replaceState(null, "", currentPage === "dashboard" ? "/" : `/${currentPage}`);
      drawer.classList.add("hidden");
      renderApp();
    });
  });
  drawer.querySelectorAll("[data-action='simulate']").forEach((button) => {
    button.addEventListener("click", () => {
      openInternalWindow(button.dataset.title || "Ação", actionContent(button.dataset.title || "Ação"));
    });
  });
  document.getElementById("closeDrawer").focus();
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
    <form class="drawer-form" data-demo-form>
      <div class="profile-editor">
        <div class="profile-photo-preview">
          <img src="/assets/lexos-symbol.png" alt="" />
        </div>
        <div class="field">
          <label for="officePhoto">Foto do perfil</label>
          <input id="officePhoto" name="officePhoto" type="file" accept="image/png,image/jpeg,image/webp" />
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

if (sessionStorage.getItem(SESSION_KEY) === "demo") {
  renderApp();
} else {
  renderLogin();
}
