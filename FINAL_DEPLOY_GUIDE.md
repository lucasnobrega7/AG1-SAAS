# Guia Final de Deploy - AG1-SAAS na Vercel

## Status Atual
- ✅ Repositório configurado no GitHub
- ✅ Estrutura de monorepo preparada
- ✅ Variáveis de ambiente configuradas no Vercel
- ✅ Deploy inicial executado

## Próximos Passos para Finalizar

### Opção 1: Via Interface Web (Recomendado)

1. **Acesse o link de importação**:
   ```
   https://vercel.com/import/git?s=https://github.com/lucasnobrega7/AG1-SAAS
   ```

2. **Configure o projeto WWW**:
   - Name: `ag1-saas-www`
   - Root Directory: `apps/www`
   - Build Command: `cd ../.. && pnpm install && pnpm run build --filter=www`
   - Install Command: `pnpm install`
   
3. **Configure o projeto Dashboard**:
   - Name: `ag1-saas-dashboard`
   - Root Directory: `apps/dashboard`
   - Build Command: `cd ../.. && pnpm install && pnpm run build --filter=dashboard`
   - Install Command: `pnpm install`

### Opção 2: Via Vercel CLI

```bash
# Deploy WWW
cd /Users/lucasrnobrega/ag1-deploy/apps/www
vercel --prod --yes

# Deploy Dashboard
cd /Users/lucasrnobrega/ag1-deploy/apps/dashboard
vercel --prod --yes
```

### Configuração de Domínios

Após o deploy bem-sucedido, configure os domínios:

1. **Para WWW**:
   ```bash
   vercel alias set agentesdeconversao.com.br
   vercel alias set www.agentesdeconversao.com.br
   ```

2. **Para Dashboard**:
   ```bash
   vercel alias set dashboard.agentesdeconversao.com.br
   ```

### Verificação Final

1. Teste as URLs:
   - https://agentesdeconversao.com.br
   - https://dashboard.agentesdeconversao.com.br

2. Verifique as variáveis de ambiente no Vercel Dashboard

3. Configure os webhooks se necessário

## Variáveis de Ambiente Já Configuradas

### WWW:
- `NEXT_PUBLIC_POSTHOG_KEY`

### Dashboard:
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `SUPABASE_JWT_SECRET`
- `SUPABASE_SERVICE_ROLE`

## Arquivos Criados

1. `DEPLOY_INSTRUCTIONS.md` - Instruções básicas
2. `VERCEL_DEPLOYMENT_GUIDE.md` - Guia detalhado
3. `deploy-vercel.sh` - Script automatizado
4. `.github/workflows/deploy.yml` - CI/CD

## Suporte

Se encontrar problemas:
1. Verifique os logs: `vercel logs`
2. Confirme as variáveis de ambiente
3. Verifique as permissões do GitHub