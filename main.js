// main.js

// 1. อ้างอิง Element จาก HTML
const loginButton = document.getElementById('loginBtn');
const usernameInput = document.getElementById('Username');
const passwordInput = document.getElementById('password'); // สังเกตว่าใน html คุณใช้ p ตัวเล็ก

// 2. สร้างฟังก์ชันเมื่อมีการกดปุ่ม Login
loginButton.addEventListener('click', function() {
    
    // 3. ดึงค่า (Value) ที่ User พิมพ์เข้ามา
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    // เช็คเบื้องต้นว่าพิมพ์มาครบไหม (Validation)
    if(usernameValue === "" || passwordValue === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return; // จบการทำงาน ไม่ทำต่อ
    }

    // 4. เก็บข้อมูลลงตัวแปร Object (เตรียมส่งไปเช็ค MySQL)
    const userData = {
        user: usernameValue,
        pass: passwordValue
    };

    // --- ตรวจสอบค่าที่ได้ (ดูใน Console ของ Browser) ---
    console.log("ข้อมูลที่เก็บได้:", userData);

    // 5. ส่งข้อมูลไปที่ Backend เพื่อเช็คกับ MySQL (ตัวอย่างการใช้ Fetch API)
    // ตรงนี้คือจุดเชื่อมต่อไปยัง Database ครับ
    sendToBackend(userData);
});

// ฟังก์ชันจำลองการส่งข้อมูลไป Server
function sendToBackend(data) {
    // ในอนาคตคุณต้องเขียนโค้ดส่วนนี้เพื่อยิงไปที่ API ของคุณ
    // ตัวอย่างเช่น:
    /*
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if(result.status === 'ok') {
            alert('Login สำเร็จ!');
        } else {
            alert('Username หรือ Password ผิด');
        }
    })
    .catch(error => console.error('Error:', error));
    */
   
   alert(`เตรียมส่งข้อมูลของ: ${data.user} ไปตรวจสอบใน MySQL`);
}
// main.js (เพิ่มต่อจากโค้ดเดิม)

const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // 1. เช็คว่าตอนนี้เป็น type อะไรอยู่?
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    
    // 2. สลับ type นั้นซะ
    passwordField.setAttribute('type', type);
    
    // 3. สลับรูปไอคอน (จากรูปตาธรรมดา <-> ตาที่มีขีดฆ่า)
    this.classList.toggle('fa-eye-slash');
});