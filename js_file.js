const passwordInput = document.getElementById("passwordInput");
const copyBtn = document.getElementById("copy-btn");
const rangeSlider = document.getElementById("range");
const sliderNumber = document.getElementById("slider-number");
const generateBtn = document.getElementById("generate-button");
const expiryTimer = document.getElementById("expiryTimer");
const copyFeedback = document.getElementById("copyFeedback");
const includeLower = document.getElementById("includeLower");
const includeUpper = document.getElementById("includeUpper");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

const generatePass = () => {
    let newpass = "";
    let all = "";

    if (includeLower.checked) all += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper.checked) all += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers.checked) all += "1234567890";
    if (includeSymbols.checked) all += "()[]<>&%@#";

    passwordInput.value = "🔧 Customize your settings, then click Generate 🔨";

    setTimeout(() => {
        for (let i = 0; i < rangeSlider.value; i++) {
            newpass += all[Math.floor(Math.random() * all.length)];
        }

        passwordInput.value = newpass;

        let timeLeft = 10;
        expiryTimer.textContent = `Expires in: ${timeLeft}s`;

        const timer = setInterval(() => {
            timeLeft--;
            expiryTimer.textContent = `Expires in: ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                expiryTimer.textContent = "Password Expired!";
                passwordInput.value = "";
            }
        }, 1000);
    }, 500);
};

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value)
        .then(() => {
            copyFeedback.style.display = "inline";
            setTimeout(() => {
                copyFeedback.style.display = "none";
            }, 2000);
        })
        .catch(() => {
            copyFeedback.style.display = "none";
        });
});

rangeSlider.addEventListener("input", () => {
    sliderNumber.textContent = rangeSlider.value;
});

generateBtn.addEventListener("click", generatePass);





