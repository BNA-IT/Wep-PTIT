async function start(){
    await getAllCinema(rederCinema);
    menuCinema();
    checkIDCinema();
    gioChieuPhim();
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
function gioChieuPhim(){
    const cinemaBtns = document.querySelectorAll('.gio-chieu-menu button')
    // const cinemaList = document.querySelectorAll('.cinema')
    // console.log(cinemaList);
    // cinemaBtns.forEach((btn) => {
    //     btn.addEventListener('click', (e) => {
    //         const type = e.target.getAttribute('type-cinema')

    //         // remove and set active fpr button
    //         document
    //             .querySelector('.cinema-menu button.active')
    //             .classList.remove('active')
    //         e.target.classList.add('active')

    //         // filter elements
    //         cinemaList.forEach((item) => {
    //             if (type == 'all' || item.getAttribute('type-cinema') == type)
    //                 item.classList.remove('hide')
    //             else item.classList.add('hide')
    //         })
    //     })
    // })
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
                <h4>${cinema.tenPhim}</h4>
                <p><span>Thể loại: </span>${cinema.theLoai}</p>
                <p><span>Thời lượng: </span>${cinema.phut}</p>
                <button><i class="fa-solid fa-ticket" class = "muaVe"></i> MUA VÉ</button>
                
    
                
            </div>
        `
    })
    listCinema.innerHTML = htmls.join('');
    // test();

}