
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
}

export interface SiteConfig {
  name: string;
  heroTitle: string;
  heroSub: string;
  primaryColor: string;
  secondaryColor: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    blog?: string;
  };
}

export type ViewType = 'home' | 'services' | 'blog' | 'contact' | 'admin' | 'post-detail';
