let month_list = document.getElementsByName("month")
let date_d = 0;
let month_catch
let year_catch

document.querySelectorAll("select")[1].addEventListener("change", writeTheDate)
document.querySelectorAll("select")[0].addEventListener("change", writeTheDate)
document.getElementById("submit").addEventListener("click", () => {
    let yearRange_catch = document.querySelectorAll("#getYear")
    let re = /[123456789]+/g
    if (re.test(yearRange_catch[0].value + yearRange_catch[1].value) == true) {
        console.log(`都是數字`)
        if (yearRange_catch[0].value >= 1970 && yearRange_catch[1].value >= 1970) {
            console.log(`數字皆大於1970`)
            if ((yearRange_catch[1].value - yearRange_catch[0].value) >= 0) {
                document.getElementById("yearRange_text").innerHTML = ``
                for (let i = yearRange_catch[0].value; i <= yearRange_catch[1].value; i++) {
                    document.querySelectorAll("select")[0].innerHTML += `<option value=${i} name="year">${i}</option>`
                }
            } else {
                document.querySelectorAll("table")[0].innerHTML = ``
                document.querySelectorAll("select")[0].innerHTML = ``
                document.getElementById("yearRange_text").innerHTML = `<span style="color:red">格式不符,結束年份要大於起始年分</span>`
            }
        } else {
            document.querySelectorAll("table")[0].innerHTML = ``
            document.querySelectorAll("select")[0].innerHTML = ``
            document.getElementById("yearRange_text").innerHTML = `<span style="color:red">格式不符,請輸入1970以後的西元年分</span>`
        }
    } else {
        document.querySelectorAll("table")[0].innerHTML = ``
        document.querySelectorAll("select")[0].innerHTML = ``
        document.getElementById("yearRange_text").innerHTML = `<span style="color:red">格式不符,請輸入1970以後的西元年分</span>`
    }

})

function writeTheDate() {
    month_catch = document.querySelectorAll("select")[1].value
    year_catch = document.querySelectorAll("select")[0].value
    document.querySelectorAll("select")[2].innerHTML = "";
    console.log(month_catch)
    if ((month_catch == 1) || (month_catch == 3) || (month_catch == 5) || (month_catch == 7) || (month_catch == 8) || (month_catch == 10) || (month_catch == 12)) {
        date_d = 31;
        console.log("month catched")
    } else {
        if ((month_catch == 4) || (month_catch == 6) || (month_catch == 9) || (month_catch == 11)) {
            date_d = 30;
            console.log("month catched")
        } else {
            if (month_catch == 2) {
                if ((year_catch % 4 == 0) && (year_catch % 100 != 0)) {
                    console.log("year_catch % 400 =" + year_catch % 400)
                    date_d = 29;
                    console.log("month catched")
                }
                else {
                    if (year_catch % 400 == 0) {
                        date_d = 29;
                        console.log("month catched")
                    }
                    else {
                        date_d = 28;
                        console.log("month catched")
                    }
                }
            }
            else {
                console.log("選項非月份")
            }
        }
    }
    for (let j = 1; j <= date_d; j++) {
        document.querySelectorAll("select")[2].innerHTML += `<option value=${j} name="dd">${j}</option>`
    }

    let table_list = document.querySelectorAll("table")
    let create_tr = document.createElement("tr")
    let create_td = document.createElement("td")
    let empty_td = ``
    table_list[0].innerHTML = ``;

    for (let i = 0; i < new Date(`${month_catch},1,${year_catch}`).getDay(); i++) {
        empty_td += `<td></td>`
    }
    table_list[0].insertRow().innerHTML = `<th>Sun</th>
                                           <th>Mon</th>
                                           <th>Tue</th>
                                           <th>Wed</th>
                                           <th>Thu</th>
                                           <th>Fri</th>
                                           <th>Sat</th>`
    table_list[0].appendChild(create_tr).innerHTML = empty_td

    for (let i = 1; i <= date_d; i++) {
        if (new Date(`${month_catch},${i},${year_catch}`).getDay() == 0) {
            // console.log(new Date(`${month_catch},${i},${year_catch}`).getDay())
            table_list[0].insertRow().innerHTML = `<td>${i}</td>`
        } else {
            // console.log(new Date(`${month_catch},${i},${year_catch}`).getDay())
            table_list[0].lastChild.innerHTML += `<td>${i}</td>`
        }
    }
    optionDate();
    selectDate();
}
function selectDate() {
    let td_catch = document.querySelectorAll("td")
    for (let i = 0; i < td_catch.length; i++) {
        td_catch[i].addEventListener("click", () => {
            if (td_catch[i].textContent == ``) {
                // console.log(td_catch[i].textContent)
                document.getElementById("textDate").innerHTML = `<span>非本月日期</span>`
            } else {
                // console.log(td_catch[i].textContent)
                document.querySelectorAll("select")[2].value = td_catch[i].textContent
                document.getElementById("textDate").innerHTML = `<span>您選的日期為${year_catch}年${month_catch}月${document.querySelectorAll("select")[2].value}日</span>`
            }
            for (let i = 0; i < document.querySelectorAll("td").length; i++) {
                if (document.querySelectorAll("td")[i].textContent == document.querySelectorAll("select")[2].value) {
                    document.querySelectorAll("td")[i].className = `active`
                } else {
                    document.querySelectorAll("td")[i].className = ``
                }
            }
        })

    }
}
function optionDate() {
    document.querySelectorAll("select")[2].addEventListener("change", () => {
        for (let i = 0; i < document.querySelectorAll("td").length; i++) {
            if (document.querySelectorAll("td")[i].textContent == document.querySelectorAll("select")[2].value) {
                document.querySelectorAll("td")[i].className = `active`
                document.getElementById("textDate").innerHTML = `<span>您選的日期為${year_catch}年${month_catch}月${document.querySelectorAll("select")[2].value}日</span>`
            } else {
                document.querySelectorAll("td")[i].className = ``
            }
        }
    })
}