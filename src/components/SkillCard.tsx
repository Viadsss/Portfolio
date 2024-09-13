interface Props {
  imgSrc: string;
  title: string;
  dark?: boolean;
}

const SkillCard: React.FC<Props> = ({ imgSrc, title, dark }) => {
  return (
    <li className="flex aspect-square w-32 flex-col items-center justify-around text-wrap rounded-lg border-2 border-blue-400 bg-slate-100/50 p-4 backdrop-blur-sm transition hover:bg-blue-100/50 dark:border-violet-600/50 dark:bg-slate-900/50 dark:hover:bg-violet-900/50">
      <img
        src={imgSrc}
        className={`w-10 ${dark ? "dark:rounded-xl dark:bg-slate-100" : ""}`}
      />
      <p className="text-center font-martianMono text-xs font-bold">{title}</p>
    </li>
  );
};

export default SkillCard;
