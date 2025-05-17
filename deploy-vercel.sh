#!/bin/bash

# Script para Deploy no Vercel
echo "Iniciando deploy do AG1-SAAS no Vercel..."

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo "Erro: Execute este script na raiz do projeto"
    exit 1
fi

# Instalar Vercel CLI se necessário
if ! command -v vercel &> /dev/null; then
    echo "Instalando Vercel CLI..."
    npm install -g vercel
fi

# Login no Vercel
echo "Fazendo login no Vercel..."
vercel login

# Deploy da aplicação WWW
echo "Iniciando deploy da aplicação WWW..."
cd apps/www

# Criar arquivo vercel.json temporário
cat > vercel.json << EOF
{
  "buildCommand": "cd ../.. && pnpm install && pnpm run build --filter=www",
  "outputDirectory": ".next",
  "installCommand": "cd ../.. && pnpm install",
  "framework": "nextjs"
}
EOF

# Deploy para produção
echo "Fazendo deploy de www para produção..."
vercel --prod --yes

# Adicionar domínios
echo "Configurando domínios para www..."
vercel alias set agentesdeconversao.com.br
vercel alias set www.agentesdeconversao.com.br

# Voltar para raiz
cd ../..

# Deploy da aplicação Dashboard
echo "Iniciando deploy da aplicação Dashboard..."
cd apps/dashboard

# Criar arquivo vercel.json temporário
cat > vercel.json << EOF
{
  "buildCommand": "cd ../.. && pnpm install && pnpm run build --filter=dashboard",
  "outputDirectory": ".next",
  "installCommand": "cd ../.. && pnpm install",
  "framework": "nextjs"
}
EOF

# Deploy para produção
echo "Fazendo deploy de dashboard para produção..."
vercel --prod --yes

# Adicionar domínio
echo "Configurando domínio para dashboard..."
vercel alias set dashboard.agentesdeconversao.com.br

# Voltar para raiz
cd ../..

echo "Deploy concluído com sucesso!"
echo ""
echo "URLs de produção:"
echo "- Site principal: https://agentesdeconversao.com.br"
echo "- Dashboard: https://dashboard.agentesdeconversao.com.br"
echo ""
echo "Lembre-se de configurar as variáveis de ambiente no Vercel Dashboard!"