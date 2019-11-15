let load = false;
function circle(x,y){
  if(load == false){
  document.getElementsByClassName('text')[0].style.opacity = 0;
  load = true;
  return new Promise(function(done,error){
    let startX = 0,
    startY = 0,
    fps = 1000;
    setTimeout(function go(){
      if(startX == x+1 && startY == y+1){
        load = false;
        return done(document.getElementsByClassName('text')[0].style.opacity = 1);
      }
      else{
          document.getElementsByClassName('circle')[0].style.width = startX + 'px';
          document.getElementsByClassName('circle')[0].style.height = startY + 'px';
          startX++;
          startY++;
          setTimeout(go,1000/fps);
      }
    },1000/fps);
  });}
}
