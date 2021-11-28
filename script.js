var main = document.querySelector(".main");

var contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
]

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

function cleanUpView() {
    while (main.lastChild) {
        main.removeChild(main.lastChild)
    }
}

function renderView(object) {
    var ContactInfoDiv = document.createElement("div")
    var ContactNameDiv = document.createElement("div")
    var ContactNameImg = document.createElement("img")
    var ContactEmailDiv = document.createElement("div")
    var ContactPhoneDiv = document.createElement("div")
    var ContactAddressDiv = document.createElement("div")
    var ButtonsDiv = document.createElement("div")
    var EditButton = document.createElement("button")
    var CloseButton = document.createElement("button")

    ContactInfoDiv.classList.add("contactinfo")
    ContactNameDiv.classList.add("contactname")
    ContactNameImg.classList.add("profilepic") 
    ContactEmailDiv.classList.add("contactemail")
    ContactPhoneDiv.classList.add("contactphone")
    ContactAddressDiv.classList.add("contactaddress")
    ButtonsDiv.classList.add("buttons")
    EditButton.classList.add("button")
    EditButton.classList.add("edit")
    CloseButton.classList.add("button")
    CloseButton.classList.add("close")

    ContactNameImg.src = "./img/profile.jpg"
    ContactNameImg.alt = "Profile Picture"
    EditButton.value = "Edit"
    CloseButton.value = "Close"

    ContactNameDiv.innerHTML = object.name
    ContactEmailDiv.innerHTML = "email: " + object.email
    ContactPhoneDiv.innerHTML = "cell: " + object.phone
    ContactAddressDiv.innerHTML = "address: " + object.address
    EditButton.innerHTML = "Edit"
    CloseButton.innerHTML = "Close"

    main.append(ContactInfoDiv)
    ContactInfoDiv.append(ContactNameDiv)
    ContactInfoDiv.append(ContactEmailDiv)
    ContactInfoDiv.append(ContactPhoneDiv)
    ContactInfoDiv.append(ContactAddressDiv)
    ContactInfoDiv.append(ButtonsDiv)
    ContactInfoDiv.append(ContactNameImg)
    ContactNameDiv.append(ContactNameImg)
    ButtonsDiv.append(EditButton)
    ButtonsDiv.append(CloseButton)
}