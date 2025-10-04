import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ShoppingBag, Mail } from "lucide-react";
import { Button } from "./ui/button";

const StoreSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:camisamatilha@gmail.com?subject=Interesse em Camiseta Mente Imperturbável";
  };

  return (
    <section id="loja" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Loja
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vista a mentalidade. Carregue a filosofia.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/50 bg-card hover:border-primary transition-all duration-300 animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-heading font-bold text-primary mb-2">
                Camisetas Exclusivas
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-secondary/50 rounded-lg p-6 text-center">
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  Nossas camisetas são mais do que peças de roupa - são declarações de compromisso com o desenvolvimento pessoal e fortalecimento interior.
                </p>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                  <Mail className="text-primary" size={24} />
                  <span className="font-mono text-lg">camisamatilha@gmail.com</span>
                </div>
                
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleEmailClick}
                  className="w-full md:w-auto"
                >
                  <Mail size={20} />
                  Entrar em Contato
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                Entre em contato para conhecer modelos, tamanhos e valores disponíveis
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
