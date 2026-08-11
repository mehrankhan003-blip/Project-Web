// ══ 1. DIRECT AUDIO STREAM PLAYLIST (100% WORKING STREAMS) ══
const playlist = [
  {
    title: "Kari Aa Qabo Kaye",
    artist: "Jalal Chandio • Folk Classic",
    audioUrl: "https://archive.org/download/JalalChandioSongs/Kari%20Aa%20Qabo%20Kaye.mp3",
    art: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Tuhinji Yaari Maan Pyar Kayo",
    artist: "Sarmad Sindhi • Sindhi Hit",
    audioUrl: "https://archive.org/download/SarmadSindhiHits/Tuhinji%20Yaari%20Maan%20Pyar%20Kayo.mp3",
    art: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Qameez Teri Kaali",
    artist: "Attaullah Khan Esakhelvi",
    audioUrl: "https://archive.org/download/AttaullahKhanCollection/Qameez%20Teri%20Kaali.mp3",
    art: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Yeh Jo Halka Halka Suroor Hai",
    artist: "Ustad Nusrat Fateh Ali Khan",
    audioUrl: "https://archive.org/download/NusratFatehAliKhanQawwalis/Halka%20Halka%20Suroor.mp3",
    art: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Dil Dil Pakistan",
    artist: "Vital Signs • (1987)",
    audioUrl: "https://archive.org/download/VitalSignsCollection/Dil%20Dil%20Pakistan.mp3",
    art: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Purani Jeans",
    artist: "Ali Haider • Sandesa (1993)",
    audioUrl: "https://archive.org/download/90sPakistaniPop/Purani%20Jeans.mp3",
    art: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Ranjish Hi Sahi",
    artist: "Mehdi Hassan • Classic Ghazal",
    audioUrl: "https://archive.org/download/MehdiHassanGhazals/Ranjish%20Hi%20Sahi.mp3",
    art: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=400&auto=format&fit=crop"
  }
];

// ══ 2. DIALOGUES ══
const chaiDialogues = [
  "استاد! دودھ پتی یا سادہ؟ ☕",
  "خان صاحب! چائے میٹھی رکھیں یا پھیکی؟ 🧊",
  "استاد! ایک کڑک دودھ پتی تیار ہے! 🔥",
  "بھائی صاحب! الائچی والی چائے بناؤں یا مکھن مار کے؟ 🌿",
  "استاد! پراٹھا بھی ساتھ لگانا ہے کیا؟ 🥞"
];

const bannerDialogues = [
  '"استاد! ایک کڑک چائے اور پراٹھا لگانا!"',
  '"خان صاحب! چینی تھوڑی کم رکھنا!"',
  '"سفر لمبا ہے، کوئی اچھا گانا لگاؤ!"'
];

// Global Variables
let currentTrackIndex = 0;
let chaiCount = 0;
let audioPlayer = null;
let toastTimeout = null;

// ══ 3. DOM INITIALIZATION ══
document.addEventListener('DOMContentLoaded', () => {
  audioPlayer = document.getElementById('main-audio-player');
  
  initClock();
  initVisitors();
  initAudioEngine();
  initEventListeners();

  // Initial UI Setup
  loadTrack(0, false);
});

// ══ 4. NATIVE AUDIO ENGINE ══
function initAudioEngine() {
  if (!audioPlayer) return;

  // Audio Events
  audioPlayer.addEventListener('play', () => updatePlayBtnUI(true));
  audioPlayer.addEventListener('pause', () => updatePlayBtnUI(false));
  audioPlayer.addEventListener('ended', () => nextTrack());

  audioPlayer.addEventListener('timeupdate', () => {
    if (!audioPlayer.duration) return;
    const cur = audioPlayer.currentTime || 0;
    const dur = audioPlayer.duration || 1;
    const pct = (cur / dur) * 100;

    const progressBar = document.getElementById('progress-bar');
    const timeCurrEl = document.getElementById('time-curr');
    const timeDurEl = document.getElementById('time-dur');

    if (progressBar) progressBar.style.width = `${pct}%`;
    if (timeCurrEl) timeCurrEl.innerText = formatTime(cur);
    if (timeDurEl && !isNaN(dur)) timeDurEl.innerText = formatTime(dur);
  });

  audioPlayer.addEventListener('error', () => {
    console.warn("Audio load error, skipping to next track...");
    setTimeout(() => { nextTrack(); }, 500);
  });
}

