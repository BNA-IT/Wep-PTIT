
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
        document.querySelectorAll(".muaVe").forEach((ve)=>{
            ve.addEventListener("click",function(){
                document.querySelector(".bang-chon-gio").style.display = "block";
                document.querySelector(".lop-phu").style.display = "block";
            })
        })
        document.querySelector(".lop-phu").addEventListener("click",function(){
            document.querySelector(".bang-chon-gio").style.display = "none";
            document.querySelector(".lop-phu").style.display = "none";
        })
    }
    function loadLanDau(){
        type = "test" // bằng ngày đầu tiên
        gioChieu.forEach((item) => {
            console.log(type);
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
    const gioChieu = document.querySelectorAll('.gio-chieu')
    const gioChieuBtn = document.querySelectorAll('.gio-chieu-menu button')
    console.log(gioChieu);
    let type = "";
    moLichChieu();
    dongLichChieu();
    loadLanDau();
    gioChieuBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            type = e.target.getAttribute('type-gio-chieu')
            console.log(type);
            // remove and set active fpr button
            document
                .querySelector('.gio-chieu-menu button.active-gio-chieu')
                .classList.remove('active-gio-chieu')
            e.target.classList.add('active-gio-chieu')

            // filter elements
            gioChieu.forEach((item) => {
                console.log(type);
                if (item.getAttribute('type-gio-chieu') == type)
                    item.classList.remove('hide')
                else item.classList.add('hide')
            })
        })
    })
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
    let htmls = cinemas.map( function(cinema){
        return `
            <div class="cinema" type-cinema = "${cinema.hienTrang}" id = "${cinema.id}" ">
                <div class="cinema-item" >
                    <a href = "./detailCinema.html">
                        <img src="${cinema.anh}" alt="">
                    </a>
                </div>
                <h4>${String(cinema.tenPhim)}</h4>
                <p><span>Thể loại: </span>${cinema.theLoai}</p>
                <p><span>Thời lượng: </span>${cinema.phut}</p>
                <button class = "muaVe"><i class="fa-solid fa-ticket"></i> MUA VÉ</button>
                
    
                
            </div>
        `
    })
    listCinema.innerHTML = htmls.join('');
    // test();

}