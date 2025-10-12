import { Card, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";
import desafio40Dias from "@/assets/desafio_40_dias.jpeg";
import biblioteca from "@/assets/biblioteca.jpeg";

const GroupsSection = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const groups = [
    {
      id: "desafio-40-dias",
      name: "Desafio dos 40 dias",
      image: desafio40Dias
    },
    {
      id: "biblioteca",
      name: "Biblioteca",
      image: biblioteca
    }
  ];

  return (
    <section id="grupos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Grupos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Coleções temáticas de playlists para objetivos específicos
          </p>
        </div>

        {!selectedGroup ? (
          <div className="flex flex-wrap justify-center gap-6">
            {groups.map((group) => {
              return (
                <Card
                  key={group.id}
                  onClick={() => setSelectedGroup(group.id)}
                  className="w-80 cursor-pointer group hover:scale-105 transition-all duration-300 hover:border-primary bg-card overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={group.image}
                      alt={group.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{group.name}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="animate-fade-in">
            <button
              onClick={() => setSelectedGroup(null)}
              className="mb-6 text-primary hover:underline flex items-center gap-2"
            >
              ← Voltar aos grupos
            </button>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-heading font-bold text-foreground">
                {groups.find(g => g.id === selectedGroup)?.name}
              </h3>
            </div>

            <Tabs defaultValue="topico-1" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="topico-1">Tópico 1</TabsTrigger>
                <TabsTrigger value="topico-2">Tópico 2</TabsTrigger>
                <TabsTrigger value="topico-3">Tópico 3</TabsTrigger>
                <TabsTrigger value="topico-4">Tópico 4</TabsTrigger>
              </TabsList>

              <TabsContent value="topico-1" className="animate-fade-in">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Em breve...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="topico-2" className="animate-fade-in">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Em breve...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="topico-3" className="animate-fade-in">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Em breve...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="topico-4" className="animate-fade-in">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Em breve...
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </section>
  );
};

export default GroupsSection;
