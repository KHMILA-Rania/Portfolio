import type { Blog } from "@/data/blog";

const EducationRow = ({ title, description, tags, date, readTime }: Blog) => {
  return (
    <div className="group relative flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-5 border-b border-border/60">
      {/* accent line that grows in on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-foreground scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

      {/* date column */}
      <div className="flex sm:flex-col sm:w-32 shrink-0 justify-between sm:justify-start font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase pl-3 sm:pl-4 sm:pt-0.5 group-hover:text-foreground transition-colors duration-300">
        <span>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </span>
        <span className="sm:mt-1 opacity-60">{readTime}</span>
      </div>

      {/* content */}
      <div className="flex flex-col gap-1.5 min-w-0 flex-1 pl-3 sm:pl-0">
        <span className="text-lg font-light text-foreground sm:text-xl">
          {title}
        </span>
        <p className="text-sm font-light leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-3 sm:max-w-2xl">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 font-mono text-[10px] tracking-wide text-muted-foreground/70 uppercase">
            {tags.map((tag, i) => (
              <span key={tag}>
                {tag}
                {i < tags.length - 1 && <span className="ml-3 opacity-40">/</span>}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationRow;