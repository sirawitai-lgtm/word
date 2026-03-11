const submitData = async () => {
    let usernameLOG = document.getElementById('Username');
    let passwordLOG = document.getElementById('password');

        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;

        if(usernameValue === "" || passwordValue === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }

    const userData = {
        Username: usernameValue,
        Password: passwordValue
    };


    console.log('submitData', userData);
    const response = await axios.post('http://localhost:8300/logins', userData);
    alert("เพิ่มข้อมูลสำเร็จ!");
}

    togglePassword.addEventListener('click', function (e) {
        // 1. เช็คว่าตอนนี้เป็น type อะไรอยู่?
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    
        // 2. สลับ type นั้นซะ
        passwordField.setAttribute('type', type);
    
        // 3. สลับรูปไอคอน (จากรูปตาธรรมดา <-> ตาที่มีขีดฆ่า)
        this.classList.toggle('fa-eye-slash');
    });