import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVercel, SiMysql } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS/SASS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "MySQL", icon: <SiMysql className="text-white" />}
];

export default function Skills() {
    return (
        <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="flex items-center justify-center gap-2 p-4 bg-gray-900 rounded-xl border border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 cursor-default"
                >
                    {skill.icon}
                    <span className="font-medium text-white">{skill.name}</span>
                </div>
            ))}
        </div>
        </section>
    );
}