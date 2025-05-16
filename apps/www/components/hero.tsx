import Link from "next/link";
import { Github, MessageSquare, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Agentes de Conversão</h2>
          <p className="text-sm text-muted-foreground">
            Tecnologia avançada que transforma conhecimento em vendas automáticas via chat inteligente.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Soluções</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/integracao-whatsapp"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Integração WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="/base-conhecimento"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Base de Conhecimento
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/roi-calculadora"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Calculadora de ROI
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Conecte-se</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/agentes-conversao/platform"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5511999999999"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="https://linkedin.com/company/agentes-de-conversao"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
