import { icons } from 'lucide-react';

const Icon = ({ name, color, size }) => {
  const LucideIcon = icons['home'];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
