"use client";

import React, { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const PLAYLISTS = {
  bollywood: [
    {
      id: "Ddy-KpIU8xU",
      title: "Dhoom Again",
      artist: "Vishal Dadlani",
      thumbnail: "https://img.youtube.com/vi/Ddy-KpIU8xU/hqdefault.jpg",
    },
    {
      id: "uW3XpGDNNJQ",
      title: "JHOOM JHOOM",
      artist: "Himesh Reshammiya",
      thumbnail: "https://img.youtube.com/vi/uW3XpGDNNJQ/hqdefault.jpg",
    },
    {
      id: "GvopEaPnMx8",
      title: "Character Dheela",
      artist: "Pritam",
      thumbnail: "https://img.youtube.com/vi/GvopEaPnMx8/hqdefault.jpg",
    },
    {
      id: "o6ojv9uUezU",
      title: "Love Mera Hit Hit",
      artist: "Pritam",
      thumbnail: "https://img.youtube.com/vi/o6ojv9uUezU/hqdefault.jpg",
    },
    {
      id: "qYUVDThXXiw",
      title: "Mauja Hi Mauja",
      artist: "Mika Singh",
      thumbnail: "https://img.youtube.com/vi/qYUVDThXXiw/hqdefault.jpg",
    },
    {
      id: "vFcj37kw_28",
      title: "Vele",
      artist: "Vishal & Shekhar",
      thumbnail: "https://img.youtube.com/vi/vFcj37kw_28/hqdefault.jpg",
    },
    {
      id: "ciAPK_vWzuM",
      title: "HARI OM HARI OM",
      artist: "Himesh Reshammiya",
      thumbnail: "https://img.youtube.com/vi/ciAPK_vWzuM/hqdefault.jpg",
    },
    {
      id: "Sd8DfBMR60w",
      title: "No Entry - Ishq Di Galli Vich (Remix)",
      artist: "Sonu Nigam",
      thumbnail: "https://img.youtube.com/vi/Sd8DfBMR60w/hqdefault.jpg",
    },
    {
      id: "iAUccT7HgUM",
      title: "Meri Aawargi",
      artist: "Himesh Reshammiya",
      thumbnail: "https://img.youtube.com/vi/iAUccT7HgUM/hqdefault.jpg",
    },
    {
      id: "JF7mC58X7_w",
      title: "DIL NA DIYA",
      artist: "Kunal Ganjawala",
      thumbnail: "https://img.youtube.com/vi/JF7mC58X7_w/hqdefault.jpg",
    },
    {
      id: "bGNmNNZAU7c",
      title: "LOVE ME LOVE ME",
      artist: "Wajid Ali",
      thumbnail: "https://img.youtube.com/vi/bGNmNNZAU7c/hqdefault.jpg",
    },
    {
      id: "TR3Ifjpf7W8",
      title: "Tu Mera Hero",
      artist: "Pritam",
      thumbnail: "https://img.youtube.com/vi/TR3Ifjpf7W8/hqdefault.jpg",
    },
    {
      id: "BSnm_KoD7io",
      title: "TAMANCHE PE DISCO",
      artist: "NindyKaur",
      thumbnail: "https://img.youtube.com/vi/BSnm_KoD7io/hqdefault.jpg",
    },
    {
      id: "OFADYZUk7S0",
      title: "YOU'RE MY LOVE",
      artist: "Shaan",
      thumbnail: "https://img.youtube.com/vi/OFADYZUk7S0/hqdefault.jpg",
    },
    {
      id: "3kPOckD4kjg",
      title: "JUST CHILL",
      artist: "Sonu Nigam",
      thumbnail: "https://img.youtube.com/vi/3kPOckD4kjg/hqdefault.jpg",
    },
    {
      id: "LQNoGvkcRCk",
      title: "Jeene Ke Hain Chaar Din",
      artist: "Sonu Nigam",
      thumbnail: "https://img.youtube.com/vi/LQNoGvkcRCk/hqdefault.jpg",
    },
    {
      id: "PpiHfZbtQv8",
      title: "I Hate Luv Storys",
      artist: "Vishal & Shekhar",
      thumbnail: "https://img.youtube.com/vi/PpiHfZbtQv8/hqdefault.jpg",
    },
    {
      id: "3DTGr6JeuUg",
      title: "Faltu",
      artist: "Sachin Jigar",
      thumbnail: "https://img.youtube.com/vi/3DTGr6JeuUg/hqdefault.jpg",
    },
  ],
};

type PlaylistCategory = keyof typeof PLAYLISTS;
const CATEGORIES = Object.keys(PLAYLISTS) as PlaylistCategory[];

const RetroEQ = ({
  isPlaying,
  compact = false,
}: {
  isPlaying: boolean;
  compact?: boolean;
}) => {
  const barCount = compact ? 4 : 6;
  const [levels, setLevels] = useState<number[]>(Array(barCount).fill(5));

  useEffect(() => {
    if (!isPlaying) {
      setLevels(Array(barCount).fill(5));
      return;
    }

    const interval = setInterval(() => {
      setLevels(
        Array.from(
          { length: barCount },
          () => Math.floor(Math.random() * 80) + 20,
        ),
      );
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying, barCount]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "2px",
        height: compact ? "16px" : "24px",
        width: compact ? "auto" : "28px",
        zIndex: 10,
        pointerEvents: "none",
        position: compact ? "relative" : "absolute",
        top: compact ? "auto" : "50%",
        left: compact ? "auto" : "50%",
        transform: compact ? "none" : "translate(-50%, -50%)",
      }}
    >
      {levels.map((level, i) => (
        <div
          key={i}
          style={{
            width: "3px",
            height: `${level}%`,
            background:
              "linear-gradient(to top, #00ff00, #ffff00 60%, #ff0000)",
            boxShadow: "0 0 4px rgba(0, 255, 0, 0.4)",
            transition: "height 0.12s ease-out",
            borderRadius: "1px 1px 0 0",
            opacity: isPlaying ? 0.9 : 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [currentCategory, setCurrentCategory] =
    useState<PlaylistCategory>("bollywood");
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [timeString, setTimeString] = useState("00:00:00 AM");
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // <-- NEW SEARCH STATE

  const [isLoop, setIsLoop] = useState(false);
  const isLoopRef = useRef(false);

  useEffect(() => {
    isLoopRef.current = isLoop;
  }, [isLoop]);

  const playerRef = useRef<any>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const prevVolumeRef = useRef(80);
  const dragSeekingRef = useRef(false);
  const activeTrackRef = useRef<HTMLLIElement | null>(null);

  const currentTracks = PLAYLISTS[currentCategory];
  const safeIndex =
    currentTrackIndex < currentTracks.length ? currentTrackIndex : 0;
  const currentTrack = currentTracks[safeIndex];

  // ==========================================================================
  // Filter Tracks Logic
  // ==========================================================================
  const filteredTracks = currentTracks.filter((track) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artist.toLowerCase().includes(lowerCaseQuery)
    );
  });

  const stopProgressLoop = () => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  };

  const startProgressLoop = () => {
    stopProgressLoop();
    progressTimerRef.current = setInterval(() => {
      if (playerRef.current && !dragSeekingRef.current) {
        const time = playerRef.current.getCurrentTime() || 0;
        setCurrentTime(time);
      }
    }, 250);
  };

  const loadTrack = (index: number) => {
    setCurrentTime(0);
    if (
      playerRef.current &&
      typeof playerRef.current.loadVideoById === "function"
    ) {
      playerRef.current.loadVideoById(currentTracks[index].id);
      playerRef.current.playVideo();
    }
  };

  const handleNext = () => {
    if (!playerRef.current) return;
    setCurrentTrackIndex((prev) => {
      let nextIdx;

      if (isShuffle && currentTracks.length > 1) {
        do {
          nextIdx = Math.floor(Math.random() * currentTracks.length);
        } while (nextIdx === prev);
      } else {
        nextIdx = (prev + 1) % currentTracks.length;
      }

      loadTrack(nextIdx);
      return nextIdx;
    });
  };

  const handlePrev = () => {
    if (!playerRef.current) return;
    setCurrentTrackIndex((prev) => {
      const prevIdx = (prev - 1 + currentTracks.length) % currentTracks.length;
      loadTrack(prevIdx);
      return prevIdx;
    });
  };

  const handlePlayerStateChange = (event: any) => {
    const YT = (window as any).YT;
    if (!YT) return;

    if (event.data === YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      setDuration(playerRef.current.getDuration() || 0);
      startProgressLoop();
    } else if (
      event.data === YT.PlayerState.PAUSED ||
      event.data === YT.PlayerState.CUED
    ) {
      setIsPlaying(false);
      stopProgressLoop();
    } else if (event.data === YT.PlayerState.ENDED) {
      setIsPlaying(false);
      stopProgressLoop();

      if (isLoopRef.current && playerRef.current) {
        playerRef.current.seekTo(0, true);
        playerRef.current.playVideo();
      } else {
        handleNext();
      }
    }
  };

  const initializeYTPlayer = () => {
    if (playerRef.current) return;
    const YT = (window as any).YT;
    if (!YT) return;

    playerRef.current = new YT.Player("yt-player-iframe", {
      height: "1px",
      width: "1px",
      videoId: currentTrack?.id,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        rel: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        playsinline: 1, // Fix for mobile lock screen
      },
      events: {
        onReady: (e: any) => {
          setIsPlayerReady(true);
          e.target.setVolume(volume);
        },
        onStateChange: handlePlayerStateChange,
        onError: (e: any) => {
          console.error("YouTube Player Error:", e.data);
          setTimeout(handleNext, 2000);
        },
      },
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value as PlaylistCategory;
    setCurrentCategory(newCategory);
    setCurrentTrackIndex(0);
    setCurrentTime(0);
    setSearchQuery(""); // Clear search when changing playlists

    if (
      playerRef.current &&
      typeof playerRef.current.loadVideoById === "function"
    ) {
      playerRef.current.loadVideoById(PLAYLISTS[newCategory][0].id);
      playerRef.current.playVideo();
    }
  };

  const handlePlayPause = () => {
    if (!isPlayerReady || !playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleTrackSelect = (originalIndex: number) => {
    setCurrentTrackIndex(originalIndex);
    loadTrack(originalIndex);
    // Optional: Only close the drawer on mobile to allow continuous desktop browsing
    if (window.innerWidth <= 768) {
      setIsDrawerOpen(false);
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!playerRef.current) return;
    const pct = parseFloat(e.target.value);
    const targetTime = (pct / 100) * duration;
    setCurrentTime(targetTime);
    playerRef.current.seekTo(targetTime, true);
    dragSeekingRef.current = false;
  };

  const handleSeekInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    dragSeekingRef.current = true;
    const target = e.target as HTMLInputElement;
    const pct = parseFloat(target.value);
    const targetTime = (pct / 100) * duration;
    setCurrentTime(targetTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseInt(e.target.value);
    setVolume(vol);
    prevVolumeRef.current = vol;
    if (
      playerRef.current &&
      typeof playerRef.current.setVolume === "function"
    ) {
      playerRef.current.setVolume(vol);
      if (vol > 0 && isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      }
    }
  };

  const handleMuteToggle = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(prevVolumeRef.current);
      setVolume(prevVolumeRef.current);
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setVolume(0);
      setIsMuted(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName;
      if (activeTag === "INPUT" || activeTag === "SELECT") return;

      if (e.code === "Space") {
        e.preventDefault();
        handlePlayPause();
      } else if (e.code === "ArrowRight") {
        if (
          playerRef.current &&
          typeof playerRef.current.getCurrentTime === "function"
        ) {
          const cur = playerRef.current.getCurrentTime();
          playerRef.current.seekTo(cur + 10, true);
        }
      } else if (e.code === "ArrowLeft") {
        if (
          playerRef.current &&
          typeof playerRef.current.getCurrentTime === "function"
        ) {
          const cur = playerRef.current.getCurrentTime();
          playerRef.current.seekTo(Math.max(0, cur - 10), true);
        }
      } else if (e.key.toLowerCase() === "m") {
        handleMuteToggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying, isMuted, isPlayerReady, currentCategory]);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const hoursStr = String(hours).padStart(2, "0");
      setTimeString(`${hoursStr}:${minutes}:${seconds} ${ampm}`);
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  useEffect(() => {
    let marqueeInterval: NodeJS.Timeout;

    if (isPlaying && currentTrack) {
      let titleText = `▶ Playing: ${currentTrack.title} - ${currentTrack.artist} • `;

      marqueeInterval = setInterval(() => {
        titleText = titleText.substring(1) + titleText[0];
        document.title = titleText;
      }, 250);
    } else {
      document.title = "Dhun | Paused";
    }

    return () => {
      if (marqueeInterval) clearInterval(marqueeInterval);
      document.title = "Dhun | 2000s Bollywood Bangers";
    };
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (!("mediaSession" in navigator) || !currentTrack) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentTrack.title,
      artist: currentTrack.artist,
      album: "Dhun | 2000s Bollywood Bangers",
      artwork: [
        {
          src: currentTrack.thumbnail,
          sizes: "480x360",
          type: "image/jpeg",
        },
      ],
    });

    navigator.mediaSession.setActionHandler("play", () => {
      handlePlayPause();
    });

    navigator.mediaSession.setActionHandler("pause", () => {
      handlePlayPause();
    });

    navigator.mediaSession.setActionHandler("previoustrack", () => {
      handlePrev();
    });

    navigator.mediaSession.setActionHandler("nexttrack", () => {
      handleNext();
    });

    navigator.mediaSession.setActionHandler("seekto", (details) => {
      if (details.seekTime !== undefined && playerRef.current) {
        playerRef.current.seekTo(details.seekTime, true);
        setCurrentTime(details.seekTime);
      }
    });
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    if ("mediaSession" in navigator && duration > 0) {
      try {
        navigator.mediaSession.setPositionState({
          duration: duration,
          playbackRate: 1,
          position: Math.min(currentTime, duration),
        });
      } catch (e) {}
    }
  }, [currentTime, duration]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!(window as any).YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
      }

      (window as any).onYouTubeIframeAPIReady = initializeYTPlayer;

      if ((window as any).YT && (window as any).YT.Player) {
        initializeYTPlayer();
      }
    }

    return () => stopProgressLoop();
  }, [currentTrack?.id]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${String(mins).padStart(2, "0")}:${String(remainingSecs).padStart(2, "0")}`;
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    if (isDrawerOpen && activeTrackRef.current && searchQuery === "") {
      setTimeout(() => {
        activeTrackRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 50);
    }
  }, [isDrawerOpen, safeIndex, searchQuery]);

  return (
    <>
      <div className="bg-container">
        <div className="bg-overlay"></div>
        <div className="grid-overlay"></div>
      </div>

      <header className="app-header">
        <div className="header-left">
          <div className="digital-clock">{timeString}</div>
        </div>
      </header>

      <div id="yt-player-container">
        <div id="yt-player-iframe"></div>
      </div>

      <div
        className={`player-dock ${isPlaying ? "playing-state" : ""}`}
        style={{ maxWidth: "660px" }}
      >
        <div className="progress-container">
          <input
            type="range"
            id="progress-slider"
            min="0"
            max="100"
            value={progressPct}
            step="0.05"
            onInput={(e) =>
              handleSeekInput(
                e as unknown as React.ChangeEvent<HTMLInputElement>,
              )
            }
            onChange={handleSeekChange}
          />
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPct}%` }}
          ></div>
        </div>

        <div className="player-inner">
          <div className="player-left">
            <div className="thumbnail-wrapper" style={{ position: "relative" }}>
              <div className={`album-art ${isPlaying ? "spinning" : "paused"}`}>
                <img
                  src={currentTrack?.thumbnail}
                  alt={currentTrack?.title}
                  style={{
                    width: "135%",
                    height: "135%",
                    objectFit: "cover",
                    position: "absolute",
                    top: "-17.5%",
                    left: "-17.5%",
                    maxWidth: "none",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#0a0a0f",
                  borderRadius: "50%",
                  boxShadow:
                    "inset 0px 2px 5px rgba(0, 0, 0, 0.9), 0px 0px 0px 1px rgba(255, 255, 255, 0.15)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              <RetroEQ isPlaying={isPlaying} />
            </div>
            <div className="song-info">
              <div className="marquee-wrapper">
                <h3
                  className={`song-title ${(currentTrack?.title?.length || 0) > 20 ? "marquee-active" : ""}`}
                >
                  {currentTrack?.title}
                </h3>
              </div>
              <span className="song-artist">{currentTrack?.artist}</span>
            </div>
          </div>

          <div
            className="player-center"
            style={{ flexDirection: "column", gap: "4px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button
                className="control-btn"
                onClick={() => setIsShuffle(!isShuffle)}
                title="Shuffle"
                style={{ color: isShuffle ? "var(--accent-color)" : "" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "18px", height: "18px" }}
                >
                  <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
                </svg>
              </button>

              <button
                className="control-btn"
                onClick={handlePrev}
                title="Previous Track"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6h2v12H6zm3.5 6L18 6v12z" />
                </svg>
              </button>

              <button
                className="control-btn play-btn"
                onClick={handlePlayPause}
                title="Play / Pause"
              >
                {!isPlaying ? (
                  <svg id="play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg id="pause-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                )}
              </button>

              <button
                className="control-btn"
                onClick={handleNext}
                title="Next Track"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18V6l8.5 6zm9-12h2v12h-2z" />
                </svg>
              </button>

              <button
                className="control-btn"
                onClick={() => setIsLoop(!isLoop)}
                title="Repeat"
                style={{ color: isLoop ? "var(--accent-color)" : "" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "18px", height: "18px" }}
                >
                  <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
                </svg>
              </button>
            </div>

            <div className="time-display">
              <span>{formatTime(currentTime)}</span>
              <span className="time-separator">/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="player-right">
            <div className="volume-container">
              <button
                className="control-btn utility-btn"
                onClick={handleMuteToggle}
                title="Mute / Unmute"
              >
                {isMuted || volume === 0 ? (
                  <svg
                    id="volume-muted"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg id="volume-high" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
              <div className="volume-slider-wrapper">
                <input
                  type="range"
                  id="volume-slider"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                />
                <div
                  className="volume-slider-fill"
                  style={{ width: `${volume}%` }}
                ></div>
              </div>
            </div>

            <button
              className="control-btn utility-btn"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              title="Show Playlist"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`playlist-drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>
            {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}{" "}
            Tracks
          </h3>
          <button
            className="close-drawer"
            onClick={() => setIsDrawerOpen(false)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          {/* SEARCH BAR UI */}
          <div style={{ marginBottom: "16px", padding: "0 4px" }}>
            <div style={{ position: "relative" }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                }}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search song or artist..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px 10px 36px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                  outline: "none",
                  fontSize: "0.85rem",
                }}
              />
            </div>
          </div>

          <ul className="playlist-tracks">
            {filteredTracks.length > 0 ? (
              filteredTracks.map((track) => {
                // Find original index so clicking plays the correct song!
                const originalIdx = currentTracks.findIndex(
                  (t) => t.id === track.id
                );

                return (
                  <li
                    key={track.id}
                    ref={originalIdx === safeIndex ? activeTrackRef : null}
                    className={`track-item ${originalIdx === safeIndex ? "active" : ""}`}
                    onClick={() => handleTrackSelect(originalIdx)}
                  >
                    <div className="track-item-left">
                      <span className="track-index">
                        {String(originalIdx + 1).padStart(2, "0")}
                      </span>
                      <div className="track-details">
                        <span className="track-title">{track.title}</span>
                        <span className="track-artist">{track.artist}</span>
                      </div>
                    </div>

                    {originalIdx === safeIndex && (
                      <div
                        className="track-item-right"
                        style={{ marginRight: "4px" }}
                      >
                        <RetroEQ isPlaying={isPlaying} compact={true} />
                      </div>
                    )}
                  </li>
                );
              })
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "20px",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                No tracks found matching "{searchQuery}"
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
