#!/bin/bash

# Script para configurar variáveis de ambiente no Vercel

echo "Configurando variáveis de ambiente no Vercel..."

# Adicionar REDIS_URL (necessária para o turbo.json)
vercel env add REDIS_URL production <<EOF
redis://localhost:6379
EOF

# Adicionar variáveis da aplicação
vercel env add NEXT_PUBLIC_POSTHOG_KEY production <<EOF
phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua
EOF

vercel env add NEXT_PUBLIC_SUPABASE_URL production <<EOF
https://jiasbwazaicmcckmehtn.supabase.co
EOF

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production <<EOF
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTk3MTcsImV4cCI6MjA2MjU5NTcxN30.ylb91zHcJ_RN7s_pOUDIjx9YM2gq_Lp1JtW3upmZII4
EOF

vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY production <<EOF
pk_test_cmVsaWV2ZWQtYmx1ZWpheS00NS5jbGVyay5hY2NvdW50cy5kZXYk
EOF

vercel env add SUPABASE_JWT_SECRET production <<EOF
972VoGGRqBqEzvCkWphQ96KGCPucWhRhgB5stgJrGJxDO8Xd9ftaFfjivSu8+gA7sJ4AODdl0rJW7mGQSRyqrQ==
EOF

vercel env add SUPABASE_SERVICE_ROLE production <<EOF
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzAxOTcxNywiZXhwIjoyMDYyNTk1NzE3fQ.8ofzu7Hhe-Hokju4B6M51bnlvH1HvtGOoAExHLuuZj8
EOF

vercel env add CLERK_SECRET_KEY production <<EOF
sk_test_4tGzEGNX92PoeZaxfsONPve7oe70keBazBiQuldEq4
EOF

echo "Variáveis de ambiente configuradas com sucesso!"