export type ServiceCategory = 'web' | 'ecommerce' | 'design' | 'seo' | 'app' | 'maintenance' | 'automation';


export interface PortfolioProject {
  id: string;
  title: string;
  subtitle?: string;
  category: ServiceCategory;
  categoryLabel: string;
  image: string;
  description: string;
  liveUrl: string;
  features?: string[];
  techStack?: string[];
  highlight?: string;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

