#!/bin/bash

echo "Configurando deploy direto no Vercel..."

# Limpar configurações anteriores
rm -rf .vercel apps/www/.vercel apps/dashboard/.vercel

# WWW App
echo "Configurando WWW App..."
cd /Users/lucasrnobrega/ag1-deploy/apps/www

# Criar vercel.json temporário
cat > vercel.json << EOF
{
  "framework": "nextjs",
  "buildCommand": "cd ../.. && pnpm install && pnpm run build --filter=www",
  "installCommand": "cd ../.. && pnpm install"
}
EOF

# Deploy
vercel --prod --yes

# Dashboard App
echo "Configurando Dashboard App..."
cd /Users/lucasrnobrega/ag1-deploy/apps/dashboard

# Criar vercel.json temporário
cat > vercel.json << EOF
{
  "framework": "nextjs",
  "buildCommand": "cd ../.. && pnpm install && pnpm run build --filter=dashboard",
  "installCommand": "cd ../.. && pnpm install"
}
EOF

# Deploy
vercel --prod --yes

echo "Deploy concluído!"
echo ""
echo "Acesse o Vercel Dashboard para:"
echo "1. Configurar os domínios customizados"
echo "2. Verificar as variáveis de ambiente"
echo "3. Monitorar o status dos deploys"