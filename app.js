// QUETTA RANGEEN HOTEL - RADIO PLAYER

const playlist=[
{title:"Ae Rah-e-Haq Ke Shaheedo",artist:"Naseem Begum • Old ISPR",youtubeId:"cZ4J1F_P1Xw"},
{title:"Yeh Ghazi Yeh Tere Purisrar",artist:"Junaid Jamshed",youtubeId:"Q_H2M_X2M1c"},
{title:"Qasam Us Waqt Ki",artist:"Junaid Jamshed",youtubeId:"V_K1X_M1c5E"},
{title:"Aye Puttar Hattan Te Nahi Vikde",artist:"Noor Jehan • 1965 War",youtubeId:"M_X2M_X2M1c"},
{title:"Apni Jaan Nazar Karoon",artist:"Mehdi Hassan",youtubeId:"P_H2M_X2M1c"},

{title:"Woh Humsafar Tha",artist:"Quratulain Balouch • OST",youtubeId:"zK0I6G5w8aE"},
{title:"Mera Ishq",artist:"Quratulain Balouch",youtubeId:"LgB8T3qD7wE"},
{title:"Bewafaiyaan",artist:"Quratulain Balouch",youtubeId:"8rP2vW_K1Dk"},
{title:"Sab Jag Soye",artist:"Quratulain Balouch",youtubeId:"Qp0cK-G1w8I"},
{title:"Saaiyaan",artist:"Quratulain Balouch",youtubeId:"xY92m5K30fE"},

{title:"Tu Ne Deewana Banaya",artist:"Abida Parveen",youtubeId:"N__zB3o_mRk"},
{title:"Jab Se Tune Mujhe Deewana",artist:"Abida Parveen",youtubeId:"-8anr6et3Lw"},
{title:"Dhoondo Ge Agar Mulkon",artist:"Abida Parveen",youtubeId:"VHifsSEbq4I"},
{title:"Mahi Yaar Di Gharoli",artist:"Abida Parveen",youtubeId:"K1X_M_X2M1c"},
{title:"Arez-e-Baqaf-e-Bahar",artist:"Abida Parveen",youtubeId:"yT7Zk_X2M1c"},

{title:"Sighra Aawo Sanwal",artist:"Sanam Marvi",youtubeId:"vB4kF_M1c5E"},
{title:"O Lal Meri Pat",artist:"Sanam Marvi",youtubeId:"mX43o8k1p9Y"},
{title:"Yaar Vekho",artist:"Sanam Marvi",youtubeId:"Mq0SgfbuDks"},
{title:"Man Kunto Maula",artist:"Sanam Marvi",youtubeId:"XQZ_P_H2M1c"},

{title:"Rovay Rovay",artist:"Master Manzoor",youtubeId:"KZ8xRwDR0zY"},
{title:"Bewafa Tuheji Yaad",artist:"Master Manzoor",youtubeId:"hP83e-j_F5U"},
{title:"Dard Ji Dastan",artist:"Master Manzoor",youtubeId:"H5xN_g49_00"},

{title:"Tuhinji Yaari Maan Pyar Kayo",artist:"Sarmad Sindhi",youtubeId:"qyDVB7hGNAg"},
{title:"Pyar Tuhinjo",artist:"Sarmad Sindhi",youtubeId:"qRSPKb9oFy8"},
{title:"Asan Jo Hal",artist:"Sarmad Sindhi",youtubeId:"6I24fJkG4zE"},
{title:"Rovay Rovay",artist:"Sarmad Sindhi",youtubeId:"ptKeMonUlbE"},

{title:"Qameez Teri Kaali",artist:"Attaullah Khan",youtubeId:"swqOz9wmjkM"},
{title:"Idhar Zindagi Ka Janaza",artist:"Attaullah Khan",youtubeId:"uW8W42Pz0kQ"},
{title:"Acha Sila Diya Tune",artist:"Attaullah Khan",youtubeId:"J8m3S6x58kU"},
{title:"Dhokha Diya Kar",artist:"Attaullah Khan",youtubeId:"gZ-g73a_g0o"},

{title:"Kinna Sohna Tainu",artist:"Nusrat Fateh Ali Khan",youtubeId:"R3n-vjV76G4"},
{title:"Sanu Ek Pal Chain Na Aave",artist:"Nusrat Fateh Ali Khan",youtubeId:"U3o88P_K70U"},
{title:"Yeh Jo Halka Halka",artist:"Nusrat Fateh Ali Khan",youtubeId:"24-4B2W4K20"},
{title:"Tumhein Dillagi",artist:"Nusrat Fateh Ali Khan",youtubeId:"K3L92Y81_x0"},
{title:"Allah Hoo",artist:"Nusrat Fateh Ali Khan",youtubeId:"BajgVA0SkqY"},

{title:"Ranjish Hi Sahi",artist:"Mehdi Hassan",youtubeId:"fM0I7G8w9aQ"},
{title:"Mujhe Tum Nazar Se",artist:"Mehdi Hassan",youtubeId:"zK0I6G5w8aE"},
{title:"Pyar Tuhinjo",artist:"Sarmad Sindhi",youtubeId:"qRSPKb9oFy8"},
{title:"Asan Jo Hal",artist:"Sarmad Sindhi",youtubeId:"6I24fJkG4zE"}
];

