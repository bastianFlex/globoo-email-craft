
import React from 'react';
import { EmailTemplate, EmailData } from '@/types/email';

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
      </div>
    </div>
  );
};

export default EmailTemplatePreview;
