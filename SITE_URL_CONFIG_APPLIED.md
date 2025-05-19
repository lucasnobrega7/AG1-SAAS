# NEXT_PUBLIC_SITE_URL Configuração Aplicada

## Configurações Adicionadas

### 1. apps/www/next.config.ts
```typescript
env: {
  NEXT_PUBLIC_SITE_URL: "https://agentesdeconversao.com.br",
},
images: {
  domains: ["agentesdeconversao.com.br", "www.agentesdeconversao.com.br"],
},
```

### 2. apps/dashboard/next.config.ts
```typescript
env: {
  NEXT_PUBLIC_SITE_URL: "https://agentesdeconversao.com.br",
},
images: {
  domains: ["agentesdeconversao.com.br", "www.agentesdeconversao.com.br"],
},
```

### 3. turbo.json
- Adicionado `NEXT_PUBLIC_SITE_URL` ao `globalEnv`
- Adicionado `NEXT_PUBLIC_SITE_URL` ao `env` da task de build

## Como Usar

A variável está disponível em qualquer lugar do código como:

```javascript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

## Próximos Passos

1. **Adicione no Vercel Dashboard**:
   - Vá para Settings > Environment Variables
   - Adicione: `NEXT_PUBLIC_SITE_URL = https://agentesdeconversao.com.br`
   - Selecione todos os ambientes (Production, Preview, Development)

2. **Faça um novo deploy** para aplicar as mudanças

## Benefícios

- URLs consistentes em toda a aplicação
- Suporte para componente Image do Next.js
- Configuração centralizada
- Disponível em build time e runtime