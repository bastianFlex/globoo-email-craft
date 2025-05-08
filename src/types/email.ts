
export interface EmailTemplate {
  id: string;
  title: string;
  subject: string;
  description: string;
  category: string;
  content: string;
  imageUrl: string;
  headerBg?: string;
  footerStyle?: 'black' | 'white' | 'blue'; // Footer style option
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface EmailData {
  name?: string;
  company?: string;
  date?: string;
  protocol?: string;
  custom?: Record<string, string>;
}
