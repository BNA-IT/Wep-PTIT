
async function start(){
    await getAllCinema(rederCinema);
    menuCinema();
    checkIDCinema();
    gioChieuPhim();
    moTaiKhoan();
}
start();
async function getAllCinema(callback){
    let api = "http://localhost:3000/cinema";
    await fetch(api)
        .then(await function (reponse){
            return reponse.json();
        })
        .then(callback)
}

// hàm gọi api ngày chiếu theo phim
async function getAllPhimNgayChieu(callback,phim,ngay){
    let api = `http://localhost:3000/phim=${phim}&ngay=${ngay}`;
    console.log(phim,ngay);
    await fetch(api)
        .then(await function (reponse){
            return reponse.json();
        })
        .then(callback)
        .catch((error) => {
            console.error('Error:', error);
          });
}
function checkIDCinema(){
    let listCinema = document.querySelectorAll(".cinema");
    console.log("hhh",listCinema);
    listCinema.forEach((cinema)=>{ 
        cinema.addEventListener("click",function(){
            console.log("gggg: ",cinema.getAttribute("id"));
            cookieStore.set({
                name: "cookie1",
                value: `${cinema.getAttribute("id")}`,
                
              })
              .then(
                function() {
                  console.log("It worked!");
                },
                function(reason) {
                  console.error("It failed: ", reason);
                }
              );
        })
    })
}
// hàm lấy ngày theo chuẩn
function layNgayTheoChuan(){
    let arr = new Array();
    const today = new Date()
    const yesterday = new Date(today)
    let nam = today.getFullYear();
    let ngay = today.getDate();
    let thang = today.getMonth() + 1;
    if(thang < 10){
        thang = "0" + thang
    }
    let result = nam + "-" +thang + "-"+ngay;
    console.log(yesterday.toDateString());
    arr.push(result)
    for(var i = 1; i <= 5; i++){
        yesterday.setDate(yesterday.getDate() + 1);
        let ngay2 = yesterday.getDate();
        let thang2 = yesterday.getMonth() + 1;
        if(thang2 < 10){
            thang2 = "0" + thang2
        }
        let nam2 = yesterday.getFullYear();
        result = nam2 + "-" +thang2 + "-"+ngay2;
        arr.push(result)
    }
    // console.log(arr);
    return arr;
}
// hàm lấy ngày hôm nay
function LayNgay(){
    let arr = new Array();
    const today = new Date()
    const yesterday = new Date(today)
    let ngay = today.getDate();
    let thang = today.getMonth() + 1;
    if(thang < 10){
        thang = "0" + thang
    }
    let thu;
    var current_day = today.getDay();
    switch (current_day) {
    case 0:
        thu = "CN";
        break;
    case 1:
        thu = "T2";
        break;
    case 2:
        thu = "T3";
        break;
    case 3:
        thu = "T4";
        break;
    case 4:
        thu = "T5";
        break;
    case 5:
        thu = "T6";
        break;
    case 6:
        thu = "T7";
    }
    let result = ngay + "/" + thang + "-" + thu;
    console.log(yesterday.toDateString());
    arr.push(result)
    for(var i = 1; i <= 5; i++){
        yesterday.setDate(yesterday.getDate() + 1);
        let ngay2 = yesterday.getDate();
        let thang2 = yesterday.getMonth() + 1;
        if(thang2 < 10){
            thang2 = "0" + thang2
        }
        let thu2;
        var current_day2 = yesterday.getDay();
        switch (current_day2) {
        case 0:
            thu2 = "CN";
            break;
        case 1:
            thu2 = "T2";
            break;
        case 2:
            thu2 = "T3";
            break;
        case 3:
            thu2 = "T4";
            break;
        case 4:
            thu2 = "T5";
            break;
        case 5:
            thu2 = "T6";
            break;
        case 6:
            thu2 = "T7";
        }
        result = ngay2 + "/" + thang2 + "-" + thu2;
        arr.push(result)
    }
    // console.log(arr);
    return arr;
}
function menuCinema(){
    const cinemaBtns = document.querySelectorAll('.cinema-menu button')
    const cinemaList = document.querySelectorAll('.cinema')
    console.log(cinemaList);
    cinemaBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const type = e.target.getAttribute('type-cinema')

            // remove and set active fpr button
            document
                .querySelector('.cinema-menu button.active')
                .classList.remove('active')
            e.target.classList.add('active')

            // filter elements
            cinemaList.forEach((item) => {
                if (type == 'all' || item.getAttribute('type-cinema') == type)
                    item.classList.remove('hide')
                else item.classList.add('hide')
            })
        })
    })
}
function moTaiKhoan(){
    document.querySelector(".xin-chao").addEventListener("click",function(){
        document.querySelector(".popup-taikhoan").classList.toggle("show");
    })
}
function gioChieuPhim(){
    function moLichChieu(){
        renderNgayThang();
        document.querySelectorAll(".muaVe").forEach((ve)=>{
            ve.addEventListener("click",function(){
                // document.querySelector(".ten-phim").innerHTML = `
                // <h1>LỊCH CHIẾU - ${sessionStorage.getItem("tenPhim")}</h1>
                `
                // document.querySelector(".ten-phim").innerHTML = `
                // <h1>LỊCH CHIẾU - ${ve.getAttribute("tenPhim")}<h1>
                // `
                console.log("hung day: ", ve.getAttribute("value"));
                sessionStorage.setItem("IDPhim",ve.getAttribute("value"))
                // sessionStorage.setItem("tenPhim",ve.getAttribute("tenPhim"))
                console.log("bam vo day");
                document.querySelector(".bang-chon-gio").style.display = "block";
                document.querySelector(".lop-phu").style.display = "block";
            })
        })
        document.querySelector(".lop-phu").addEventListener("click",function(){
            document.querySelector(".bang-chon-gio").style.display = "none";
            document.querySelector(".lop-phu").style.display = "none";
        })
    }
   async function loadLanDau(){
        let arrNgayChuan = layNgayTheoChuan();
        type = arrNgayChuan[0] // bằng ngày đầu tiên
        var IDPhimSuatChieu = sessionStorage.getItem("IDPhim");
        await getAllPhimNgayChieu(renderSuatChieu,IDPhimSuatChieu,arrNgayChuan[0]);
        var gioChieu = document.querySelectorAll('.gio-chieu')
        console.log(gioChieu);
        gioChieu.forEach((item) => {
            // console.log("my check: ",type, item.getAttribute("type-gio-chieu"));
            if (type == item.getAttribute("type-gio-chieu"))
                item.classList.remove('hide')
            else item.classList.add('hide')
        })
    }
    function dongLichChieu(){
        document.querySelector(".closebtn").addEventListener("click",function(){
            console.log("aaaaaa");
            document.querySelector(".bang-chon-gio").style.display = "none";
            document.querySelector(".lop-phu").style.display = "none";
        })
    }
    // const gioChieu = document.querySelectorAll('.gio-chieu')
    // console.log(gioChieu);
    let type = "";
    moLichChieu();
    const gioChieuBtn = document.querySelectorAll('.gio-chieu-menu button')
    dongLichChieu();
    loadLanDau();

    console.log(gioChieuBtn);
    gioChieuBtn.forEach((btn) => {
        btn.addEventListener('click',async (e) => {
            // console.log("hung check: ",sessionStorage.getItem("IDPhim"), btn.innerHTML);
            var IDPhimSuatChieu = sessionStorage.getItem("IDPhim");
            var ngaySuatChieu = btn.getAttribute("value");
            await getAllPhimNgayChieu(renderSuatChieu,IDPhimSuatChieu,ngaySuatChieu);
            var gioChieu = document.querySelectorAll('.gio-chieu')
            type = e.target.getAttribute('type-gio-chieu')
            console.log(type);
            // remove and set active fpr button
            document
                .querySelector('.gio-chieu-menu button.active-gio-chieu')
                .classList.remove('active-gio-chieu')
            e.target.classList.add('active-gio-chieu')

            // filter elements
            console.log(gioChieu);
            gioChieu.forEach((item) => {
                console.log(type);
                console.log("my check: ",type, item.getAttribute("type-gio-chieu"));
                if (item.getAttribute('type-gio-chieu') == type)
                    item.classList.remove('hide')
                else item.classList.add('hide')
            })
        })
    })
}
// hiển thị ra các suất chiếu theo ngày
function renderSuatChieu(suatchieus){
    let listSuatChieu = document.querySelector(".gio-chieu-list");
    let htmls = suatchieus.map( function(suatchieu){
        return `
            <a href = "./muaVe.html" style = " color: #000000; text-decoration: none;"> <div class="gio-chieu hide" type-gio-chieu = "${suatchieu.ngayChieu}" value = "${suatchieu.idSuatChieu}">${suatchieu.thoiGianBD}</div> </a>
        `
    })
    listSuatChieu.innerHTML = htmls.join('')
}
// hiển thị ra ngày tháng của hôm nay và 4 ngày sau
function renderNgayThang(){
    let listNgay  = document.querySelector(".gio-chieu-menu");
    let arrNgay = LayNgay();
    let arrNgayChuan = layNgayTheoChuan();
    listNgay.innerHTML = `
        <div  class="closebtn">&times;</div>
        <button class="active-gio-chieu" type-gio-chieu="${arrNgayChuan[0]}" value = ${arrNgayChuan[0]}>${arrNgay[0]}</button>
        <button type-gio-chieu="${arrNgayChuan[1]}" value = ${arrNgayChuan[1]}>${arrNgay[1]}</button>
        <button type-gio-chieu="${arrNgayChuan[2]}" value = ${arrNgayChuan[2]}>${arrNgay[2]}</button>
        <button type-gio-chieu="${arrNgayChuan[3]}" value = ${arrNgayChuan[3]}>${arrNgay[3]}</button>
        <button type-gio-chieu="${arrNgayChuan[4]}" value = ${arrNgayChuan[4]}>${arrNgay[4]}</button>
        <button type-gio-chieu="${arrNgayChuan[5]}" value = ${arrNgayChuan[5]}>${arrNgay[5]}</button>
    `
}
// let son = ["11:00", "15:00", "22:00", "23:55"];
function rederCinema(cinemas){
    let listCinema = document.querySelector(".cinema-list");
    // function test(){
    //     let hung = document.querySelector(".hung");
    //     console.log(hung);
    //     let tada = son.map(function (data){
    //        return  `
    //             <li>${data}</li>
    //        `
    //     })
    //     hung.innerHTML = tada.join('');
    // };
    let htmls = cinemas.map( (cinema)=> {
        return `
            <div class="cinema" type-cinema = "${cinema.hienTrang}" id = "${cinema.id}" ">
                <div class="cinema-item" >
                    <a href = "./detailCinema.html">
                        <img src="${cinema.anh}" alt="">
                    </a>
                </div>
                <h4 class="tenPhim">${String(cinema.tenPhim)}</h4>
                <p><span>Thể loại: </span>${cinema.theLoai}</p>
                <p><span>Thời lượng: </span>${cinema.phut}</p>
                <button class = "muaVe" value = ${cinema.id} ><i class="fa-solid fa-ticket"></i> MUA VÉ</button>
                
    
                
            </div>
        `
    })
    listCinema.innerHTML = htmls.join('');
    let checkCinema = document.querySelectorAll(".cinema");
    checkCinema.forEach((btn=>{
        btn.addEventListener("click",function(e){
            console.log(btn.querySelector(".tenPhim").innerHTML);
            sessionStorage.setItem("tenPhim",btn.querySelector(".tenPhim").innerHTML)
            document.querySelector(".ten-phim").innerHTML = `
            <h1>LỊCH CHIẾU - ${sessionStorage.getItem("tenPhim")}</h1>
            `
        })
    }))
    // test();

}