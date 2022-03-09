c = 0;
for (let i=0;i>0;i++){
    function todo(){
        a=document.getElementById("item").value;
        a=document.getElementById("out").innerHTML+`<li id=${c}> ${a} <button onclick='del(${c})'>DEL</button> </li> `;
        document.getElementById("out").innerHTML=a;
        document.getElementById("item").value="";
        c+= 1;
    }
}

function reset(){
    document.getElementById("out").innerText="";
}

function del(c){
    document.getElementById(c).remove();
}