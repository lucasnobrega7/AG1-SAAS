import {
  MessageSquare,
  Database,
  Zap,
  Brain,
  LineChart,
  Clock
} from "lucide-react";
const features = [
  {
    name: "Vendedores Digitais 24/7",
    description:
      "Enquanto seus concorrentes dormem, nossos agentes fecham negócios às 3 da manhã. Sem férias, sem licença médica, sem reclamações de salário — apenas vendas implacáveis em cada segundo do dia.",
    icon: Clock,
  },
  {
    name: "WhatsApp Que Vende Por Você",
    description:
      "Transforme seu WhatsApp em uma máquina de vendas automática. Sem demora nas respostas, sem cliente abandonado, sem oportunidade perdida. Seu concorrente ainda digita manualmente enquanto você já fechou o negócio.",
    icon: MessageSquare,
  },
  {
    name: "Base De Conhecimento Inteligente",
    description:
      "Carregue qualquer documento e nosso sistema devora tudo em segundos. Manuais técnicos, catálogos de produtos, FAQs — conhecimento que sua equipe levaria meses para dominar, disponível instantaneamente.",
    icon: Database,
  },
  {
    name: "Implantação Em Minutos",
    description:
      "Pare de jogar dinheiro em consultores caros. Enquanto eles estão elaborando cronogramas, você já pode estar fechando vendas. Sem código, sem complicação, sem demora. Configure hoje, venda amanhã.",
    icon: Zap,
  },
  {
    name: "Análise De Conversão Brutal",
    description:
      "Saiba exatamente onde você está perdendo dinheiro. Monitore cada conversa, identifique gargalos de vendas e descubra por que seus clientes somem. Dados crus que transformam prejuízos em lucros.",
    icon: LineChart,
  },
  {
    name: "IA Que Aprende Com Cada Conversa",
    description:
      "Enquanto vendedores humanos repetem os mesmos erros, nossos agentes ficam mais inteligentes a cada interação. Objeções de vendas, perguntas técnicas, problemas de produto — tudo registrado e otimizado automaticamente.",
    icon: Brain,
  },
];
export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h3 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          A escolha é simples: evolua ou seja esquecido.
        </h3>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map(feature => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