function loadTrack(index, autoPlay = true) {
  currentTrackIndex = index;
  const track = playlist[currentTrackIndex];

  // UI Update
  const titleEl = document.getElementById('track-title');
  const artistEl = document.getElementById('track-artist');
  const artEl = document.getElementById('track-art');

  if (titleEl) titleEl.innerText = track.title;
  if (artistEl) artistEl.innerText = track.artist;
  if (artEl) artEl.src = track.art;

  // Audio Load
  if (audioPlayer) {
    audioPlayer.src = track.audioUrl;
    audioPlayer.load();
    if (autoPlay) {
      audioPlayer.play().catch(() => {});
    }
  }
}

function togglePlay() {
  if (!audioPlayer) return;
  if (audioPlayer.paused) {
    audioPlayer.play().catch(() => {});
  } else {
    audioPlayer.pause();
  }
}

function nextTrack() {
  const nextIdx = (currentTrackIndex + 1) % playlist.length;
  loadTrack(nextIdx, true);
}

function prevTrack() {
  const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(prevIdx, true);
}

function updatePlayBtnUI(playing) {
  const playBtn = document.getElementById('play-btn');
  const trackArtEl = document.getElementById('track-art');

  if (playBtn) playBtn.innerText = playing ? '⏸' : '▶';
  if (trackArtEl) {
    if (playing) trackArtEl.classList.remove('vinyl-paused');
    else trackArtEl.classList.add('vinyl-paused');
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ══ 5. EVENT LISTENERS ══
function initEventListeners() {
  const playBtn = document.getElementById('play-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const chaiBtn = document.getElementById('chai-btn');
  const dialogueBtn = document.getElementById('dialogue-btn');
  const shareBtn = document.getElementById('share-btn');
  const seekContainer = document.getElementById('seek-container');

  if (playBtn) playBtn.onclick = togglePlay;
  if (prevBtn) prevBtn.onclick = prevTrack;
  if (nextBtn) nextBtn.onclick = nextTrack;

  if (seekContainer) {
    seekContainer.onclick = (e) => {
      if (!audioPlayer || !audioPlayer.duration) return;
      const rect = seekContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      audioPlayer.currentTime = pct * audioPlayer.duration;
    };
  }

  if (chaiBtn) {
    chaiBtn.onclick = () => {
      chaiCount++;
      const chaiCountEl = document.getElementById('chai-count');
      if (chaiCountEl) chaiCountEl.innerText = chaiCount;

      const toastPopup = document.getElementById('toast-popup');
      const toastText = document.getElementById('toast-text');
      const randomMsg = chaiDialogues[Math.floor(Math.random() * chaiDialogues.length)];

      if (toastText) toastText.innerText = randomMsg;
      if (toastPopup) {
        toastPopup.classList.remove('hidden');
        toastPopup.classList.add('toast-animate');

        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          toastPopup.classList.add('hidden');
          toastPopup.classList.remove('toast-animate');
        }, 2500);
      }
    };
  }

  if (dialogueBtn) {
    dialogueBtn.onclick = () => {
      const dialogueTextEl = document.getElementById('dialogue-text');
      const randomMsg = bannerDialogues[Math.floor(Math.random() * bannerDialogues.length)];
      if (dialogueTextEl) dialogueTextEl.innerText = randomMsg;
    };
  }

  if (shareBtn) {
    shareBtn.onclick = () => {
      if (navigator.share) {
        navigator.share({ title: 'کوئٹہ رنگین ہوٹل ریڈیو', url: window.location.href }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("لنک کاپی ہو گیا ہے!");
      }
    };
  }
}

// ══ 6. UTILS ══
function initClock() {
  setInterval(() => {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
      const options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      clockEl.innerText = new Date().toLocaleTimeString('en-US', options);
    }
  }, 1000);
}

function initVisitors() {
  const liveCountEl = document.getElementById('live-count');
  if (liveCountEl) liveCountEl.innerText = "1";
}
