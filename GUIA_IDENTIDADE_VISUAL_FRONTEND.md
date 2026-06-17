# Guia de Identidade Visual e Front-end Lexos Control

Documento-base para reutilizar a identidade visual, o layout e os padrões de interface do Lexos Control em outros sistemas da Lexos.

## 1. Direção visual

O visual do Lexos Control deve transmitir escritório jurídico premium, tecnologia assistiva e operação interna confiável. A interface não deve parecer uma landing page genérica; deve parecer uma ferramenta de trabalho para uso diário.

Princípios:

- **Escuro, técnico e jurídico:** fundo profundo, painéis discretos e contraste alto.
- **Premium sem excesso:** o dourado/laranja é usado para ação, destaque e hierarquia executiva.
- **Azul como sinal de tecnologia:** usado em navegação ativa, foco, links, hover e estados informativos.
- **Densidade organizada:** telas com muitos dados devem ser escaneáveis, com grids, tabelas e cards objetivos.
- **Sem 404 na navegação interna:** todo card, botão ou atalho deve apontar para rota existente ou abrir janela interna.

## 2. Paleta oficial

Tokens usados no sistema:

```css
:root {
  --bg: #000611;
  --panel: #071120;
  --panel-strong: #0a1a2a;
  --ink: #eaf4ff;
  --muted: #c9d3dd;
  --line: rgba(234, 244, 255, 0.14);
  --brand: #00b2ff;
  --accent: #c8a75c;
  --danger: #ff6b5f;
  --warn: #c8a75c;
  --ok: #5ee39b;
  --info: #00b2ff;
  --radius: 8px;
}
```

Uso recomendado:

- `#000611`: fundo principal.
- `#071120`: cards, painéis, registros e tabelas.
- `#0A1A2A`: áreas fortes, login, sidebar e containers de destaque.
- `#EAF4FF`: texto principal.
- `#C9D3DD`: texto secundário, descrições e metadados.
- `#00B2FF`: navegação ativa, foco tecnológico, hover, atalhos e informação.
- `#C8A75C`: botões principais, chamadas premium, labels executivos e detalhes de decisão.
- `#FF6B5F`: alerta crítico, vencido, sair e risco alto.
- `#5EE39B`: concluído, ativo, confirmado e estados positivos.

Regra importante: não substituir o azul pelo dourado em tudo. O dourado deve comandar as ações principais; o azul deve continuar sustentando navegação, tecnologia e profundidade visual.

## 3. Fundo e atmosfera

O fundo padrão é escuro com quadriculado sutil em prata, fixo durante o scroll.

```css
body {
  background:
    linear-gradient(90deg, rgba(201, 211, 221, 0.055) 1px, transparent 1px),
    linear-gradient(rgba(201, 211, 221, 0.045) 1px, transparent 1px),
    var(--bg);
  background-attachment: fixed;
  background-size: 32px 32px;
}
```

Diretrizes:

- O quadriculado deve ser sutil, nunca competir com o conteúdo.
- Evitar blobs, orbs, gradientes genéricos e ilustrações decorativas sem função.
- Usar sombras frias em azul apenas para profundidade, não para efeito chamativo.

## 4. Tipografia

Combinação atual:

- **Títulos e números:** `Georgia`, `"Times New Roman"`, serif.
- **Interface, botões, tabelas e formulários:** `"Segoe UI"`, sans-serif.

Uso:

- Títulos grandes usam serifada para autoridade jurídica.
- Textos operacionais usam sans-serif para leitura rápida.
- Eyebrows e metadados usam caixa alta, peso alto e espaçamento controlado.

Exemplo:

```css
.eyebrow {
  color: var(--accent);
  font-family: "Segoe UI", sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
```

## 5. Logo e marca

Arquivo atual:

```text
assets/lexos-symbol.png
```

Uso:

- Header/sidebar: símbolo Lexos + texto `LEX.OS`.
- Central LEX.OS: símbolo reduzido como ícone de módulo.
- Perfil do escritório: símbolo como avatar temporário.

