
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Mail, Send } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-globoo via-globoo-accent to-globoo-dark">
                  Templates de Email Profissionais
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Crie e-mails impressionantes com templates personalizados inspirados no design Globoo. Interativos, modernos e profissionais.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-globoo hover:bg-globoo-dark"
                  onClick={() => navigate('/templates')}
                >
                  <Mail className="mr-2 h-4 w-4" /> Ver Templates
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/create')}
                >
                  <Send className="mr-2 h-4 w-4" /> Criar Template
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-globoo/10 px-3 py-1 text-sm text-globoo">
                  Recursos Poderosos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Email templates personalizados para todas as suas necessidades
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa biblioteca de templates foi projetada para atender às necessidades de comunicação de empresas modernas, com foco em design profissional e formato responsivo.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Atendimento ao Cliente</h3>
                  <p className="text-gray-500">
                    Templates de resposta para suporte ao cliente, confirmações e acompanhamento.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Marketing e Vendas</h3>
                  <p className="text-gray-500">
                    Comunicações profissionais para apresentação de produtos e propostas comerciais.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Notificações e Alertas</h3>
                  <p className="text-gray-500">
                    Templates para confirmações de transações e alertas de segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="space-y-4 lg:col-span-1">
                <div className="inline-block rounded-lg bg-globoo/10 px-3 py-1 text-sm text-globoo">
                  Como funciona
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Gere emails em três etapas simples
                </h2>
                <p className="text-gray-500">
                  Nosso sistema foi projetado para ser rápido e fácil de usar.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-globoo/20 text-globoo">
                      1
                    </div>
                    <h3 className="font-semibold">Escolha o template</h3>
                    <p className="text-sm text-gray-500">
                      Selecione entre diversos modelos profissionais
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-globoo/20 text-globoo">
                      2
                    </div>
                    <h3 className="font-semibold">Personalize</h3>
                    <p className="text-sm text-gray-500">
                      Adicione dados específicos e informações personalizadas
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-globoo/20 text-globoo">
                      3
                    </div>
                    <h3 className="font-semibold">Gere seu email</h3>
                    <p className="text-sm text-gray-500">
                      Copie o HTML ou exporte para sua plataforma de email
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-muted/40">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">© 2025 GlobooMail. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Termos</Button>
              <Button variant="ghost" size="sm">Privacidade</Button>
              <Button variant="ghost" size="sm">Contato</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
