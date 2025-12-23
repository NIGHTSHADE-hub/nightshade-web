const VoidVideoSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Video Layer */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="src/assets/videos/nightshade.webm" type="video/webm" />
        <source src="src/assets/videos/nightshade.mp4" type="video/mp4" />
      </video>

      {/* Overlay (Gradient + Noise) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
      <div className="absolute inset-0 z-10 bg-[url('/noise.png')] opacity-[0.08]" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white">
          ENTER THE VOID
        </h1>
        <p className="mt-4 max-w-xl text-gray-400">
          Systems awaken where light fails.
        </p>
      </div>

    </section>
  );
};

export default VoidVideoSection;
