type SkillBadgeProps = {
  skill: string;
};

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <div
      className="
        rounded-xl
        border
        border-slate-300
        bg-white
        px-5
        py-3
        font-medium
        text-slate-800
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:bg-blue-50
        hover:text-blue-600
        dark:border-slate-700
        dark:bg-slate-800
        dark:text-white
        dark:hover:bg-slate-700
        dark:hover:text-blue-400
      "
    >
      {skill}
    </div>
  );
};

export default SkillBadge;
