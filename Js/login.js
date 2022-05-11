var login_form = document.querySelector('.login_form')
var dn = document.querySelector('.dn')
var dk = document.querySelector('.dk')
var form_dn = `<span class="block">Email</span>
                <input type="text" name="email" id="email" placeholder="Email" class="block">
                <span class="block">Mật khẩu</span>
                <input type="text" name="passWord" id="passWord" placeholder="Mật khẩu" class="block">
                <a href="#">Quên mật khẩu?</a>
                <button onclick="testFunction()">Đăng nhập</button>`;
var form_dk = `
                <div class="info">
                    <span>
                            Họ tên
                    </span>
                    <input type="text" name="name" id="name" placeholder="Họ tên">
                </div>
                <div class="info">
                    <span>
                            Email
                    </span>
                    <input type="text" name="email" id="email" placeholder="Email">
                </div>
                <div class="info">
                    <span>
                            Mật khẩu
                    </span>
                    <input type="text" name="passWord" id="passWord" placeholder="Mật khẩu">
                </div>
                <div class="info">
                    <span>
                            Xác nhận lại mật khẩu
                    </span>
                    <input type="text" name="re-passWord" id="re-passWord" placeholder="Xác nhận lại mật khẩu">
                </div> 
                <button onclick="testFunction()">Đăng ký</button>           
            `;
dn.addEventListener('click', function(){
    var active = document.querySelector('.active')
    active.classList.remove('active')
    dn.classList.add('active')
    login_form.classList.add('form')
    login_form.classList.remove('form1')
    login_form.innerHTML = form_dn

    
})
dk.addEventListener('click', function(){
    var active = document.querySelector('.active')
    active.classList.remove('active')
    dk.classList.add('active')
    login_form.classList.add('form1')
    login_form.classList.remove('form')
    login_form.innerHTML = form_dk;
})
