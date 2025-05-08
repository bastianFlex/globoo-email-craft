
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
    <div className="w-full max-w-2xl mx-auto">
      <div className="border rounded-md p-4 mb-4">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">De:</span>
            <span className="text-sm">Globoo.io &lt;contato@globoo.io&gt;</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Para:</span>
            <span className="text-sm">{data.name || 'Cliente'} &lt;cliente@exemplo.com&gt;</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Assunto:</span>
            <span className="text-sm font-semibold">{template.subject}</span>
          </div>
        </div>
        <div className="border-t pt-4">
          <div 
            className="email-template prose prose-sm max-w-none" 
            dangerouslySetInnerHTML={renderContent()} 
          />
        </div>
      </div>
    </div>
  );
};

export default EmailTemplatePreview;
