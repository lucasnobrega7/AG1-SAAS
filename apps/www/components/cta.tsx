import { Button } from "@repo/ui";
export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Seu concorrente já está usando IA. E você?
        </h2>
        <p className="max-w-4xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Enquanto alguns pagam R$5.000 para vendedores que trabalha 8 horas, reclama do salário e tira férias, outros usam nossos Agentes de Conversão para fechar negócios às 3 da manhã, responder 100% das mensagens de forma rápida e genial – e nunca pedir aumento.
        </p>
        <Button size="lg" className="mt-4" asChild>
          <a href="/dashboard">
            Criar meu primeiro Agente AI
          </a>
        </Button>
      </div>
    </section>
  );
}
