import TrackPlayer from 'react-native-track-player';

module.exports = async function() {
  // Đăng ký nhiệm vụ của TrackPlayer
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
  // Đăng ký các sự kiện khác nếu cần

  // Trả về một promise empty để kết thúc nhiệm vụ
  return Promise.resolve();
};
