# Import URL para Vercel

Use este link para importar o projeto na Vercel:

https://vercel.com/import/git?s=https://github.com/lucasnobrega7/AG1-SAAS

## Para WWW App:
1. Acesse o link acima
2. Configure:
   - Project Name: `ag1-saas-www`
   - Root Directory: `apps/www`
   - Framework Preset: Next.js
   - Build Command: `cd ../.. && pnpm install && pnpm run build --filter=www`
   - Output Directory: `.next`

## Para Dashboard App:
1. Acesse o link novamente
2. Configure:
   - Project Name: `ag1-saas-dashboard`
   - Root Directory: `apps/dashboard`
   - Framework Preset: Next.js
   - Build Command: `cd ../.. && pnpm install && pnpm run build --filter=dashboard`
   - Output Directory: `.next`

## Variáveis de Ambiente

### Para WWW:
```
NEXT_PUBLIC_POSTHOG_KEY=phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua
```

### Para Dashboard:
```
NEXT_PUBLIC_POSTHOG_KEY=phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua
NEXT_PUBLIC_SUPABASE_URL=https://jiasbwazaicmcckmehtn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTk3MTcsImV4cCI6MjA2MjU5NTcxN30.ylb91zHcJ_RN7s_pOUDIjx9YM2gq_Lp1JtW3upmZII4
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cmVsaWV2ZWQtYmx1ZWpheS00NS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_4tGzEGNX92PoeZaxfsONPve7oe70keBazBiQuldEq4
```