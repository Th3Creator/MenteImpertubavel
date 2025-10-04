import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

interface Video {
  id: string;
  title: string;
  url: string;
}

interface Topic {
  name: string;
  videos: Video[];
}

const VideoSection = () => {
  const [showAllVideos, setShowAllVideos] = useState<{ [key: string]: boolean }>({});

  const topics: Topic[] = [
    {
      name: "Fortalecendo o Soldado",
      videos: [
        { id: "71", title: "RC - 71", url: "https://www.youtube.com/watch?v=UXGeknGuC3U&t=514s" },
        { id: "72", title: "RC - 72", url: "https://www.youtube.com/watch?v=A3mWFqDq3g0&t=30s" },
        { id: "73", title: "RC - 73", url: "https://www.youtube.com/watch?v=22P9s1ntbd4" },
        { id: "74", title: "RC - 74", url: "https://www.youtube.com/watch?v=VaAap_NYlBM&t=1s" },
        { id: "75", title: "RC - 75", url: "https://www.youtube.com/watch?v=BNy7RVBYA5U&t=1089s" },
        { id: "100", title: "RC - 100", url: "https://www.youtube.com/watch?v=6_82e5aoDsM&t=1293s" },
        { id: "103", title: "RC - 103", url: "https://www.youtube.com/watch?v=ubrYAMiAPnw" },
        { id: "106", title: "RC - 106", url: "https://www.youtube.com/watch?v=hSa94xoK2Zo&t=191s" },
        { id: "121", title: "RC - 121", url: "https://www.youtube.com/watch?v=4P9aa6H3a8M&t=4s" },
      ],
    },
    {
      name: "Procrastinação",
      videos: [
        { id: "100", title: "RC - 100", url: "https://www.youtube.com/watch?v=6_82e5aoDsM&t=1293s" },
        { id: "103", title: "RC - 103", url: "https://www.youtube.com/watch?v=ubrYAMiAPnw" },
        { id: "71-2", title: "RC - 71", url: "https://www.youtube.com/watch?v=UXGeknGuC3U&t=514s" },
      ],
    },
    {
      name: "Coração Partido",
      videos: [
        { id: "92", title: "RC - 92", url: "https://www.youtube.com/watch?v=p1P-QiJ6P9k" },
        { id: "93", title: "RC - 93", url: "https://www.youtube.com/watch?v=f3staR_JgCY&t=1s" },
        { id: "95", title: "RC - 95", url: "https://www.youtube.com/watch?v=Z8ZZxx3SQK4&t=21s" },
      ],
    },
    {
      name: "Ansiedade",
      videos: [
        { id: "24", title: "RC - 24", url: "https://www.youtube.com/watch?v=oQzEv9exnkw&t=11s" },
        { id: "72", title: "RC - 72", url: "https://www.youtube.com/watch?v=A3mWFqDq3g0&t=30s" },
        { id: "74", title: "RC - 74", url: "https://www.youtube.com/watch?v=VaAap_NYlBM" },
        { id: "74", title: "RC - 74", url: "https://www.youtube.com/watch?v=VaAap_NYlBM" },
      ],
    },
        {
      name: "Planejamento",
      videos: [
        { id: "79", title: "RC - 79", url: "https://www.youtube.com/watch?v=4KH3XiV-XVg&t=778s" },
        { id: "131", title: "RC - 131", url: "https://www.youtube.com/watch?v=DhgQCeyBh6M" },
        { id: "151", title: "RC - 151", url: "https://www.youtube.com/watch?v=y_0Ay0nP02s&t=8s" },
        { id: "158", title: "RC - 158", url: "https://www.youtube.com/watch?v=8--fNZMOi3c&t=399s" },
        { id: "171", title: "RC - 171", url: "https://www.youtube.com/watch?v=a_gaGRO_UT0&t=2511s" },
        { id: "181", title: "RC - 181", url: "https://www.youtube.com/watch?v=AVmwt9oU3C0&t=1478s" },
      ],
    },
  ];

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  const toggleShowAll = (topicName: string) => {
    setShowAllVideos(prev => ({ ...prev, [topicName]: !prev[topicName] }));
  };

  const INITIAL_VIDEO_COUNT = 3;

  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Vídeos por Tópico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore conteúdos organizados por temas essenciais do desenvolvimento pessoal
          </p>
        </div>

        <div className="space-y-12">
          {topics.map((topic, idx) => {
            const shouldShowAll = showAllVideos[topic.name] || false;
            const displayedVideos = shouldShowAll ? topic.videos : topic.videos.slice(0, INITIAL_VIDEO_COUNT);
            const hasMoreVideos = topic.videos.length > INITIAL_VIDEO_COUNT;

            return (
              <div key={topic.name} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
                  {topic.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedVideos.map((video) => (
                    <Card key={`${topic.name}-${video.id}`} className="group hover:scale-105 transition-all duration-300 hover:border-primary overflow-hidden bg-card">
                      <div className="relative aspect-video overflow-hidden">
                        <iframe
                          src={getYoutubeEmbedUrl(video.url)}
                          title={video.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl font-bold">{video.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                {hasMoreVideos && (
                  <div className="flex justify-center mt-6">
                    <Button
                      variant="outline"
                      onClick={() => toggleShowAll(topic.name)}
                    >
                      {shouldShowAll ? "Ver menos" : "Ver mais"}
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
