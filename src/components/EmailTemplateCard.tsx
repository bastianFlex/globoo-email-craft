
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Mail, Copy, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface EmailTemplateCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  footerStyle?: 'black' | 'white' | 'blue';
}

const EmailTemplateCard: React.FC<EmailTemplateCardProps> = ({
  id,
  title,
  category,
  description,
  imageUrl,
  footerStyle = 'black',
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

  const getFooterStylePreview = () => {
    const iconColor = footerStyle === 'white' ? '#000000' : 
                     footerStyle === 'blue' ? '#00B9D1' : '#FFFFFF';
    const bgColor = footerStyle === 'white' ? '#FFFFFF' : 
                   footerStyle === 'blue' ? '#E8F7F9' : '#1A1F2C';
    
    return (
      <div className="mt-2 pt-2 border-t" style={{ backgroundColor: bgColor, borderRadius: '0 0 0.5rem 0.5rem' }}>
        <div className="flex justify-center gap-2 py-1">
          <Facebook className="h-3 w-3" style={{ color: iconColor }} />
          <Twitter className="h-3 w-3" style={{ color: iconColor }} />
          <Instagram className="h-3 w-3" style={{ color: iconColor }} />
          <Linkedin className="h-3 w-3" style={{ color: iconColor }} />
          <Youtube className="h-3 w-3" style={{ color: iconColor }} />
        </div>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden template-preview">
      <div className="h-32 bg-black flex items-center justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="h-20 object-contain"
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
        {getFooterStylePreview()}
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
