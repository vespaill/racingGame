var blueCarPic = document.createElement('img');
var greenCarPic = document.createElement('img');
var trackPics = [];

var picsToLoad = 0; // Set automatically based on imageList in loadImages().

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad--;
  // console.log(picsToLoad);
  if (picsToLoad == 0) {
    imageLoadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedImagesAndLaunchIfReady;
  imgVar.src = 'images/' + fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
  trackPics[trackCode] = document.createElement('img');
  beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
  var imageList = [
    { varName: blueCarPic, fileName: 'player1car.png' },
    { varName: greenCarPic, fileName: 'player2car.png' },
    { trackType: TRACK_ROAD, fileName: 'track_road.png' },
    { trackType: TRACK_WALL, fileName: 'track_wall.png' },
    { trackType: TRACK_GOAL, fileName: 'track_goal.png' },
    { trackType: TRACK_TREE, fileName: 'track_tree.png' },
    { trackType: TRACK_FLAG, fileName: 'track_flag.png' }
  ];

  picsToLoad = imageList.length;

  for (var i = 0; i < imageList.length; i++) {
    if (imageList[i].varName != undefined) {
      beginLoadingImage(imageList[i].varName, imageList[i].fileName);
    } else {
      loadImageForTrackCode(imageList[i].trackType, imageList[i].fileName);
    }
  }
}
