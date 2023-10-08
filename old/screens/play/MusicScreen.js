import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Sound from 'react-native-sound';

const MusicScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    // Khởi tạo âm thanh từ URL MP3 khi màn hình được tạo
    const audioFile = new Sound('https://example.com/your-audio.mp3', null, (error) => {
      if (error) {
        console.log('Không thể tải âm thanh', error);
      } else {
        setSound(audioFile);
      }
    });

    return () => {
      // Giải phóng tài nguyên âm thanh khi màn hình bị hủy
      if (sound) {
        sound.release();
      }
    };
  }, []);

  const playSound = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play((success) => {
          if (success) {
            console.log('Âm thanh đã hoàn thành');
          } else {
            console.log('Lỗi khi phát âm thanh');
          }
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trình phát nhạc cơ bản</Text>
      <Button title={isPlaying ? 'Dừng' : 'Phát'} onPress={playSound} />
    </View>
  );
};

export default MusicScreen;
