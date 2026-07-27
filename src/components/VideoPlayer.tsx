import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Autoplay policy compliant default: muted
  const [posterUrl, setPosterUrl] = useState<string>('');
  const duration = 25; // 25 sec introduction as requested

  // Generate high-resolution poster image on canvas at mount
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 360;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Dark studio background with blue/cyan/purple ambient glow
      const bgGradient = ctx.createRadialGradient(320, 180, 20, 320, 180, 320);
      bgGradient.addColorStop(0, '#1e1b4b'); // deep indigo
      bgGradient.addColorStop(0.5, '#0f172a'); // slate-900
      bgGradient.addColorStop(1, '#020617'); // slate-950
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, 640, 360);

      // Studio light bokeh highlights
      ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
      ctx.beginPath();
      ctx.arc(160, 100, 120, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(168, 85, 247, 0.15)';
      ctx.beginPath();
      ctx.arc(480, 120, 140, 0, Math.PI * 2);
      ctx.fill();

      // Professional AI Presenter Silhouette / Avatar
      // Avatar halo ring
      const ringGradient = ctx.createLinearGradient(240, 60, 400, 220);
      ringGradient.addColorStop(0, '#3b82f6');
      ringGradient.addColorStop(0.5, '#8b5cf6');
      ringGradient.addColorStop(1, '#ec4899');
      ctx.lineWidth = 4;
      ctx.strokeStyle = ringGradient;
      ctx.beginPath();
      ctx.arc(320, 140, 62, 0, Math.PI * 2);
      ctx.stroke();

      // Head / Face
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.arc(320, 130, 36, 0, Math.PI * 2);
      ctx.fill();

      // Hair
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(320, 122, 38, Math.PI * 1.1, Math.PI * 1.9);
      ctx.fill();

      // Shoulders & Navy/Blue suit
      ctx.fillStyle = '#1d4ed8'; // Royal blue suit jacket
      ctx.beginPath();
      ctx.moveTo(230, 310);
      ctx.quadraticCurveTo(260, 210, 320, 200);
      ctx.quadraticCurveTo(380, 210, 410, 310);
      ctx.closePath();
      ctx.fill();

      // Shirt & Tie
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(300, 200);
      ctx.lineTo(320, 235);
      ctx.lineTo(340, 200);
      ctx.closePath();
      ctx.fill();

      // Name Overlay on Poster
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Sri Hari Mada', 320, 305);

      ctx.fillStyle = '#93c5fd';
      ctx.font = '500 13px Inter, system-ui, sans-serif';
      ctx.fillText('Frontend Engineer • 25 sec Introduction', 320, 328);

      setPosterUrl(canvas.toDataURL('image/png'));
    }
  }, []);

  // Initialize Canvas Stream to feed real HTML5 <video> element
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 360;
    canvasRef.current = canvas;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    let animId: number;

    const renderFrame = () => {
      const time = currentTime;
      // Draw background
      const bgGrad = ctx.createRadialGradient(320, 180, 10, 320, 180, 340);
      bgGrad.addColorStop(0, '#1e1b4b');
      bgGrad.addColorStop(0.6, '#0f172a');
      bgGrad.addColorStop(1, '#020617');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 640, 360);

      // Ambient moving lights when playing
      const lightOffset = isPlaying ? Math.sin(time * 3) * 20 : 0;
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.beginPath();
      ctx.arc(160 + lightOffset, 100, 130, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(236, 72, 153, 0.18)';
      ctx.beginPath();
      ctx.arc(480 - lightOffset, 120, 130, 0, Math.PI * 2);
      ctx.fill();

      // Presenter Avatar with subtle natural head sway & talking mouth motion when playing
      const swayY = isPlaying ? Math.sin(time * 4) * 3 : 0;
      const mouthOpen = isPlaying ? Math.abs(Math.sin(time * 12)) * 6 : 0;

      // Ring
      const ringGrad = ctx.createLinearGradient(240, 60, 400, 220);
      ringGrad.addColorStop(0, '#3b82f6');
      ringGrad.addColorStop(0.5, '#8b5cf6');
      ringGrad.addColorStop(1, '#ec4899');
      ctx.lineWidth = 4;
      ctx.strokeStyle = ringGrad;
      ctx.beginPath();
      ctx.arc(320, 140 + swayY, 62, 0, Math.PI * 2);
      ctx.stroke();

      // Head
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.arc(320, 130 + swayY, 36, 0, Math.PI * 2);
      ctx.fill();

      // Hair
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(320, 122 + swayY, 38, Math.PI * 1.1, Math.PI * 1.9);
      ctx.fill();

      // Eyes
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(308, 128 + swayY, 3.5, 0, Math.PI * 2);
      ctx.arc(332, 128 + swayY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Mouth (animates when speaking)
      ctx.fillStyle = '#e11d48';
      ctx.beginPath();
      if (mouthOpen > 1) {
        ctx.ellipse(320, 148 + swayY, 8, 3 + mouthOpen, 0, 0, Math.PI * 2);
      } else {
        ctx.arc(320, 146 + swayY, 6, 0.1 * Math.PI, 0.9 * Math.PI);
      }
      ctx.fill();

      // Suit
      ctx.fillStyle = '#1d4ed8';
      ctx.beginPath();
      ctx.moveTo(230, 310 + swayY);
      ctx.quadraticCurveTo(260, 210 + swayY, 320, 200 + swayY);
      ctx.quadraticCurveTo(380, 210 + swayY, 410, 310 + swayY);
      ctx.closePath();
      ctx.fill();

      // Shirt
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(300, 200 + swayY);
      ctx.lineTo(320, 235 + swayY);
      ctx.lineTo(340, 200 + swayY);
      ctx.closePath();
      ctx.fill();

      // Audio waveform equalizer bars when audio is playing
      if (isPlaying) {
        ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
        for (let i = 0; i < 16; i++) {
          const h = Math.abs(Math.sin(time * 8 + i * 0.5)) * 24 + 6;
          ctx.fillRect(40 + i * 8, 320 - h, 5, h);
          ctx.fillRect(600 - i * 8, 320 - h, 5, h);
        }
      }

      // Live Subtitle Overlay
      let subtitle = "Click Play to start 25 sec video introduction";
      if (isPlaying || currentTime > 0) {
        if (currentTime < 5) subtitle = "Hello! I'm Sri Hari Mada, Frontend Engineer based in Hyderabad.";
        else if (currentTime < 12) subtitle = "I build scalable, accessible web applications using React.js and TypeScript.";
        else if (currentTime < 19) subtitle = "With 3+ years in Banking & Logistics, I focus on performance and WCAG compliance.";
        else if (currentTime <= 25) subtitle = "Explore my featured PG Adda prototype and WhatsApp Quiet Mode concept below!";
        else subtitle = "Thank you for watching!";
      }

      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(20, 310, 600, 38);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.strokeRect(20, 310, 600, 38);

      ctx.fillStyle = '#f8fafc';
      ctx.font = '600 12px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`"${subtitle}"`, 320, 334);

      if (isPlaying) {
        animId = requestAnimationFrame(renderFrame);
      }
    };

    renderFrame();

    // Attach stream to video tag if supported
    if (canvas.captureStream && videoRef.current && !videoRef.current.srcObject) {
      try {
        const stream = canvas.captureStream(30);
        videoRef.current.srcObject = stream;
      } catch (e) {
        // Fallback gracefully
      }
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isPlaying, currentTime]);

  // Handle Play/Pause logic
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (currentTime >= duration) {
      setCurrentTime(0);
    }

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } else {
      video.play().then(() => {
        setIsPlaying(true);

        // Speech synthesis narration when unmuted or user plays
        if ('speechSynthesis' in window && !isMuted) {
          window.speechSynthesis.cancel();
          const text = `Hi, I'm Sri Hari Mada, Frontend Engineer based in Hyderabad, India. I build scalable, responsive, accessible, and user-focused web applications using React.js and TypeScript. Welcome to my portfolio!`;
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.rate = 1.0;
          utterance.pitch = 1.0;
          window.speechSynthesis.speak(utterance);
        }
      }).catch(() => {
        // Fallback if browser blocks play
        setIsPlaying(true);
      });
    }
  };

  // Synchronize timer loop
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            if (videoRef.current) videoRef.current.pause();
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            return duration;
          }
          return prev + 0.1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef.current) {
      videoRef.current.muted = newMuted;
    }
    if (newMuted && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    } else if (!newMuted && isPlaying && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = `Hi, I'm Sri Hari Mada, Frontend Engineer. I build scalable, accessible web applications using React.js and TypeScript.`;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (timeInSecs: number) => {
    const mins = Math.floor(timeInSecs / 60);
    const secs = Math.floor(timeInSecs % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = (currentTime / duration) * 100;

  return (
    <div className="relative group w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Subtle Blue, Cyan, and Violet Glow halo around frame */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-600 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500 pointer-events-none" />

      {/* Main Video Frame Container */}
      <div
        ref={containerRef}
        className="relative w-full rounded-3xl sm:rounded-[2rem] overflow-hidden bg-slate-900/90 border border-white/60 backdrop-blur-md shadow-2xl transition-all duration-300"
      >
        {/* Top Floating Badge Label: "Meet Sri Hari — 25 sec" */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-30">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Meet Sri Hari — 25 sec</span>
          </div>
        </div>

        {/* Real HTML5 <video> Element */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            poster={posterUrl}
            playsInline
            muted={isMuted}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
            aria-label="Video introduction by Sri Hari Mada"
            title="Video introduction by Sri Hari Mada"
          />

          {/* Center Overlay Play Button when paused */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white/40 group/btn focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
              aria-label="Play AI Avatar Video"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
            </button>
          )}

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent z-30 flex flex-col gap-2">
            {/* Interactive Progress Bar */}
            <div
              role="slider"
              tabIndex={0}
              aria-label="Video progress timeline slider"
              aria-valuemin={0}
              aria-valuemax={duration}
              aria-valuenow={Math.round(currentTime)}
              aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                  e.preventDefault();
                  const next = Math.min(currentTime + 2, duration);
                  setCurrentTime(next);
                  if (videoRef.current) videoRef.current.currentTime = next;
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                  e.preventDefault();
                  const prev = Math.max(currentTime - 2, 0);
                  setCurrentTime(prev);
                  if (videoRef.current) videoRef.current.currentTime = prev;
                }
              }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPercent = clickX / rect.width;
                const newTime = newPercent * duration;
                setCurrentTime(newTime);
                if (videoRef.current) videoRef.current.currentTime = newTime;
              }}
              className="w-full h-1.5 bg-slate-700/80 hover:h-2.5 rounded-full cursor-pointer relative overflow-hidden transition-all group/bar focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
            >
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full relative"
                style={{ width: `${Math.min(progressPercent, 100)}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/bar:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white text-xs pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={() => {
                    setCurrentTime(0);
                    if (videoRef.current) videoRef.current.currentTime = 0;
                  }}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  title="Replay video from start"
                  aria-label="Replay video"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <span className="font-mono text-[11px] text-slate-300 font-semibold">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>

                <button
                  onClick={handleFullscreen}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Callout Annotation Text below video */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="font-semibold text-indigo-700 text-sm sm:text-base tracking-wide italic">
          Play to know more about me
        </span>
        <svg
          className="w-5 h-5 text-indigo-600 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};
