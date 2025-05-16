import { Button } from "@repo/ui";
import { ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="container flex min-h-[600px] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-16 text-center">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Agentes de Conversão
        </h1>
        <h4 className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Imagine vendedores incansáveis que fecham negócios 24/7, custam 90% menos que humanos e podem ser implementados em seu negócio ainda hoje. Eles existem - e estão ao seu alcance.
        </h4>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <a href="/dashboard">
            Criar conta
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline">
          <a href="https://github.com/EmmettM/super-saas-template">
            Fazer login
          </a>
        </Button>
      </div>
    </section>
  );
}
