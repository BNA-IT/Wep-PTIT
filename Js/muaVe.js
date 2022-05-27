async function start(){
    console.log("m");
    await getAllGhe(rederGhe);
    console.log("s");
    getID();
}
start(); 
async function getAllGhe(callback){
    console.log("t");
    let api = "http://localhost:3000/ghe"
    await fetch(api)
        .then(async function(response){
            return await response.json();
        })
        .then(callback)
}
function getID(){
    let hung = document.querySelectorAll(".ghe");
    let result = new Array();
    let kq = document.querySelector(".kq");
    console.log(hung);
    function xoa(arr,del){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == del){
                console.log("thay");
                arr.splice(i,1);
            }
        }
        console.log("aaa",arr);
    }
 
        hung.forEach((e,index) => {
            e.addEventListener("click",function(){
                console.log( e.getAttribute("value"));
                if(e.getAttribute("value") == "trong"){
                    e.classList.toggle("dachon")
                    if(e.classList.length > 1){
                        console.log("vvvv");
                        result.push(e.getAttribute("xa"));
                    }
                    else{
                        console.log("rrrr");
                        xoa(result,e.getAttribute("xa"));
                        console.log(result);
                    }
                }
                result.sort();
                console.log("aaaaa",result);
                console.log("bbbbb",result[0]);
                let s = "";
                for(let i = 0 ; i < result.length; i++){
                    if(result[i]){
                        s += result[i] + ", ";
                    }
                }
                kq.innerHTML = s;
            })
           
           
            
        });
}
let arr = new Array();
function dataID(data){
    console.log(data.value);
    IDCheck = data.value;
}
 function rederGhe( ghes){
    let listGhe = document.querySelector(".list-ghe");
    console.log(ghes);
    let htmls =  ghes.map((ghe) =>{
        if(ghe.tinhTrang == "khongTrong"){
            return`
                <div class="ghe ${ghe.tinhTrang}" value = "${ghe.tinhTrang}"  xa = "${ghe.soGhe}" style="margin-top: 20px;"><div class="chinh"> ${ghe.soGhe}</div></div>
            `
        }
        return`
            <div class="ghe" value = "${ghe.tinhTrang}"  xa = "${ghe.soGhe}" style="margin-top: 20px;"><div class="chinh"> ${ghe.soGhe}</div></div>
        `
    })
    listGhe.innerHTML = htmls.join('');
}
