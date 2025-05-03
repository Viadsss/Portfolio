interface Props {
  imgSrc: string;
  imgSrcDark?: string;
  title: string;
  theme: string;
}

const SkillCard: React.FC<Props> = ({
  imgSrc,
  imgSrcDark = null,
  title,
  theme,
}) => {
  const imageSource = theme === "dark" && imgSrcDark ? imgSrcDark : imgSrc;

  return (
    <li className="flex aspect-square w-32 flex-col items-center justify-around text-wrap rounded-lg border-2 border-blue-400 bg-slate-100/50 p-4 transition hover:bg-blue-100/50 md:backdrop-blur-sm dark:border-violet-600/50 dark:bg-slate-900/50 dark:hover:bg-violet-900/50">
      <img src={imageSource} className="w-10" alt={title} />
      <p className="text-center font-martianMono text-xs font-bold">{title}</p>
    </li>
  );
};

export default SkillCard;
