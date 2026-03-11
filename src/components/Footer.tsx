import { FaLinkedin } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="space-y-4 border-t border-gray-800 pt-6 pb-6 text-gray-400 text-center">
            <div className="flex justify-center gap-8 text-gray-400">
                <a 
                    href="mailto:guillermo.ramirez.jimenez.0@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center hover:text-white transition-colors"
                >
                    <SiGmail className="text-xl md:text-2xl" title="Email" />Email
                </a>
                <a 
                    href="https://github.com/Guillermo-Ramirez-Jimenez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center hover:text-white transition-colors"
                >
                    <SiGithub className="text-xl md:text-2xl" title="GitHub" />GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/guillermo-ram%C3%ADrez-jim%C3%A9nez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 hover:text-white transition-colors"
                >
                    <FaLinkedin className="text-xl md:text-2xl" title="LinkedIn" />LinkedIn
                </a>
            </div>

            <p className="text-sm text-gray-500">Built with React, TypeScript and Tailwind. Guillermo Ramírez Jiménez © {new Date().getFullYear()}</p>
        </footer>
    );
}