const chaiDialogues=[
"استاد! دودھ پتی یا سادہ؟ ☕",
"خان صاحب! چائے میٹھی رکھیں یا پھیکی؟ 🧊",
"استاد! ایک کڑک دودھ پتی تیار ہے! 🔥",
"بھائی صاحب! الائچی والی چائے بناؤں؟ 🌿",
"استاد! پراٹھا بھی ساتھ لگانا ہے؟ 🥞"
];

const bannerDialogues=[
"\"استاد! ایک کڑک چائے اور پراٹھا لگانا!\"",
"\"خان صاحب! چینی تھوڑی کم رکھنا!\"",
"\"دل ٹوٹا ہے استاد، کوئی پرانا گانا لگاؤ!\""
];

let currentTrackIndex=0;
let ytPlayer=null;
let playerReady=false;
let isPlaying=false;
let pendingPlay=false;
let retryCount=0;
let loadToken=0;
let progressTimer=null;
let chaiCount=0;
let advanceLock=false;
let attempted=new Set();

const MAX_RETRY=1;

function $(id){return document.getElementById(id)}

function init(){
  initClock();
  initVisitors();
  initButtons();
  renderPlaylist();
  updateTrackUI();
  loadYouTubeAPI();
}

if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",init);
}else{
  init();
}

function initClock(){
  const update=()=>{
    const el=$("clock");
    if(!el)return;
    try{
      el.textContent=new Date().toLocaleTimeString("en-US",{
        timeZone:"Asia/Karachi",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:true
      });
    }catch(e){
      el.textContent=new Date().toLocaleTimeString();
    }
  };
  update();
  setInterval(update,1000);
}

function initVisitors(){
  const el=$("live-count");
  if(el)el.textContent="1";
}

function renderPlaylist(){
  const select=$("playlist-select");
  if(!select)return;

  select.innerHTML="";

  playlist.forEach((song,i)=>{
    const option=document.createElement("option");
    option.value=i;
    option.textContent=`${i+1}. ${song.title} — ${song.artist}`;
    select.appendChild(option);
  });

  select.value=currentTrackIndex;

  select.addEventListener("change",()=>{
    const i=Number(select.value);
    if(Number.isInteger(i))loadTrack(i,true);
  });
}

function updateTrackUI(){
  const song=playlist[currentTrackIndex];
  if(!song)return;

  const title=$("track-title");
  const artist=$("track-artist");
  const select=$("playlist-select");
  const art=$("track-art");

  if(title)title.textContent=song.title;
  if(artist)artist.textContent=song.artist;
  if(select)select.value=currentTrackIndex;

  if(art){
    const image=`https://i.ytimg.com/vi/${song.youtubeId}/hqdefault.jpg`;
    art.src=image;
    art.onerror=()=>{
      art.src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format&fit=crop";
    };
  }
}

