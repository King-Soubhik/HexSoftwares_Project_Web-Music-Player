'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/soy.jpeg",
    posterUrl: "./assets/images/soy.jpeg",
    title: "Shape of You",
    album: "÷(Divide)",
    year: 2017,
    artist: "Ed Sheeran",
    musicPath: "./assets/music/Shape of You.mp3",
  },
  {
    backgroundImage: "./assets/images/tn.jpeg",
    posterUrl: "./assets/images/tn.jpeg",
    title: "The Nights",
    album: "The Days / Nights",
    year: 2014,
    artist: "Avicii",
    musicPath: "./assets/music/The_Nights.mp4",
  },
  {
    backgroundImage: "./assets/images/hw.jpeg",
    posterUrl: "./assets/images/hw.jpeg",
    title: "Heat Waves",
    album: "Dreamland",
    year: 2020,
    artist: "Glass Animals",
    musicPath: "./assets/music/Heat Waves.mp3",
  },
  {
    backgroundImage: "./assets/images/omy.jpeg",
    posterUrl: "./assets/images/omy.jpeg",
    title: "On My Way",
    album: "Single",
    year: 2019,
    artist: "Alan Walker x Sabrina Carpenter x Farruko",
    musicPath: "./assets/music/On-My-Way.mp3",
  },
  {
    backgroundImage: "./assets/images/im.jpeg",
    posterUrl: "./assets/images/im.jpeg",
    title: "Immortals - From Big Hero 6 Soundtrack",
    album:"Big Hero 6 (Orig. Motion Picture Soundtrack)",
    year:2014,
    artist: "Fall Out Boy",
    musicPath: "./assets/music/Immortals - From Big Hero 6 Soundtrack.mp3",
  },
{
    backgroundImage: "./assets/images/hof.webp",
    posterUrl: "./assets/images/hof.webp",
    title: "Hall of Fame (feat. will.i.am)",
    album: "#3",
    year: 2012,
    artist: "The Script x will.i.am ",
    musicPath: "./assets/music/Hall of Fame-(ft.will.i.am).mp3",
  },
{
    backgroundImage: "./assets/images/lmds.jpeg",
    posterUrl: "./assets/images/lmds.jpeg",
    title: "Let Me Down Slowly",
    album: "Narrated For You",
    year: 2018,
    artist: "Alec Benjamin",
    musicPath: "./assets/music/Let Me Down Slowly.mp3",
  },
 {
    backgroundImage: "./assets/images/sh.jpeg",
    posterUrl: "./assets/images/sh.jpeg",
    title: "Stereo Hearts (feat. Adam Levine)",
    album: "The Papercut Chronicles II",
    year: 2011,
    artist: " Gym Class Heroes x Adam Levine",
    musicPath: "./assets/music/Gym-Class-Heroes-Stereo-Hearts.mp3",
  },
 {
    backgroundImage: "./assets/images/hftw.jpeg",
    posterUrl: "./assets/images/hftw.jpeg",
    title: "Hymn for the Weekend",
    album: "A Head Full of Dreams",
    year: 2015,
    artist: "Coldplay",
    musicPath: "./assets/music/Coldplay-Hymn-for-the-Weekend.mp3",
  },
 {
    backgroundImage: "./assets/images/nl.jpeg",
    posterUrl: "./assets/images/nl.jpeg",
    title: "No Lie",
    album: "Mad Love The Prequel",
    year: 2018,
    artist: "Sean Paul x Dua Lipa",
    musicPath: "./assets/music/No Lie.mp4",
  },
 {
    backgroundImage: "./assets/images/D&W.jpeg",
    posterUrl: "./assets/images/D&W.jpeg",
    title: "Bye Bye Bye - From Deadpool & Wolverine Soundtrack",
    album: "No Strings Attached",
    year: 2000,
    artist: "*NSYNC",
    musicPath: "./assets/music/Bye Bye Bye - From Deadpool & Wolverine Soundtrack.mp3",
  },
 {
    backgroundImage: "./assets/images/iwheo.jpeg",
    posterUrl: "./assets/images/iwheo.jpeg",
    title: "If We Have Each Other",
    album: "Narrated For You",
    year: 2018,
    artist: "Alec Benjamin",
    musicPath: "./assets/music/If-We-Have-Each-Other.mp3",
  },
{
    backgroundImage: "./assets/images/mem.jpeg",
    posterUrl: "./assets/images/mem.jpeg",
    title: "Memories",
    album: "JORDI (Deluxe)",
    year: 2021,
    artist: "Maroon 5",
    musicPath: "./assets/music/Memories.mp3",
  },
{
    backgroundImage: "./assets/images/pd.jpeg",
    posterUrl: "./assets/images/pd.jpeg",
    title: "Play Date",
    album: "Cry Baby (Deluxe Edition)",
    year: 2015,
    artist: "Melanie Martinez",
    musicPath: "./assets/music/Play-Date.mp3",
  },

 {
    backgroundImage: "./assets/images/sya.jpeg",
    posterUrl: "./assets/images/sya.jpeg",
    title: "See You Again (feat. Charlie Puth)",
    album: "Furious 7: Orig. Motion Picture Soundtrack",
    year: 2015,
    artist: " Wiz Khalifa x Charlie Puth",
    musicPath: "./assets/music/Wiz Khalifa ft. Charlie Puth - See You Again.mp3",
  },
{
    backgroundImage: "./assets/images/dtd.jpeg",
    posterUrl: "./assets/images/dtd.jpeg",
    title: "Dusk Till Dawn (feat. Sia)",
    album: "Icarus Falls",
    year: 2018,
    artist: "Zayn x Sia",
    musicPath: "./assets/music/Dusk_Till_Dawn_Ft_Sia_CeeNaija.com_.mp3",
  },
{
    backgroundImage: "./assets/images/sb.jpeg",
    posterUrl: "./assets/images/sb.jpeg",
    title: "Starboy (feat. Daft Punk)",
    album: "Starboy",
    year: 2016,
    artist: "The Weeknd x Daft Punk",
    musicPath: "./assets/music/Starboy.mp3",
  },
{
    backgroundImage: "./assets/images/f.jpeg",
    posterUrl: "./assets/images/f.jpeg",
    title: "Faded",
    album: "Different World",
    year: 2018,
    artist: "Alan Walker",
    musicPath: "./assets/music/Faded.mp3",
  },
 {
    backgroundImage: "./assets/images/b.jpeg",
    posterUrl: "./assets/images/b.jpeg",
    title: "Believer",
    album: "Evolve",
    year: 2017,
    artist: "Imagine Dragons",
    musicPath: "./assets/music/Imagine_Dragons_-_Believer.mp3",
  },
 {
    backgroundImage: "./assets/images/u.jpeg",
    posterUrl: "./assets/images/u.jpeg",
    title: "Unstoppable",
    album: "This Is Acting",
    year: 2016,
    artist: "Sia",
    musicPath: "./assets/music/Unstoppable.mp3",
  },
{
    backgroundImage: "./assets/images/anim.jpeg",
    posterUrl: "./assets/images/anim.jpeg",
    title: "Animals",
    album: "V",
    year: 2014,
    artist: "Maroon 5",
    musicPath: "./assets/music/Animals.mp3",
  },


 {
    backgroundImage: "./assets/images/ib.jpeg",
    posterUrl: "./assets/images/ib.jpeg",
    title: "INDUSTRY BABY (feat. Jack Harlow)",
    album: "MONTERO",
    year: 2021,
    artist: "Lil Nas X x Jack Harlow",
    musicPath: "./assets/music/INDUSTRY-BABY.mp3",
  },
 {
    backgroundImage: "./assets/images/hom.jpeg",
    posterUrl: "./assets/images/hom.jpeg",
    title: "House of Memories",
    album: "Death of a Bachelor",
    year: 2016,
    artist: "Panic! At The Disco",
    musicPath: "./assets/music/House of Memories.mp3",
  },
{
    backgroundImage: "./assets/images/blind.jpeg",
    posterUrl: "./assets/images/blind.jpeg",
    title: "Blinding Lights",
    album: "After Hours",
    year: 2020,
    artist: "The Weeknd",
    musicPath: "./assets/music/Blinding Lights.mp3",
  },
{
    backgroundImage: "./assets/images/closer.jpeg",
    posterUrl: "./assets/images/closer.jpeg",
    title: "Closer",
    album: "Single",
    year: 2016,
    artist: "The Chainsmokers x Halsey",
    musicPath: "./assets/music/Closer.mp3",
  },
{
    backgroundImage: "./assets/images/wdta.jpeg",
    posterUrl: "./assets/images/wdta.jpeg",
    title: "We Don't Talk Anymore (feat. Selena Gomez)",
    album: "Nine Track Mind",
    year: 2016,
    artist: "Charlie Puth x Selena Gomez",
    musicPath: "./assets/music/We Don't Talk Anymore.mp3",
  },
{
    backgroundImage: "./assets/images/a.jpeg",
    posterUrl: "./assets/images/a.jpeg",
    title: "Arcade",
    album: "Single",
    year: 2019,
    artist: "Duncan Laurence",
    musicPath: "./assets/music/Arcade.mp3",
  },
{
    backgroundImage: "./assets/images/mb.jpeg",
    posterUrl: "./assets/images/mb.jpeg",
    title: "Mockingbird",
    album: "Encore (Deluxe Version)",
    year: 2004,
    artist: "Eminem",
    musicPath: "./assets/music/eminem-the-real-king-of-rap_eminem-mockingbird.mp3",
  },
{
    backgroundImage: "./assets/images/m.jpeg",
    posterUrl: "./assets/images/m.jpeg",
    title: "Mood (feat. iann dior) ",
    album: "El Dorado",
    year: 2021,
    artist: "24kGoldn x iann dior",
    musicPath: "./assets/music/Mood.mp3",
  },
{
    backgroundImage: "./assets/images/nc.jpeg",
    posterUrl: "./assets/images/nc.jpeg",
    title: "Night Changes",
    album: "FOUR (Deluxe)",
    year: 2014,
    artist: "One Direction",
    musicPath: "./assets/music/Night-Changes.mp3",
  },
{
    backgroundImage: "./assets/images/moac.jpeg",
    posterUrl: "./assets/images/moac.jpeg",
    title: "Mary On A Cross",
    album: "Seven Inches of Satanic Panic",
    year: 2019,
    artist: "Ghost",
    musicPath: "./assets/music/Mary On A Cross.mp3",
  },
{
    backgroundImage: "./assets/images/at.jpeg",
    posterUrl: "./assets/images/at.jpeg",
    title: "Attention",
    album: "Voicenotes",
    year: 2018,
    artist: "Charlie Puth",
    musicPath: "./assets/music/Attention.mp3",
  },
{
    backgroundImage: "./assets/images/bl.jpeg",
    posterUrl: "./assets/images/bl.jpeg",
    title: "Bad Liar",
    album: "Origins (Deluxe)",
    year: 2018,
    artist: "Imagine Dragons",
    musicPath: "./assets/music/Bad Liar.mp3",
  },
{
    backgroundImage: "./assets/images/le.jpeg",
    posterUrl: "./assets/images/le.jpeg",
    title: "Levitating",
    album: "Future Nostalgia",
    year: 2020,
    artist: "Dua Lipa",
    musicPath: "./assets/music/Levitating.mp3",
  },
{
    backgroundImage: "./assets/images/lmly.jpeg",
    posterUrl: "./assets/images/lmly.jpeg",
    title: "Let Me Love You",
    album: "Encore",
    year: 2016,
    artist: "DJ Snake x Justin Bieber",
    musicPath: "./assets/music/Let-Me-Love-You.mp3",
  },
{
    backgroundImage: "./assets/images/tb.jpeg",
    posterUrl: "./assets/images/tb.jpeg",
    title: "The Box",
    album: "Please Excuse Me for Being Antisocial",
    year: 2019,
    artist: "Roddy Ricch",
    musicPath: "./assets/music/The Box.mp3",
  },
{
    backgroundImage: "./assets/images/p.jpeg",
    posterUrl: "./assets/images/p.jpeg",
    title: "Popular (feat. Playboi Carti and Madonna)",
    album: "Popular (Music from the HBO Orig. Series)",
    year: 2023,
    artist: "The Weeknd x Playboi Carti x Madonna",
    musicPath: "./assets/music/Popular.mp3",
  },
{
    backgroundImage: "./assets/images/ct.jpeg",
    posterUrl: "./assets/images/ct.jpeg",
    title: "Cheap Thrills (feat. Sean Paul) ",
    album: "This Is Acting",
    year: 2016,
    artist: "Sia x Sean Paul",
    musicPath: "./assets/music/Cheap Thrills.mp3",
  },
{
    backgroundImage: "./assets/images/otf.jpeg",
    posterUrl: "./assets/images/otf.jpeg",
    title: "On The Floor",
    album: "LOVE?",
    year: 2011,
    artist: "Jennifer Lopez x Pitbull",
    musicPath: "./assets/music/On The Floor.mp3",
  },
{
    backgroundImage: "./assets/images/stay.jpeg",
    posterUrl: "./assets/images/stay.jpeg",
    title: "STAY",
    album: "Single",
    year: 2021,
    artist: "The Kid LAROI x Justin Bieber",
    musicPath: "./assets/music/Stay.mp3",
  },
{
    backgroundImage: "./assets/images/rs.jpeg",
    posterUrl: "./assets/images/rs.jpeg",
    title: "Rockstar (feat. 21 Savage)",
    album: "beerbongs & bentleys",
    year: 2018,
    artist: "Post Malone x 21 Savage",
    musicPath: "./assets/music/Rockstar.mp3",
  },
{
    backgroundImage: "./assets/images/od.jpeg",
    posterUrl: "./assets/images/od.jpeg",
    title: "One Dance",
    album: "Views",
    year: 2016,
    artist: "Drake x Wizkid x Kyla",
    musicPath: "./assets/music/One Dance.mp3",
  },















];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);