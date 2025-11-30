// ================== CONFIG ==================
const startDate = new Date("2025-12-01");

const daysContent = [
    {img: "images/song1.png", text: "จะ 9 เดือนละ ที่เองบอกว่าเองชอบเขาเหมือนกัน ขอบคุณนะนานา 🥰"},
    {img: "images/song2.png", text: "เพลงนี้เขาเคยเอาลงโน้ตด้วย ตอนนั้นเองจะเห็นหรือเปล่านะะ 👀"},
    {img: "images/song3.png", text: "เราเคยได้นั่งใกล้กันตอนเรียนคอม เลยได้คุยกันเยอะเลย 😁"},
    {img: "images/song4.png", text: "เขาเริ่มชอบเองตั้งแต่ประมาณป.6 เทอม 2 เลยมั้ง 😅"},
    {img: "images/song5.png", text: "ตอนกีฬาสีที่เองเต้น hot2hot เขาชอบมากเลยนะ เสียดายไม่ได้ดูชัดๆ 😔"},
    {img: "images/song6.png", text: "ตอนเป็นพี่เลี้ยงปรับพื้นฐาน เราได้อยู่กลุ่มติดกันเฉยเลย โชคดีมากก 🍀"},
    {img: "images/song7.png", text: "เขาชอบตอนที่มีคอนเสิร์ตที่โรงเรียน ละเราไปดูด้วยกันมากเลยย 🥰"},
    {img: "images/song8.png", text: "เห็นว่าเองก็ชอบสีฟ้าพาสเทล เขาเลยเลือก background เป็นสีนี้ 📘"},
    {img: "images/song9.png", text: "จริงๆ โปรเจกต์นี้เขาได้ไอเดียจากของขวัญวันเกิดที่เองให้เขานะเนี่ย 😊"},
    {img: "images/song10.png", text: "เองชอบกินไอติมใช่มั้ย ว่างๆเดี๋ยวไปกินกันอีก 🤩"},
    {img: "images/song11.png", text: "เขาไม่คิดว่าจะมีคนใช้นิ้วนางเขียนเหมือนเขาเลยนะเนี่ย 😅"},
    {img: "images/song12.png", text: "เวลาเขาเล่นฟิตเนสละเจอเครื่องยากๆ เองเป็นแรงขับเคลื่อนเขาเลยนะ 😉"},
    {img: "images/song13.png", text: "เพลงนี้เขาชอบมากก เพลงมันไวบ์ดีมากเลยย 🎄🎅"},
    {img: "images/song14.png", text: "อย่าลืมยิ้มเยอะๆนะ 😊"},
    {img: "images/song15.png", text: "โชคดีมากเลย ที่เราชอบอะไรหลายๆอย่างเหมือนกัน จะได้คุยกันเข้าใจ 😁"},
    {img: "images/song16.png", text: "ถ้ามีโอกาส ชวนเพื่อนๆไปดูหนังสักอย่างกันอีกมะะ 🤩"},
    {img: "images/song17.png", text: "เองเคยบอกว่าเองชอบกินสตรอว์เบอร์รี่ด้วยย 🍓"},
    {img: "images/song18.png", text: "ตุ๊กตาที่เองให้เขาตอนวันเกิด เขาเก็บไว้ในตู้อย่างดีเลยย 😉"},
    {img: "images/song19.png", text: "เขาชอบดูเองเต้นมากเลยนะ ไม่ต้องห่วงนะว่าจะไม่มีคนดู มีเขาดูแน่ๆคนนึง 😍"},
    {img: "images/song20.png", text: "เพลงนี้เป็นในเพลงที่เขาเปิดสุ่มละชอบมากกก 🥰"},
    {img: "images/song21.png", text: "เพลงนี้ท่อนเปิดน่ารักมากก คนคิดเก่งจัด เขาดีใจที่ปีนี้ได้ใช้เพลงกับเองนี้นะ 🎆"},
    {img: "images/song22.png", text: "เสียดายมากเลย ที่เราถ่าย photobooth ตอนไปมทส.ไม่ทัน หวังว่าจะมีโอกาสได้ถ่ายนะ 😊"},
    {img: "images/song23.png", text: "หลังจากที่เขามาตาม tpop เขาชอบเพลงนี้มากเลยย 🤩"},
    {img: "images/song24.png", text: "ปกติ advent calendar เขาหยุดกันวันนี้ แต่พอดีเขามีเรื่องอยากบอกอีกเยอะเลยเพิ่มวัน 🤩"},
    {img: "images/song25.png", text: "เข้าสู่ช่วงเทศกาลที่เขาชอบที่สุดละ คือมันบรรยากาศที่ดีมากเลยอะ 😁"},
    {img: "images/song26.png", text: "เขารู้ว่าถ้าติดปัญหาอะไร เองก็จะพยายามจัดการเองอยู่ละ แต่ถ้าแก้ไม่ได้ก็ให้เขาช่วยได้เสมอนะ ❤️"},
    {img: "images/song27.png", text: "ปีหน้าก็ต้องสอบเข้าม.4 แล้ว เรามาเตรียมตัวไปด้วยกันเนอะะ 🎯"},
    {img: "images/song28.png", text: "ตอนเราไปเดินงานช้างด้วยกันสนุกมากเลย ได้นั่งดูเองระบายสีด้วย คุ้มกับที่เดินมาจากรร. 😍"},
    {img: "images/song29.png", text: "นานาเป็นแรงสำคัญที่ทำให้เขาอยากพัฒนาตัวเองเลยนะ ขอบคุณมากๆนะค้าบ 😁"},
    {img: "images/song30.png", text: "พรุ่งนี้เป็นวันสุดท้ายของปีแล้วเหรอเนี่ยย 🙀"},
    {img: "images/song31.png", text: "ขอบคุณที่อยู่ข้ามปีไปด้วยกันนะ ค่อยๆปรับกันไปเนอะ 🥰"},
];

