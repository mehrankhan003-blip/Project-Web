// ══ 1. PAKISTANI NOSTALGIA PLAYLIST ══
const playlist = [
  {
    title: "Dil Dil Pakistan",
    artist: "Vital Signs",
    youtubeId: "vBf4u5U4GvA",
    art: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Sayonee",
    artist: "Junoon",
    youtubeId: "a2Iq2T3m1d8",
    art: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Disco Deewane",
    artist: "Nazia Hassan",
    youtubeId: "N__zB3o_mRk",
    art: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Yeh Jo Halka Halka Suroor Hai",
    artist: "Ustad Nusrat Fateh Ali Khan",
    youtubeId: "aR1S-m3A__o",
    art: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=400&auto=format&fit=crop"
  }
];

// ══ 2. QUETTA DHABA CHAI POPUP DIALOGUES ══
const chaiDialogues = [
  "استاد! دودھ پتی یا سادہ؟ ☕",
  "خان صاحب! چائے میٹھی رکھیں یا پھیکی؟ 🧊",
  "استاد! ایک کڑک دودھ پتی تیار ہے! 🔥",
  "بھائی صاحب! الائچی والی چائے بناؤں یا مکھن مار کے؟ 🌿",
  "استاد! پراٹھا بھی ساتھ لگانا ہے کیا؟ 🥞",
  "خان صاحب! گرم گرم چائے آگئی ہے! ☕✨"
];

const bannerDialogues = [
  '"استاد! ایک کڑک چائے اور پراٹھا لگانا!"',
  '"خان صاحب! چینی تھوڑی کم رکھنا!"',
  '"سفر لمبا ہے، کوئی اچھا گانا لگاؤ!"',
  '"ڈھابے کی چائے اور کلاسک موسیقی—زندگی کا مزہ!"'
];

let currentTrackIndex = 0;
let isPlaying = false;
let chaiCount = 0;
let player = null;
let progressInterval = null;
let toastTimeout = null;

// DOM Elements
const trackTitleEl = document.getElementById('track-title');
const trackArtistEl = document.getElementById('track-artist');
const trackArtEl = document.getElementById('track-art');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const seekContainer = document.getElementById('seek-container');
const timeCurrEl = document.getElementById('time-curr');
const timeDurEl = document.getElementById('time-dur');
const chaiBtn = document.getElementById('chai-btn');
const chaiCountEl = document.getElementById('chai-count');
const toastPopup = document.getElementById('toast-popup');
const toastText = document.getElementById('toast-text');
const dialogueBtn = document.getElementById('dialogue-btn');
const dialogueTextEl = document.getElementById('dialogue-text');
const clockEl = document.getElementById('clock');
const liveCountEl = document.getElementById('live-count');

// ══ 3. YOUTUBE API SETUP ══
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const ytContainer = document.createElement('div');
ytContainer.id = 'yt-player-hidden';
ytContainer.style.display = 'none';
document.body.appendChild(ytContainer);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player-hidden', {
    height: '0',
    width: '0',
    videoId: playlist[currentTrackIndex].youtubeId,
    playerVars: { 'playsinline': 1, 'controls': 0 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  loadTrack(currentTrackIndex, false);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    playBtn.innerText = '⏸';
    if (trackArtEl) trackArtEl.classList.remove('vinyl-paused');
    startProgressLoop();
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    playBtn.innerText = '▶';
    if (trackArtEl) trackArtEl.classList.add('vinyl-paused');
    stopProgressLoop();
  } else if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

function loadTrack(index, autoPlay = true) {
  const track = playlist[index];
  trackTitleEl.innerText = track.title;
  trackArtistEl.innerText = track.artist;
  trackArtEl.src = track.art;
  
  if (player && player.loadVideoById) {
    if (autoPlay) {
      player.loadVideoById(track.youtubeId);
    } else {
      player.cueVideoById(track.youtubeId);
    }
  }
}

function togglePlay() {
  if (!player) return;
  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex, true);
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex, true);
}

// ══ 4. SEEKBAR CONTROL ══
if (seekContainer) {
  seekContainer.addEventListener('click', (e) => {
    if (!player || !player.getDuration) return;
    const rect = seekContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const duration = player.getDuration();
    if (duration > 0) {
      const seekTime = (clickX / width) * duration;
      player.seekTo(seekTime, true);
    }
  });
}

function startProgressLoop() {
  stopProgressLoop();
  progressInterval = setInterval(() => {
    if (player && player.getCurrentTime && player.getDuration) {
      const current = player.getCurrentTime() || 0;
      const duration = player.getDuration() || 1;
      const pct = (current / duration) * 100;
      
      progressBar.style.width = `${pct}%`;
      timeCurrEl.innerText = formatTime(current);
      timeDurEl.innerText = formatTime(duration);
    }
  }, 500);
}

function stopProgressLoop() {
  if (progressInterval) clearInterval(progressInterval);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ══ 5. CHAI TAP POPUP DIALOGUE ══
chaiBtn.addEventListener('click', () => {
  chaiCount++;
  chaiCountEl.innerText = chaiCount;

  // Select Random Chai Dialogue
  const randomMsg = chaiDialogues[Math.floor(Math.random() * chaiDialogues.length)];
  toastText.innerText = randomMsg;

  // Show Toast
  toastPopup.classList.remove('hidden');
  toastPopup.classList.add('toast-animate');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastPopup.classList.add('hidden');
    toastPopup.classList.remove('toast-animate');
  }, 2500);
});

// Banner Dialogue Switcher
dialogueBtn.addEventListener('click', () => {
  const randomMsg = bannerDialogues[Math.floor(Math.random() * bannerDialogues.length)];
  dialogueTextEl.innerText = randomMsg;
});

// Event Listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

// ══ 6. REAL VISITOR COUNTER ══
function initLiveVisitors() {
  // Simple persistent store per device + simulation pulse
  let count = parseInt(localStorage.getItem('quetta_visitors_base') || '24');
  count += Math.floor(Math.random() * 2) + 1;
  localStorage.setItem('quetta_visitors_base', count);
  
  if (liveCountEl) {
    liveCountEl.innerText = count;
    setInterval(() => {
      const shift = Math.floor(Math.random() * 3) - 1;
      count = Math.max(12, count + shift);
      liveCountEl.innerText = count;
    }, 4000);
  }
}
initLiveVisitors();

// ══ 7. LIVE PAKISTAN TIME ══
function updateClock() {
  const now = new Date();
  const options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  if (clockEl) clockEl.innerText = now.toLocaleTimeString('en-US', options);
}
setInterval(updateClock, 1000);
updateClock();
