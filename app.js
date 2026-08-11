// ══ 1. SOUNDCLOUD PLAYLIST (EXACT PUBLIC DIRECT TRACK URLs) ══
const playlist = [
  {
    title: "Kari Aa Qabo Kaye",
    artist: "Jalal Chandio • Folk Classic",
    scUrl: "https://soundcloud.com/jalalchandio/kari-aa-qabo-kaye",
    art: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Tuhinji Yaari Maan Pyar Kayo",
    artist: "Sarmad Sindhi • Sindhi Hit",
    scUrl: "https://soundcloud.com/sarmadsindhi/tuhinji-yaari-maan-pyar-kayo",
    art: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Yeh Jo Halka Halka Suroor Hai",
    artist: "Ustad Nusrat Fateh Ali Khan",
    scUrl: "https://soundcloud.com/nusrat-fateh-ali-khan-official/yeh-jo-halka-halka-suroor-hai",
    art: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Qameez Teri Kaali",
    artist: "Attaullah Khan Esakhelvi",
    scUrl: "https://soundcloud.com/attaullahkhanesakhelvi/qameez-teri-kaali",
    art: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Dil Dil Pakistan",
    artist: "Vital Signs • (1987)",
    scUrl: "https://soundcloud.com/vitalsignsofficial/dil-dil-pakistan",
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

// Global Variables
let currentTrackIndex = 0;
let isPlaying = false;
let chaiCount = 0;
let scWidget = null;
let toastTimeout = null;

// ══ 3. DOM INITIALIZATION ══
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initVisitors();
  initEventListeners();
  initSoundCloudWidget();
});

// ══ 4. SOUNDCLOUD ENGINE WITH SAFE AUTO-SKIP ══
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
    console.warn("SoundCloud Track Load Error — Auto Skipping...");
    setTimeout(() => { nextTrack(); }, 500);
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
    try {
      scWidget.load(track.scUrl, {
        auto_play: autoPlay,
        show_artwork: false,
        callback: () => {
          scWidget.getDuration((durMs) => {
            const timeDurEl = document.getElementById('time-dur');
            if (timeDurEl && durMs) timeDurEl.innerText = formatTime(durMs / 1000);
          });
        }
      });
    } catch (e) {
      console.warn("Error loading SoundCloud track, skipping...");
      nextTrack();
    }
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
