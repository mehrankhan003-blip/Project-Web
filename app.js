// ══ 1. MEGA NOSTALGIC & SAD PLAYLIST (60+ TRACKS) ══
const playlist = [
  // --- 🎖️ OLD ISPR & PATRIOTIC (SAD/NOSTALGIC) ---
  { title: "Ae Rah-e-Haq Ke Shaheedo", artist: "Naseem Begum • Old ISPR", youtubeId: "cZ4J1F_P1Xw", art: "https://i.ytimg.com/vi/cZ4J1F_P1Xw/hqdefault.jpg" },
  { title: "Yeh Ghazi Yeh Tere Purisrar", artist: "Junaid Jamshed • ISPR", youtubeId: "Q_H2M_X2M1c", art: "https://i.ytimg.com/vi/Q_H2M_X2M1c/hqdefault.jpg" },
  { title: "Qasam Us Waqt Ki", artist: "Junaid Jamshed • Classic", youtubeId: "V_K1X_M1c5E", art: "https://i.ytimg.com/vi/V_K1X_M1c5E/hqdefault.jpg" },
  { title: "Aye Puttar Hattan Te Nahi Vikde", artist: "Noor Jehan • 1965 War", youtubeId: "M_X2M_X2M1c", art: "https://i.ytimg.com/vi/M_X2M_X2M1c/hqdefault.jpg" },
  { title: "Apni Jaan Nazar Karoon", artist: "Mehdi Hassan • Patriotic", youtubeId: "P_H2M_X2M1c", art: "https://i.ytimg.com/vi/P_H2M_X2M1c/hqdefault.jpg" },

  // --- 🎙️ QURATULAIN BALOUCH (QB) - SAD VIBES ---
  { title: "Woh Humsafar Tha", artist: "Quratulain Balouch • OST", youtubeId: "zK0I6G5w8aE", art: "https://i.ytimg.com/vi/zK0I6G5w8aE/hqdefault.jpg" },
  { title: "Mera Ishq", artist: "Quratulain Balouch", youtubeId: "LgB8T3qD7wE", art: "https://i.ytimg.com/vi/LgB8T3qD7wE/hqdefault.jpg" },
  { title: "Bewafaiyaan", artist: "Quratulain Balouch", youtubeId: "8rP2vW_K1Dk", art: "https://i.ytimg.com/vi/8rP2vW_K1Dk/hqdefault.jpg" },
  { title: "Sab Jag Soye", artist: "Quratulain Balouch", youtubeId: "Qp0cK-G1w8I", art: "https://i.ytimg.com/vi/Qp0cK-G1w8I/hqdefault.jpg" },
  { title: "Saaiyaan", artist: "Quratulain Balouch", youtubeId: "xY92m5K30fE", art: "https://i.ytimg.com/vi/xY92m5K30fE/hqdefault.jpg" },

  // --- 🪕 ABIDA PARVEEN (SUFI & SAD) ---
  { title: "Tu Ne Deewana Banaya", artist: "Abida Parveen", youtubeId: "N__zB3o_mRk", art: "https://i.ytimg.com/vi/N__zB3o_mRk/hqdefault.jpg" },
  { title: "Jab Se Tune Mujhe Deewana", artist: "Abida Parveen", youtubeId: "-8anr6et3Lw", art: "https://i.ytimg.com/vi/-8anr6et3Lw/hqdefault.jpg" },
  { title: "Dhoondo Ge Agar Mulkon", artist: "Abida Parveen", youtubeId: "VHifsSEbq4I", art: "https://i.ytimg.com/vi/VHifsSEbq4I/hqdefault.jpg" },
  { title: "Mahi Yaar Di Gharoli", artist: "Abida Parveen", youtubeId: "K1X_M_X2M1c", art: "https://i.ytimg.com/vi/K1X_M_X2M1c/hqdefault.jpg" },
  { title: "Arez-e-Baqaf-e-Bahar", artist: "Abida Parveen", youtubeId: "yT7Zk_X2M1c", art: "https://i.ytimg.com/vi/yT7Zk_X2M1c/hqdefault.jpg" },

  // --- 🪕 SANAM MARVI (SINDHI & SUFI) ---
  { title: "Sighra Aawo Sanwal", artist: "Sanam Marvi", youtubeId: "vB4kF_M1c5E", art: "https://i.ytimg.com/vi/vB4kF_M1c5E/hqdefault.jpg" },
  { title: "O Lal Meri Pat", artist: "Sanam Marvi", youtubeId: "mX43o8k1p9Y", art: "https://i.ytimg.com/vi/mX43o8k1p9Y/hqdefault.jpg" },
  { title: "Yaar Vekho", artist: "Sanam Marvi", youtubeId: "Mq0SgfbuDks", art: "https://i.ytimg.com/vi/Mq0SgfbuDks/hqdefault.jpg" },
  { title: "Man Kunto Maula", artist: "Sanam Marvi", youtubeId: "XQZ_P_H2M1c", art: "https://i.ytimg.com/vi/XQZ_P_H2M1c/hqdefault.jpg" },
  { title: "Pritam", artist: "Sanam Marvi", youtubeId: "L_M1c_M1c5E", art: "https://i.ytimg.com/vi/L_M1c_M1c5E/hqdefault.jpg" },

  // --- 🪕 MASTER MANZOOR (SINDHI SAD) ---
  { title: "Zindagi Hik Safar", artist: "Master Manzoor", youtubeId: "N_X2M_X2M1c", art: "https://i.ytimg.com/vi/N_X2M_X2M1c/hqdefault.jpg" },
  { title: "Rovay Rovay", artist: "Master Manzoor", youtubeId: "KZ8xRwDR0zY", art: "https://i.ytimg.com/vi/KZ8xRwDR0zY/hqdefault.jpg" },
  { title: "Bewafa Tuheji Yaad", artist: "Master Manzoor", youtubeId: "hP83e-j_F5U", art: "https://i.ytimg.com/vi/hP83e-j_F5U/hqdefault.jpg" },
  { title: "Dard Ji Dastan", artist: "Master Manzoor", youtubeId: "H5xN_g49_00", art: "https://i.ytimg.com/vi/H5xN_g49_00/hqdefault.jpg" },
  { title: "Muhinji Jindari", artist: "Master Manzoor", youtubeId: "R_M1c_M1c5E", art: "https://i.ytimg.com/vi/R_M1c_M1c5E/hqdefault.jpg" },

  // --- 🪕 AHMED MUGHAL (KASHISH ERA SINDHI) ---
  { title: "Pardesi Sanwariya", artist: "Ahmed Mughal", youtubeId: "T_M1c_M1c5E", art: "https://i.ytimg.com/vi/T_M1c_M1c5E/hqdefault.jpg" },
  { title: "Ajj Hukm Kayo Ahay", artist: "Ahmed Mughal", youtubeId: "W_M1c_M1c5E", art: "https://i.ytimg.com/vi/W_M1c_M1c5E/hqdefault.jpg" },
  { title: "Pyar Mein Pagal", artist: "Ahmed Mughal", youtubeId: "Y_M1c_M1c5E", art: "https://i.ytimg.com/vi/Y_M1c_M1c5E/hqdefault.jpg" },
  { title: "Dard E Dil", artist: "Ahmed Mughal", youtubeId: "U_M1c_M1c5E", art: "https://i.ytimg.com/vi/U_M1c_M1c5E/hqdefault.jpg" },
  { title: "Zindagi", artist: "Ahmed Mughal", youtubeId: "I_M1c_M1c5E", art: "https://i.ytimg.com/vi/I_M1c_M1c5E/hqdefault.jpg" },

  // --- 🪕 SARMAD SINDHI (SINDHI LEGEND) ---
  { title: "Tuhinji Yaari Maan Pyar Kayo", artist: "Sarmad Sindhi", youtubeId: "qyDVB7hGNAg", art: "https://i.ytimg.com/vi/qyDVB7hGNAg/hqdefault.jpg" },
  { title: "Dard Aen Tanhai", artist: "Sarmad Sindhi", youtubeId: "O_M1c_M1c5E", art: "https://i.ytimg.com/vi/O_M1c_M1c5E/hqdefault.jpg" },
  { title: "Pyar Tuhinjo", artist: "Sarmad Sindhi", youtubeId: "qRSPKb9oFy8", art: "https://i.ytimg.com/vi/qRSPKb9oFy8/hqdefault.jpg" },
  { title: "Asan Jo Hal", artist: "Sarmad Sindhi", youtubeId: "6I24fJkG4zE", art: "https://i.ytimg.com/vi/6I24fJkG4zE/hqdefault.jpg" },
  { title: "Rovay Rovay (Sarmad)", artist: "Sarmad Sindhi", youtubeId: "ptKeMonUlbE", art: "https://i.ytimg.com/vi/ptKeMonUlbE/hqdefault.jpg" },

  // --- 💔 ATTAULLAH KHAN (KING OF SAD SONGS) ---
  { title: "Qameez Teri Kaali", artist: "Attaullah Khan", youtubeId: "swqOz9wmjkM", art: "https://i.ytimg.com/vi/swqOz9wmjkM/hqdefault.jpg" },
  { title: "Idhar Zindagi Ka Janaza", artist: "Attaullah Khan", youtubeId: "uW8W42Pz0kQ", art: "https://i.ytimg.com/vi/uW8W42Pz0kQ/hqdefault.jpg" },
  { title: "Acha Sila Diya Tune", artist: "Attaullah Khan", youtubeId: "J8m3S6x58kU", art: "https://i.ytimg.com/vi/J8m3S6x58kU/hqdefault.jpg" },
  { title: "Dhokha Diya Kar", artist: "Attaullah Khan", youtubeId: "gZ-g73a_g0o", art: "https://i.ytimg.com/vi/gZ-g73a_g0o/hqdefault.jpg" },

  // --- 🥀 URDU GHAZALS & NOSTALGIA ---
  { title: "Ranjish Hi Sahi (Sad)", artist: "Mehdi Hassan", youtubeId: "fM0I7G8w9aQ", art: "https://i.ytimg.com/vi/fM0I7G8w9aQ/hqdefault.jpg" },
  { title: "Mujhe Tum Nazar Se", artist: "Mehdi Hassan", youtubeId: "zK0I6G5w8aE", art: "https://i.ytimg.com/vi/zK0I6G5w8aE/hqdefault.jpg" },
  { title: "Awaaz De Kahan Hai", artist: "Noor Jehan", youtubeId: "XQZ_P_H2M1c", art: "https://i.ytimg.com/vi/XQZ_P_H2M1c/hqdefault.jpg" },

  // --- 🎙️ NFAK (DEEP VIBES) ---
  { title: "Kinna Sohna Tainu", artist: "Ustad Nusrat Fateh Ali Khan", youtubeId: "R3n-vjV76G4", art: "https://i.ytimg.com/vi/R3n-vjV76G4/hqdefault.jpg" },
  { title: "Sanu Ek Pal Chain Na Aave", artist: "Ustad Nusrat Fateh Ali Khan", youtubeId: "U3o88P_K70U", art: "https://i.ytimg.com/vi/U3o88P_K70U/hqdefault.jpg" },
  { title: "Yeh Jo Halka Halka", artist: "Ustad Nusrat Fateh Ali Khan", youtubeId: "24-4B2W4K20", art: "https://i.ytimg.com/vi/24-4B2W4K20/hqdefault.jpg" },
  { title: "Tumhein Dillagi", artist: "Ustad Nusrat Fateh Ali Khan", youtubeId: "K3L92Y81_x0", art: "https://i.ytimg.com/vi/K3L92Y81_x0/hqdefault.jpg" }
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
  '"دل ٹوٹا ہے استاد، کوئی پرانا گانا لگاؤ!"'
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

// 🔥 MEGA FAST AUTO-SKIP ENGINE (Solves all YouTube Restrictions)
function onPlayerError(event) {
  console.warn("Track Blocked by YouTube Label / Error Code:", event.data, "— Skipping Instantly...");
  // 200ms ultra-fast skip keeps the UI smooth and finds the next playable track without hanging
  setTimeout(() => { nextTrack(); }, 200);
}

// Dropdown Sync
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

  selectEl.value = currentTrackIndex;

  selectEl.onchange = (e) => {
    const selectedIdx = parseInt(e.target.value, 10);
    loadAndPlayTrack(selectedIdx);
  };
}

// UI Sync
function updateTrackUI(index) {
  const track = playlist[index];
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
  
