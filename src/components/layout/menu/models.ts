import { Pathnames } from '@/i18n/routing';
import { IconName } from '@fortawesome/pro-solid-svg-icons';

export interface SubmenuItem {
  label: string;
  iconColor: string;
  icon: IconName;
  slug: Pathnames;
  description?: string;
}

export interface MenuSection {
  id: number;
  title?: string;
  items: SubmenuItem[];
}
