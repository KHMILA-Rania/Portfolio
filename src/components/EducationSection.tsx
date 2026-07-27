import { blogs } from "@/data/blog";
import EducationRow from "./EducationRow";

const EducationSection = () => {
  return (
    <section id="education" className="w-full space-y-6">
      <div className="flex gap-3">
        <p className="text-2xl font-light tracking-tight sm:text-3xl">
          Education
        </p>
      </div>
      <div className="flex flex-col border-t border-border/60">
        {blogs.map((blog) => (
          <EducationRow key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;