# Solução para erro "No Output Directory"

## O problema
O erro `No Output Directory named ".next" found` ocorre porque o Vercel não encontra o diretório de build do Next.js no monorepo.

## Solução via Painel do Vercel

### Opção 1: Configurar Root Directory (Recomendado)
1. Acesse o painel do Vercel
2. Vá para Settings > General
3. Em "Root Directory", configure: `apps/www`
4. Em "Build Command", use: `cd ../.. && pnpm turbo run build --filter=www`
5. Em "Output Directory", deixe como: `.next`
6. Em "Install Command", use: `cd ../.. && pnpm install`

### Opção 2: Manter Root na raiz
1. Acesse o painel do Vercel
2. Vá para Settings > General
3. Em "Root Directory", deixe vazio
4. Em "Output Directory", configure: `apps/www/.next`
5. Em "Build Command": `pnpm turbo run build`
6. Em "Install Command": `pnpm install`

## Configuração adicional recomendada

1. Em Settings > Git
2. Em "Ignored Build Step", configure: `npx turbo-ignore`

Isso garantirá que apenas os apps alterados sejam reconstruídos.

## Variáveis de ambiente

Certifique-se de que todas as variáveis estão configuradas:
- NEXT_PUBLIC_POSTHOG_KEY
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- SUPABASE_JWT_SECRET
- SUPABASE_SERVICE_ROLE
- CLERK_SECRET_KEY
- REDIS_URL

## Deploy separado para Dashboard

Se quiser deployar o dashboard separadamente:
1. Crie um novo projeto no Vercel
2. Use Root Directory: `apps/dashboard`
3. Configure as mesmas variáveis de ambiente