const totalDays = 31;
// ============================================

// Generate calendar
const calendarEl = document.querySelector('.calendar');

for(let i=1; i<=totalDays; i++){
    const dayEl = document.createElement('div');
    dayEl.classList.add('day');
    dayEl.dataset.day = i;

    dayEl.innerHTML = `
        <div class="day-number">${i}</div>
        <div class="day-content">
            <img src="${daysContent[i-1]?.img || 'images/placeholder.jpg'}" alt="Day ${i}">
            <p>${daysContent[i-1]?.text || "Surprise!"}</p>
        </div>
    `;

    calendarEl.appendChild(dayEl);
}

// Auto open days based on current date
function updateCalendar() {
    const now = new Date();
    const diffDays = Math.floor((now - startDate) / (1000*60*60*24)) + 1;

    document.querySelectorAll('.day').forEach(day => {
        const dayNumber = parseInt(day.dataset.day);
        if(dayNumber <= diffDays){
            day.classList.add('opened');
        }
    });
}

document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', () => {
        if(day.classList.contains('opened')) return;
        const dayNumber = parseInt(day.dataset.day);
        const now = new Date();
        const diffDays = Math.floor((now - startDate) / (1000*60*60*24)) + 1;

        if(dayNumber <= diffDays){
            // already openable day
            day.classList.add('opened');
        } else {
            // locked day → shake
            day.classList.add('shake');
            setTimeout(() => {
                day.classList.remove('shake');
            }, 500); // matches animation duration
        }
    });
});

updateCalendar();

// ================== Snowflakes ==================
const snowCount = 150;

for (let i = 0; i < snowCount; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');

    const size = Math.random() * 7 + 5;
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;

    flake.style.left = `${Math.random() * window.innerWidth}px`;
    flake.style.opacity = Math.random() * 0.7 + 0.3;
    flake.style.filter = `blur(${Math.random() * 2}px)`;

    document.body.appendChild(flake);

    const fallDuration = Math.random() * 10 + 5;
    const horizontalDrift = Math.random() * 100 - 50;

    flake.animate([
        { transform: `translate(0, 0)` },
        { transform: `translate(${horizontalDrift}px, ${window.innerHeight + 50}px)` }
    ], {
        duration: fallDuration * 1000,
        iterations: Infinity,
        easing: 'linear',
        delay: Math.random() * 5000
    });
}

// Initial update
updateCalendar();

// Refresh calendar every hour to catch midnight
setInterval(updateCalendar, 1000 * 60 * 60);
