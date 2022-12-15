const result =
document.querySelector("#result");

// Untuk menangkap semua element
document.querySelectorAll("#option a").forEach((a) =>
// Jika di klik akan menjalankan fungsi computerChoice
a.addEventListener("click", (e) => {
    computerChoice(e);
})
);

// Fungsi untuk menghandle logic pada game
function computerChoice(e) {
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan random computer
    result.innerHTML = choices[Math.floor(Math.random() *
        choices.length)];

    // Jika pilihan computer == pilihan user (draw)
    if (e.target.innerText.trim() ==
    result.innerHTML) {
        setTimeout(() => alert("Draw"), 100);
    }

    // Jika pilihan user yang menang
    if (
        (e.target.innerText.trim() ==
        "Rock" && result.innerHTML == "Scissors") ||

        (e.target.innerText.trim() ==
        "Paper" && result.innerHTML == "Rock") ||

        (e.target.innerText.trim() ==
        "Scissors" && result.innerHTML == "Paper")
    ) {
        setTimeout(() => alert("You Win"), 100);
    }

    // Jika pilihan computer yang menang
    if (
        (e.target.innerText.trim() ==
        "Rock" && result.innerHTML == "Paper") ||

        (e.target.innerText.trim() ==
        "Paper" && result.innerHTML == "Scissors") ||

        (e.target.innerText.trim() ==
        "Scissors" && result.innerHTML == "Rock")
    ) {
        setTimeout(() => alert("Computer Win"), 100);
    }
}