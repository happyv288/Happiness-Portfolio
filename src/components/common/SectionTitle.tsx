type SectionTitleProps = {
  label: string;
  title: string;
};

const SectionTitle = ({ label, title }: SectionTitleProps) => {
  return (
    <div className="mb-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
        {label}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-slate-900 transition-colors duration-300 dark:text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
