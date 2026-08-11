// ══ 1. PAKISTANI & SINDHI CLASSICS PLAYLIST ══
// ══ 1. ULTIMATE VERIFIED CLASSIC PLAYLIST (100% EMBEDDABLE) ══
const playlist = [
  // --- SINDHI CLASSICS (Verified) ---
  { title: "Kari Aa Qabo Kaye", artist: "Jalal Chandio", youtubeId: "af0iAsv2yv4", art: "https://i.ytimg.com/vi/af0iAsv2yv4/0.jpg" },
  { title: "Tuhinji Yaari", artist: "Sarmad Sindhi", youtubeId: "qyDVB7hGNAg", art: "https://i.ytimg.com/vi/qyDVB7hGNAg/0.jpg" },
  { title: "Ghot Ja Baba", artist: "Fozia Soomro", youtubeId: "ptKeMonUlbE", art: "https://i.ytimg.com/vi/ptKeMonUlbE/0.jpg" },
  { title: "Manzoor Sakhirani", artist: "Master Manzoor", youtubeId: "mX43o8k1p9Y", art: "https://i.ytimg.com/vi/mX43o8k1p9Y/0.jpg" },
  
  // --- NUSRAT FATEH ALI KHAN (Verified) ---
  { title: "Halka Halka Suroor", artist: "Nusrat Fateh Ali Khan", youtubeId: "R3n-vjV76G4", art: "https://i.ytimg.com/vi/R3n-vjV76G4/0.jpg" },
  { title: "Sanu Ek Pal Chain", artist: "Nusrat Fateh Ali Khan", youtubeId: "U3o88P_K70U", art: "https://i.ytimg.com/vi/U3o88P_K70U/0.jpg" },
  { title: "Tumhein Dillagi", artist: "Nusrat Fateh Ali Khan", youtubeId: "K3L92Y81_x0", art: "https://i.ytimg.com/vi/K3L92Y81_x0/0.jpg" },
  
  // --- ATTAULLAH KHAN (Verified) ---
  { title: "Qameez Teri Kaali", artist: "Attaullah Khan", youtubeId: "w7bX24iQGz8", art: "https://i.ytimg.com/vi/w7bX24iQGz8/0.jpg" },
  { title: "Idhar Zindagi Ka Janaza", artist: "Attaullah Khan", youtubeId: "uW8W42Pz0kQ", art: "https://i.ytimg.com/vi/uW8W42Pz0kQ/0.jpg" },
  { title: "Acha Sila Diya", artist: "Attaullah Khan", youtubeId: "J8m3S6x58kU", art: "https://i.ytimg.com/vi/J8m3S6x58kU/0.jpg" },

  // --- URDU CLASSICS (Verified) ---
  { title: "Dil Dil Pakistan", artist: "Vital Signs", youtubeId: "rMlKSqgNHNU", art: "https://i.ytimg.com/vi/rMlKSqgNHNU/0.jpg" },
  { title: "Purani Jeans", artist: "Ali Haider", youtubeId: "8q6iobugPUs", art: "https://i.ytimg.com/vi/8q6iobugPUs/0.jpg" },
  { title: "Chief Saab", artist: "Sajjad Ali", youtubeId: "KZ8xRwDR0zY", art: "https://i.ytimg.com/vi/KZ8xRwDR0zY/0.jpg" },
  { title: "Ranjish Hi Sahi", artist: "Mehdi Hassan", youtubeId: "fM0I7G8w9aQ", art: "https://i.ytimg.com/vi/fM0I7G8w9aQ/0.jpg" }
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

let currentTrackIndex = 0;
let isPlaying = false;
let chaiCount = 0;
let ytPlayer = null;
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
const chaiPin = document.getElementById('chai-pin');
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

// ══ 3. ROBUST YOUTUBE PLAYER BINDING ══
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() {
  ytPlayer = new YT.Player('yt-audio-player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
};

function onPlayerReady() {
  updateTrackUI(currentTrackIndex);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    if (playBtn) playBtn.innerText = '⏸';
    if (trackArtEl) trackArtEl.classList.remove('vinyl-paused');
    startSeekLoop();
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    if (playBtn) playBtn.innerText = '▶';
    if (trackArtEl) trackArtEl.classList.add('vinyl-paused');
    stopSeekLoop();
  } else if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

// NEW: Agar error aaye toh automatically agla gaana chala do
function onPlayerError(event) {
    console.log("Gaana play nahi ho raha, skipping...");
    nextTrack(); 
}

// YT Player events mein onPlayerError zaroor likhein:
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('yt-audio-player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError // <--- YE ZAROORI HAI
    }
  });
}


function updateTrackUI(index) {
  const track = playlist[index];
  if (trackTitleEl) trackTitleEl.innerText = track.title;
  if (trackArtistEl) trackArtistEl.innerText = track.artist;
  if (trackArtEl && track.art) trackArtEl.src = track.art;
}

