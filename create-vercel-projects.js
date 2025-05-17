const fetch = require('node-fetch');

// Você precisa adicionar seu token Vercel aqui
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;

async function createProject(name, rootDirectory) {
  const response = await fetch('https://api.vercel.com/v9/projects', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${VERCEL_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      framework: 'nextjs',
      rootDirectory: rootDirectory,
      gitRepository: {
        type: 'github',
        repo: 'lucasnobrega7/AG1-SAAS'
      },
      buildCommand: rootDirectory === 'apps/www' 
        ? 'cd ../.. && pnpm install && pnpm run build --filter=www'
        : 'cd ../.. && pnpm install && pnpm run build --filter=dashboard',
      installCommand: 'cd ../.. && pnpm install',
      outputDirectory: '.next'
    })
  });
  
  const data = await response.json();
  console.log(`Projeto ${name} criado:`, data);
  return data;
}

async function createEnvironmentVariable(projectId, key, value) {
  const response = await fetch(`https://api.vercel.com/v9/projects/${projectId}/env`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${VERCEL_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      key: key,
      value: value,
      target: ['production', 'preview', 'development'],
      type: 'encrypted'
    })
  });
  
  const data = await response.json();
  console.log(`Variável ${key} adicionada`);
  return data;
}

async function setupProjects() {
  try {
    // Criar projeto WWW
    console.log('Criando projeto WWW...');
    const wwwProject = await createProject('ag1-saas-www', 'apps/www');
    
    // Adicionar variáveis de ambiente para WWW
    await createEnvironmentVariable(wwwProject.id, 'NEXT_PUBLIC_POSTHOG_KEY', 'phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua');
    
    // Criar projeto Dashboard
    console.log('Criando projeto Dashboard...');
    const dashboardProject = await createProject('ag1-saas-dashboard', 'apps/dashboard');
    
    // Adicionar variáveis de ambiente para Dashboard
    await createEnvironmentVariable(dashboardProject.id, 'NEXT_PUBLIC_POSTHOG_KEY', 'phx_1jT1b88OvdM5IDkye31q6gqliPLWlouLUUQa3v3VQAgWWua');
    await createEnvironmentVariable(dashboardProject.id, 'NEXT_PUBLIC_SUPABASE_URL', 'https://jiasbwazaicmcckmehtn.supabase.co');
    await createEnvironmentVariable(dashboardProject.id, 'NEXT_PUBLIC_SUPABASE_ANON_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXNid2F6YWljbWNja21laHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMTk3MTcsImV4cCI6MjA2MjU5NTcxN30.ylb91zHcJ_RN7s_pOUDIjx9YM2gq_Lp1JtW3upmZII4');
    await createEnvironmentVariable(dashboardProject.id, 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY', 'pk_test_cmVsaWV2ZWQtYmx1ZWpheS00NS5jbGVyay5hY2NvdW50cy5kZXYk');
    await createEnvironmentVariable(dashboardProject.id, 'CLERK_SECRET_KEY', 'sk_test_4tGzEGNX92PoeZaxfsONPve7oe70keBazBiQuldEq4');
    
    console.log('Projetos criados com sucesso!');
  } catch (error) {
    console.error('Erro:', error);
  }
}

// Execute se tiver o token
if (VERCEL_TOKEN) {
  setupProjects();
} else {
  console.error('Por favor, defina a variável de ambiente VERCEL_TOKEN');
}