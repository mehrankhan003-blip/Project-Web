// ══ 1. YOUTUBE PLAYLIST ID & LOCAL METADATA PLAYLIST ══
const YOUTUBE_PLAYLIST_ID = "PLA_92R_tFNKiE08FuLrw687C4HQx38UFI";

const playlist = [
  { title: "Kari Aa Qabo Kaye", artist: "Jalal Chandio • Folk Classic", youtubeId: "UKpC72Lgtz4", art: "https://i.ytimg.com/vi/UKpC72Lgtz4/hqdefault.jpg" },
  { title: "Tuhinji Yaari Maan Pyar Kayo", artist: "Sarmad Sindhi • Sindhi Hit", youtubeId: "qyDVB7hGNAg", art: "https://i.ytimg.com/vi/qyDVB7hGNAg/hqdefault.jpg" },
  { title: "Qameez Teri Kaali", artist: "Attaullah Khan Esakhelvi", youtubeId: "w7bX24iQGz8", art: "https://i.ytimg.com/vi/w7bX24iQGz8/hqdefault.jpg" },
  { title: "Yeh Jo Halka Halka Suroor Hai", artist: "Ustad Nusrat Fateh Ali Khan", youtubeId: "24-4B2W4K20", art: "https://i.ytimg.com/vi/24-4B2W4K20/hqdefault.jpg" },
  { title: "Dil Dil Pakistan", artist: "Vital Signs • (1987)", youtubeId: "rMlKSqgNHNU", art: "https://i.ytimg.com/vi/rMlKSqgNHNU/hqdefault.jpg" },
  { title: "Purani Jeans", artist: "Ali Haider • Sandesa (1993)", youtubeId: "8q6iobugPUs", art: "https://i.ytimg.com/vi/8q6iobugPUs/hqdefault.jpg" },
  { title: "Chief Saab", artist: "Sajjad Ali • Classic Hit", youtubeId: "KZ8xRwDR0zY", art: "https://i.ytimg.com/vi/KZ8xRwDR0zY/hqdefault.jpg" },
  { title: "Ranjish Hi Sahi", artist: "Mehdi Hassan • Sad Classic", youtubeId: "fM0I7G8w9aQ", art: "https://i.ytimg.com/vi/fM0I7G8w9aQ/hqdefault.jpg" }
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
  populatePlaylistDropdown();
  loadYouTubeAPI();
});

// ══ 4. YOUTUBE API ENGINE (PLAYLIST MODE) ══
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
  // Bind playlist to YouTube Player
  if (ytPlayer && typeof ytPlayer.cuePlaylist === 'function') {
    ytPlayer.cuePlaylist({
      listType: 'playlist',
      list: YOUTUBE_PLAYLIST_ID,
      index: 0
    });
  }
  updateTrackUI(currentTrackIndex);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    updatePlayBtnUI(true);
    startSeekLoop();
    syncTrackFromPlayer();
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    updatePlayBtnUI(false);
    stopSeekLoop();
  } else if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

function syncTrackFromPlayer() {
  if (ytPlayer && typeof ytPlayer.getPlaylistIndex === 'function') {
    const idx = ytPlayer.getPlaylistIndex();
    if (idx !== -1 && idx < playlist.length && idx !== currentTrackIndex) {
      currentTrackIndex = idx;
      updateTrackUI(currentTrackIndex);
    }
  }
}

// Auto-Skip Error Handler
function onPlayerError(event) {
  console.warn("Playlist Track Blocked/Error Code:", event.data, "— Skipping to next...");
  setTimeout(() => { nextTrack(); }, 500);
}

function populatePlaylistDropdown() {
  const selectEl = document.getElementById('playlist-select');
  if (!selectEl) return;

  selectEl.innerHTML = '';
  playlist.forEach((item, index) => {
    const opt = document.createElement('option');
    opt.value = index;
    opt.innerText = `${index + 1}. ${item.title} — ${item.artist}`;
    selectEl.appendChild(opt);
  });

  selectEl.onchange = (e) => {
    const selectedIdx = parseInt(e.target.value, 10);
    loadAndPlayTrack(selectedIdx);
  };
}

function updateTrackUI(index) {
  const track = playlist[index] || playlist[0];
  const titleEl = document.getElementById('track-title');
  const artistEl = document.getElementById('track-artist');
  const artEl = document.getElementById('track-art');
  const selectEl = document.getElementById('playlist-select');

  if (titleEl) titleEl.innerText = track.title;
  if (artistEl) artistEl.innerText = track.artist;
  if (selectEl) selectEl.value = index;

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

  if (ytPlayer && typeof ytPlayer.playVideoAt === 'function') {
    ytPlayer.playVideoAt(currentTrackIndex);
  } else if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
    ytPlayer.loadVideoById(playlist[currentTrackIndex].youtubeId);
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
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadAndPlayTrack(currentTrackIndex);
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadAndPlayTrack(currentTrackIndex);
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
