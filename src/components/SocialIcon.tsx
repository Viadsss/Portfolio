type SocialIconProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const SocialIcon: React.FC<SocialIconProps> = ({ href, label, icon }) => {
  return (
    <a
      className="transition hover:-translate-y-1 hover:text-blue-600 dark:hover:text-violet-400"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
