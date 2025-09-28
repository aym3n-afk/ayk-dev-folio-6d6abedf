import { useState } from 'react';

const BackgroundVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(var(--accent)) 0%, transparent 50%),
            linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 100% 100%',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
      
      {/* Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('3b82f6')}' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15z'/%3E%3Cpath d='M30 30l-15-15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Optional Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
          videoLoaded ? 'opacity-20' : 'opacity-0'
        }`}
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoLoaded(false)}
      >
        <source
          src="https://player.vimeo.com/external/417427035.sd.mp4?s=f6c4ec5212053ede8c23d6c3d93a4d7b8a0d2076&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-network-of-lines-and-points-1137-large.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[0.5px]" />
    </div>
  );
};

export default BackgroundVideo;