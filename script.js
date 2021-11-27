var main = document.querySelector(".main");

function cleanUpIndex() {
    while (main.lastChild) {
        main.removeChild(main.lastChild)
    }
}

function createSingleIndex(object) {
    var Link = document.createElement("a")
    var NewDiv = document.createElement("div")

    Link.href = "page3.html"
    NewDiv.classList.add("contact")
    NewDiv.innerHTML = object.name
    Link.append(NewDiv)
    return Link
}

function renderIndex(array) {
    for (let index = 0; index < array.length; index++) {
        let element = array[index]
        main.append(createSingleIndex(element))
        
}

}
