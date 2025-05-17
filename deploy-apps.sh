#!/bin/bash

# Deploy apps do AG1-SAAS monorepo

echo "Iniciando deploy do AG1-SAAS..."

# Deploy do root primeiro (configuração principal)
echo "Configurando projeto principal..."
cd /Users/lucasrnobrega/ag1-deploy
vercel link --yes

# Configurar variáveis de ambiente via CLI
echo "Configurando variáveis de ambiente..."

# WWW
echo "Configurando WWW..."
VERCEL_ORG_ID=$(cat .vercel/project.json | grep orgId | cut -d'"' -f4)
VERCEL_PROJECT_ID=$(cat .vercel/project.json | grep projectId | cut -d'"' -f4)

# Deploy WWW
echo "Deploy WWW..."
cd apps/www
cat > vercel.json << EOF
{
  "buildCommand": "cd ../.. && pnpm install && pnpm run build --filter=www",
  "installCommand": "cd ../.. && pnpm install",
  "framework": "nextjs"
}
EOF

# Link e deploy
vercel link --yes
vercel --prod

# Dashboard
echo "Deploy Dashboard..."
cd ../dashboard
cat > vercel.json << EOF
{
  "buildCommand": "cd ../.. && pnpm install && pnpm run build --filter=dashboard",
  "installCommand": "cd ../.. && pnpm install",
  "framework": "nextjs"
}
EOF

# Link e deploy
vercel link --yes
vercel --prod

echo "Deploy concluído!"