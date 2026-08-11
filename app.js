// ══ 1. 30 SUPERHIT PAKISTANI & FOLK CLASSICS PLAYLIST ══
const playlist = [
  // --- 🪕 SINDHI CLASSICS & FOLK ---
  { title: "Kari Aa Qabo Kaye", artist: "Jalal Chandio", youtubeId: "UKpC72Lgtz4", art: "https://i.ytimg.com/vi/UKpC72Lgtz4/hqdefault.jpg" },
  { title: "Tuhinji Yaari Maan Pyar Kayo", artist: "Sarmad Sindhi", youtubeId: "qyDVB7hGNAg", art: "https://i.ytimg.com/vi/qyDVB7hGNAg/hqdefault.jpg" },
  { title: "Ghot Ja Baba", artist: "Fozia Soomro", youtubeId: "ptKeMonUlbE", art: "https://i.ytimg.com/vi/ptKeMonUlbE/hqdefault.jpg" },
  { title: "Ajj Hukm Kayo Ahay", artist: "Ahmed Mughal", youtubeId: "6I24fJkG4zE", art: "https://i.ytimg.com/vi/6I24fJkG4zE/hqdefault.jpg" },
  { title: "Pardesi Sanwariya", artist: "Shaman Ali Mirali", youtubeId: "xY92m5K30fE", art: "https://i.ytimg.com/vi/xY92m5K30fE/hqdefault.jpg" },
  { title: "Ho Jamalo (Folk)", artist: "Abida Parveen", youtubeId: "-8anr6et3Lw", art: "https://i.ytimg.com/vi/-8anr6et3Lw/hqdefault.jpg" },
  { title: "Jalwa E Husn", artist: "Mukhtiar Magsi", youtubeId: "VHifsSEbq4I", art: "https://i.ytimg.com/vi/VHifsSEbq4I/hqdefault.jpg" },
  { title: "Manzoor Sakhirani", artist: "Master Manzoor", youtubeId: "mX43o8k1p9Y", art: "https://i.ytimg.com/vi/mX43o8k1p9Y/hqdefault.jpg" },

  // --- 🎙️ USTAD NUSRAT FATEH ALI KHAN ---
  { title: "Yeh Jo Halka Halka Suroor Hai", artist: "Nusrat Fateh Ali Khan", youtubeId: "24-4B2W4K20", art: "https://i.ytimg.com/vi/24-4B2W4K20/hqdefault.jpg" },
  { title: "Tumhein Dillagi Bhool Jani", artist: "Nusrat Fateh Ali Khan", youtubeId: "K3L92Y81_x0", art: "https://i.ytimg.com/vi/K3L92Y81_x0/hqdefault.jpg" },
  { title: "Sanu Ek Pal Chain Na Aave", artist: "Nusrat Fateh Ali Khan", youtubeId: "U3o88P_K70U", art: "https://i.ytimg.com/vi/U3o88P_K70U/hqdefault.jpg" },
  { title: "Mera Piya Ghar Aaya", artist: "Nusrat Fateh Ali Khan", youtubeId: "3m0Y9K2x1dE", art: "https://i.ytimg.com/vi/3m0Y9K2x1dE/hqdefault.jpg" },
  { title: "Kinna Sohna Tainu", artist: "Nusrat Fateh Ali Khan", youtubeId: "R3n-vjV76G4", art: "https://i.ytimg.com/vi/R3n-vjV76G4/hqdefault.jpg" },

  // --- 💔 ATTAULLAH KHAN ESAKHELVI ---
  { title: "Qameez Teri Kaali", artist: "Attaullah Khan", youtubeId: "w7bX24iQGz8", art: "https://i.ytimg.com/vi/w7bX24iQGz8/hqdefault.jpg" },
  { title: "Idhar Zindagi Ka Janaza", artist: "Attaullah Khan", youtubeId: "uW8W42Pz0kQ", art: "https://i.ytimg.com/vi/uW8W42Pz0kQ/hqdefault.jpg" },
  { title: "Acha Sila Diya Tune", artist: "Attaullah Khan", youtubeId: "J8m3S6x58kU", art: "https://i.ytimg.com/vi/J8m3S6x58kU/hqdefault.jpg" },
  { title: "Dhokha Diya Kar", artist: "Attaullah Khan", youtubeId: "gZ-g73a_g0o", art: "https://i.ytimg.com/vi/gZ-g73a_g0o/hqdefault.jpg" },

  // --- 🥀 URDU CLASSICAL GHAZALS & LEGENDS ---
  { title: "Ranjish Hi Sahi", artist: "Mehdi Hassan", youtubeId: "fM0I7G8w9aQ", art: "https://i.ytimg.com/vi/fM0I7G8w9aQ/hqdefault.jpg" },
  { title: "Mujhe Tum Nazar Se", artist: "Mehdi Hassan", youtubeId: "zK0I6G5w8aE", art: "https://i.ytimg.com/vi/zK0I6G5w8aE/hqdefault.jpg" },
  { title: "Awaaz De Kahan Hai", artist: "Noor Jehan", youtubeId: "epwPWyH1FSU", art: "https://i.ytimg.com/vi/epwPWyH1FSU/hqdefault.jpg" },
  { title: "Mundari Banwai Diyan", artist: "Musarrat Nazir", youtubeId: "qRSPKb9oFy8", art: "https://i.ytimg.com/vi/qRSPKb9oFy8/hqdefault.jpg" },

  // --- 🎸 90s PAKISTANI POP HITS ---
  { title: "Dil Dil Pakistan", artist: "Vital Signs", youtubeId: "rMlKSqgNHNU", art: "https://i.ytimg.com/vi/rMlKSqgNHNU/hqdefault.jpg" },
  { title: "Purani Jeans", artist: "Ali Haider", youtubeId: "8q6iobugPUs", art: "https://i.ytimg.com/vi/8q6iobugPUs/hqdefault.jpg" },
  { title: "Chief Saab", artist: "Sajjad Ali", youtubeId: "KZ8xRwDR0zY", art: "https://i.ytimg.com/vi/KZ8xRwDR0zY/hqdefault.jpg" },
  { title: "Sayonee", artist: "Junoon", youtubeId: "H5xN_g49_00", art: "https://i.ytimg.com/vi/H5xN_g49_00/hqdefault.jpg" },
  { title: "Aitebaar", artist: "Vital Signs", youtubeId: "C1J6tI1l2-8", art: "https://i.ytimg.com/vi/C1J6tI1l2-8/hqdefault.jpg" },
  { title: "Disco Deewane", artist: "Nazia Hassan", youtubeId: "N__zB3o_mRk", art: "https://i.ytimg.com/vi/N__zB3o_mRk/hqdefault.jpg" },
  { title: "Billo De Ghar", artist: "Abrar-ul-Haq", youtubeId: "4S4d7m_3q-E", art: "https://i.ytimg.com/vi/4S4d7m_3q-E/hqdefault.jpg" },
  { title: "Bin Tere", artist: "Jawad Ahmed", youtubeId: "hP83e-j_F5U", art: "https://i.ytimg.com/vi/hP83e-j_F5U/hqdefault.jpg" },
  { title: "Janay Na Tu", artist: "Ali Zafar", youtubeId: "IPiObzM8rso", art: "https://i.ytimg.com/vi/IPiObzM8rso/hqdefault.jpg" }
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

// Global States
let currentTrackIndex = 0;
let isPlaying = false;
let chaiCount = 0;
let ytPlayer = null;
let progressInterval = null;
let toastTimeout = null;

// ══ 3. DOM LOADED INITIALIZATION ══
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initVisitors();
  initEventListeners();
  loadYouTubeAPI();
});

