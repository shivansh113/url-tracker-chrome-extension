const inputBttn = document.getElementById("input-bttn")
let myInfo = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBttn = document.getElementById("delete-bttn")
const tabBttn = document.getElementById("tab-bttn")
const infoFromLoccalStorage = JSON.parse(localStorage.getItem("myInfo"))

if (infoFromLoccalStorage) {
    myInfo = infoFromLoccalStorage
    render(myInfo)
}

function render(info) {
    let listItems = ""
    for (let i = 0; i < info.length;i++) {

        listItems += `
        <li>
            <a target ='_blank' href='${info[i]}'>
                ${info[i]}
            </a>
        </li>`;
    }

    ulEl.innerHTML = listItems

}

inputBttn.addEventListener("click", function () {
    myInfo.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myInfo", JSON.stringify(myInfo))
    render(myInfo)
})

deleteBttn.addEventListener("dblclick", function () {
    localStorage.clear()
    myInfo = []
    render(myInfo)
})

tabBttn.addEventListener("click", function() {
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
        myInfo.push(tabs[0].url)
        localStorage.setItem("myInfo", JSON.stringify(myInfo))
        render(myInfo)
    })    
})

