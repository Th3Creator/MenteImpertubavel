import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Hero = () => {
  const scrollToVideos = () => {
    window.open("https://lp.projetocaopastor.com.br/", "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Animated glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-foreground leading-tight">
            Mente <span className="text-primary">Imperturbável</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desenvolva uma mentalidade inabalável. Fortaleça seu interior. Transforme sua vida através do desenvolvimento pessoal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              onClick={scrollToVideos}
              className="group"
            >
              Começar Jornada
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.youtube.com/@caveiracadar09/videos", "_blank")}
            >
              Visitar Canal
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.projetocaopastor.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAaa37PfBBe6t2RHMixJG-0z9rj9PMJRI5i9vC5cclaNiW9aQ2ehyw3K-WKw_aem_65tuRLFHK_m6BZ2rUJizrw", "_blank")}
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