Regras:

- Não colocar o símbolo dentro de quadrado escuro desnecessário.
- Não distorcer proporção.
- Não usar o símbolo como decoração solta.
- Quando a logo oficial em PNG final estiver disponível, substituir mantendo o mesmo espaço visual.

## 6. Layout-base de sistemas internos

Estrutura recomendada:

```text
app-shell
  sidebar fixa/minimizável
  main
    topbar sticky
    workspace
      page-title
      filtros/cards/tabelas/painéis
  drawer/janela interna
```

Padrões:

- Sidebar lateral em desktop.
- Sidebar minimizável para ampliar área útil.
- Topbar fixa com busca global e perfil do escritório.
- Workspace com `padding: 28px`.
- Conteúdo centralizado quando sidebar estiver recolhida.
- Nenhum clique interno deve mandar para página inexistente.

## 7. Sidebar

A sidebar é um elemento de identidade forte. Deve ser funcional, escura e refinada.

Características:

- Fundo `#071321` com leve presença de azul e dourado.
- Borda direita azul discreta.
- Itens com ícone, nome e metadado.
- Estado ativo com faixa vertical dourada.
- Hover azul sutil.
- Modo recolhido com apenas ícones.

Itens padrão:

```js
[
  ["dashboard", "⌂", "Dashboard", "Operação"],
  ["clientes", "♙", "Clientes", "Carteira"],
  ["processos", "§", "Processos", "Prazos"],
  ["tarefas", "✓", "Tarefas", "Fila"],
  ["agenda", "▣", "Agenda", "Jurídica"],
  ["financeiro", "$", "Financeiro", "Recebíveis"],
  ["socios", "♙♙", "Painel dos Sócios", "Decisão"],
  ["relatorios", "▤", "Relatórios", "Assistidos"],
  ["central", "__logo__", "Central LEX.OS", "Supervisão"],
  ["onboarding", "→", "Onboarding", "Roteiro"]
]
```

Configurações não ficam na sidebar principal neste modelo. Elas ficam no menu do perfil.

## 8. Topbar e perfil

A topbar deve ter:

- busca global;
- perfil do escritório;
- menu com Perfil, Configurações, Restaurar dados e Sair.

O perfil deve abrir uma subpágina real, não apenas um popover. Essa página deve conter:

- foto do perfil;
- nome do escritório;
- responsável principal;
- e-mail administrativo;
- telefone/WhatsApp;
- e-mail e contato de recuperação;
- preferência de contato;
- segurança e auditoria do perfil.

## 9. Botões

### Botão padrão

Usar para ações secundárias:

```css
.btn {
  min-height: 40px;
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 10px 14px;
  background: rgba(234, 244, 255, 0.06);
  color: var(--ink);
  font-family: "Segoe UI", sans-serif;
  font-size: 13px;
  font-weight: 800;
}
```

### Botão principal

Usar para ação mais importante da tela:

```css
.btn.primary {
  border-color: var(--accent);
  background: var(--accent);
  color: #000611;
}
```

Exemplos:

- Entrar em modo demonstração.
- Cadastrar cliente.
- Novo processo.
- Criar tarefa.
- Nova cobrança.
- Gerar relatório.
- Executar apoio assistido.
- Salvar perfil.

### Botão destrutivo ou saída

Usar para sair, remover, arquivar ou ações de risco:

```css
.btn.warn {
  border-color: rgba(255, 107, 95, 0.38);
  background: rgba(255, 107, 95, 0.12);
  color: var(--danger);
}
```

## 10. Cards e painéis

Todo card deve respeitar:

- fundo `var(--panel)`;
- borda `var(--line)`;
- raio máximo de `8px`;
- sombra azul sutil;
- texto sem vazamento;
- `min-width: 0` quando estiver em grid.

Base:

```css
.panel,
.metric,
.record {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: 0 10px 30px rgba(0, 178, 255, 0.08);
}
```

