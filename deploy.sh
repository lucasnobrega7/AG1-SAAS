#!/bin/bash

echo "🚀 Starting AG1-SAAS deployment to Vercel"

# Create new Vercel project import URL
IMPORT_URL="https://vercel.com/new/clone?repository-url=https://github.com/lucasnobrega7/AG1-SAAS/tree/fix/deploy-issues&project-name=ag1-saas-prod&repository-name=AG1-SAAS"

echo "📝 Deployment Configuration:"
echo "- Repository: https://github.com/lucasnobrega7/AG1-SAAS"
echo "- Branch: fix/deploy-issues"
echo "- Project Name: ag1-saas-prod"
echo ""
echo "🔗 To deploy, open this URL in your browser:"
echo "$IMPORT_URL"
echo ""
echo "📋 Environment Variables to Configure:"
echo "- REDIS_URL"
echo "- NEXT_PUBLIC_POSTHOG_KEY"
echo "- NEXT_PUBLIC_SUPABASE_URL" 
echo "- NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
echo "- SUPABASE_JWT_SECRET"
echo "- SUPABASE_SERVICE_ROLE"
echo "- CLERK_SECRET_KEY"
echo ""
echo "✅ After importing, the build should complete successfully!"