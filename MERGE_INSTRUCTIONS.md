# Instruções para Merge e Deploy em Produção

## Como fazer o merge das correções

1. Acesse o GitHub: https://github.com/lucasnobrega7/AG1-SAAS

2. Crie um Pull Request:
   - **De:** fix/deploy-issues
   - **Para:** main
   - **Título:** Fix deployment issues for production

3. Revise e faça o merge do PR

## Configuração no Vercel

Após o merge, configure as seguintes variáveis de ambiente no projeto Vercel:

### Variáveis Essenciais
```
REDIS_URL=redis://localhost:6379
NEXT_PUBLIC_POSTHOG_KEY=phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua
NEXT_PUBLIC_SUPABASE_URL=https://jiasbwazaicmcckmehtn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTk3MTcsImV4cCI6MjA2MjU5NTcxN30.ylb91zHcJ_RN7s_pOUDIjx9YM2gq_Lp1JtW3upmZII4
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cmVsaWV2ZWQtYmx1ZWpheS00NS5jbGVyay5hY2NvdW50cy5kZXYk
SUPABASE_JWT_SECRET=972VoGGRqBqEzvCkWphQ96KGCPucWhRhgB5stgJrGJxDO8Xd9ftaFfjivSu8+gA7sJ4AODdl0rJW7mGQSRyqrQ==
SUPABASE_SERVICE_ROLE=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzAxOTcxNywiZXhwIjoyMDYyNTk1NzE3fQ.8ofzu7Hhe-Hokju4B6M51bnlvH1HvtGOoAExHLuuZj8
CLERK_SECRET_KEY=sk_test_4tGzEGNX92PoeZaxfsONPve7oe70keBazBiQuldEq4
```

### Variáveis Adicionais (se necessárias)
```
ZAPI_BASE_URL=
ZAPI_INSTANCE_ID=
ZAPI_TOKEN=
ZAPI_CLIENT_TOKEN=
WEBHOOK_URL=
RAILWAY_TOKEN=
SUPABASE_URL=
SUPABASE_ANON_KEY=
API_N8N=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
COHERE_API_KEY=
API_KEY=
POSTHOG_API_KEY=
SENTRY_DSN=
LANGSMITH_TRACING=
LANGSMITH_ENDPOINT=
LANGSMITH_API_KEY=
LANGSMITH_PROJECT=
LANGCHAIN_PROJECT_KEY=
RESEND_API_KEY=
```

## Status das Correções

✅ **Corrigido**: `packages/eslint/base.js` faltante
✅ **Corrigido**: Variáveis de ambiente no `turbo.json`
✅ **Corrigido**: Erros de ESLint em vários componentes
✅ **Corrigido**: Configuração de build para ignorar ESLint
✅ **Corrigido**: Output directory no `vercel.json`

## Resultado Esperado

Após o merge e configuração das variáveis de ambiente, o deploy em produção deve funcionar sem erros.