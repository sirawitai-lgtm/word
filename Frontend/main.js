const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
        // 1. เช็คว่าตอนนี้เป็น type อะไรอยู่?
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    
        // 2. สลับ type นั้นซะ
        passwordField.setAttribute('type', type);
    
        // 3. สลับรูปไอคอน (จากรูปตาธรรมดา <-> ตาที่มีขีดฆ่า)
        this.classList.toggle('fa-eye-slash');
    })

const submitData = async () => {
    let usernameLOG = document.getElementById('Username');
    let passwordLOG = document.getElementById('password');

        const usernameValue = usernameLOG.value;
        const passwordValue = passwordLOG.value;

        if(usernameValue === "" || passwordValue === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }

    const userData = {
        Username: usernameValue,
        Password: passwordValue
    };


try{
    console.log('submitData', userData);
    const response = await axios.post('http://localhost:8300/loginPOST', userData);
    alert("บันทึกข้อมูลเข้าตาราง login สำเร็จ!");
    window.location.reload();
    console.log('Response:', response.data);
}catch (error) {
    console.error('เกิดข้อผิดพลาด:', error);
    alert("ไม่สามารถบันทึกข้อมูลได้: " + (error.response?.data?.message || error.message));
}
}

   