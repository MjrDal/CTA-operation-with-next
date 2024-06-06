"use client";

import React, { useRef, useState } from "react";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";

// Définir une interface pour les props
interface AudioPlayerProps {
  audioName: string | null;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioName }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    audioRef.current?.pause();
    audioRef.current!.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="w-full p-4 bg-gray-800 text-white rounded-lg">
      <audio
        ref={audioRef}
        src={`/uploads/audio/${audioName}`}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      />
      <div className="flex items-center space-x-4">
        <button
          onClick={handlePlayPause}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          onClick={handleStop}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          <FaStop />
        </button>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="flex-1"
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24"
        />
      </div>
      <div className="text-sm mt-2">
        {Math.floor(currentTime / 60)}:
        {Math.floor(currentTime % 60)
          .toString()
          .padStart(2, "0")}{" "}
        / {Math.floor(duration / 60)}:
        {Math.floor(duration % 60)
          .toString()
          .padStart(2, "0")}
      </div>
    </div>
  );
};

export default AudioPlayer;
