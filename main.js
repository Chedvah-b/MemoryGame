var images=["pictures/cake1.png","pictures/cake2.png","pictures/cake3.png","pictures/cake4.png","pictures/cake5.png","pictures/cake6.png",
"pictures/cake7.png","pictures/cake8.png","pictures/cake9.png","pictures/cake10.png","pictures/cake11.png","pictures/cake12.png"];

function prepareCards(numberOfCards){
  var imagesToUse=images.slice(0,numberOfCards/2);
  var doubleImages=imagesToUse.concat(imagesToUse);
  mix(doubleImages);
  return doubleImages;
};

function mix(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

function flip(event){
  var element = event.currentTarget;
  if (element.className === "card flipped") {
    element.style.transform = "rotateY(180deg)";
    element.className="card visible";
    if(document.getElementsByClassName("card visible").length==2){
      var elms=document.getElementsByClassName("card visible");
      var pair1=elms[0].children[1].children[0].src;
      var pair2=elms[1].children[1].children[0].src;
      
      if(pair1==pair2){
        setTimeout(hide,1000,elms[1],elms[0]);


      }
      else{
        setTimeout(turnOver,1500,elms[1],elms[0]);

      }
    
    }
  }
  if (document.getElementsByClassName("card flipped").length==0) {
    setTimeout(endOfGame,1000);
  }
};

function hide(e1,e2){
  e1.className="card hidden";
  e2.className="card hidden";
}

function turnOver(pair1,pair2) { 
  pair1.style.transform = "rotateY(0deg)";
  pair1.className="card flipped";
  pair2.style.transform = "rotateY(0deg)";
  pair2.className="card flipped"; 
};

function endOfGame(){
  window.alert("Hurray!");
  location.reload();
};



function init(numberOfCards){
  var doubleImages= prepareCards(numberOfCards);
  closePopup();
  for(var i=0;i<numberOfCards;i++){
      var conDiv=document.createElement("div");
      conDiv.className="container";
      conDiv.id="container";

      var cardDiv=document.createElement("div");
      cardDiv.className="card flipped";
      cardDiv.onclick=flip;

      var backDiv=document.createElement("div");
      backDiv.className="back";
      var backImg=document.createElement("img");
      backImg.src="pictures/back.png";
      backDiv.appendChild(backImg);
      
      var frontDiv=document.createElement("div");
      frontDiv.className="front";
      var pic=document.createElement("img");
      pic.src=doubleImages[i];
      frontDiv.appendChild(pic);

      cardDiv.appendChild(backDiv);
      cardDiv.appendChild(frontDiv);

      conDiv.appendChild(cardDiv);
      document.body.appendChild(conDiv);
  }
};
        
function popupMassage(){
  var popup=document.getElementsByClassName("popup");
  popup[0].className="popup active";
};

function closePopup(){
  var popup=document.getElementsByClassName("popup active");
  popup[0].className="popup";
  var overlay=document.getElementById("overlay");
  overlay.className="";
}

function start(){
  setTimeout(popupMassage,2000);
};
