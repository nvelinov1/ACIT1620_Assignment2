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

var ContactNavButton = document.querySelector("#contactshome")

ContactNavButton.addEventListener('click', function(e) {
    cleanUpIndex()
    renderIndex(contactList)
    e.preventDefault()
})

var NewContactNavButton = document.querySelector("#newcontact")

NewContactNavButton.addEventListener('click', function(e) {
    cleanUpIndex()
    renderCreate()
    e.preventDefault()
})

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

    function CheckIndex(e) {        
        for (let index = 0; index < contactList.length; index++) {
            if (e.target.textContent == contactList[index].name) {
                cleanUpIndex()
                renderView(contactList[index])
                e.preventDefault()
            }
            
        }
    }
    
    Link.addEventListener("click", CheckIndex)   
    
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
    EditButton.classList.add("button", "edit")
    CloseButton.classList.add("button", "close")

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
    ContactInfoDiv.append(ContactNameDiv, ContactEmailDiv, ContactPhoneDiv, ContactAddressDiv, ButtonsDiv, ContactNameImg)
    ContactNameDiv.append(ContactNameImg)
    ButtonsDiv.append(EditButton, CloseButton)

    CloseButton = document.querySelector(".close")

    function CloseListner(e) {
        cleanUpIndex()
        renderIndex(contactList)
        e.preventDefault()
    }

    CloseButton.addEventListener('click', CloseListner)
}


function cleanUpCreate() {
    while (main.lastChild) {
        main.removeChild(main.lastChild)
    }
}

function renderCreate() {
    ContactEditDiv = document.createElement("div")
    ContactImageDiv = document.createElement("div")
    ContactImageImg = document.createElement("img")
    FormDiv = document.createElement("div")
    FormForm = document.createElement("form")
    NameDiv = document.createElement("div")
    NameInput = document.createElement("input")
    ExtraNameButton = document.createElement("button")
    PhoneDiv = document.createElement("div")
    PhoneInput = document.createElement("input")
    ExtraPhoneButton = document.createElement("button")
    AddressDiv = document.createElement("div")
    AddressInput = document.createElement("input")
    ExtraAddressButton = document.createElement("button")
    EmailDiv = document.createElement("div")
    EmailInput = document.createElement("input")
    ExtraEmailButton = document.createElement("button")
    CreateButtonsDiv = document.createElement("div")
    SubmitButton = document.createElement("button")
    ResetButton = document.createElement("button")

    ContactEditDiv.classList.add("contactedit")
    ContactImageDiv.classList.add("contactimg")
    ContactImageImg.classList.add("profilepic")
    FormDiv.classList.add("form")
    NameDiv.classList.add("inputcontainer")
    ExtraNameButton.classList.add("extrafield")
    PhoneDiv.classList.add("inputcontainer")
    ExtraPhoneButton.classList.add("extrafield")
    AddressDiv.classList.add("inputcontainer")
    ExtraAddressButton.classList.add("extrafield")
    EmailDiv.classList.add("inputcontainer")
    ExtraEmailButton.classList.add("extrafield")
    CreateButtonsDiv.classList.add("buttons")
    SubmitButton.classList.add("button", "save")
    ResetButton.classList.add("button", "cancel")

    ContactImageImg.src = "./img/profile.jpg"
    NameInput.type = "text"
    NameInput.id = "contactname"
    NameInput.name = "contactname"
    NameInput.placeholder = "Contact Name"
    ExtraNameButton.id = "extranamefield"
    ExtraNameButton.name = "extranamefield"
    PhoneInput.type = "tel"
    PhoneInput.id = "contactphone"
    PhoneInput.name = "contactphone"
    PhoneInput.placeholder = "Contact Phone"
    ExtraPhoneButton.id = "extraphonefield"
    ExtraPhoneButton.name = "extraphonefieldd"
    AddressInput.id = "contactaddress"
    AddressInput.name = "contactaddress"
    AddressInput.placeholder = "Contact Address"
    ExtraAddressButton.id = "extraaddressfield"
    ExtraAddressButton.name = "extraaddressfield"
    EmailInput.id = "contactemail"
    EmailInput.name = "contactemail"
    EmailInput.placeholder = "Contact Email"
    ExtraEmailButton.id = "extraemailfield"
    ExtraEmailButton.name = "extraemailfield"
    SubmitButton.type = "submit"
    SubmitButton.id = "savecontact"
    SubmitButton.name = "savecontact"
    ResetButton.id = "cancel"
    ResetButton.name = "cancel"

    ExtraNameButton.innerHTML = "+"
    ExtraPhoneButton.innerHTML = "+"
    ExtraAddressButton.innerHTML = "+"
    ExtraEmailButton.innerHTML = "+"
    SubmitButton.innerHTML = "Save Contact"
    ResetButton.innerHTML = "Cancel"
    
    main.append(ContactEditDiv)
    ContactEditDiv.append(ContactImageDiv, FormDiv)
    ContactImageDiv.append(ContactImageImg)
    FormDiv.append(FormForm)
    FormForm.append(NameDiv, PhoneDiv, AddressDiv, EmailDiv, CreateButtonsDiv)
    NameDiv.append(NameInput, ExtraNameButton)
    PhoneDiv.append(PhoneInput, ExtraPhoneButton)
    AddressDiv.append(AddressInput, ExtraAddressButton)
    EmailDiv.append(EmailInput, ExtraEmailButton)
    CreateButtonsDiv.append(SubmitButton, ResetButton)

    CancelButton = document.getElementById("cancel")

    function CancelListner(e) {
        cleanUpIndex()
        renderIndex(contactList)
        e.preventDefault()
    }

    CancelButton.addEventListener('click', CancelListner)
    
    SaveButton = document.getElementById("savecontact")

    function CreateContact(e) {
        let NameValue = document.querySelector("#contactname").value
        let PhoneValue = document.querySelector("#contactphone").value
        let AddressValue = document.querySelector("#contactaddress").value
        let EmailValue = document.querySelector("#contactemail").value
        var ValuesObject = {
            name: NameValue,
            phone: PhoneValue,
            address: AddressValue,
            email: EmailValue
        }
        
        contactList.push(ValuesObject)
        cleanUpCreate()
        renderView(contactList[contactList.length - 1])
        e.preventDefault()
    }

    SaveButton.addEventListener('click', CreateContact)
}   