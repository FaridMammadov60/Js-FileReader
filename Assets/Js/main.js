let textarea = document.getElementById("textarea");
let submit = document.getElementById("submit");

let inputone = document.getElementById("input-one");
let inputtwo = document.getElementById("input-two");
let inputthree = document.getElementById("input-three");

let word = "";

submit.onclick = function () {
    textarea.classList.remove("d-none")
    word = word + inputone.value + " " + inputtwo.value + " " + inputthree.value + " ";
    textarea.innerText = word;
    class Adam {
        constructor(ad, soyad, username) {
            this.ad = ad;
            this.soyad = soyad;
            this.username = username;
        }
    }
    let adam = new Adam(inputone.value, inputtwo.value, inputthree.value);
    localStorage.setItem("adam", JSON.stringify(
        adam.ad, adam.soyad, adam.username
    ));
    console.log(JSON.parse(localStorage.getItem("adam")));
}