// ══ 4. YOUTUBE API ENGINE ══
function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) {
    onYouTubeIframeAPIReady();
    return;
  }
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player('yt-audio-player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
};

function onPlayerReady() {
  updateTrackUI(currentTrackIndex);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    updatePlayBtnUI(true);
    startSeekLoop();
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    updatePlayBtnUI(false);
    stopSeekLoop();
  } else if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

// Auto-Skip Error Protection (Auto skips blocked tracks)
function onPlayerError(event) {
  console.warn("YouTube Track Blocked/Error Code:", event.data, "— Skipping to next...");
  setTimeout(() => { nextTrack(); }, 500);
}

function updateTrackUI(index) {
  const track = playlist[index];
  const titleEl = document.getElementById('track-title');
  const artistEl = document.getElementById('track-artist');
  const artEl = document.getElementById('track-art');

  if (titleEl) titleEl.innerText = track.title;
  if (artistEl) artistEl.innerText = track.artist;
  if (artEl) {
    artEl.style.transition = "opacity 0.2s ease";
    artEl.style.opacity = "0.3";
    setTimeout(() => {
      artEl.src = track.art;
      artEl.style.opacity = "1";
    }, 150);
  }
}

function loadAndPlayTrack(index) {
  currentTrackIndex = index;
  updateTrackUI(currentTrackIndex);

  const track = playlist[currentTrackIndex];
  if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
    ytPlayer.loadVideoById(track.youtubeId);
  } else {
    const iframe = document.getElementById('yt-audio-player');
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${track.youtubeId}?enablejsapi=1&autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&playsinline=1`;
    }
  }
}

function togglePlay() {
  if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function') {
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

function nextTrack() {
  const nextIdx = (currentTrackIndex + 1) % playlist.length;
  loadAndPlayTrack(nextIdx);
}

function prevTrack() {
  const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadAndPlayTrack(prevIdx);
}

function updatePlayBtnUI(playing) {
  const playBtn = document.getElementById('play-btn');
  const trackArtEl = document.getElementById('track-art');

  if (playBtn) {
    playBtn.innerHTML = playing ? '❚❚' : '▶';
    playBtn.style.color = '#09090b';
  }
  if (trackArtEl) {
    if (playing) trackArtEl.classList.remove('vinyl-paused');
    else trackArtEl.classList.add('vinyl-paused');
  }
}

// ══ 5. SEEKBAR LOOP ══
function startSeekLoop() {
  stopSeekLoop();
  progressInterval = setInterval(() => {
    if (ytPlayer && ytPlayer.getCurrentTime && ytPlayer.getDuration) {
      const cur = ytPlayer.getCurrentTime() || 0;
      const dur = ytPlayer.getDuration() || 1;
      const pct = Math.min(100, Math.max(0, (cur / dur) * 100));

      const progressBar = document.getElementById('progress-bar');
      const timeCurrEl = document.getElementById('time-curr');
      const timeDurEl = document.getElementById('time-dur');

      if (progressBar) progressBar.style.width = `${pct}%`;
      if (timeCurrEl) timeCurrEl.innerText = formatTime(cur);
      if (timeDurEl && dur > 1) timeDurEl.innerText = formatTime(dur);
    }
  }, 300);
}

function stopSeekLoop() {
  if (progressInterval) clearInterval(progressInterval);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ══ 6. EVENT LISTENERS ══
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
      if (!ytPlayer || !ytPlayer.getDuration) return;
      const rect = seekContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const duration = ytPlayer.getDuration();
      if (duration > 0) {
        const seekTime = (clickX / width) * duration;
        ytPlayer.seekTo(seekTime, true);
      }
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

// ══ 7. UTILS ══
function initClock() {
  function updateClock() {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
      const options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      clockEl.innerText = new Date().toLocaleTimeString('en-US', options);
    }
  }
  setInterval(updateClock, 1000);
  updateClock();
}

function initVisitors() {
  const liveCountEl = document.getElementById('live-count');
  if (liveCountEl) liveCountEl.innerText = "1";
}
