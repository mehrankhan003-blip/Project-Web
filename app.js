// ══ 1. SOUNDCLOUD PLAYLIST (DIRECT TRACK URLS) ══
const playlist = [
  {
    title: "Kari Aa Qabo Kaye",
    artist: "Jalal Chandio • Folk Classic",
    scUrl: "https://soundcloud.com/search/sounds?q=jalal%20chandio%20kari%20aa%20qabo",
    art: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Tuhinji Yaari Maan Pyar Kayo",
    artist: "Sarmad Sindhi • Sindhi Hit",
    scUrl: "https://soundcloud.com/search/sounds?q=sarmad%20sindhi%20tuhinji%20yaari",
    art: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Yeh Jo Halka Halka Suroor Hai",
    artist: "Ustad Nusrat Fateh Ali Khan",
    scUrl: "https://soundcloud.com/search/sounds?q=nusrat%20fateh%20ali%20khan%20halka%20halka%20suroor",
    art: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Qameez Teri Kaali",
    artist: "Attaullah Khan Esakhelvi",
    scUrl: "https://soundcloud.com/search/sounds?q=attaullah%20khan%20qameez%20teri%20kaali",
    art: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Dil Dil Pakistan",
    artist: "Vital Signs • (1987)",
    scUrl: "https://soundcloud.com/search/sounds?q=vital%20signs%20dil%20dil%20pakistan",
    art: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop"
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

// Global State
let currentTrackIndex = 0;
let isPlaying = false;
let chaiCount = 0;
let scWidget = null;
let toastTimeout = null;

// ══ 3. INITIALIZATION ══
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initVisitors();
  initEventListeners();
  initSoundCloudWidget();
});

// ══ 4. SOUNDCLOUD WIDGET ENGINE ══
function initSoundCloudWidget() {
  const iframe = document.getElementById('sc-audio-player');
  if (!iframe) return;

  scWidget = SC.Widget(iframe);

  scWidget.bind(SC.Widget.Events.READY, () => {
    loadAndPlayTrack(0, false);
  });

  scWidget.bind(SC.Widget.Events.PLAY, () => {
    isPlaying = true;
    updatePlayBtnUI(true);
  });

  scWidget.bind(SC.Widget.Events.PAUSE, () => {
    isPlaying = false;
    updatePlayBtnUI(false);
  });

  scWidget.bind(SC.Widget.Events.FINISH, () => {
    nextTrack();
  });

  scWidget.bind(SC.Widget.Events.PLAY_PROGRESS, (data) => {
    const curMs = data.currentPosition || 0;
    const pct = data.relativePosition * 100;

    const progressBar = document.getElementById('progress-bar');
    const timeCurrEl = document.getElementById('time-curr');

    if (progressBar) progressBar.style.width = `${pct}%`;
    if (timeCurrEl) timeCurrEl.innerText = formatTime(curMs / 1000);
  });

  scWidget.bind(SC.Widget.Events.ERROR, () => {
    console.warn("SoundCloud Error - Skipping...");
    nextTrack();
  });
}

function updateTrackUI(index) {
  const track = playlist[index];
  const titleEl = document.getElementById('track-title');
  const artistEl = document.getElementById('track-artist');
  const artEl = document.getElementById('track-art');

  if (titleEl) titleEl.innerText = track.title;
  if (artistEl) artistEl.innerText = track.artist;
  if (artEl) artEl.src = track.art;
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

function loadAndPlayTrack(index, autoPlay = true) {
  currentTrackIndex = index;
  updateTrackUI(currentTrackIndex);

  const track = playlist[currentTrackIndex];
  if (scWidget) {
    scWidget.load(track.scUrl, {
      auto_play: autoPlay,
      show_artwork: false,
      callback: () => {
        scWidget.getDuration((durMs) => {
          const timeDurEl = document.getElementById('time-dur');
          if (timeDurEl) timeDurEl.innerText = formatTime(durMs / 1000);
        });
      }
    });
  }
}

function togglePlay() {
  if (!scWidget) return;
  scWidget.toggle();
}

function nextTrack() {
  const nextIdx = (currentTrackIndex + 1) % playlist.length;
  loadAndPlayTrack(nextIdx, true);
}

function prevTrack() {
  const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadAndPlayTrack(prevIdx, true);
}

function formatTime(seconds) {
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
      if (!scWidget) return;
      scWidget.getDuration((durMs) => {
        if (durMs > 0) {
          const rect = seekContainer.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const pct = clickX / rect.width;
          scWidget.seekTo(pct * durMs);
        }
      });
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
  const playBtn = document.getElementById('play-btn');
  const trackArtEl = document.getElementById('track-art');

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

function onPlayerError(event) {
  console.warn("YouTube Player error:", event.data, "- Skipping to next track...");
  nextTrack();
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

// ══ 5. SEEKBAR ENGINE ══
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
      if (timeDurEl) timeDurEl.innerText = formatTime(dur);
    }
  }, 300);
}

function stopSeekLoop() {
  if (progressInterval) clearInterval(progressInterval);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ══ 6. EVENT LISTENERS BINDING ══
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
        navigator.share({
          title: 'کوئٹہ رنگین ہوٹل ریڈیو',
          url: window.location.href
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("لنک کاپی ہو گیا ہے!");
      }
    };
  }
}

// ══ 7. CLOCK & VISITORS ══
function initClock() {
  function updateClock() {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
      const now = new Date();
      const options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      clockEl.innerText = now.toLocaleTimeString('en-US', options);
    }
  }
  setInterval(updateClock, 1000);
  updateClock();
}

function initVisitors() {
  const liveCountEl = document.getElementById('live-count');
  if (!liveCountEl) return;

  try {
    const ws = new WebSocket('wss://demo.piesocket.com/v3/channel_123?api_key=VCX2aC2m53363T333&notify_self');
    ws.onopen = () => { liveCountEl.innerText = "1"; };
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data && data.usersCount) liveCountEl.innerText = data.usersCount;
    };
    ws.onerror = ws.onclose = () => { liveCountEl.innerText = "1"; };
  } catch (e) {
    liveCountEl.innerText = "1";
  }
}
  
