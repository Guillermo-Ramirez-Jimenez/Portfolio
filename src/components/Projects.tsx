import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectData"

export default function Projects() {
    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-semibold">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => <ProjectCard key={p.title} delay={0.15 * i} {...p} />)}
            </div>
        </section>
    );
    }