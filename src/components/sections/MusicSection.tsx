import { Heart, Music, Play, Pause, Volume2, Download, Headphones, Star, Clock } from "lucide-react";
import { useState } from "react";

const MusicSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const featuredTrack = {
    title: "Eternal Embrace",
    description: "A tender orchestral piece capturing the moment two souls become one",
    duration: "03:24",
    genre: "Romantic Orchestral"
  };

  const playlist = [
    { title: "Whispered Promises", duration: "02:42", mood: "Intimate" },
    { title: "Dancing Under Stars", duration: "03:18", mood: "Dreamy" },
    { title: "First Kiss Symphony", duration: "02:57", mood: "Passionate" },
    { title: "Wedding Day Waltz", duration: "04:12", mood: "Joyful" },
    { title: "Love's Journey Home", duration: "03:45", mood: "Nostalgic" }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="music" className="relative py-20 md:py-32 overflow-hidden">
      {/* Floating musical hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 text-primary/15 text-2xl animate-bounce">♪</div>
        <div className="absolute top-32 right-16 text-primary/10 text-3xl heart-pulse">♥</div>
        <div className="absolute bottom-24 left-1/4 text-primary/12 text-xl animate-pulse" style={{animationDelay: '1s'}}>♫</div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Music className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Soundtracks of Love</span>
          </div>
          
          <h2 className="cinema-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Original Music
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of original compositions crafted to capture the essence of romance and elevate every emotional moment in your love story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Featured Track Player */}
          <div className="space-y-8">
            <div className="love-card p-8 relative">
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Featured Love Theme</div>
                    <h3 className="text-2xl font-semibold text-gradient">{featuredTrack.title}</h3>
                    <p className="text-muted-foreground mt-2">{featuredTrack.description}</p>
                  </div>
                </div>

                {/* Audio Player */}
                <div className="space-y-4">
                  <audio 
                    className="w-full rounded-lg" 
                    controls 
                    preload="none"
                    style={{
                      filter: 'sepia(1) hue-rotate(290deg) saturate(1.5)',
                      height: '40px'
                    }}
                  >
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  {/* Track Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="genre-tag">{featuredTrack.genre}</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {featuredTrack.duration}
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Note */}
            <div className="love-card p-6 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">From Our Composers</h4>
                  <p className="text-sm text-muted-foreground italic">
                    "Music is the universal language of love. Each note we compose carries the weight of emotion, designed to make hearts flutter and souls connect."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="love-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gradient">Romantic Collection</h3>
                <p className="text-sm text-muted-foreground">Handpicked love themes</p>
              </div>
            </div>

            <div className="space-y-4">
              {playlist.map((track, index) => (
                <div 
                  key={index}
                  className="group flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
                >
                  <div className="flex items-center gap-4">
                    <button 
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      onClick={() => setCurrentTrack(currentTrack === index ? null : index)}
                    >
                      {currentTrack === index ? 
                        <Pause className="w-4 h-4" /> : 
                        <Play className="w-4 h-4 ml-0.5" />
                      }
                    </button>
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors duration-300">
                        {track.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {track.mood} • {track.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/30 text-accent-foreground">
                      {track.mood}
                    </span>
                    <Volume2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Playlist Stats */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-primary">{playlist.length}</div>
                  <div className="text-xs text-muted-foreground">Love Themes</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-primary">15m</div>
                  <div className="text-xs text-muted-foreground">Total Romance</div>
                </div>
                <div className="flex justify-center">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MusicSection;