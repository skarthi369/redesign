const MusicSection = () => {
  return (
    <section id="music" className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-head text-3xl md:text-4xl">Original Music</h2>
          <p className="mt-4 text-muted-foreground">Explore a selection from our catalogue of original compositions and soundtracks crafted to elevate narrative moments.</p>
          <div className="mt-6 glass-card rounded-lg p-4">
            <div className="text-sm text-muted-foreground">Featured track</div>
            <div className="font-medium mt-1">Waves of Light</div>
            <audio className="mt-3 w-full" controls preload="none">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div className="glass-card rounded-lg p-6">
          <ul className="space-y-3">
            <li>
              <div className="flex items-center justify-between">
                <span>Golden Hour Theme</span>
                <span className="text-xs text-muted-foreground">02:42</span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span>City of Dreams Overture</span>
                <span className="text-xs text-muted-foreground">03:18</span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span>Beyond the Noise Suite</span>
                <span className="text-xs text-muted-foreground">02:57</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
