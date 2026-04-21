// ================= LOADER =================
window.addEventListener("load", () => {
document.getElementById("loader").style.display = "none";
});

// ================= SCROLL ANIMATION =================
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
elements.forEach(el => {
const pos = el.getBoundingClientRect().top;
const screen = window.innerHeight;

if (pos < screen - 100) {
el.classList.add("show");
}
});
});

// ================= DARK / LIGHT MODE =================
function toggleMode() {
document.body.classList.toggle("light");
}

// ================= CURSOR GLOW =================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
if(cursor){
cursor.style.top = e.clientY + "px";
cursor.style.left = e.clientX + "px";
}
});

// ================= CHATBOT =================
function openChat() {
const box = document.getElementById("chatBox");
box.style.display = (box.style.display === "block") ? "none" : "block";
}

function sendMsg() {
const input = document.getElementById("userInput");
const chat = document.getElementById("chatContent");

let userText = input.value.toLowerCase();
let reply = "";

// simple AI responses
if (userText.includes("outfit")) {
reply = "Try a minimal pastel outfit or oversized street style look ✨";
}
else if (userText.includes("summer")) {
reply = "Go for light fabrics like cotton and linen with bright colors ☀️";
}
else if (userText.includes("party")) {
reply = "A black dress or bold statement outfit would be perfect 🔥";
}
else {
reply = "Explore Glamora collections for the best fashion inspiration 💫";
}

chat.innerHTML += "<p><b>You:</b> " + input.value + "</p>";
chat.innerHTML += "<p><b>AI:</b> " + reply + "</p>";

input.value = "";
chat.scrollTop = chat.scrollHeight;
}

// ================= BACK TO TOP =================
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
if (document.documentElement.scrollTop > 200) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
};

topBtn.onclick = function () {
window.scrollTo({ top: 0, behavior: "smooth" });
};