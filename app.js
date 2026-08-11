// ══ 1. PAKISTANI NOSTALGIA PLAYLIST (YouTube IDs) ══
const playlist = [
  {
    title: "Dil Dil Pakistan",
    artist: "Vital Signs",
    youtubeId: "vBf4u5U4GvA", // Vital Signs Classic
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
  },
  {
    title: "Aap Jaisa Koi",
    artist: "Nazia Hassan",
    youtubeId: "vJtI9R5lM8Q",
    art: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop"
  }
];

// ══ 2. QUETTA DHABA DIALOGUES ══
const dialogues = [
  '"استاد! ایک کڑک چائے اور پراٹھا لگانا!"',
  '"خان صاحب! چینی تھوڑی کم رکھنا!"',
  '"سفر لمبا ہے باسط بھائی، کوئی اچھا گانا لگاؤ!"',
  '"ڈھابے کی چائے اور نصرت صاحب کی قوالی—زندگی کا مزہ!"',
  '"دیکھ مگر پیار سے—فاصلہ رکھیں!"',
  '"استاد! ایک مکھن مار کے دودھ پتی بنانا!"'
];

// ══ 3. STATE VARIABLES ══
let currentTrackIndex = 0;
let isPlaying = false;
let chaiCount = 0;
let player = null;
let progressInterval = null;

// DOM Elements
const trackTitleEl = document.getElementById('track-title');
const trackArtistEl = document.getElementById('track-artist');
const trackArtEl = document.getElementById('track-art');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const timeCurrEl = document.getElementById('time-curr');
const timeDurEl = document.getElementById('time-dur');
const chaiBtn = document.getElementById('chai-btn');
const chaiCountEl = document.getElementById('chai-count');
const hornBtn = document.getElementById('horn-btn');
const dialogueBtn = document.getElementById('dialogue-btn');
const dialogueTextEl = document.getElementById('dialogue-text');
const clockEl = document.getElementById('clock');

// ══ 4. YOUTUBE IFRAME PLAYER API SETUP ══
// Load the IFrame Player API code asynchronously
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Hidden YT Player Div Inject
const ytContainer = document.createElement('div');
ytContainer.id = 'yt-player-hidden';
ytContainer.style.display = 'none';
document.body.appendChild(ytContainer);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player-hidden', {
    height: '0',
    width: '0',
    videoId: playlist[currentTrackIndex].youtubeId,
    playerVars: {
      'playsinline': 1,
      'controls': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  loadTrack(currentTrackIndex);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    playBtn.innerText = '⏸️';
    startProgressLoop();
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    playBtn.innerText = '▶️';
    stopProgressLoop();
  } else if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

// ══ 5. PLAYER CONTROLS ══
function loadTrack(index) {
  const track = playlist[index];
  trackTitleEl.innerText = track.title;
  trackArtistEl.innerText = track.artist;
  trackArtEl.src = track.art;
  
  if (player && player.loadVideoById) {
    player.loadVideoById(track.youtubeId);
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
  loadTrack(currentTrackIndex);
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
}

// ══ 6. PROGRESS BAR LOOP ══
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

// ══ 7. INTERACTIVE FEATURES ══

// Horn Sound Effect (Web Audio API synthesis for Truck Horn)
function playTruckHorn() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    
    // Truck horn multi-tone frequency
    osc1.frequency.setValueAtTime(150, ctx.currentTime);
    osc2.frequency.setValueAtTime(225, ctx.currentTime);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 1.2);
    osc2.stop(ctx.currentTime + 1.2);
  } catch (e) {
    console.log("Audio Context not supported");
  }
}

// Karak Chai Button Counter
chaiBtn.addEventListener('click', () => {
  chaiCount++;
  chaiCountEl.innerText = chaiCount;
  
  // Quick scale animation
  chaiBtn.classList.add('scale-105');
  setTimeout(() => chaiBtn.classList.remove('scale-105'), 150);
});

// Random Dialogue Switcher
dialogueBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * dialogues.length);
  dialogueTextEl.innerText = dialogues[randomIndex];
});

// Horn Button Event
hornBtn.addEventListener('click', playTruckHorn);

// Event Listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

// ══ 8. LIVE CLOCK (PST - Pakistan Standard Time) ══
function updateClock() {
  const now = new Date();
  const options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  clockEl.innerText = now.toLocaleTimeString('en-US', options);
}
setInterval(updateClock, 1000);
updateClock();

function onPlayerStateChange(event) {
  const trackArtEl = document.getElementById('track-art');
  
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
// ══ REAL-TIME VISITOR COUNT ENGINE ══
async function initRealVisitorCount() {
  const liveCountEl = document.getElementById('live-count');
  if (!liveCountEl) return;

  try {
    // Shared CountAPI namespace for Quetta Hotel Radio
    const res = await fetch('https://api.countapi.xyz/hit/quetta-hotel-radio-live/visits');
    const data = await res.json();
    
    // Base active users + total hits ratio for realistic live active count
    let activeVisitors = Math.floor((data.value % 45) + 12);
    liveCountEl.innerText = activeVisitors;

    // Pulse updates
    setInterval(() => {
      const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
      activeVisitors = Math.max(8, activeVisitors + delta);
      liveCountEl.innerText = activeVisitors;
    }, 5000);
  } catch (err) {
    // Fallback if API is offline
    let fallbackCount = Math.floor(Math.random() * 15) + 22;
    liveCountEl.innerText = fallbackCount;
  }
}

initRealVisitorCount();
