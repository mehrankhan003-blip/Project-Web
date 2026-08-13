// QUETTA RANGEEN HOTEL - RADIO PLAYER

const playlist = [

  { title:"Afreen Afreen", artist:"Rahat Fateh Ali Khan & Momina Mustehsan", youtubeId:"kw4tT7SCmaY" },

  { title:"Tu Jhoom", artist:"Naseebo Lal & Abida Parveen", youtubeId:"7D4vNcK6D38" },

  { title:"Thagyan", artist:"Zain Zohaib & Quratulain Balouch", youtubeId:"nNZvaMoiATE" },

  { title:"Phir Milenge", artist:"Faisal Kapadia & Young Stunners", youtubeId:"S5FyS7tQuUw" },

  { title:"Kana Yaari", artist:"Kaifi Khalil, Eva B & Abdul Wahab Bugti", youtubeId:"zQDAi8tI-cU" },

  { title:"Mehram", artist:"Asfar Hussain & Arooj Aftab", youtubeId:"BUm_hFMlsgg" },

  { title:"Go", artist:"Abdullah Siddiqui & Atif Aslam", youtubeId:"GR5U85eo4yQ" },

  { title:"Aaqa", artist:"Abida Parveen & Ali Sethi", youtubeId:"LekqDjknArc" },

  { title:"Tera Woh Pyar", artist:"Momina Mustehsan & Asim Azhar", youtubeId:"8367ETnagHo" },

  { title:"Piya Ghar Aaya", artist:"Fareed Ayaz & Abu Muhammad Qawwal", youtubeId:"WzlO79d3S8c" },

  { title:"Rang", artist:"Rahat Fateh Ali Khan & Amjad Sabri", youtubeId:"Uks8psEpmB4" },

  { title:"Paar Chanaa De", artist:"Shilpa Rao & Noori", youtubeId:"TrPvQvbp3Cg" },

  { title:"Tajdar-e-Haram", artist:"Atif Aslam", youtubeId:"a18py61_F_w" },

  { title:"Aaj Jaane Ki Zid Na Karo", artist:"Farida Khanum", youtubeId:"KDJL2FyRDeA" },

  { title:"Ranjish Hi Sahi", artist:"Ali Sethi", youtubeId:"pba_YmWDAIU" },

  { title:"Kaatay Na Katay", artist:"Aima Baig, Humera Arshad & Rachel Viccaji", youtubeId:"a2IK6XfdYss" },

  { title:"Aatish", artist:"Shuja Haider & Aima Baig", youtubeId:"J5fHX8iNggs" },

  { title:"Nami Danam", artist:"Chand Tara Orchestra", youtubeId:"N1UCViygC1Q" },

  { title:"Mahi Aaja", artist:"Asim Azhar & Momina Mustehsan", youtubeId:"s05KLrFhuM4" },

  { title:"Shikwa / Jawab-e-Shikwa", artist:"Natasha Baig, Fareed Ayaz & Abu Muhammad Qawwal", youtubeId:"LrCek73_e_M" },

  { title:"Balaghal Ula Be Kamalihi", artist:"Abida Parveen", youtubeId:"dYPWLlfD05Q" },

  { title:"Man Kunto Maula", artist:"Javed Bashir & Ali Azmat", youtubeId:"6XcMiqJGkQE" },

  { title:"Aaja Re Moray Saiyaan", artist:"Zeb Bangash", youtubeId:"bq29w9MJKTQ" },

  { title:"Faasle", artist:"Kaavish & Quratulain Balouch", youtubeId:"9sekgEXGm-E" },

  { title:"Dam Mastam", artist:"Rahat Fateh Ali Khan", youtubeId:"e6o8GhoofzE" },

  { title:"Allahu Akbar", artist:"Ahmed Jehanzeb & Shafqat Amanat Ali", youtubeId:"oJaO4JdFWB8" },

  { title:"Baanware", artist:"Shuja Haider & Aima Baig", youtubeId:"PePGHi6IeZQ" },

  { title:"Jaan-e-Bahaaraan", artist:"Ali Zafar", youtubeId:"BTf68TSLGH4" },

  { title:"Sammi Meri Waar", artist:"Umair Jaswal & Quratulain Balouch", youtubeId:"KHLNSxe5Y8A" },

  { title:"Sajon", artist:"Mekaal Hasan Band", youtubeId:"FgotlS3olp0" },

  { title:"Babu Bhai", artist:"Ali Azmat", youtubeId:"awp1Zr94Yrw" },

  { title:"Laila O Laila", artist:"Rostam Mirlashari", youtubeId:"EAwJynFW64U" },

  { title:"Chori Chori", artist:"Meesha Shafi", youtubeId:"RZ4k4035JdA" },

  { title:"Sultanat", artist:"Aunty Disco Project", youtubeId:"mt03MoMPvR4" },

  { title:"Chaap Tilak", artist:"Abida Parveen & Rahat Fateh Ali Khan", youtubeId:"7SDrjwtfKMk" },

  { title:"Sasu Mangay", artist:"Naseebo Lal & Umair Jaswal", youtubeId:"0KFhnMIm0z4" },

  { title:"Tu Kuja Man Kuja", artist:"Shiraz Uppal & Rafaqat Ali Khan", youtubeId:"ZQMn5wIoAno" },

  { title:"O Re", artist:"Noori", youtubeId:"Z3CT6cKL_0g" },

  { title:"Jal Pari", artist:"Atif Aslam", youtubeId:"Kf6MsltI7lQ" },

  { title:"Mere Rashke Qamar", artist:"Nusrat Fateh Ali Khan", youtubeId:"gY01irEl8Eo" },

  { title:"Yeh Jo Halka Halka Suroor Hai", artist:"Nusrat Fateh Ali Khan", youtubeId:"FIlNElG3JM8" },

  { title:"Dama Dam Mast Qalandar", artist:"Abida Parveen", youtubeId:"-tyvWdq2pyc" },

  { title:"Nindiya Re", artist:"Kaavish", youtubeId:"TXlCszaKvXM" },

  { title:"Aaya Laariye", artist:"Meesha Shafi & Naeem Abbas Rufi", youtubeId:"zVnbojCYPxU" },

  { title:"Lagi Bina / Chal Mele Noon Challiye", artist:"Saieen Zahoor & Sanam Marvi", youtubeId:"I3tS2oTUvHI" },

  { title:"Mujhay Baar Baar", artist:"Abbas Ali Khan", youtubeId:"KaT9lEyqzU0" },

  { title:"Dost", artist:"Abida Parveen", youtubeId:"hzb6uI7xRA8" },

  { title:"Ronay Na Diya", artist:"Sajjad Ali & Zaw Ali", youtubeId:"qMB7ZvgfHIM" },

  { title:"Tere Yad Satandi", artist:"Sajjad Ali", youtubeId:"xs993dDPxYQ" },

  { title:"Allah Hoo", artist:"Nusrat Fateh Ali Khan", youtubeId:"wjynrRhztU8" }

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
