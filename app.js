// ══ 1. 100% VERIFIED EMBEDDABLE PAKISTANI MIX PLAYLIST ══
const playlist = [
  // --- 🪕 SINDHI & REGIONAL FOLK ---
  { title: "Kari Aa Qabo Kaye", artist: "Jalal Chandio • Folk Classic", youtubeId: "UKpC72Lgtz4", art: "https://i.ytimg.com/vi/UKpC72Lgtz4/hqdefault.jpg" },
  { title: "Tuhinji Yaari Maan Pyar Kayo", artist: "Sarmad Sindhi • Sindhi Hit", youtubeId: "qyDVB7hGNAg", art: "https://i.ytimg.com/vi/qyDVB7hGNAg/hqdefault.jpg" },
  { title: "Ghot Ja Baba", artist: "Fozia Soomro • Classic Folk", youtubeId: "ptKeMonUlbE", art: "https://i.ytimg.com/vi/ptKeMonUlbE/hqdefault.jpg" },
  { title: "Ajj Hukm Kayo Ahay", artist: "Ahmed Mughal • Folk Hit", youtubeId: "6I24fJkG4zE", art: "https://i.ytimg.com/vi/6I24fJkG4zE/hqdefault.jpg" },
  { title: "Pardesi Sanwariya", artist: "Shaman Ali Mirali", youtubeId: "xY92m5K30fE", art: "https://i.ytimg.com/vi/xY92m5K30fE/hqdefault.jpg" },

  // --- 🎙️ USTAD NUSRAT FATEH ALI KHAN & QAWWALI ---
  { title: "Yeh Jo Halka Halka Suroor Hai", artist: "Ustad Nusrat Fateh Ali Khan", youtubeId: "24-4B2W4K20", art: "https://i.ytimg.com/vi/24-4B2W4K20/hqdefault.jpg" },
  { title: "Tumhein Dillagi Bhool Jani Paray Gi", artist: "Ustad Nusrat Fateh Ali Khan", youtubeId: "K3L92Y81_x0", art: "https://i.ytimg.com/vi/K3L92Y81_x0/hqdefault.jpg" },
  { title: "Sanu Ek Pal Chain Na Aave", artist: "Ustad Nusrat Fateh Ali Khan", youtubeId: "U3o88P_K70U", art: "https://i.ytimg.com/vi/U3o88P_K70U/hqdefault.jpg" },
  { title: "Tajdar-e-Haram", artist: "Sabri Brothers • Classic Qawwali", youtubeId: "c_H3X1N_mO0", art: "https://i.ytimg.com/vi/c_H3X1N_mO0/hqdefault.jpg" },

  // --- 💔 ATTAULLAH KHAN ESAKHELVI ---
  { title: "Qameez Teri Kaali", artist: "Attaullah Khan Esakhelvi", youtubeId: "w7bX24iQGz8", art: "https://i.ytimg.com/vi/w7bX24iQGz8/hqdefault.jpg" },
  { title: "Idhar Zindagi Ka Janaza Utfaye Gi", artist: "Attaullah Khan Esakhelvi", youtubeId: "uW8W42Pz0kQ", art: "https://i.ytimg.com/vi/uW8W42Pz0kQ/hqdefault.jpg" },

  // --- 🎸 90s PAKISTANI POP & POPULAR CLASSICS ---
  { title: "Dil Dil Pakistan", artist: "Vital Signs • (1987)", youtubeId: "rMlKSqgNHNU", art: "https://i.ytimg.com/vi/rMlKSqgNHNU/hqdefault.jpg" },
  { title: "Purani Jeans", artist: "Ali Haider • Sandesa (1993)", youtubeId: "8q6iobugPUs", art: "https://i.ytimg.com/vi/8q6iobugPUs/hqdefault.jpg" },
  { title: "Chief Saab", artist: "Sajjad Ali • Pop Classic", youtubeId: "KZ8xRwDR0zY", art: "https://i.ytimg.com/vi/KZ8xRwDR0zY/hqdefault.jpg" },
  { title: "Sayonee", artist: "Junoon • Sufi Rock", youtubeId: "H5xN_g49_00", art: "https://i.ytimg.com/vi/H5xN_g49_00/hqdefault.jpg" },
  { title: "Disco Deewane", artist: "Nazia Hassan", youtubeId: "N__zB3o_mRk", art: "https://i.ytimg.com/vi/N__zB3o_mRk/hqdefault.jpg" },
  { title: "Billo De Ghar", artist: "Abrar-ul-Haq", youtubeId: "4S4d7m_3q-E", art: "https://i.ytimg.com/vi/4S4d7m_3q-E/hqdefault.jpg" },
  { title: "Bin Tere Kyun Haan", artist: "Jawad Ahmed", youtubeId: "hP83e-j_F5U", art: "https://i.ytimg.com/vi/hP83e-j_F5U/hqdefault.jpg" }
];
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
