let password=document.querySelector("#password");
function passwordGenerator(){
    let str="1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength=8;
    let password="";

    for(let i=0;i<passwordLength;i++)
    {
        let randNumber=Math.floor(Math.random()*str.length);
        password+=str.substring(randNumber,randNumber+1);
    }
    document.querySelector("#password").value=password;
}

function copyPass(){
    let copyPassword=document.querySelector("#password");
    copyPassword.select();
    document.execCommand("copy");
}