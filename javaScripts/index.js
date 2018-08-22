let timer = null;
window.onload = function () {
    let topAnimation = document.getElementById('topAnimation');
    let topP = topAnimation.children;
    let num = 0;
   
    topP[0].setAttribute('class','index-top-p-animation')
    num ++;
    timer = setTimeout(function(){
        if(num === 0){
            topP[topP.length-1].removeAttribute('class');
            topP[num].setAttribute('class','index-top-p-animation');
        }else if(num === topP.length){
            num = 0;
            topP[topP.length-1].removeAttribute('class');
            topP[num].setAttribute('class','index-top-p-animation');
        }else{
            topP[num-1].removeAttribute('class');
            topP[num].setAttribute('class','index-top-p-animation');
        }
        num++;
        setTimeout(arguments.callee, 5000)
        
    },5000)
    
}

window.onunload = function(){
    clearTimeout(timer)
}