function loadYouTubeAPI(){
  if(window.YT&&window.YT.Player){
    createPlayer();
    return;
  }

  if(document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){
    return;
  }

  window.onYouTubeIframeAPIReady=createPlayer;

  const script=document.createElement("script");
  script.src="https://www.youtube.com/iframe_api";
  script.async=true;
  document.head.appendChild(script);
}

window.onYouTubeIframeAPIReady=createPlayer;

function createPlayer(){
  if(playerReady||ytPlayer)return;

  const host=$("yt-audio-player");
  if(!host||!window.YT||!YT.Player)return;

  ytPlayer=new YT.Player("yt-audio-player",{
    width:"1",
    height:"1",
    playerVars:{
      autoplay:0,
      controls:0,
      disablekb:1,
      fs:0,
      iv_load_policy:3,
      modestbranding:1,
      playsinline:1,
      rel:0
    },
    events:{
      onReady:onPlayerReady,
      onStateChange:onPlayerStateChange,
      onError:onPlayerError
    }
  });
}

function onPlayerReady(){
  playerReady=true;
  updateTrackUI();

  if(pendingPlay){
    pendingPlay=false;
    playCurrent();
  }
}

function onPlayerStateChange(event){
  if(!window.YT)return;

  if(event.data===YT.PlayerState.PLAYING){
    isPlaying=true;
    retryCount=0;
    attempted.clear();
    updatePlayButton(true);
    startProgress();
  }

  else if(event.data===YT.PlayerState.PAUSED){
    isPlaying=false;
    updatePlayButton(false);
    stopProgress();
  }

  else if(event.data===YT.PlayerState.ENDED){
    stopProgress();
    nextTrack();
  }
}

function onPlayerError(event){
  console.warn("YouTube error:",event.data,playlist[currentTrackIndex]);

  if(retryCount<MAX_RETRY){
    retryCount++;
    const token=loadToken;

    setTimeout(()=>{
      if(token!==loadToken)return;
      if(ytPlayer&&playerReady){
        try{
          ytPlayer.loadVideoById(playlist[currentTrackIndex].youtubeId);
        }catch(e){
          skipTrack();
        }
      }
    },700);

    return;
  }

  retryCount=0;
  skipTrack();
}

function skipTrack(){
  if(advanceLock||!playlist.length)return;

  advanceLock=true;
  attempted.add(currentTrackIndex);

  let next=-1;

  for(let n=1;n<=playlist.length;n++){
    const i=(currentTrackIndex+n)%playlist.length;
    if(!attempted.has(i)){
      next=i;
      break;
    }
  }

  if(next===-1){
    attempted.clear();
    next=(currentTrackIndex+1)%playlist.length;
  }

  setTimeout(()=>{
    advanceLock=false;
    loadTrack(next,true);
  },350);
}

function loadTrack(index,autoplay){
  if(!playlist[index])return;

  currentTrackIndex=index;
  retryCount=0;
  loadToken++;

  updateTrackUI();

  if(!playerReady||!ytPlayer){
    pendingPlay=!!autoplay;
    return;
  }

  try{
    if(autoplay){
      ytPlayer.loadVideoById({
        videoId:playlist[index].youtubeId,
        suggestedQuality:"small"
      });
    }else{
      ytPlayer.cueVideoById({
        videoId:playlist[index].youtubeId,
        suggestedQuality:"small"
      });
    }
  }catch(e){
    console.warn("Load error:",e);
    skipTrack();
  }
}

function playCurrent(){
  if(!playerReady||!ytPlayer){
    pendingPlay=true;
    return;
  }

  try{
    ytPlayer.playVideo();
  }catch(e){
    console.warn("Play error:",e);
  }
}

function togglePlay(){
  if(!playerReady||!ytPlayer){
    pendingPlay=true;
    return;
  }

  try{
    const state=ytPlayer.getPlayerState();

    if(state===YT.PlayerState.PLAYING){
      ytPlayer.pauseVideo();
    }else{
      playCurrent();
    }
  }catch(e){
    console.warn("Toggle error:",e);
  }
}

