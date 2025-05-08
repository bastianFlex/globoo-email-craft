
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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #000000; padding: 20px; text-align: center;">
          <img src="/lovable-uploads/d5bca410-a578-42d4-ab2e-4910f64dfb2e.png" alt="Globoo Logo" width="150" />
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #00B9D1; margin-bottom: 20px;">Agradecemos seu contato!</h2>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Olá, {{name}},</p>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Recebemos sua solicitação e nossa equipe já está analisando as informações enviadas.</p>
          <div style="background-color: #f4f4f4; padding: 15px; border-left: 4px solid #00B9D1; margin: 20px 0;">
            <p style="color: #1A1F2C; margin: 0;">Nosso compromisso é oferecer um atendimento ágil, claro e resolutivo.</p>
          </div>
          <p style="color: #1A1F2C; margin-bottom: 15px;">📌 Em breve, retornaremos com a melhor solução para sua demanda.</p>
          <div style="margin-top: 30px; color: #1A1F2C;">
            <p style="margin-bottom: 5px;">Atenciosamente,</p>
            <p style="font-weight: bold; margin-top: 0;">Equipe de Suporte Globoo.io</p>
          </div>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="color: #8E9196; font-size: 12px; margin: 0;">© 2025 Globoo.io. Todos os direitos reservados.</p>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/d5bca410-a578-42d4-ab2e-4910f64dfb2e.png",
    headerBg: "#000000",
  },
  {
    id: "sales-proposal",
    title: "Proposta Comercial",
    subject: "Sua próxima oportunidade com a Globoo",
    description: "Template para apresentação de proposta comercial ou parceria.",
    category: "Comercial",
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #000000; padding: 20px; text-align: center;">
          <img src="/lovable-uploads/0d29d445-674e-4160-a963-be014d1d5c71.png" alt="Globoo Logo" width="150" />
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #00B9D1; margin-bottom: 20px;">Sua próxima oportunidade com a Globoo</h2>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Olá, {{name}},</p>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Obrigado por seu interesse na Globoo.io — a plataforma multichain para ativos digitais e tokenização.</p>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Analisamos seu perfil e acreditamos que você pode se beneficiar de uma solução personalizada.</p>
          <div style="background-color: #00B9D1; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;">Em anexo, segue nossa proposta comercial com todas as vantagens, funcionalidades e projeções.</p>
          </div>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Ficamos à disposição para agendarmos uma conversa e esclarecer qualquer ponto.</p>
          <div style="margin-top: 30px; color: #1A1F2C;">
            <p style="margin-bottom: 5px;">Abraços,</p>
            <p style="font-weight: bold; margin-top: 0;">Equipe Comercial – Globoo.io</p>
          </div>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="color: #8E9196; font-size: 12px; margin: 0;">© 2025 Globoo.io. Todos os direitos reservados.</p>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/0d29d445-674e-4160-a963-be014d1d5c71.png",
    headerBg: "#000000",
  },
  {
    id: "legal-contract",
    title: "Confirmação de Contrato",
    subject: "Envio de contrato – Confirmação",
    description: "Template para confirmação de envio de documentos legais.",
    category: "Jurídico",
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #000000; padding: 20px; text-align: center;">
          <img src="/lovable-uploads/2698f71e-432d-4627-817f-1d8879656013.png" alt="Globoo Logo" width="150" />
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #00B9D1; margin-bottom: 20px;">Envio de contrato – Confirmação</h2>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Olá, {{name}},</p>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Conforme combinado, enviamos o contrato referente à parceria com a Globoo.io.</p>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #1A1F2C; margin-bottom: 10px;">📎 <strong>Documento:</strong> Contrato_Parceria_Globoo.pdf</p>
            <p style="color: #1A1F2C; margin: 0;">⚖️ <strong>Acordo baseado nas normas da LGPD e Blockchain Compliance</strong></p>
          </div>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Caso tenha qualquer dúvida ou precise de revisão adicional com seu jurídico, estamos à disposição.</p>
          <div style="margin-top: 30px; color: #1A1F2C;">
            <p style="margin-bottom: 5px;">Atenciosamente,</p>
            <p style="font-weight: bold; margin-top: 0;">Departamento Jurídico – Globoo.io</p>
          </div>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="color: #8E9196; font-size: 12px; margin: 0;">© 2025 Globoo.io. Todos os direitos reservados.</p>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/2698f71e-432d-4627-817f-1d8879656013.png",
    headerBg: "#000000",
  },
  {
    id: "marketing-presentation",
    title: "Apresentação Institucional",
    subject: "Conheça a plataforma que está mudando o mercado digital",
    description: "Template para campanhas de marketing e apresentações.",
    category: "Marketing",
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #000000; padding: 20px; text-align: center;">
          <img src="/lovable-uploads/f06f0673-51a3-40bc-8fc2-01650f3e4826.png" alt="Globoo Logo" width="150" />
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #00B9D1; margin-bottom: 20px; text-align: center;">Conheça a plataforma que está mudando o mercado digital</h2>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Olá, {{name}},</p>
          <p style="color: #1A1F2C; margin-bottom: 20px;">A Globoo.io é mais do que uma exchange — somos um ecossistema completo para quem deseja investir, tokenizar e crescer no mundo digital.</p>
          <div style="display: flex; gap: 10px; margin: 25px 0; text-align: center;">
            <div style="flex: 1; padding: 15px; background-color: #f8f8f8; border-radius: 8px;">
              <div style="font-size: 24px; margin-bottom: 10px;">📊</div>
              <p style="color: #1A1F2C; margin: 0; font-size: 14px;">Acesso a ativos tokenizados</p>
            </div>
            <div style="flex: 1; padding: 15px; background-color: #f8f8f8; border-radius: 8px;">
              <div style="font-size: 24px; margin-bottom: 10px;">🌎</div>
              <p style="color: #1A1F2C; margin: 0; font-size: 14px;">Operação global com segurança blockchain</p>
            </div>
            <div style="flex: 1; padding: 15px; background-color: #f8f8f8; border-radius: 8px;">
              <div style="font-size: 24px; margin-bottom: 10px;">🎯</div>
              <p style="color: #1A1F2C; margin: 0; font-size: 14px;">Projetos validados e transparência total</p>
            </div>
          </div>
          <p style="color: #1A1F2C; margin-bottom: 25px;">Conheça agora nosso portfólio e veja como podemos levar sua ideia para o próximo nível.</p>
          <div style="text-align: center; margin-top: 25px; margin-bottom: 25px;">
            <a href="#" style="background-color: #00B9D1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Saiba mais</a>
          </div>
          <div style="margin-top: 30px; color: #1A1F2C;">
            <p style="margin-bottom: 5px;">Até logo,</p>
            <p style="font-weight: bold; margin-top: 0;">Marketing Globoo.io</p>
          </div>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="color: #8E9196; font-size: 12px; margin: 0;">© 2025 Globoo.io. Todos os direitos reservados.</p>
          <div style="margin-top: 10px;">
            <a href="#" style="color: #00B9D1; font-size: 12px; text-decoration: none; margin: 0 5px;">Termos de Uso</a>
            <a href="#" style="color: #00B9D1; font-size: 12px; text-decoration: none; margin: 0 5px;">Política de Privacidade</a>
            <a href="#" style="color: #00B9D1; font-size: 12px; text-decoration: none; margin: 0 5px;">Preferências de Email</a>
          </div>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/f06f0673-51a3-40bc-8fc2-01650f3e4826.png",
    headerBg: "#000000",
  },
  {
    id: "tech-support-ticket",
    title: "Suporte Técnico",
    subject: "Chamado recebido – Suporte Técnico",
    description: "Template para confirmação de abertura de chamado técnico.",
    category: "Suporte",
    content: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #000000; padding: 20px; text-align: center;">
          <img src="/lovable-uploads/d5bca410-a578-42d4-ab2e-4910f64dfb2e.png" alt="Globoo Logo" width="150" />
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #00B9D1; margin-bottom: 20px;">Chamado recebido – Suporte Técnico</h2>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Olá, {{name}},</p>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Seu chamado foi registrado com sucesso sob o protocolo #{{protocol}}.</p>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #1A1F2C; margin-bottom: 10px;">⏱️ Nosso time técnico está analisando o caso e responderá em até 24 horas úteis.</p>
            <p style="color: #1A1F2C; margin: 0;">Se desejar complementar com mais informações ou prints, basta responder este e-mail.</p>
          </div>
          <p style="color: #1A1F2C; margin-bottom: 15px;">Estamos aqui para garantir a melhor experiência na Globoo.io.</p>
          <div style="margin-top: 30px; color: #1A1F2C;">
            <p style="margin-bottom: 5px;">Cordialmente,</p>
            <p style="font-weight: bold; margin-top: 0;">Suporte Técnico – Globoo.io</p>
          </div>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="color: #8E9196; font-size: 12px; margin: 0;">© 2025 Globoo.io. Todos os direitos reservados.</p>
          <p style="color: #8E9196; font-size: 12px; margin-top: 10px;">
            Caso precise de ajuda, entre em contato pelo <strong>suporte@globoo.io</strong> ou ligue para <strong>0800 123 4567</strong>
          </p>
        </div>
      </div>
    `,
    imageUrl: "/lovable-uploads/d5bca410-a578-42d4-ab2e-4910f64dfb2e.png",
    headerBg: "#000000",
  },
];

export function getTemplateById(id: string): EmailTemplate | undefined {
  return emailTemplates.find(template => template.id === id);
}
