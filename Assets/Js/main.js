let adddiv = document.getElementById("add-div");
let submit = document.getElementById("submit");
let usericon = document.getElementById("user-icon");
let sub = document.getElementById("sub");

let inputone = document.getElementById("input-one");
let inputtwo = document.getElementById("input-two");
let inputthree = document.getElementById("input-three");

let inputadd1 = document.getElementById("input1");
let inputadd2 = document.getElementById("input2");
let inputadd3 = document.getElementById("input3");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");


submit.onclick = function () {
    adddiv.classList.remove("d-none");
    sub.classList.add("d-none");
    usericon.classList.add("d-none");
    inputadd1.value = inputone.value;
    inputadd2.value = inputtwo.value;
    inputadd3.value = inputthree.value;
    class Adam {
        constructor(ad, soyad, username) {
            this.ad = ad;
            this.soyad = soyad;
            this.username = username;
        }
    }
    let adam = new Adam(inputone.value, inputtwo.value, inputthree.value);
    localStorage.setItem("adam", JSON.stringify(
        adam
    ))
}
button1.onclick = function () {
    let word = prompt("");
    inputadd1.value = word;
}
button2.onclick = function () {
    let word = prompt("");
    inputadd2.value = word;
}
button3.onclick = function () {
    let word = prompt("");
    inputadd3.value = word;
}









