#!/bin/bash

# Criar arquivo temporário para cada variável
echo "phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua" > temp.txt
vercel env add NEXT_PUBLIC_POSTHOG_KEY production < temp.txt

echo "https://jiasbwazaicmcckmehtn.supabase.co" > temp.txt
vercel env add NEXT_PUBLIC_SUPABASE_URL production < temp.txt

echo "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTk3MTcsImV4cCI6MjA2MjU5NTcxN30.ylb91zHcJ_RN7s_pOUDIjx9YM2gq_Lp1JtW3upmZII4" > temp.txt
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production < temp.txt

echo "pk_test_cmVsaWV2ZWQtYmx1ZWpheS00NS5jbGVyay5hY2NvdW50cy5kZXYk" > temp.txt
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY production < temp.txt

echo "972VoGGRqBqEzvCkWphQ96KGCPucWhRhgB5stgJrGJxDO8Xd9ftaFfjivSu8+gA7sJ4AODdl0rJW7mGQSRyqrQ==" > temp.txt
vercel env add SUPABASE_JWT_SECRET production < temp.txt

echo "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzAxOTcxNywiZXhwIjoyMDYyNTk1NzE3fQ.8ofzu7Hhe-Hokju4B6M51bnlvH1HvtGOoAExHLuuZj8" > temp.txt
vercel env add SUPABASE_SERVICE_ROLE production < temp.txt

echo "sk_test_4tGzEGNX92PoeZaxfsONPve7oe70keBazBiQuldEq4" > temp.txt
vercel env add CLERK_SECRET_KEY production < temp.txt

rm temp.txt
echo "Variáveis de ambiente configuradas!"