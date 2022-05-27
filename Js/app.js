
// xử lý fake api
let api = "http://localhost:3000/profile";

// fetch(api)
// 	.then(function(response){
// 		return response.json()
// 	}). then(function(data){
// 		// console.log(data);
// 	})
// show data
function getAllData(callback){
	fetch(api)
	.then(function(response){
		return response.json()
	}). then(callback)
}
function data(){
	getAllData(rederData);
}
// function rederData(datas){
// 	let listItem = document.querySelector("#show-data");
// 	let htmls = datas.map(function(data){
// 		return `
// 			<h2>${data.title}</h2>
// 		`;
// 	});
// 	listItem.innerHTML = htmls.join('');
// }
// data();
// console.log(cookieStore.get("cookie1").then(function(data){
// 	console.log("data: ",data);
// }))
sessionStorage.setItem('test', "haha")
		