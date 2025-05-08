
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { EmailTemplate } from '@/types/email';
import { getTemplateById, emailTemplates } from '@/data/templates';

const CreateTemplate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get('template');
  
  const [template, setTemplate] = useState<Partial<EmailTemplate>>({
    id: '',
    title: '',
    subject: '',
    description: '',
    category: 'Suporte',
    content: '',
    imageUrl: '/lovable-uploads/3424ceca-778b-4ab8-bdab-a1768cb28323.png',
  });

  useEffect(() => {
    if (templateId) {
      const baseTemplate = getTemplateById(templateId);
      if (baseTemplate) {
        // Clone the template but create a new ID
        setTemplate({
          ...baseTemplate,
          id: `${baseTemplate.id}-copy-${Date.now()}`,
          title: `${baseTemplate.title} (Cópia)`,
        });
      }
    }
  }, [templateId]);

  const availableCategories = Array.from(
    new Set(emailTemplates.map((t) => t.category))
  );

  const handleChange = (field: keyof EmailTemplate, value: string) => {
    setTemplate((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to a database
    toast({
      title: "Template salvo!",
      description: "Seu template foi salvo com sucesso.",
    });
    
    // Navigate to templates list
    navigate('/templates');
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
          
          <h1 className="text-3xl font-bold mb-6">
            {templateId ? 'Editar Template' : 'Criar Novo Template'}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <Label htmlFor="title">Título do Template</Label>
                    <Input
                      id="title"
                      value={template.title}
                      onChange={(e) => handleChange('title', e.target.value)}
                      placeholder="Ex: Confirmação de Pedido"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Assunto do Email</Label>
                    <Input
                      id="subject"
                      value={template.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Ex: Seu pedido foi confirmado"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      value={template.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      placeholder="Breve descrição do propósito deste template"
                      className="mt-1"
                      rows={2}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Categoria</Label>
                    <Select
                      value={template.category}
                      onValueChange={(value) => handleChange('category', value)}
                    >
                      <SelectTrigger id="category" className="mt-1">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                        <SelectItem value="Outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Label htmlFor="content">Conteúdo HTML</Label>
                  <Textarea
                    id="content"
                    value={template.content}
                    onChange={(e) => handleChange('content', e.target.value)}
                    placeholder='<div style="font-family: Arial, sans-serif;">Seu conteúdo HTML aqui...</div>'
                    className="mt-1 font-mono text-sm"
                    rows={15}
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Use {"{{name}}"}, {"{{company}}"}, {"{{date}}"}, {"{{protocol}}"} como variáveis para personalização.
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-globoo hover:bg-globoo-dark">
                  <Save className="mr-2 h-4 w-4" /> Salvar Template
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <Label>Prévia</Label>
                  <div className="mt-3 rounded-lg border overflow-hidden shadow-sm bg-white">
                    <div className="border-b bg-muted/50 px-4 py-2">
                      <span className="text-sm font-medium">
                        {template.subject || "Assunto do Email"}
                      </span>
                    </div>
                    <div 
                      className="p-4 max-h-[500px] overflow-auto" 
                      dangerouslySetInnerHTML={{ __html: template.content || "<div>A prévia do template aparecerá aqui.</div>" }}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Label>Ajuda com Variáveis</Label>
                  <div className="mt-3 text-sm space-y-2">
                    <p>Você pode usar as seguintes variáveis em seu template:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><code>{"{{"}"name{"}}"}</code> - Nome do destinatário</li>
                      <li><code>{"{{"}"company{"}}"}</code> - Nome da empresa</li>
                      <li><code>{"{{"}"date{"}}"}</code> - Data atual</li>
                      <li><code>{"{{"}"protocol{"}}"}</code> - Número de protocolo</li>
                    </ul>
                    <p className="mt-4">Você também pode adicionar variáveis personalizadas através do editor de template.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t bg-muted/40 mt-8">
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

export default CreateTemplate;
