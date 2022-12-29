const template = document.querySelector("template#video");
const main = document.querySelector("main");

const links = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
]; // sample links I get online from this repo: https://gist.github.com/jsturgis/3b19447b304616f18657

links.forEach((link) => {
  addVideo(link);
});

function addVideo(url) {
  const videoTag = template.cloneNode(true).content;
  const sourceTag = videoTag.querySelector("source");

  sourceTag.src = url;

  main.appendChild(videoTag);
}
