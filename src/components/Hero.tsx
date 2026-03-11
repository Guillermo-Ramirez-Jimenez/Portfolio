import { motion } from "framer-motion"

export default function Hero() {
    return (
        <motion.section
            className="space-y-6 flex flex-col md:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col items-center md:flex-row md:justify-center">
                <img 
                    src="https://avatars.githubusercontent.com/u/76818023?v=4"
                    alt="profile_image" 
                    className="rounded-full w-1/2 text-center md:w-1/4"    
                />

                <div className="space-y-4 mt-2 md:m-0 md:max-w-md">
                    <h1 className="text-4xl font-bold text-center">
                        Guillermo Ramírez Jiménez
                    </h1>

                    <h2 className="text-xl text-gray-400 md:text-center">
                        Frontend Developer (React & TypeScript)
                    </h2>
                </div>
            </div>

            <p className="text-gray-300 md:text-center md:max-w-xl">
                Frontend developer specialized in React and TypeScript,
                focused on building clean, scalable interfaces and
                continuously expanding into full-stack development.
            </p>
        </motion.section>
    );
}