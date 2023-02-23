// 依照圖片數量建置dot
let SlideImg = document.querySelectorAll("li");
let add = "";
console.log("SlideImg.length=" + SlideImg.length)
for (let i = 0; i < SlideImg.length; i++) {
    add += `<span class="dot active">${i + 1}</span>`
}
document.getElementById("test").innerHTML = `${add}`;
getdot();

// 初始位置設定
let index_img = 1;
show(index_img);

// 計時器建置
let clock;              //全域宣告計時器變數,利於重製
let ispause = true;     //預設布林值,用於暫停
let timedefult = 1000;  //時間間隔也引用全域變數,用於變速
auto();


document.getElementsByClassName("next")[0].addEventListener("click", next)
document.getElementsByClassName("prev")[0].addEventListener("click", prev)
document.getElementsByTagName("input")[0].addEventListener("click", stop)
document.getElementsByTagName("input")[1].addEventListener("click", resetSpeed)
document.getElementsByTagName("input")[2].addEventListener("change", customSpeed)


function prev() {
    index_img -= 1;
    if (index_img > SlideImg.length) { index_img = 1 }
    if (index_img < 1) { index_img = SlideImg.length }
    show(index_img);
}

function next() {
    index_img += 1;
    if (index_img > SlideImg.length) { index_img = 1 }
    if (index_img < 1) { index_img = SlideImg.length }
    show(index_img);
}

function show(n) {
    let dotList = document.getElementsByClassName("dot");
    // console.log(`第${n}張圖`);
    for (let i = 0; i < SlideImg.length; i++) {
        SlideImg[i].style.display = `none`;
        dotList[i].className = dotList[i].className.replace(" active", "")
    }
    SlideImg[n - 1].style.display = `block`
    dotList[n - 1].className += ` active`
}
function getdot() {
    let dotList = document.getElementsByClassName("dot");
    for (let i = 0; i < dotList.length; i++) {
        dotList[i].addEventListener("click", () => { show(i + 1) })
    }
}
function auto() {
    clock = setInterval(() => {
        if (ispause == true) { next() }
    }, timedefult)
}

function stop() {
    switch (document.getElementsByTagName("input")[0].value) {
        case "stop":
            document.getElementsByTagName("input")[0].value = "continue";
            ispause = false;
            break;
        case "continue":
            document.getElementsByTagName("input")[0].value = "stop";
            ispause = true;
            break;
    }
}
function resetSpeed() {
    timedefult = 1000;
    clearInterval(clock);
    auto();
    console.log(`設定毫秒間隔:${timedefult}`)
    document.getElementsByTagName("input")[2].value = `1000`
    document.getElementsByTagName("input")[3].value = `當前間隔:${timedefult}毫秒`

}

function customSpeed() {
    console.log(document.getElementsByTagName("input")[2].value)
    while (document.getElementsByTagName("input")[2].value != timedefult) {
        timedefult = document.getElementsByTagName("input")[2].value
        clearInterval(clock);
        auto();
        console.log(`設定毫秒間隔:${timedefult}`)
        document.getElementsByTagName("input")[3].value = `當前間隔:${timedefult}毫秒`
    }
}