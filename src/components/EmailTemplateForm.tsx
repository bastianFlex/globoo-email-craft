
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EmailTemplate, EmailData } from '@/types/email';
import EmailTemplatePreview from './EmailTemplatePreview';

interface EmailTemplateFormProps {
  template: EmailTemplate;
  onGenerate?: (htmlContent: string) => void;
}

const EmailTemplateForm: React.FC<EmailTemplateFormProps> = ({ template, onGenerate }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    company: '',
    date: new Date().toLocaleDateString(),
    protocol: String(Math.floor(100000 + Math.random() * 900000)),
    custom: {},
  });

  const [htmlView, setHtmlView] = useState(false);
  const [customField, setCustomField] = useState({ key: '', value: '' });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCustomFieldChange = (type: 'key' | 'value', value: string) => {
    setCustomField((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const addCustomField = () => {
    if (!customField.key.trim()) return;
    
    setFormData((prev) => ({
      ...prev,
      custom: {
        ...prev.custom,
        [customField.key.trim()]: customField.value,
      },
    }));
    
    setCustomField({ key: '', value: '' });
    
    toast({
      title: "Campo personalizado adicionado",
      description: `Campo "${customField.key}" foi adicionado ao template.`,
    });
  };

  const removeCustomField = (key: string) => {
    setFormData((prev) => {
      const { custom, ...rest } = prev;
      const newCustom = { ...custom };
      delete newCustom[key];
      return {
        ...rest,
        custom: newCustom,
      };
    });
  };

  const handleCopyHtml = () => {
    let content = template.content;
    
    // Substituir variáveis no conteúdo
    if (formData.name) {
      content = content.replace(/{{name}}/g, formData.name);
    }
    if (formData.company) {
      content = content.replace(/{{company}}/g, formData.company);
    }
    if (formData.date) {
      content = content.replace(/{{date}}/g, formData.date);
    }
    if (formData.protocol) {
      content = content.replace(/{{protocol}}/g, formData.protocol);
    }

    // Variáveis personalizadas
    if (formData.custom) {
      Object.entries(formData.custom).forEach(([key, value]) => {
        content = content.replace(new RegExp(`{{${key}}}`, 'g'), value);
      });
    }

    navigator.clipboard.writeText(content);
    
    toast({
      title: "HTML copiado!",
      description: "O código HTML do template foi copiado para a área de transferência.",
    });
    
    if (onGenerate) {
      onGenerate(content);
    }
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="editor">
        <TabsList className="mb-4">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Visualização</TabsTrigger>
          {htmlView && <TabsTrigger value="html">HTML</TabsTrigger>}
        </TabsList>
        
        <TabsContent value="editor">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome do destinatário</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Nome do cliente"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Nome da empresa"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="protocol">Número do protocolo</Label>
                  <Input
                    id="protocol"
                    value={formData.protocol}
                    onChange={(e) => handleChange('protocol', e.target.value)}
                    placeholder="Número do protocolo"
                    className="mt-1"
                  />
                </div>
                
                <div className="pt-2 border-t">
                  <h3 className="text-sm font-medium mb-2">Campos personalizados</h3>
                  
                  <div className="flex gap-2 mb-4">
                    <Input
                      value={customField.key}
                      onChange={(e) => handleCustomFieldChange('key', e.target.value)}
                      placeholder="Nome do campo"
                    />
                    <Input
                      value={customField.value}
                      onChange={(e) => handleCustomFieldChange('value', e.target.value)}
                      placeholder="Valor"
                    />
                    <Button type="button" onClick={addCustomField} size="sm">
                      Adicionar
                    </Button>
                  </div>
                  
                  {Object.entries(formData.custom || {}).length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs text-muted-foreground">Campos adicionados:</h4>
                      {Object.entries(formData.custom || {}).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm p-2 bg-muted rounded-md">
                          <span>
                            <strong>{key}:</strong> {value}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeCustomField(key)}
                            className="h-6 px-2"
                          >
                            Remover
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <Button
                  className="flex-1 bg-globoo hover:bg-globoo-dark"
                  onClick={handleCopyHtml}
                >
                  <Mail className="h-4 w-4 mr-2" /> Gerar Email
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setHtmlView(!htmlView)}
                  className="flex-1"
                >
                  <Copy className="h-4 w-4 mr-2" /> Ver HTML
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preview">
          <EmailTemplatePreview template={template} data={formData} />
        </TabsContent>
        
        {htmlView && (
          <TabsContent value="html">
            <Card>
              <CardContent className="pt-6">
                <Textarea
                  value={template.content}
                  readOnly
                  rows={15}
                  className="font-mono text-xs"
                />
                <Button
                  variant="outline"
                  onClick={() => navigator.clipboard.writeText(template.content)}
                  className="mt-4"
                >
                  <Copy className="h-4 w-4 mr-2" /> Copiar HTML
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default EmailTemplateForm;
