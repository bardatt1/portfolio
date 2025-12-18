import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="brett-portfolio-theme">
      <div className="min-h-screen">
        <Header />
        <main>
          <About />
          <Skills />
          <Projects />
          <Connect />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
