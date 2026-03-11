import { SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiSass, SiJavascript, SiBootstrap, SiAxios, SiVercel } from "react-icons/si";
import type { IconType } from "react-icons";

export const techIconMap: Record<string, IconType> = {
    "HTML": SiHtml5,
    "SASS": SiSass,
    "React": SiReact,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Bootstrap": SiBootstrap,
    "Tailwind": SiTailwindcss,
    "Axios": SiAxios,
    "Vercel": SiVercel,
};