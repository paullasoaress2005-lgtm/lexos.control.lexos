# Lexos Control - Esqueleto do Sistema

## Decisão desta fase

O sistema foi criado do absoluto zero dentro de `LEXOS 2.0`, como uma aplicação estática de página única.

Arquivos desta versão:

- `index.html`: entrada única do sistema.
- `styles.css`: camada visual e responsiva inicial.
- `script.js`: estado local, navegação interna, dados demo e ações simuladas.
- `server.cjs`: servidor local com fallback para `index.html`.
- `README.md`: instruções de abertura e próximos passos.

## Garantia contra erro 404

A versão atual não possui rotas internas por arquivo, nem redirecionamentos para outras páginas.

Toda navegação do menu acontece por botões dentro da mesma página `index.html`, trocando apenas o conteúdo renderizado em JavaScript. O servidor local também possui fallback: se uma URL inexistente for acessada, ele entrega `index.html` em vez de uma página 404.

As ações do sistema também abrem janelas internas, formulários ou confirmações dentro da própria SPA. Nenhum botão de cliente, processo, tarefa, agenda, financeiro, relatório ou Central LEX.OS aponta para outra página.

## Módulos no esqueleto

1. Login demo
2. Dashboard executivo
3. Clientes
4. Processos
5. Tarefas
6. Agenda
7. Financeiro
8. Painel dos Sócios
9. Relatórios
10. Central LEX.OS
11. Configurações
12. Onboarding

## Dados e persistência

Os dados são fictícios e ficam no navegador via `localStorage`.

O acesso demo fica na sessão atual via `sessionStorage`.

## Próximo módulo recomendado

O primeiro módulo completo deve ser `Clientes`, porque ele alimenta Processos, Tarefas, Agenda, Financeiro, Relatórios e Central LEX.OS.

Para o próximo ciclo, o módulo de Clientes deve sair de formulário estrutural para CRUD local real: criar, editar, arquivar, filtrar e abrir detalhe do cliente sem sair da tela.
