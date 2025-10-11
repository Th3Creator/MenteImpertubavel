import { Youtube, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Mente Imperturbável
            </h3>
            <p className="text-muted-foreground">
              Desenvolvimento pessoal e fortalecimento interior
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.youtube.com/@caveiracadar09/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube size={24} />
              <span className="hidden sm:inline">YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/caveiracadar09/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={24} />
              <span className="hidden sm:inline">Instagram</span>
            </a>

            <a
              href="mailto:camisamatilha@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
              <span className="hidden sm:inline">Contato</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mente Imperturbável. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