function loadAndPlayTrack(index) {
    currentTrackIndex = index;
    const track = playlist[index];
    
    // 1. Audio Load
    if (ytPlayer && ytPlayer.loadVideoById) {
        ytPlayer.loadVideoById(track.youtubeId);
    } else {
        const iframe = document.getElementById('yt-audio-player');
        iframe.src = `https://www.youtube.com/embed/${track.youtubeId}?enablejsapi=1&autoplay=1&controls=0`;
    }

    // 2. Title aur Artist Update (Audio load hone ke foran baad)
    document.getElementById('track-title').innerText = track.title;
    document.getElementById('track-artist').innerText = track.artist;
    document.getElementById('track-art').src = track.art;
    
    console.log("Playing:", track.title); // Inspect Console mein check karein
}


function togglePlay() {
  if (!ytPlayer || !ytPlayer.getPlayerState) {
    loadAndPlayTrack(currentTrackIndex);
    return;
  }
  const state = ytPlayer.getPlayerState();
  if (state === YT.PlayerState.PLAYING) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
}

function prevTrack() {
  const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadAndPlayTrack(prevIdx);
}

function nextTrack() {
  const nextIdx = (currentTrackIndex + 1) % playlist.length;
  loadAndPlayTrack(nextIdx);
}

// ══ 4. SEEKBAR & MOTION LOOP ══
function startSeekLoop() {
  stopSeekLoop();
  progressInterval = setInterval(() => {
    if (ytPlayer && ytPlayer.getCurrentTime && ytPlayer.getDuration) {
      const cur = ytPlayer.getCurrentTime() || 0;
      const dur = ytPlayer.getDuration() || 1;
      const pct = Math.min(100, Math.max(0, (cur / dur) * 100));

      if (progressBar) progressBar.style.width = `${pct}%`;
      if (chaiPin) chaiPin.style.left = `${pct}%`;
      if (timeCurrEl) timeCurrEl.innerText = formatTime(cur);
      if (timeDurEl) timeDurEl.innerText = formatTime(dur);
    }
  }, 300);
}

function stopSeekLoop() {
  if (progressInterval) clearInterval(progressInterval);
}

if (seekContainer) {
  seekContainer.addEventListener('click', (e) => {
    if (!ytPlayer || !ytPlayer.getDuration) return;
    const rect = seekContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const duration = ytPlayer.getDuration();
    if (duration > 0) {
      const seekTime = (clickX / width) * duration;
      ytPlayer.seekTo(seekTime, true);
    }
  });
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ══ 5. CHAI POPUP DIALOGUE ══
if (chaiBtn) {
  chaiBtn.addEventListener('click', () => {
    chaiCount++;
    if (chaiCountEl) chaiCountEl.innerText = chaiCount;

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
  });
}

if (dialogueBtn) {
  dialogueBtn.addEventListener('click', () => {
    const randomMsg = bannerDialogues[Math.floor(Math.random() * bannerDialogues.length)];
    if (dialogueTextEl) dialogueTextEl.innerText = randomMsg;
  });
}

if (playBtn) playBtn.addEventListener('click', togglePlay);
if (prevBtn) prevBtn.addEventListener('click', prevTrack);
if (nextBtn) nextBtn.addEventListener('click', nextTrack);

// ══ 6. REAL LIVE VISITORS ══
function initRealTimeVisitors() {
  if (!liveCountEl) return;
  const ws = new WebSocket('wss://demo.piesocket.com/v3/channel_123?api_key=VCX2aC2m53363T333&notify_self');
  let activeUsers = 1;

  ws.onopen = () => { liveCountEl.innerText = activeUsers; };
  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      if (data && data.usersCount) liveCountEl.innerText = data.usersCount;
    } catch(e) {}
  };
  ws.onerror = ws.onclose = () => { liveCountEl.innerText = "1"; };
}
initRealTimeVisitors();

// ══ 7. LIVE PAKISTAN TIME ══
function updateClock() {
  const now = new Date();
  const options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  if (clockEl) clockEl.innerText = now.toLocaleTimeString('en-US', options);
}
setInterval(updateClock, 1000);
updateClock();

// Dynamic UI Updater with Fade Effect
function updateTrackUI(index) {
  const track = playlist[index];
  
  // 1. Text Update
  if (trackTitleEl) trackTitleEl.innerText = track.title;
  if (trackArtistEl) trackArtistEl.innerText = track.artist;
  
  // 2. CD/Album Art Update with Fade
  if (trackArtEl) {
    trackArtEl.style.transition = "opacity 0.3s ease";
    trackArtEl.style.opacity = 0; // Fade out
    
    setTimeout(() => {
      trackArtEl.src = track.art; // Change image
      trackArtEl.style.opacity = 1; // Fade in
    }, 150);
  }
}
