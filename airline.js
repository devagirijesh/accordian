let allText = document.getElementById("All");
let selectedText = document.getElementById("Selected");


let seatsid = document.getElementById("seatsid");
let flightsid = document.getElementById("flightsid");
let bagsid = document.getElementById("bagsid");

let seatsContent = document.getElementById("seatsContent");
let flightContent = document.getElementById("flightContent");
let bagsContent = document.getElementById("bagsContent");

let idArray = [];

let primaryArrayId = ["accoOne", "accoTwo", "accoThree", "accoFour", "accoFive", "accoSix", "accoSeven", "accoEight", "accoNine",]

let count = 0;


window.onload = function () {
    seatsid.classList.add("borderBottom");
};

bagsid.onclick = () => {
    commonBlock()
    bagsContent.style.display = "block";
    bagsid.classList.add("borderBottom");
}

flightsid.onclick = () => {
    commonBlock()
    flightContent.style.display = "block";
    flightsid.classList.add("borderBottom");
}

seatsid.onclick = () => {
    commonBlock()
    seatsContent.style.display = "block";
    seatsid.classList.add("borderBottom");
}

let commonBlock = () => {
    bagsContent.style.display = "none";
    seatsContent.style.display = "none";
    flightContent.style.display = "none";

    seatsid.classList.remove("borderBottom");
    flightsid.classList.remove("borderBottom");
    bagsid.classList.remove("borderBottom");
}


let checkFunction = (id, mainId) => {
    let firstCheck = document.getElementById(id);
    if (firstCheck.checked == true) {
        count++;
        idArray.push(mainId);
    } else {
        idArray = idArray.filter(function (value) {
            return value != mainId;
        })
        if (idArray.length == 0) {
            showAll();
        }
        count--;
    }
    document.getElementById("SelectedValue").innerHTML = "(" + count + ")";
}


let showAll = () => {
    allText.classList.add("underline");
    selectedText.classList.remove("underline");
    primaryArrayId.map((value) => {
        let tempId = document.getElementById(value);
        tempId.style.display = "block";
    })
}

let hideAll = () => {
    primaryArrayId.map((value) => {
        let tempId = document.getElementById(value);
        tempId.style.display = "none";
    })
}

let selected = () => {
    if (idArray.length > 0) {
        selectedText.classList.add("underline");
        allText.classList.remove("underline");
        hideAll();
        idArray.map((value) => {
            let tempId = document.getElementById(value);
            tempId.style.display = "block";
        })
    } else {
        alert("None Selected");
    }
}