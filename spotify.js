console.log("Welcome to my Spotify")
let songIndex=0;
//audioElement.play();
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myprogressbar= document.getElementById('myprogressbar')
let gif= document.getElementById('gif')
let masterclass= document.getElementById('masterclass')
let songItems= Array.from(document.getElementsByClassName('songItem'))


let songs=[
  {songName:"Let me love you",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"}  ,
  {songName:"Perfect",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"}  ,
  {songName:"Until I Found you",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"}  ,
  {songName:"Lover",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"}  ,
  {songName:"Señorita",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"} , 
  {songName:"Infinity",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"}  ,
  {songName:"Let me love you 3",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"}  ,
  {songName:"Let me love you 4",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"}  ,
  {songName:"Let me love you 5",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"} , 
  {songName:"Let me love you 6",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"}
     
]     


songItems.forEach((element,i)=>{
  console.log(element,i)
  element.getElementsByTagName("img")[0].src=songs[i].coverPath
  element.getElementsByClassName("songsname")[0].innerText=songs[i].songName


})

//handel play psause botton 
masterPlay.addEventListener('click',()=>{
  if (audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    gif.style.opacity= 1; 
  }
  else {audioElement.pause()
    masterPlay.classList.remove('fa-circle-pause')
    masterPlay.classList.add('fa-circle-play')
  gif.style.opacity= 0;

}
})

//eventlistner

audioElement.addEventListener('timeupdate',()=>{
  progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
  console.log(progress)
  myprogressbar.value= progress

})
myprogressbar.addEventListener('change',()=>{
  audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeallplays=()=>{
  Array.from(document.getElementsByClassName('songItemList')).forEach((element)=>{
    element.classList.remove('fa-circle-pause')
    element.classList.add('fa-circle-play')
  })
}
Array.from(document.getElementsByClassName('songItemList')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
   makeallplays();
   songIndex= parseInt(e.target.id)
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-circle-pause')
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterclass.innerHTML=songs[songIndex].songName
    audioElement.currentTime= 0
    audioElement.play()
    gif.style.opacity= 1;
      masterPlay.classList.remove('fa-circle-play')
      masterPlay.classList.add('fa-circle-pause')

  })
})
document.getElementById('next').addEventListener('click',()=>{
  if ( songIndex >= 9){
    songIndex= 0
  }
   else{songIndex += 1}
   audioElement.src = `songs/${songIndex+1}.mp3`;
   masterclass.innerHTML=songs[songIndex].songName
    audioElement.currentTime= 0
    audioElement.play()
    gif.style.opacity= 1;
      masterPlay.classList.remove('fa-circle-play')
      masterPlay.classList.add('fa-circle-pause')

})
document.getElementById('previous').addEventListener('click',()=>{
  if ( songIndex <=0){
    songIndex= 0
  }
   else{songIndex -= 1}
   audioElement.src = `songs/${songIndex+1}.mp3`;
   masterclass.innerHTML=songs[songIndex].songName
    audioElement.currentTime= 0
    audioElement.play()
    gif.style.opacity= 1;
      masterPlay.classList.remove('fa-circle-play')
      masterPlay.classList.add('fa-circle-pause')

})