Não usar cards dentro de cards, exceto em casos controlados como listas de status no perfil.

## 11. Cards como atalhos

Quando um card representar uma informação que leva a uma área do sistema, ele deve ser clicável.

Padrão visual:

- hover com borda azul;
- leve elevação;
- indicação `Abrir` em dourado;
- rota interna existente.

Exemplo de intenção:

```html
<button class="metric metric-link" data-shortcut="clientes">
  <span>Clientes ativos</span>
  <strong>4</strong>
  <em>2 em atenção</em>
</button>
```

Regra: todo `data-shortcut` precisa apontar para uma página registrada no mapa de rotas.

## 12. Métricas

Usar em dashboard, painel executivo e mapas operacionais.

Regras:

- número em destaque serifado;
- título em caixa alta sans-serif;
- nota secundária curta;
- valores longos devem reduzir fonte, não quebrar em duas linhas;
- nunca permitir sobreposição entre número, descrição e `Abrir`.

## 13. Registros, listas e prioridades

Usar `record` para:

- fila de prioridades;
- clientes em atenção;
- processos críticos;
- tarefas;
- histórico de relatórios;
- execuções da Central LEX.OS.

Estrutura:

```text
record
  título
  descrição curta
  badges/status
  indicação de atalho quando clicável
```

Badges devem ter espaçamento vertical suficiente:

```css
.badges {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 16px;
}
```

## 14. Badges e estados

Estados:

- `danger`: vencido, alto risco, atrasado.
- `warn`: médio risco, em atenção, urgente.
- `ok`: ativo, confirmado, concluído.
- `info`: prazo, reunião, audiência, módulo informativo.

Não apertar badges em linhas curtas. O espaçamento entre linhas deve impedir colisão visual.

## 15. Formulários

Campos seguem o mesmo estilo da busca:

```css
.field input,
.field select,
.field textarea,
.search-input {
  min-height: 42px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(234, 244, 255, 0.06);
  color: var(--ink);
  padding: 10px 12px;
}
```

Padrões:

- labels sempre acima do campo;
- formulários internos em grid;
- botões de salvar sempre em dourado;
- todo formulário demo deve informar que nada foi enviado externamente.

## 16. Tabelas

Usar para carteiras densas:

- clientes;
- processos;
- tarefas;
- financeiro;
- relatórios.

Regras:

- cabeçalho em caixa alta;
- linhas com borda discreta;
- ações à direita;
- badges dentro das células com espaçamento adequado;
- em mobile, permitir overflow horizontal.

## 17. Agenda e calendário

Agenda deve ter:

- filtros em botões/pílulas;
- cards de evento;
- card de adicionar evento;
- card de calendário mensal;
- visual mensal em grade com dias e eventos.

O calendário mensal deve funcionar como visual de consulta, parecido com calendário operacional:

- mês em destaque;
- dias em quadriculado;
- eventos dentro do dia;
- clique em evento abre módulo vinculado;
- sem integração externa no MVP.

## 18. Drawers e janelas internas

Usar drawer para:

- ações simuladas;
- formulários rápidos;
- confirmações;
- busca global;
- apoio assistido.

Regras:

- abrir dentro do sistema;
- nunca redirecionar para página externa inexistente;
- sempre ter botão de fechar;
- sempre deixar claro quando for modo demo.

## 19. Central LEX.OS

Identidade visual:

- usar símbolo Lexos como ícone do módulo;
- linguagem de supervisão humana;
- botões principais em dourado;
- histórico em cards/listas;
- textarea para briefing interno;
- nunca sugerir envio automático externo nesta versão.

Módulos padrão:

- Dossiê rápido;
- Prompts;
- Agentes guiados;
- Fluxos;
- Playbooks;
- Relatórios.

## 20. Responsividade

Breakpoints atuais:

- até `1120px`: grids passam para duas colunas ou uma coluna dependendo do bloco.
- até `720px`: layout empilha, topbar vira coluna, tabelas ganham overflow horizontal.

