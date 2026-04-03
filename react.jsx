// State management for the Video Player
const [currentServer, setCurrentServer] = useState(0);
const [streamType, setStreamType] = useState('sub'); // 'sub' or 'dub'

const servers = [
  { id: 1, name: 'Primary Server', sub: 'https://src1.anidoki.com/sub/v.m3u8', dub: 'https://src1.anidoki.com/dub/v.m3u8' },
  { id: 2, name: 'Backup Server A', sub: 'https://src2.anidoki.com/sub/v.m3u8', dub: 'https://src2.anidoki.com/dub/v.m3u8' },
];

const handleServerSwitch = (index) => {
  const currentTime = videoRef.current.currentTime;
  setCurrentServer(index);
  // Auto-resume at current timestamp after source change
  setTimeout(() => {
    videoRef.current.currentTime = currentTime;
    videoRef.current.play();
  }, 100);
};