function nextTrack(){
  if(advanceLock)return;

  retryCount=0;
  const next=(currentTrackIndex+1)%playlist.length;
  loadTrack(next,true);
}

function prevTrack(){
  if(advanceLock)return;

  retryCount=0;
  const prev=(currentTrackIndex-1+playlist.length)%playlist.length;
  loadTrack(prev,true);
}

function updatePlayButton(playing){
  const btn=$("play-btn");
  const art=$("track-art");

  if(btn)btn.textContent=playing?"❚❚":"▶";

  if(art){
    if(playing)art.classList.remove("vinyl-paused");
    else art.classList.add("vinyl-paused");
  }
}

function startProgress(){
  stopProgress();

  progressTimer=setInterval(()=>{
    if(!ytPlayer)return;

    try{
      const current=ytPlayer.getCurrentTime()||0;
      const duration=ytPlayer.getDuration()||0;
      const percent=duration>0?Math.min(100,current/duration*100):0;

      const bar=$("progress-bar");
      const curr=$("time-curr");
      const dur=$("time-dur");

      if(bar)bar.style.width=percent+"%";
      if(curr)curr.textContent=formatTime(current);
      if(dur)dur.textContent=formatTime(duration);
    }catch(e){}
  },300);
}

function stopProgress(){
  if(progressTimer){
    clearInterval(progressTimer);
    progressTimer=null;
  }
}

function formatTime(seconds){
  if(!Number.isFinite(seconds))return"0:00";

  const m=Math.floor(seconds/60);
  const s=Math.floor(seconds%60);

  return `${m}:${s<10?"0":""}${s}`;
}

function initButtons(){

  const play=$("play-btn");
  const next=$("next-btn");
  const prev=$("prev-btn");
  const seek=$("seek-container");
  const chai=$("chai-btn");
  const share=$("share-btn");
  const dialogue=$("dialogue-btn");

  if(play)play.addEventListener("click",togglePlay);
  if(next)next.addEventListener("click",nextTrack);
  if(prev)prev.addEventListener("click",prevTrack);

  if(seek){
    seek.addEventListener("click",e=>{
      if(!ytPlayer||!playerReady)return;

      try{
        const rect=seek.getBoundingClientRect();
        const percent=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width));
        const duration=ytPlayer.getDuration();

        if(duration>0){
          ytPlayer.seekTo(duration*percent,true);
        }
      }catch(err){}
    });
  }

  if(chai){
    chai.addEventListener("click",()=>{
      chaiCount++;

      const count=$("chai-count");
      const toast=$("toast-popup");
      const text=$("toast-text");

      if(count)count.textContent=chaiCount;

      if(text){
        text.textContent=chaiDialogues[
          Math.floor(Math.random()*chaiDialogues.length)
        ];
      }

      if(toast){
        toast.classList.remove("hidden");
        toast.classList.add("toast-animate");

        clearTimeout(window.chaiToastTimer);

        window.chaiToastTimer=setTimeout(()=>{
          toast.classList.add("hidden");
          toast.classList.remove("toast-animate");
        },2500);
      }
    });
  }

  if(dialogue){
    dialogue.addEventListener("click",()=>{
      const text=$("dialogue-text");
      if(text){
        text.textContent=bannerDialogues[
          Math.floor(Math.random()*bannerDialogues.length)
        ];
      }
    });
  }

  if(share){
    share.addEventListener("click",async()=>{
      try{
        if(navigator.share){
          await navigator.share({
            title:"کوئٹہ رنگین ہوٹل ریڈیو",
            url:location.href
          });
        }else if(navigator.clipboard){
          await navigator.clipboard.writeText(location.href);
          alert("لنک کاپی ہو گیا ہے!");
        }
      }catch(e){}
    });
  }
}

console.log("Quetta Rangeen Hotel Radio loaded");
console.log("Playlist:",playlist.length,"tracks");
