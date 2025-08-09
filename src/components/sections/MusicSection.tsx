import { Music } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MusicSection = () => {
  return (
    <section id="music" className="relative py-20 md:py-32 overflow-hidden">
      {/* Floating musical hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 text-primary/15 text-2xl animate-bounce">♪</div>
        <div className="absolute top-32 right-16 text-primary/10 text-3xl heart-pulse">♥</div>
        <div
          className="absolute bottom-24 left-1/4 text-primary/12 text-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          ♫
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Music className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Soundtracks of Love</span>
          </div>

          <h2 className="cinema-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Music & Songs
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked Tamil and Telugu tracks with beautiful visuals. Enjoy the vibes.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="tamil" className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-10">
              <TabsTrigger value="tamil">Tamil</TabsTrigger>
              <TabsTrigger value="telugu">Telugu</TabsTrigger>
            </TabsList>
          </div>

          {/* Tamil */}
          <TabsContent value="tamil">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* YouTube */}
              <Card className="love-card overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-gradient">Vasthaavaa — YouTube</CardTitle>
                  <CardDescription>Official video</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      className="w-full h-full rounded-md"
                      src="https://www.youtube.com/embed/_dcfi9yC3ok?si=YHqfGwnSKVUkTE54"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </AspectRatio>
                </CardContent>
              </Card>

              {/* Spotify */}
              <Card className="love-card overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-gradient">Vasthaavaa — Spotify</CardTitle>
                  <CardDescription>Stream the track</CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe
                    className="w-full rounded-md"
                    style={{ borderRadius: 12 }}
                    src="https://open.spotify.com/embed/track/3eQV9HCozqhPX4bVhprIrL?utm_source=generator"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Telugu */}
          <TabsContent value="telugu">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* YouTube */}
              <Card className="love-card overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-gradient">Vasthaavaa — YouTube (Telugu)</CardTitle>
                  <CardDescription>Official video</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      className="w-full h-full rounded-md"
                      src="https://www.youtube.com/embed/ejOf8h4NNiY?si=9WbcfCN_2Nup2SZ-"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </AspectRatio>
                </CardContent>
              </Card>

              {/* Spotify */}
              <Card className="love-card overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-gradient">Telugu — Spotify</CardTitle>
                  <CardDescription>Stream the track</CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe
                    className="w-full rounded-md"
                    style={{ borderRadius: 12 }}
                    src="https://open.spotify.com/embed/track/1M67wuVGrL7BSDAIZrKNlJ?utm_source=generator&theme=0"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MusicSection;