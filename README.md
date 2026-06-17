# Lexos Control

Sistema interno demonstrativo para gestão de escritório jurídico.

## Escopo desta versão

- App criado do absoluto zero dentro da pasta `LEXOS 2.0`.
- Sem Next, React, Supabase, banco externo ou integração real.
- Funciona abrindo `index.html` no navegador.
- Login em modo demonstração.
- Dados fictícios persistidos no `localStorage` do navegador.
- Botão para restaurar a base demo.
- Módulos demonstrativos: Dashboard, Clientes, Processos, Tarefas, Agenda, Financeiro, Painel dos Sócios, Relatórios, Central LEX.OS, Configurações e Onboarding.
- Ações de tela abrem janelas internas com formulários, detalhes ou confirmações, sem navegar para outra URL.

## Paleta visual aplicada

- Principal: `#00B2FF`
- Secundária: `#0A1A2A`
- Plano de fundo: `#000611`
- Texto principal: `#EAF4FF`
- Texto secundário: `#C9D3DD`
- Detalhe premium: `#C8A75C`

## Como abrir com servidor local

Na pasta `LEXOS 2.0`, rode:

```powershell
node server.cjs
```

Depois acesse:

`http://localhost:4173`

O servidor possui fallback para `index.html`, então rotas digitadas manualmente não caem em página 404.

## Como abrir sem servidor

Também é possível abrir diretamente:

`C:\Users\paull\OneDrive\Documentos\Lexos restyle\LEXOS 2.0\index.html`

## Próximas etapas recomendadas

1. Transformar ações simuladas em formulários reais locais.
2. Criar CRUD de clientes como primeiro módulo completo.
3. Depois conectar processos, tarefas, agenda e financeiro.
4. Só depois planejar autenticação real, banco de dados e permissões.
