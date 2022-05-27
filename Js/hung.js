console.log(cookieStore.get("cookie1").then(function(data){
	console.log("data: ",data.value);
}))
function getID(callback){
    cookieStore.get("cookie1").then(callback)
}
function render(data){
    console.log("abc:",data.value);
}
function start(){
    getID(render);
}
start();
let data = `{"address":"Xóm 3, Thôn Đồng Chầm, Xã Tiên Dược, Huyện Sóc Sơn, Thành phố Hà Nội, Việt Nam","company_name":"AIFVINA CO., LTD","email":"infor.aifvina.com","head_title":"Rostek","phone":"Phone: (+84)818598088","software_name":"Giám sát hiệu suất tổng thể","web":"https://quanlynhamaythongminh.com"}`
console.log(JSON.parse(data));
let hung = JSON.parse(data);
console.log(typeof hung);
console.log(Object.keys(hung).length);
function test(){
    let ulCheck = document.querySelector(".ul-check");
    let htmls = Object.keys(hung).map(function(key,value){
        return `
        <li>${key}: ${hung[key]}</li>
        `
    })
    ulCheck.innerHTML = htmls.join('');
}
test();