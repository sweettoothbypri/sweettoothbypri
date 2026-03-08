import { useState, useEffect } from "react";
import cakeVideo1 from "@/assets/cake-video-1.mov";
import cakeVideo2 from "@/assets/cake-video-2.mp4";
import cakeVideo3 from "@/assets/cake-video-3.mov";

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    { id: 1, src: cakeVideo1, label: "Animated Cake 1", objectPosition: "top" },
    { id: 2, src: cakeVideo2, label: "Animated Cake 2", objectPosition: "center" },
    { id: 3, src: cakeVideo3, label: "Animated Cake 3", objectPosition: "center" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 8000); // 8 seconds per slide
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-chocolate/10">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {video.src ? (
            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ objectPosition: video.objectPosition }}
            />
          ) : null}
        </div>
      ))}

      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-t from-chocolate/70 via-transparent to-chocolate/30 flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <h1 className="font-script text-4xl md:text-6xl lg:text-7xl text-warm-cream drop-shadow-lg mb-2 animate-fade-in">
            Sweet Tooth by Pri
          </h1>
          <p className="font-body text-warm-cream/90 text-lg md:text-xl max-w-xl animate-fade-in-up">
            Exclusive, healthy & affordable sweet magic
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === currentIndex ? "bg-primary scale-125" : "bg-warm-cream/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
