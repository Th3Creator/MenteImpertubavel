import { Card } from "./ui/card";
import { Quote } from "lucide-react";

const QuotesSection = () => {
  const quotes = [
    "A mente imperturbável não é aquela que nunca sente medo, mas aquela que age apesar dele.",
    "Você não controla o que acontece, mas sempre controla como responde.",
    "Disciplina é a ponte entre objetivos e conquistas.",
    "O soldado treina na paz para vencer na guerra. Você treina sua mente no conforto para vencer nas adversidades.",
    "Não espere pela motivação. Ela é uma visitante ocasional. A disciplina é uma moradora permanente.",
    "Seu maior adversário sempre foi e sempre será você mesmo.",
    "Toda grande transformação começa com a decisão de não ser mais o mesmo.",
    "O tempo vai passar de qualquer forma. A pergunta é: quem você será quando ele passar?",
    "Conforto é o assassino silencioso dos sonhos.",
    "A dor da disciplina ou a dor do arrependimento. Você escolhe.",
  ];

  return (
    <section id="frases" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Quote className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Frases de Impacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Palavras que fortalecem, inspiram e transformam
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {quotes.map((quote, idx) => (
            <Card
              key={idx}
              className="group hover:scale-105 hover:border-primary transition-all duration-300 bg-card animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="p-6 flex items-start gap-4">
                <Quote className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-lg text-foreground leading-relaxed italic">
                  {quote}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
