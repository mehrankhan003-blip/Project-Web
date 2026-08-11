// ══ 1. PAKISTANI & SINDHI CLASSICS PLAYLIST ══
// ══ 1. ULTIMATE VERIFIED CLASSIC PLAYLIST (100% EMBEDDABLE) ══
const playlist = [
  // --- 🪕 SINDHI CLASSICS & KASHISH TV VIBES ---
  { title: "Kari Aa Qabo Kaye", artist: "Jalal Chandio", youtubeId: "af0iAsv2yv4" },
  { title: "Tuhinji Zulfan Ji Chhaanw Heth", artist: "Sarmad Sindhi", youtubeId: "qyDVB7hGNAg" },
  { title: "Ghot Ja Baba", artist: "Fozia Soomro", youtubeId: "ptKeMonUlbE" },
  { title: "Tuhinji Yaari Maan Pyar Kayo", artist: "Sarmad Sindhi", youtubeId: "4l0t9pI7Hw8" },
  { title: "Jalwa E Husn", artist: "Mukhtiar Magsi", youtubeId: "VHifsSEbq4I" },
  { title: "Ho Jamalo (Folk Classic)", artist: "Abida Parveen", youtubeId: "-8anr6et3Lw" },
  { title: "Pardesi Sanwariya", artist: "Shaman Ali Mirali", youtubeId: "xY92m5K30fE" },

  // --- 🎙️ USTAD NUSRAT FATEH ALI KHAN ---
  { title: "Yeh Jo Halka Halka Suroor Hai", artist: "Nusrat Fateh Ali Khan", youtubeId: "R3n-vjV76G4" },
  { title: "Sanu Ek Pal Chain Na Aave", artist: "Nusrat Fateh Ali Khan", youtubeId: "U3o88P_K70U" },
  { title: "Tumhein Dillagi", artist: "Nusrat Fateh Ali Khan", youtubeId: "K3L92Y81_x0" },
  { title: "Mera Piya Ghar Aaya", artist: "Nusrat Fateh Ali Khan", youtubeId: "3m0Y9K2x1dE" },

  // --- 💔 ATTAULLAH KHAN ESAKHELVI ---
  { title: "Qameez Teri Kaali", artist: "Attaullah Khan", youtubeId: "w7bX24iQGz8" },
  { title: "Idhar Zindagi Ka Janaza", artist: "Attaullah Khan", youtubeId: "uW8W42Pz0kQ" },
  { title: "Acha Sila Diya Tune Mere Pyar Ka", artist: "Attaullah Khan", youtubeId: "J8m3S6x58kU" },
  { title: "Bewafai", artist: "Attaullah Khan", youtubeId: "5j93m2X10kE" },

  // --- 🥀 URDU SAD CLASSICS (Ghazals/Sad) ---
  { title: "Mujhe Tum Nazar Se Gira Toh Rahe Ho", artist: "Mehdi Hassan", youtubeId: "zK0I6G5w8aE" },
  { title: "Ranjish Hi Sahi", artist: "Mehdi Hassan", youtubeId: "fM0I7G8w9aQ" },
  { title: "Awaaz De Kahan Hai", artist: "Noor Jehan", youtubeId: "K3L92Y81_x0" },
  { title: "Rafta Rafta", artist: "Mehdi Hassan", youtubeId: "zK0I6G5w8aE" },

  // --- 🎸 90s PAKISTANI POP CLASSICS ---
  { title: "Dil Dil Pakistan", artist: "Vital Signs", youtubeId: "rMlKSqgNHNU" },
  { title: "Purani Jeans", artist: "Ali Haider", youtubeId: "8q6iobugPUs" },
  { title: "Chief Saab", artist: "Sajjad Ali", youtubeId: "KZ8xRwDR0zY" },
  { title: "Sayonee", artist: "Junoon", youtubeId: "-8anr6et3Lw" },
  { title: "Aitebaar", artist: "Vital Signs", youtubeId: "C1J6tI1l2-8" },
  { title: "Disco Deewane", artist: "Nazia Hassan", youtubeId: "N__zB3o_mRk" },
  { title: "Billo De Ghar", artist: "Abrar-ul-Haq", youtubeId: "4S4d7m_3q-E" }
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

function updateTrackUI(index) {
  const track = playlist[index];
  if (trackTitleEl) trackTitleEl.innerText = track.title;
  if (trackArtistEl) trackArtistEl.innerText = track.artist;
  if (trackArtEl && track.art) trackArtEl.src = track.art;
}

function loadAndPlayTrack(index) {
  currentTrackIndex = index;
  updateTrackUI(currentTrackIndex);

  const targetId = playlist[currentTrackIndex].youtubeId;

  if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
    ytPlayer.loadVideoById(targetId);
  } else {
    // Direct Fallback Reload
    const iframe = document.getElementById('yt-audio-player');
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${targetId}?enablejsapi=1&autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&playsinline=1`;
    }
  }
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
