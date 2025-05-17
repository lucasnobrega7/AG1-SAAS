# Instruções de Deploy para Vercel

## Configuração Inicial

1. **Acesse o Dashboard da Vercel**: https://vercel.com/dashboard
2. **Clique em "Import Project"**
3. **Selecione o repositório**: lucasnobrega7/AG1-SAAS
4. **Configure o projeto**:
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Install Command: `pnpm install`
   - Build Command: `pnpm build`

## Variáveis de Ambiente

Na aba "Environment Variables", adicione as seguintes variáveis para Production:

### Variáveis Públicas
- `NEXT_PUBLIC_POSTHOG_KEY`: `phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua`
- `NEXT_PUBLIC_SUPABASE_URL`: `https://jiasbwazaicmcckmehtn.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTk3MTcsImV4cCI6MjA2MjU5NTcxN30.ylb91zHcJ_RN7s_pOUDIjx9YM2gq_Lp1JtW3upmZII4`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: `pk_test_cmVsaWV2ZWQtYmx1ZWpheS00NS5jbGVyay5hY2NvdW50cy5kZXYk`

### Variáveis Privadas
- `SUPABASE_JWT_SECRET`: `972VoGGRqBqEzvCkWphQ96KGCPucWhRhgB5stgJrGJxDO8Xd9ftaFfjivSu8+gA7sJ4AODdl0rJW7mGQSRyqrQ==`
- `SUPABASE_SERVICE_ROLE`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzAxOTcxNywiZXhwIjoyMDYyNTk1NzE3fQ.8ofzu7Hhe-Hokju4B6M51bnlvH1HvtGOoAExHLuuZj8`
- `CLERK_SECRET_KEY`: `sk_test_4tGzEGNX92PoeZaxfsONPve7oe70keBazBiQuldEq4`

## Configuração de Domínios

1. Na aba "Domains", adicione:
   - `agentesdeconversao.com.br` (principal)
   - `www.agentesdeconversao.com.br` (redirecionamento)
   - `dashboard.agentesdeconversao.com.br` (dashboard)

2. Configure os DNS no seu provedor:
   - Tipo: CNAME
   - Nome: @ (ou www, dashboard)
   - Valor: cname.vercel-dns.com

## Deploy

1. Clique em "Deploy"
2. Aguarde o build completar
3. Teste as URLs:
   - https://agentesdeconversao.com.br
   - https://dashboard.agentesdeconversao.com.br

## Notas Importantes

- O projeto usa um monorepo com Turborepo
- Aplicação principal está em `/apps/www`
- Dashboard está em `/apps/dashboard`
- Bibliotecas compartilhadas em `/packages/`

## Comandos Úteis

```bash
# Deploy via CLI
vercel --prod

# Verificar logs
vercel logs

# Configurar domínio
vercel domains add agentesdeconversao.com.br
```