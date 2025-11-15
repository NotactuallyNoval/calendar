// ================== CONFIG ==================
// Change this to your starting date (YYYY-MM-DD)
const startDate = new Date("2025-11-01");

// Customize content for each day (image, text, emoji)
const daysContent = [
    {img: "images/song1.png", text: "วันแรกของเดือน 🌞"},
    {img: "images/2.jpg", text: "You are amazing! ✨"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
    {img: "images/3.jpg", text: "Smile today 😘"},
];

const totalDays = 31;  // total calendar days
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

// Initial update
updateCalendar();

// Optional: open day when clicked if allowed
document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', () => {
        const dayNumber = parseInt(day.dataset.day);
        const now = new Date();
        const diffDays = Math.floor((now - startDate) / (1000*60*60*24)) + 1;
        if(dayNumber <= diffDays){
            day.classList.toggle('opened');
        }
    });
});

// Refresh calendar every hour to catch midnight
setInterval(updateCalendar, 1000 * 60 * 60);
