let username = document.getElementById('username');
let password = document.getElementById('password');
let saveUsername = document.getElementById('checkbox1');
let savePassword = document.getElementById('checkbox2');
let cookie = document.cookie;
let usernameValue = '',
    passwordValue = '';

 
if(getCookie('username')){
    username.value = getCookie('username');
    saveUsername.checked = true;
}
if(getCookie('password')){
    password.value = getCookie('password');
    savePassword.checked = true
}
username.onblur = function(e){
    console.log(e.target.value)
    usernameValue = e.target.value;
}
password.onblur = function(e){
    console.log(e.target.value);
    passwordValue = e.target.value;
}

saveUsername.onchange = function(e){
    // console.log(e)
    if(e.target.checked){
        console.log('保存用户名字')
        setCookie('username', e.target.value, 1)
    }else{
        console.log('不保存用户名字')
    }
}
savePassword.onchange = function(e){
    if(e.target.value){
        setCookie('password', e.target.value, 1);
    }
}


function getCookie(name){
    let cookieList = cookie.split(';');
    for(let i = 0; i < cookieList.length; i++){
        let cookieItem = cookieList[i].split('=');
        if(cookieItem[0] === name){
            return cookieItem[1]
        }
    }
}
function setCookie(name, value, exprise){
    let date = new Date();
    date.setTime(date.getTime() + (exprise*24*60*60*1000));
    let expires = ';expires=' + date.toGMTString();
    cookie = cookie + ';' + name + '=' + value +  expires;
}
setCookie('age', 12, 1/24/60/10);

function clearCookie(){
    // let cookieList = cookie.split(';');
    // for(let i = 0; i < cookieList.length; i++){
    //     let cookieItem = cookieList[i].split('=');
    //     if(cookieItem[0] === name){
    //         cookie+= name+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT";'
    //         break;
    //     }
    // }
    cookie = ''
    // setCookie(name, '', -1)
}
//'http://localhost:3000/getUsers'
function ajaxGet(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET',url,true);
    // xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send();

}
function ajaxPost(url, data){
    var xmlHttp = new XMLHttpRequest();
  

}
var getUser = document.getElementById('getUsers');
getUser.onclick=function(){
    // ajaxGet();
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET','http://localhost:3000/getUsers', true);
    xmlHttp.setRequestHeader('Content-type','application/json');
    // var postData = JSON.stringify(data);
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
            var data = xmlHttp.responseText
            console.log(data);
        }
    }
    xmlHttp.send();
    // console.log(responseText)
    // var promise = new Promise(function(resolve, reject){

    // });
    // promise.then(function(res){

    // },function(err){

    // })
}