Regras:

- nenhum texto pode invadir outro card;
- valores monetários e números longos devem usar fonte compacta;
- sidebar recolhida deve manter ícones centralizados;
- cards de mapa devem ter altura suficiente para manter `Abrir` sem sobreposição.

## 21. Acessibilidade

Padrões já adotados:

- `skip-link`;
- `.sr-only` para labels invisíveis;
- `focus-visible` com contorno dourado;
- botões reais em vez de divs clicáveis;
- `aria-label` em cards clicáveis;
- `aria-expanded` no menu de perfil.

Regras:

- todo botão de ícone precisa de `aria-label` ou `title`;
- formulários precisam de `label`;
- navegação por teclado deve funcionar;
- foco não pode ficar escondido atrás da topbar/sidebar.

## 22. Navegação anti-404

Todo sistema Lexos que seguir este padrão deve ter:

- mapa único de páginas/rotas;
- fallback para dashboard quando rota interna não existir;
- cards com `data-shortcut` apontando apenas para páginas registradas;
- ações simuladas em drawer/janela interna;
- links externos evitados no MVP.

Padrão:

```js
const pages = {
  dashboard: renderDashboard,
  clientes: renderClients,
  processos: renderCases,
  tarefas: renderTasks,
  agenda: renderAgenda,
  financeiro: renderFinance,
  socios: renderPartners,
  relatorios: renderReports,
  central: renderCentral,
  perfil: renderProfile,
  config: renderSettings,
  onboarding: renderOnboarding
};

const render = pages[currentPage] || pages.dashboard;
if (!pages[currentPage]) currentPage = "dashboard";
```

## 23. Componentes mínimos para reutilizar

Todo novo sistema Lexos deve começar com estes blocos:

- `pageHeader(kicker, title, description, action)`;
- `metric(label, value, note, page)`;
- `front(label, value, note, page)`;
- `record(title, text, badges, page)`;
- `filters(labels)`;
- `table(headers, rows)`;
- `riskBadge(value)`;
- `openDrawer(title, content)`;
- `toast(message)`;
- `renderApp()` com sidebar, topbar e workspace.

## 24. Linguagem de interface

Tom:

- direto;
- jurídico-operacional;
- premium;
- sem informalidade excessiva;
- sem prometer automações externas no MVP.

Exemplos bons:

- "Operação do escritório"
- "Carteira processual"
- "Fila de prioridades humanas"
- "Apoio assistido supervisionado"
- "Sem envio externo automático"
- "Registro demonstrativo"

Evitar:

- "Clique aqui para saber mais"
- "Experiência incrível"
- "Automação total"
- "IA autônoma"
- textos longos explicando como usar a tela dentro da própria UI.

## 25. Checklist para novos sistemas Lexos

Antes de considerar uma tela pronta:

- [ ] Usa os tokens oficiais de cor.
- [ ] Mantém fundo quadriculado sutil e fixo.
- [ ] Usa sidebar/topbar quando for sistema interno.
- [ ] Botão principal está em `--accent`.
- [ ] Navegação ativa usa azul + detalhe dourado.
- [ ] Cards clicáveis têm hover e indicação `Abrir`.
- [ ] Nenhum texto vaza do card.
- [ ] Badges têm espaçamento vertical suficiente.
- [ ] Valores longos reduzem fonte em vez de quebrar.
- [ ] Rotas internas não geram 404.
- [ ] Formulários têm labels.
- [ ] Foco de teclado é visível.
- [ ] Mobile não sobrepõe textos.
- [ ] Ações demo deixam claro que nada foi enviado externamente.

## 26. Arquivos de referência atuais

Use estes arquivos como base técnica:

```text
LEXOS 2.0/index.html
LEXOS 2.0/styles.css
LEXOS 2.0/script.js
LEXOS 2.0/assets/lexos-symbol.png
```

Este guia representa o padrão visual atual do Lexos Control e deve ser atualizado sempre que a identidade visual for refinada.
