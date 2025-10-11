import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface Playlist {
  name: string;
  url: string;
  rcs: string;
}

const VideoSection = () => {
  const playlists: Playlist[] = [
    {
      name: "Melhorando a relação e a organização da casa",
      url: "https://www.youtube.com/playlist?list=PLh1gsd1VmCuCkVKwzmq1IRDPikejxL4uG",
      rcs: "RC's: 12, 19, 84, 87, 91, 122, 135, 139, 143, 173, 174, 204, 212, 214, 215, 224, 239, 249, 261, 262"
    },
    {
      name: "Fortalecendo o soldado",
      url: "https://www.youtube.com/watch?v=2kA2t_tH0uA&list=PLh1gsd1VmCuCze-v5TfoYlWJqZpAQ77zm&pp=gAQB",
      rcs: "RC's: 71, 72, 73, 74, 75, 100, 103, 106, 121, 124"
    },
    {
      name: "Procrastinação",
      url: "https://www.youtube.com/watch?v=ubrYAMiAPnw&list=PLh1gsd1VmCuBk-rpuY_UF9y8aV0fGQz1T&pp=gAQB",
      rcs: "RC's: 100, 103, 71, 72, 73, 75"
    },
    {
      name: "Coração partido",
      url: "https://www.youtube.com/watch?v=q0zMlmlcdp0&list=PLh1gsd1VmCuAfOCOELBHBzcDBvEfn1_2h&pp=gAQB",
      rcs: "RC's: 92, 93, 95, 96, 97, 150, 212"
    },
    {
      name: "Após desistir",
      url: "https://www.youtube.com/watch?v=2fiFMeXJYls&list=PLh1gsd1VmCuAV55VlxABYJJskw2dX9tZX&pp=gAQB",
      rcs: "RC's: 106, 111, 121, 132, 115"
    },
    {
      name: "Seja homem",
      url: "https://www.youtube.com/watch?v=2kA2t_tH0uA&list=PLh1gsd1VmCuD-PYEYnsP3CDFNEpBfbfDo&pp=gAQB",
      rcs: "RC's: 86, 59, 92, 93, 106, 121, 124"
    },
    {
      name: "Construindo identidade",
      url: "https://www.youtube.com/watch?v=f3staR_JgCY&list=PLh1gsd1VmCuAMGdLZjUpZqRyA3tClzOlE&pp=gAQB",
      rcs: "RC's: 80, 86, 89, 90, 92, 93"
    },
    {
      name: "Entendendo os pais e traumas da infância",
      url: "https://www.youtube.com/watch?v=Z_b9FPBvXZ0&list=PLh1gsd1VmCuD5MUtWyMGT4P5QlGIjzC9_&pp=gAQB",
      rcs: "RC's: 87, 139, 143, 84"
    },
    {
      name: "Família",
      url: "https://www.youtube.com/watch?v=2YrE0_XIRx8&list=PLh1gsd1VmCuBPxoAdiWPM1c9MXjRt_yqm&pp=gAQB",
      rcs: "RC's: 91, 135, 143, 176"
    },
    {
      name: "Vícios",
      url: "https://www.youtube.com/watch?v=48mT4eUiCjQ&list=PLh1gsd1VmCuAHZWfvQWoDbz8SzHzlr8es&pp=gAQB",
      rcs: "RC's: 54, 120"
    },
    {
      name: "Terreno difícil",
      url: "https://www.youtube.com/watch?v=O_j7xi3SQXc&list=PLh1gsd1VmCuDw5c8iOE_33p1aXat3Hw5I&pp=gAQB",
      rcs: "RC's: 17, 90, 108, 117"
    }
  ];

  const comboConcurseiro: Playlist[] = [
    {
      name: "Combo concurseiro",
      url: "https://www.youtube.com/watch?v=k0tYTV6Qo4o&list=PLh1gsd1VmCuCO_EwM4N8N4NMrMMZ7ADEx&pp=gAQB",
      rcs: "Playlist completa"
    },
    {
      name: "Criando desejo",
      url: "https://www.youtube.com/watch?v=k0tYTV6Qo4o&list=PLh1gsd1VmCuCfsuzsyUI-E5Av4hmSwMBC&pp=gAQB",
      rcs: "RC's: 03, 13, 17, 22, 23, 38, 188"
    },
    {
      name: "Mente de soldado",
      url: "https://www.youtube.com/watch?v=p1P-QiJ6P9k&list=PLh1gsd1VmCuBNkPyxjTW-2XHssDjs8iPJ&pp=gAQB",
      rcs: "RC's: 71, 86, 89, 92"
    },
    {
      name: "Lidando com derrota",
      url: "https://www.youtube.com/watch?v=5N5fX1vS6B8&list=PLh1gsd1VmCuAmqixLbKHZC7v_-ncgZq27&pp=gAQB",
      rcs: "RC's: 106, 114, 145, 166, 187"
    },
    {
      name: "Melhorando o rendimento",
      url: "https://www.youtube.com/watch?v=DhgQCeyBh6M&list=PLh1gsd1VmCuDLbKwtaUdxkjRB4E4mI3TZ&pp=gAQB",
      rcs: "RC's: 123, 128, 131"
    },
    {
      name: "Lidando com ansiedade",
      url: "https://www.youtube.com/watch?v=8VwcD_zGRBI&list=PLh1gsd1VmCuAHdtBjgHAKIPZGWLspbWtI&pp=gAQB",
      rcs: "RC's: 24, 72, 74, 199, 228, 229"
    }
  ];

  const getYoutubePlaylistEmbedUrl = (url: string) => {
    const playlistId = url.match(/[?&]list=([^&]+)/)?.[1];
    return playlistId ? `https://www.youtube.com/embed/videoseries?list=${playlistId}` : "";
  };

  return (
    <section id="playlists" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Playlists
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore conteúdos organizados por temas essenciais do desenvolvimento pessoal
          </p>
        </div>

        {/* Playlists Gerais */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {playlists.map((playlist, idx) => (
              <Card
                key={idx}
                className="group hover:scale-105 transition-all duration-300 hover:border-primary overflow-hidden bg-card animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <iframe
                    src={getYoutubePlaylistEmbedUrl(playlist.url)}
                    title={playlist.name}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold">{playlist.name}</CardTitle>
                </CardHeader>

                <CardFooter className="flex flex-col items-start gap-2">
                  <p className="text-sm text-muted-foreground">{playlist.rcs}</p>
                  <a
                    href={playlist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Ver playlist completa <ExternalLink size={16} />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Combo Concurseiro */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Combo Concurseiro
            </h3>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Playlists especialmente selecionadas para quem está na jornada dos concursos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comboConcurseiro.map((playlist, idx) => (
              <Card
                key={idx}
                className="group hover:scale-105 transition-all duration-300 hover:border-primary overflow-hidden bg-card animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <iframe
                    src={getYoutubePlaylistEmbedUrl(playlist.url)}
                    title={playlist.name}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold">{playlist.name}</CardTitle>
                </CardHeader>

                <CardFooter className="flex flex-col items-start gap-2">
                  <p className="text-sm text-muted-foreground">{playlist.rcs}</p>
                  <a
                    href={playlist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Ver playlist completa <ExternalLink size={16} />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
