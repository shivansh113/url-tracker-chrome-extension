const inputBttn = document.getElementById("input-bttn")
let myInfo = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBttn.addEventListener("click", function () {
    myInfo.push(inputEl.value)
    inputEl.value = ""
    render()
})

function render() {
    let listItems = ""
    for (let i = 0; i < myInfo.length;i++) {

        listItems += `
        <li>
            <a target ='_blank' href='${myInfo[i]}'>
                ${myInfo[i]}
            </a>
        </li>`;
    }

    ulEl.innerHTML = listItems

}