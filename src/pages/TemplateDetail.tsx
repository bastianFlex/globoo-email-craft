
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { getTemplateById } from '@/data/templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import EmailTemplateForm from '@/components/EmailTemplateForm';
import { Badge } from '@/components/ui/badge';
import EmailTemplatePreview from '@/components/EmailTemplatePreview';
import { EmailData } from '@/types/email';

const TemplateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [generatedHtml, setGeneratedHtml] = useState<string>('');
  const [previewData, setPreviewData] = useState<EmailData>({
    name: 'Cliente',
    company: 'Empresa',
    date: new Date().toLocaleDateString(),
    protocol: 'GBT-' + Math.floor(100000 + Math.random() * 900000),
  });
  
  const template = id ? getTemplateById(id) : undefined;

  if (!template) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Template não encontrado</h1>
            <p className="text-muted-foreground mb-6">
              O template solicitado não existe ou foi removido.
            </p>
            <Button onClick={() => navigate('/templates')}>
              Voltar para Templates
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const handleGenerate = (htmlContent: string) => {
    setGeneratedHtml(htmlContent);
    toast({
      title: "Email gerado com sucesso!",
      description: "O código HTML do email está pronto para uso.",
    });
  };

  const handleDataUpdate = (data: EmailData) => {
    setPreviewData(data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate('/templates')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Templates
          </Button>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 lg:w-7/12">
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{template.title}</h1>
                  <Badge variant="outline" className="bg-globoo/10 text-globoo border-globoo/20 w-fit">
                    {template.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  {template.description}
                </p>
              </div>
              
              <EmailTemplateForm template={template} onGenerate={handleGenerate} onDataUpdate={handleDataUpdate} />
            </div>
            
            <div className="w-full md:w-1/2 lg:w-5/12">
              <div className="sticky top-8">
                <h2 className="text-lg font-bold mb-4">Prévia</h2>
                <EmailTemplatePreview template={template} data={previewData} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t bg-muted/40">
        <div className="container px-4 py-8 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">© 2025 GlobooMail. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TemplateDetail;
