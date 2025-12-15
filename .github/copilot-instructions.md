# CV Portfolio - Instruções do Projeto

## Stack Tecnológica
- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 4
- **Animações**: Framer Motion
- **Tema**: Dark/Light mode com next-themes

## Estrutura do Projeto
```
src/
├── app/
│   ├── layout.tsx      # Layout raiz com providers
│   ├── page.tsx        # Página inicial
│   └── globals.css     # Estilos globais
├── components/
│   ├── ui/             # Componentes reutilizáveis
│   ├── sections/       # Seções da página
│   └── layout/         # Header, Footer
└── lib/
    └── utils.ts        # Utilitários
```

## Convenções de Código
- Usar componentes funcionais com TypeScript
- Preferir Server Components quando possível
- Usar 'use client' apenas quando necessário
- Nomes de componentes em PascalCase
- Animações com Framer Motion para transições suaves

## Comandos
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Executar build
- `npm run lint` - Verificar código
