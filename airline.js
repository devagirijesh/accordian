const allText = document.getElementById("All");
const selectedText = document.getElementById("Selected");
const seatsid = document.getElementById("seatsid");
const flightsid = document.getElementById("flightsid");
const bagsid = document.getElementById("bagsid");
const seatsContent = document.getElementById("seatsMainClass");
const flightContent = document.getElementById("flightContent");
const bagsContent = document.getElementById("bagsContent");

const accordionTags = document.querySelectorAll("[id$='Tag']");
const accordionContent = document.querySelectorAll(" [id$='Content']");
const accordionHeader = document.querySelectorAll(" [id$='Head']");
const accordianImages = document.querySelectorAll(" [id$='Image']");

let count = 0;
let idArray = [];


window.onload = () => { seatsid.classList.add("borderBottom"); };

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

const commonBlock = () => {
    bagsContent.style.display = "none";
    seatsContent.style.display = "none";
    flightContent.style.display = "none";

    seatsid.classList.remove("borderBottom");
    flightsid.classList.remove("borderBottom");
    bagsid.classList.remove("borderBottom");
}


const checkFunction = (id, mainId) => {
    const firstCheck = document.getElementById(id);
    if (firstCheck.checked == true) {
        count++;
        idArray.push(mainId);
    } else {
        idArray = idArray.filter((value) => {
            return value != mainId;
        })
        if (idArray.length == 0) {
            showAll();
        }
        count--;
    }
    document.getElementById("SelectedValue").innerHTML = "(" + count + ")";
    console.log("first");
}


const showAll = () => {
    allText.classList.add("underline");
    selectedText.classList.remove("underline");
    accordionTags.forEach.call(accordionTags, (div) => { div.style.display = "block"; });
}

const hideAll = () => { accordionTags.forEach.call(accordionTags, (div) => { div.style.display = "none"; }); }

const selected = () => {
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

const headerClick = (headerId, contentId) => {
    console.log("second");
    accordionHeader.forEach.call(accordionHeader, (div) => { div.style.backgroundColor = "#FFFFFF" });

    headerId.style.backgroundColor = "#B0B0B0"
    accordionContent.forEach.call(accordionContent, (div) => { div.style.display = "none"; });

    document.getElementById(contentId + "Content").style.display = "block";

    accordianImages.forEach.call(accordianImages, (div) => {
        div.src = "data:image/jpeg;base64,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"
    });

    document.getElementById(contentId + "Image").src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/down-arrow-3023635-2522905.png"
}
