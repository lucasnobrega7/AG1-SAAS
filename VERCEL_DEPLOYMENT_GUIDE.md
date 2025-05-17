# Guia de Deploy Vercel para AG1-SAAS

## Passo a Passo Completo

### 1. Preparação do Repositório
✅ Repositório GitHub: `lucasnobrega7/AG1-SAAS`
✅ Estrutura Monorepo com Turborepo
✅ Duas aplicações: `apps/www` e `apps/dashboard`
✅ Variáveis de ambiente configuradas no Vercel

### 2. Deploy via Interface Web da Vercel

#### A. Criar Projeto para WWW
1. Acesse: https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione: `lucasnobrega7/AG1-SAAS`
4. Configure:
   - **Project Name**: `ag1-saas-www`
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/www`
   - **Build Command**: `cd ../.. && pnpm install && pnpm run build --filter=www`
   - **Output Directory**: `.next`
   - **Install Command**: `cd ../.. && pnpm install`

5. Configure as Variáveis de Ambiente:
   ```
   NEXT_PUBLIC_POSTHOG_KEY=phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua
   ```

6. Clique em "Deploy"

#### B. Criar Projeto para Dashboard
1. Acesse: https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione: `lucasnobrega7/AG1-SAAS` (mesmo repositório)
4. Configure:
   - **Project Name**: `ag1-saas-dashboard`
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/dashboard`
   - **Build Command**: `cd ../.. && pnpm install && pnpm run build --filter=dashboard`
   - **Output Directory**: `.next`
   - **Install Command**: `cd ../.. && pnpm install`

5. Configure as Variáveis de Ambiente:
   ```
   NEXT_PUBLIC_POSTHOG_KEY=phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua
   NEXT_PUBLIC_SUPABASE_URL=https://jiasbwazaicmcckmehtn.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTk3MTcsImV4cCI6MjA2MjU5NTcxN30.ylb91zHcJ_RN7s_pOUDIjx9YM2gq_Lp1JtW3upmZII4
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cmVsaWV2ZWQtYmx1ZWpheS00NS5jbGVyay5hY2NvdW50cy5kZXYk
   CLERK_SECRET_KEY=sk_test_4tGzEGNX92PoeZaxfsONPve7oe70keBazBiQuldEq4
   SUPABASE_JWT_SECRET=972VoGGRqBqEzvCkWphQ96KGCPucWhRhgB5stgJrGJxDO8Xd9ftaFfjivSu8+gA7sJ4AODdl0rJW7mGQSRyqrQ==
   SUPABASE_SERVICE_ROLE=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzAxOTcxNywiZXhwIjoyMDYyNTk1NzE3fQ.8ofzu7Hhe-Hokju4B6M51bnlvH1HvtGOoAExHLuuZj8
   ```

6. Clique em "Deploy"

### 3. Configurar Domínios

#### Para WWW:
1. Na aba "Settings" → "Domains"
2. Adicione:
   - `agentesdeconversao.com.br`
   - `www.agentesdeconversao.com.br`
3. Configure DNS no provedor:
   - A Record: `@` → IP da Vercel
   - CNAME: `www` → `cname.vercel-dns.com`

#### Para Dashboard:
1. Na aba "Settings" → "Domains"
2. Adicione:
   - `dashboard.agentesdeconversao.com.br`
3. Configure DNS no provedor:
   - CNAME: `dashboard` → `cname.vercel-dns.com`

### 4. URLs Finais
- **Site Principal**: https://agentesdeconversao.com.br
- **Dashboard**: https://dashboard.agentesdeconversao.com.br

### 5. Deploy via CLI (Alternativa)

Se preferir usar a CLI:

```bash
# Deploy WWW
cd /Users/lucasrnobrega/ag1-deploy/apps/www
vercel --prod

# Deploy Dashboard
cd /Users/lucasrnobrega/ag1-deploy/apps/dashboard
vercel --prod
```

### 6. Configuração Adicional

1. **Automatic Deployments**: Habilitado por padrão
2. **Preview Deployments**: Criados automaticamente para PRs
3. **Ignored Build Step**: Configurado nos arquivos vercel.json

### 7. Solução de Problemas

Se encontrar erros:
1. Verifique se as dependências estão instaladas
2. Certifique-se de que o pnpm está instalado globalmente
3. Verifique as variáveis de ambiente
4. Use `vercel logs` para debugging