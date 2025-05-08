
import React from 'react';
import { EmailTemplate, EmailData } from '@/types/email';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface EmailTemplatePreviewProps {
  template: EmailTemplate;
  data: EmailData;
}

const EmailTemplatePreview: React.FC<EmailTemplatePreviewProps> = ({ template, data }) => {
  const renderContent = () => {
    let content = template.content;
    
    // Substituir variáveis no conteúdo
    if (data.name) {
      content = content.replace(/{{name}}/g, data.name);
    }
    if (data.company) {
      content = content.replace(/{{company}}/g, data.company);
    }
    if (data.date) {
      content = content.replace(/{{date}}/g, data.date);
    }
    if (data.protocol) {
      content = content.replace(/{{protocol}}/g, data.protocol);
    }

    // Variáveis personalizadas
    if (data.custom) {
      Object.entries(data.custom).forEach(([key, value]) => {
        content = content.replace(new RegExp(`{{${key}}}`, 'g'), value);
      });
    }

    return { __html: content };
  };

  const renderSocialIcons = () => {
    // Define colors based on footerStyle
    const iconColor = template.footerStyle === 'white' ? '#000000' : 
                     template.footerStyle === 'blue' ? '#00B9D1' : '#FFFFFF';
    
    const bgColor = template.footerStyle === 'white' ? '#FFFFFF' : 
                   template.footerStyle === 'blue' ? '#E8F7F9' : '#1A1F2C';
    
    const textColor = template.footerStyle === 'white' ? '#1A1F2C' : 
                     template.footerStyle === 'blue' ? '#00B9D1' : '#FFFFFF';

    return (
      <div style={{ backgroundColor: bgColor, padding: '20px', textAlign: 'center', borderTop: `1px solid ${template.footerStyle === 'white' ? '#e0e0e0' : 'rgba(255,255,255,0.1)'}` }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
          <a href="https://facebook.com/globooio" style={{ color: iconColor }}>
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com/globooio" style={{ color: iconColor }}>
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com/globooio" style={{ color: iconColor }}>
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com/company/globooio" style={{ color: iconColor }}>
            <Linkedin size={20} />
          </a>
          <a href="https://youtube.com/globooio" style={{ color: iconColor }}>
            <Youtube size={20} />
          </a>
        </div>
        <div style={{ color: textColor, fontSize: '12px', marginBottom: '10px' }}>
          <p style={{ margin: '0 0 8px 0' }}>© 2025 Globoo.io. Todos os direitos reservados.</p>
          <p style={{ margin: '0 0 8px 0' }}>
            Dúvidas? Entre em contato: <strong>contato@globoo.io</strong> | <strong>+55 67 98564269</strong>
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <a href="#" style={{ color: textColor === '#FFFFFF' ? '#7DEFF9' : '#00B9D1', textDecoration: 'none', fontSize: '12px' }}>Termos de Uso</a>
            <a href="#" style={{ color: textColor === '#FFFFFF' ? '#7DEFF9' : '#00B9D1', textDecoration: 'none', fontSize: '12px' }}>Política de Privacidade</a>
            <a href="#" style={{ color: textColor === '#FFFFFF' ? '#7DEFF9' : '#00B9D1', textDecoration: 'none', fontSize: '12px' }}>Cancelar Inscrição</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto shadow-email rounded-md overflow-hidden">
      <div className="bg-black text-white p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-300">De:</span>
            <span className="text-sm">Globoo.io &lt;contato@globoo.io&gt;</span>
          </div>
          <span className="text-xs text-gray-400">{new Date().toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium text-gray-300">Para:</span>
          <span className="text-sm">{data.name || 'Cliente'} &lt;cliente@exemplo.com&gt;</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium text-gray-300">Assunto:</span>
          <span className="text-sm font-semibold text-globoo-light">{template.subject}</span>
        </div>
      </div>
      <div className="bg-white">
        <div 
          className="email-template prose prose-sm max-w-none" 
          dangerouslySetInnerHTML={renderContent()} 
        />
        {renderSocialIcons()}
      </div>
    </div>
  );
};

export default EmailTemplatePreview;
