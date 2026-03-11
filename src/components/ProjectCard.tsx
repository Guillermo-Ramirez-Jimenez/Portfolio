import type { Project } from "../types/project";
import { motion } from "framer-motion"
import TechStackIcons from "./TechStackIcons";

type Props = Project & {
    delay?: number
}

export default function ProjectCard({title, img, description, techStack, urlGitHub, urlProject, lessonsLearnt, badge, delay}: Props) {
    return (
        <motion.div
            className="relative flex flex-col rounded-xl p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500
                hover:from-purple-400 hover:via-blue-400 hover:to-cyan-400 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="flex flex-col gap-4 bg-gray-900 rounded-xl p-4 h-full">

                {badge && (
                    <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                        {badge}
                    </span>
                )}

                <div className="group flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold mt-0">{title}</h3>

                    <img src={img} alt={title + " preview"} className="rounded-lg max-h-44 object-cover transition-transform duration-500 group-hover:scale-105" />

                    <p className="text-gray-400 border-b pb-4">
                        {description}
                    </p>

                    <TechStackIcons techStack={techStack} />

                    <div className="border-t pt-4">
                        <h3 className="text-xl font-semibold">What I learned:</h3>
                        <ul className="text-gray-400 pt-2 list-disc ml-4">
                            {lessonsLearnt.map((lesson) => <li>{lesson}</li>)}
                        </ul>
                    </div>

                    <div className="flex gap-4 border-t pt-4">
                        <a href={urlProject} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Live Demo
                        </a>
                        <a href={urlGitHub} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};