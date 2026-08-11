// ══ 1. MASTER PLAYLIST ══
const playlist = [
  { title: "Kari Aa Qabo Kaye", artist: "Jalal Chandio", youtubeId: "af0iAsv2yv4", art: "https://i.ytimg.com/vi/af0iAsv2yv4/0.jpg" },
  { title: "Tuhinji Yaari", artist: "Sarmad Sindhi", youtubeId: "qyDVB7hGNAg", art: "https://i.ytimg.com/vi/qyDVB7hGNAg/0.jpg" },
  { title: "Halka Halka Suroor", artist: "Nusrat Fateh Ali Khan", youtubeId: "R3n-vjV76G4", art: "https://i.ytimg.com/vi/R3n-vjV76G4/0.jpg" },
  { title: "Dil Dil Pakistan", artist: "Vital Signs", youtubeId: "rMlKSqgNHNU", art: "https://i.ytimg.com/vi/rMlKSqgNHNU/0.jpg" },
  { title: "Purani Jeans", artist: "Ali Haider", youtubeId: "8q6iobugPUs", art: "https://i.ytimg.com/vi/8q6iobugPUs/0.jpg" }
];

let currentTrackIndex = 0;
let ytPlayer = null;

// ══ 2. LOAD YOUTUBE API ══
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('yt-audio-player', {
        events: {
            'onReady': () => updateTrackUI(0),
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
        }
    });
};

// ══ 3. CORE LOGIC ══
function loadAndPlayTrack(index) {
    currentTrackIndex = index;
    const track = playlist[index];
    
    // UI Update
    updateTrackUI(index);
    
    // Audio Update
    if (ytPlayer && ytPlayer.loadVideoById) {
        ytPlayer.loadVideoById(track.youtubeId);
    }
}

function updateTrackUI(index) {
    const track = playlist[index];
    document.getElementById('track-title').innerText = track.title;
    document.getElementById('track-artist').innerText = track.artist;
    document.getElementById('track-art').src = track.art;
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) nextTrack();
}

function onPlayerError(event) {
    console.log("Error, skipping:", event.data);
    nextTrack();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadAndPlayTrack(currentTrackIndex);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadAndPlayTrack(currentTrackIndex);
}

// ══ 4. UI CONTROLS ══
document.getElementById('play-btn').onclick = () => {
    if(ytPlayer.getPlayerState() === YT.PlayerState.PLAYING) ytPlayer.pauseVideo();
    else ytPlayer.playVideo();
};
document.getElementById('next-btn').onclick = nextTrack;
document.getElementById('prev-btn').onclick = prevTrack;

// ══ 5. CHAI DIALOGUES ══
document.getElementById('chai-btn').onclick = () => {
    // Basic counter logic
    let count = parseInt(document.getElementById('chai-count').innerText) || 0;
    document.getElementById('chai-count').innerText = count + 1;
};

// ══ 6. CLOCK & VISITORS ══
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit' });
}, 1000);
