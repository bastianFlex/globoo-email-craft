
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { emailTemplates } from '@/data/templates';
import EmailTemplateCard from '@/components/EmailTemplateCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Templates = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const availableCategories = Array.from(
    new Set(emailTemplates.map((template) => template.category))
  );

  const filteredTemplates = emailTemplates.filter((template) => {
    const matchesSearch = 
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter ? template.category === categoryFilter : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Templates de Email</h1>
              <p className="text-muted-foreground mt-1">
                Escolha entre {emailTemplates.length} templates profissionais
              </p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar templates..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button 
                variant="outline"
                onClick={() => navigate('/create')}
              >
                <Mail className="mr-2 h-4 w-4" /> Criar Novo
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={categoryFilter === null ? "default" : "outline"}
              size="sm"
              className={categoryFilter === null ? "bg-globoo hover:bg-globoo-dark" : ""}
              onClick={() => setCategoryFilter(null)}
            >
              Todos
            </Button>
            {availableCategories.map((category) => (
              <Button
                key={category}
                variant={categoryFilter === category ? "default" : "outline"}
                size="sm"
                className={categoryFilter === category ? "bg-globoo hover:bg-globoo-dark" : ""}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template) => (
                <EmailTemplateCard
                  key={template.id}
                  id={template.id}
                  title={template.title}
                  category={template.category}
                  description={template.description}
                  imageUrl={template.imageUrl}
                />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-muted-foreground">
                  Nenhum template encontrado com os critérios selecionados.
                </p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setSearchTerm('');
                    setCategoryFilter(null);
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
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

export default Templates;
