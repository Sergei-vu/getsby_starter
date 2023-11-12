import React from 'react';
import { useAudioPlayer } from './AudioPlayerContext';
import styles from './AudioPlayer.module.css'; // Создайте этот файл для стилей

const AudioPlayer = () => {
  const { audioRef, isPlaying, togglePlayPause } = useAudioPlayer();

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioRef} src="https://radio.rsound.cyou/stream.mp3" />
      <button className={styles.playButton} onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
