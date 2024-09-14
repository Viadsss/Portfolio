type SocialIconProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  rounded?: boolean;
};

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  label,
  icon,
  rounded,
}) => {
  return (
    <a
      className={`transition ${rounded ? "rounded-full p-1 hover:bg-blue-600 hover:text-white hover:dark:bg-violet-800" : "hover:-translate-y-1 hover:text-blue-600 dark:hover:text-violet-400"}`}
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
