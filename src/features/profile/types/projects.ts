export type Project = {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  links?: {
    github?: string;
    linkedin?: string;
    youtube?: string;
  };
  skills: string[];
  description?: string;
  logo?: string;
  isExpanded?: boolean;
};
