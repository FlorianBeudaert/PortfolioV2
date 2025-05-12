export interface Skill {
  name: string;
  category: string;
  icon: string;
  customIcon?: string;
  hex: string; // Changed from 'string | undefined' to 'string'
}
