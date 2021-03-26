var enrollerButton = document.getElementById('enroller-button');
var enrollerOpenCounter = 0;
if(enrollerButton){
  enrollerButton.onclick = function(){
    var enrollerClient = this.dataset.id;
    if(enrollerOpenCounter > 0){
      return false;
    }
    var displayHeight = document.documentElement.clientHeight;
    var displayWidthReal = document.documentElement.clientWidth;
    
    var displayWidth = displayWidthReal <= 500?displayWidthReal:"500";
    if(+displayWidthReal < 2000){
        window.location.href = 'https://enroller.ru/service?id='+ enrollerClient +"&back_url=" +window.location.href;
    }else{
        var createEnrollerContainer = document.createElement('div');
        createEnrollerContainer.style.backgroundColor = '#DBE5EA';
        createEnrollerContainer.style.fontFamily = 'Arial';
        createEnrollerContainer.innerHTML = 'Enroller';
        createEnrollerContainer.style.fontSize = '36px';
        createEnrollerContainer.style.fontWeight = '700';
        createEnrollerContainer.style.lineHeight = '200px';
        createEnrollerContainer.style.textAlign = 'center';
        createEnrollerContainer.classList.add('enroller--container');
        createEnrollerContainer.style.position = 'fixed';
        createEnrollerContainer.style.left = '0';
        createEnrollerContainer.style.top = '0';
        createEnrollerContainer.style.height = "100vh";
        createEnrollerContainer.style.width = displayWidth +"px";
        createEnrollerContainer.style.zIndex = '999999999999';

        var createEnrollerIFrame = document.createElement('iframe');
        createEnrollerIFrame.setAttribute('src', 'https://enroller.ru/service?id='+ enrollerClient);
        createEnrollerIFrame.setAttribute('width', '100%');
        createEnrollerIFrame.setAttribute('height', '100%');
        createEnrollerIFrame.style.position = 'absolute';
        createEnrollerIFrame.style.left = '0';
        createEnrollerIFrame.style.top = '0';
        createEnrollerIFrame.style.border = 'none';

        var createEnrollerClose = document.createElement('div');
        createEnrollerClose.classList.add('enroller--close-button');
        createEnrollerClose.style.position = 'absolute';
        createEnrollerClose.style.left = '20px';
        createEnrollerClose.style.top = '9px';
        createEnrollerClose.style.zIndex = '9999999999999';
        createEnrollerClose.innerHTML = '&#215;';
        createEnrollerClose.style.fontSize = '26px';
        createEnrollerClose.style.width = '32px';
        createEnrollerClose.style.height = '32px';
        createEnrollerClose.style.textAlign = 'center';
        createEnrollerClose.style.lineHeight = '32px';
        createEnrollerClose.style.fontWeight = 'bold';
        createEnrollerClose.style.cursor = 'pointer';
        createEnrollerClose.style.borderRadius = '20px';
        createEnrollerClose.style.backgroundColor = '#F97979';
        createEnrollerClose.style.color = '#3c4959';


        createEnrollerContainer.append(createEnrollerIFrame);
        createEnrollerContainer.append(createEnrollerClose);
        enrollerOpenCounter++;

        document.getElementsByTagName('body')[0].append(createEnrollerContainer);
        this.style.display = 'none';
        enrollerUpdateCloseListen();
    }
  }
  function enrollerUpdateCloseListen(){
    document.getElementsByClassName('enroller--close-button')[0].onclick = function(){
      document.getElementsByClassName('enroller--container')[0].remove();
      enrollerButton.style.display = 'block';
      enrollerOpenCounter = 0;
    }
  }
}
