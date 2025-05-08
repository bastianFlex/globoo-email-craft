
import { EmailTemplate } from "@/types/email";

// Templates definidos com base no conteúdo fornecido
export const emailTemplates: EmailTemplate[] = [
  {
    id: "customer-support",
    title: "Atendimento ao Cliente",
    subject: "Agradecemos seu contato!",
    description: "Template para resposta inicial de suporte ao cliente.",
    category: "Suporte",
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="/lovable-uploads/3424ceca-778b-4ab8-bdab-a1768cb28323.png" alt="Globoo Logo" width="150" />
        </div>
        <h2 style="color: #00B9D1; margin-bottom: 20px;">Agradecemos seu contato!</h2>
        <p>Olá, {{name}},</p>
        <p>Recebemos sua solicitação e nossa equipe já está analisando as informações enviadas.</p>
        <p style="background-color: #f4f4f4; padding: 15px; border-left: 4px solid #00B9D1;">Nosso compromisso é oferecer um atendimento ágil, claro e resolutivo.</p>
        <p>📌 Em breve, retornaremos com a melhor solução para sua demanda.</p>
        <div style="margin-top: 30px;">
          <p>Atenciosamente,</p>
          <p><strong>Equipe de Suporte Globoo.io</strong></p>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/3424ceca-778b-4ab8-bdab-a1768cb28323.png",
  },
  {
    id: "sales-proposal",
    title: "Proposta Comercial",
    subject: "Sua próxima oportunidade com a Globoo",
    description: "Template para apresentação de proposta comercial ou parceria.",
    category: "Comercial",
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="/lovable-uploads/c8fb36e6-8d39-4663-9c66-29da3e1ede3c.png" alt="Globoo Logo" width="150" />
        </div>
        <h2 style="color: #00B9D1; margin-bottom: 20px;">Sua próxima oportunidade com a Globoo</h2>
        <p>Olá, {{name}},</p>
        <p>Obrigado por seu interesse na Globoo.io — a plataforma multichain para ativos digitais e tokenização.</p>
        <p>Analisamos seu perfil e acreditamos que você pode se beneficiar de uma solução personalizada.</p>
        <div style="background-color: #00B9D1; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p>Em anexo, segue nossa proposta comercial com todas as vantagens, funcionalidades e projeções.</p>
        </div>
        <p>Ficamos à disposição para agendarmos uma conversa e esclarecer qualquer ponto.</p>
        <div style="margin-top: 30px;">
          <p>Abraços,</p>
          <p><strong>Equipe Comercial – Globoo.io</strong></p>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/c8fb36e6-8d39-4663-9c66-29da3e1ede3c.png",
  },
  {
    id: "legal-contract",
    title: "Confirmação de Contrato",
    subject: "Envio de contrato – Confirmação",
    description: "Template para confirmação de envio de documentos legais.",
    category: "Jurídico",
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="/lovable-uploads/cac862ac-c962-4f2f-a783-f805f491b806.png" alt="Globoo Logo" width="150" />
        </div>
        <h2 style="color: #00B9D1; margin-bottom: 20px;">Envio de contrato – Confirmação</h2>
        <p>Olá, {{name}},</p>
        <p>Conforme combinado, enviamos o contrato referente à parceria com a Globoo.io.</p>
        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p>📎 <strong>Documento:</strong> Contrato_Parceria_Globoo.pdf</p>
          <p>⚖️ <strong>Acordo baseado nas normas da LGPD e Blockchain Compliance</strong></p>
        </div>
        <p>Caso tenha qualquer dúvida ou precise de revisão adicional com seu jurídico, estamos à disposição.</p>
        <div style="margin-top: 30px;">
          <p>Atenciosamente,</p>
          <p><strong>Departamento Jurídico – Globoo.io</strong></p>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/cac862ac-c962-4f2f-a783-f805f491b806.png",
  },
  {
    id: "marketing-presentation",
    title: "Apresentação Institucional",
    subject: "Conheça a plataforma que está mudando o mercado digital",
    description: "Template para campanhas de marketing e apresentações.",
    category: "Marketing",
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="/lovable-uploads/26814ea5-7067-42bb-b0e8-8494d3d4dcd3.png" alt="Globoo Logo" width="150" />
        </div>
        <h2 style="color: #00B9D1; margin-bottom: 20px; text-align: center;">Conheça a plataforma que está mudando o mercado digital</h2>
        <p>Olá, {{name}},</p>
        <p>A Globoo.io é mais do que uma exchange — somos um ecossistema completo para quem deseja investir, tokenizar e crescer no mundo digital.</p>
        <div style="display: flex; justify-content: space-between; margin: 20px 0;">
          <div style="flex: 1; text-align: center; padding: 10px;">
            <p>📊</p>
            <p>Acesso a ativos tokenizados</p>
          </div>
          <div style="flex: 1; text-align: center; padding: 10px;">
            <p>🌎</p>
            <p>Operação global com segurança blockchain</p>
          </div>
          <div style="flex: 1; text-align: center; padding: 10px;">
            <p>🎯</p>
            <p>Projetos validados e transparência total</p>
          </div>
        </div>
        <p>Conheça agora nosso portfólio e veja como podemos levar sua ideia para o próximo nível.</p>
        <div style="text-align: center; margin-top: 20px;">
          <a href="#" style="background-color: #00B9D1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Saiba mais</a>
        </div>
        <div style="margin-top: 30px;">
          <p>Até logo,</p>
          <p><strong>Marketing Globoo.io</strong></p>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/26814ea5-7067-42bb-b0e8-8494d3d4dcd3.png",
  },
  {
    id: "tech-support-ticket",
    title: "Suporte Técnico",
    subject: "Chamado recebido – Suporte Técnico",
    description: "Template para confirmação de abertura de chamado técnico.",
    category: "Suporte",
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="/lovable-uploads/2ab57d93-4b5a-4181-8328-5a6eada12b0b.png" alt="Globoo Logo" width="150" />
        </div>
        <h2 style="color: #00B9D1; margin-bottom: 20px;">Chamado recebido – Suporte Técnico</h2>
        <p>Olá, {{name}},</p>
        <p>Seu chamado foi registrado com sucesso sob o protocolo #{{protocol}}.</p>
        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p>⏱️ Nosso time técnico está analisando o caso e responderá em até 24 horas úteis.</p>
          <p>Se desejar complementar com mais informações ou prints, basta responder este e-mail.</p>
        </div>
        <p>Estamos aqui para garantir a melhor experiência na Globoo.io.</p>
        <div style="margin-top: 30px;">
          <p>Cordialmente,</p>
          <p><strong>Suporte Técnico – Globoo.io</strong></p>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/2ab57d93-4b5a-4181-8328-5a6eada12b0b.png",
  },
];

export function getTemplateById(id: string): EmailTemplate | undefined {
  return emailTemplates.find(template => template.id === id);
}
