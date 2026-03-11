import { techIconMap } from "../types/techIconMap";

interface Props {
    techStack: string[];
}

export default function TechStackIcons({ techStack }: Props) {
    return (
        <div className="flex flex-wrap gap-4 items-center text-gray-400">
            {techStack.map((tech) => {
                const Icon = techIconMap[tech];

                return (
                    <span key={tech} className="flex items-center gap-1 text-sm md:text-base">
                        {Icon && <Icon className="text-xl md:text-2xl hover:text-white transition-colors" title={tech} />}
                        {tech}
                    </span>
                );
            })}
        </div>
    );
}