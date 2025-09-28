import { useState } from 'react';

const BackgroundVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-30' : 'opacity-0'
        }`}
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoLoaded(false)}
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-and-electronics-509-large.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Fallback Image */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-background via-accent-light to-muted transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    </div>
  );
};

export default BackgroundVideo;