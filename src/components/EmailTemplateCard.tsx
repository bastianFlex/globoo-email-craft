
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Mail, Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface EmailTemplateCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const EmailTemplateCard: React.FC<EmailTemplateCardProps> = ({
  id,
  title,
  category,
  description,
  imageUrl,
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleUseTemplate = () => {
    navigate(`/templates/${id}`);
  };

  const handleCopy = () => {
    toast({
      title: "Template copiado!",
      description: "O template foi copiado para edição.",
    });
    navigate(`/create?template=${id}`);
  };

  return (
    <Card className="overflow-hidden template-preview">
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <Badge variant="outline" className="bg-globoo/10 text-globoo border-globoo/20">
            {category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="default" size="sm" onClick={handleUseTemplate} className="bg-globoo hover:bg-globoo-dark">
          <Mail className="h-4 w-4 mr-1" /> Usar
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopy}>
          <Copy className="h-4 w-4 mr-1" /> Duplicar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EmailTemplateCard;
