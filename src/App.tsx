import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
    return (
        <div className="bg-gray-950 text-gray-100 min-h-screen antialiased">
            <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
                <Hero />
                <Skills />
                <Projects />
                <About />
                <Footer />
            </main>
        </div>
    );
}