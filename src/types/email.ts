
export interface EmailTemplate {
  id: string;
  title: string;
  subject: string;
  description: string;
  category: string;
  content: string;
  imageUrl: string;
}

export interface EmailData {
  name?: string;
  company?: string;
  date?: string;
  protocol?: string;
  custom?: Record<string, string>;
}
