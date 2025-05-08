
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-border py-4">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/templates" className="text-sm font-medium hover:text-globoo transition-colors">
            Templates
          </Link>
          <Link to="/create" className="text-sm font-medium hover:text-globoo transition-colors">
            Criar Template
          </Link>
          <Button variant="default" className="bg-globoo hover:bg-globoo-dark">
            <Mail className="h-4 w-4 mr-2" /> Iniciar
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
