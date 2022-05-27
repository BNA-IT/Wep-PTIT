async function start(){
    await getAllDetailCinema(rederDetailCinema);
    getID(dataID);
}
start();
async function getAllDetailCinema(callback){
    let api = "http://localhost:3000/detailCinema"
    fetch(api)
        .then( await function(response){
            return response.json();
        })
        .then(callback)
}
function getID(callback){
    cookieStore.get("cookie1").then(callback)
}
let IDCheck;
function dataID(data){
    console.log(data.value);
    IDCheck = data.value;
}
function rederDetailCinema(detailCinemas){
    let detail = document.querySelector(".detail-cinema");
    let htmls = detailCinemas.map((detailCinema) =>{
        console.log("abcd: ",IDCheck);
        console.log("hng: ",detailCinema.phut);
        if(detailCinema.id == IDCheck){
            return`
                <div style="display: flex; width: 100%;">
                    <div class="video-cinema">${detailCinema.linkTrailer}</div>
                    <div class="title-cinema">
                        <h2>${detailCinema.tenPhim}</h2>
                        <p><span>Thời gian: </span>${detailCinema.phut}</p>
                        <p><span>Nhà sản xuất: </span>${detailCinema.nhaSanXuat}</p>
                        <p><span>Đạo diễn: </span>${detailCinema.daoDien}</p>
                        <p><span>Quốc gia: </span>${detailCinema.quocGia}</p>
                        <p><span>Thể loại: </span>${detailCinema.theLoai}</p>
                        <p><span>Diễn viên: </span>${detailCinema.dienVien}</p>
                        <p><span>Ngày khởi chiếu: </span>${detailCinema.ngayKhoiChieu}</p>
                        <button><i class="fa-solid fa-ticket"></i> MUA VÉ</button>
                    </div>
                </div>
                <h3>Nội dung phim</h3>
        <div class="noi-dung-phim">
            <p>Lỡ tay làm phép khiến đa vũ trụ nảy sinh vấn đề ở Spider-Man: No Way Home, Doctor
Strange “trả nghiệp” thế nào trong Doctor Strange In The Multiverse Of Madness?
Có thể nói, chưa bao giờ Stephen Strange phải đối mặt với nhiều mối nguy như hiện tại. “Scarlet Witch” Wanda Maximoff tẩy não cả thị trấn (WandaVision),
Loki và Sylvie quậy tung Cơ quan quản lí phương sai thời gian (Loki) và đỉnh điểm là điều ước thay đổi quá nhiều lần của Spider-Man Peter Parker khiến mọi
thứ vô cùng hỗn loạn. Cố gắng giải quyết vấn đề, Stephen Strange tìm đến Wanda, nhờ cô giúp đỡ. Tuy nhiên, nữ phù thủy vừa trải qua nỗi đau mất đi những người
thân yêu cộng thêm tâm tính bất ổn có phải là cộng sự thích hợp? Wanda đáng thương sẽ thành phản diện ở phần này? Người bạn cũ Mordo nay đã quay lưng và trở thành
kẻ thù không đội trời chung với  Strange quay trở lại. Gần như chắc chắn, hắn là kẻ ngáng đường. Chưa dừng lại ở đó, một phiên bản hắc ám của Doctor Strange – mạnh
hơn và điên cuồng hơn cũng góp mặt. Gã đến từ đâu và mục đích của gã là gì? Strange hắc ám này là Strange Supreme từng khuấy đảo series What If…? Bi đát hơn, cô người
yêu Christine của Strange sắp bước vào lễ đường mà chú rể chẳng phải là anh. Điểm sáng hiếm hoi là phù thủy tối thượng Wong vẫn sát cánh bên Strange. Ngoài ra, America
Chavez sẽ xuất hiện. Cô bé được dự đoán tham gia nhóm Young Avengers cùng Yelena, Kate Bishop và Spider-Man. Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn do Sam Raimi
ngồi ghế chỉ đạo. Vị đạo diễn lừng danh này chính là người cầm trịch 3 phần Spider-Man kinh điển mà Tobey Maguire đóng chính. Phim quy tụ dàn diễn viên hùng hậu Benedict
Cumberbatch, Elizabeth Olsen, Rachel McAdams, Chiwetel Ejiofor, Benedict Wong, Michael Stuhlbarg, Xochitl Gomez… Sau cú lừa “Tobey Maguire và Andrew Garfiled không tham gia
Spider-Man: No Way Home”, danh sách diễn viên “hình như” sẽ cameo Doctor Strange In The Multiverse Of Madness quá khủng. Các nhân vật thuộc nhóm Dị Nhân, Deadpool và Bộ Tứ
Siêu Đẳng đều được gọi tên. Loki, Sylvie và Kang (Loki) cùng Người Nhện Tobey Maguire cũng có phần. Trailer mới Doctor Strange In The Multiverse Of Madness hé lộ một nhân vật
bí ẩn dường như là giáo sư X phiên bản già Patrick Stewart. Cả giáo sư X phiên bản trẻ (James McAvoy) và Jean Grey (Sophie Turner) đều có tin xuất hiện ở phim trường Phù Thủy
Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn. Đặc biệt nhất là lời đồn không tưởng về việc Tom Cruise sẽ trở thành Iron Man mới đang lan truyền rộng rãi. Phim mới Doctor Strange In The
Multiverse Of Madness dự kiến ra rạp chiếu phim từ 05.2022.
            </p>
        </div>
            `
        }
    })
    detail.innerHTML = htmls.join('');
}