
function start() {
    addDestinations();
    setDefaultDates();
    travelType();
    showExtras();
}

function travelType() {
    let oneway = document.getElementById("oneway").checked;
    let roundtrip = document.getElementById("roundtrip").checked;

    if (oneway) {
        document.getElementById("enddate").setAttribute("disabled", "disabled");
    } else {
        document.getElementById("enddate").removeAttribute("disabled", "disabled")
    }
}

function confirmBooking() {
    let travelType = "";
    if (document.getElementById("oneway").checked) {
        travelType = "one way";
    } else {
        travelType = "round";
    }
    let fromLocation = document.getElementById("fromLocation").value
    let toLocation = document.getElementById("toLocation").value
    if (fromLocation === toLocation) {
        alert("That's an awfully short journey dude")
        return;
    }
    let start = document.getElementById("startdate").value
    let end = document.getElementById("enddate").value
    let outJourney = new Date(start);
    let returnJourney = new Date(end);
    if (outJourney > returnJourney) {
        alert("You can not time travel");
        return;
    }
    let extrasList = [];
    if (document.getElementById('food').checked === true){
        extrasList.push(document.getElementById('foodLabel').innerHTML)
    }
    if (document.getElementById('firstclass').checked === true){
        extrasList.push(document.getElementById('firstclassLabel').innerHTML)
    }
    if (document.getElementById('quiet').checked === true){
        extrasList.push(document.getElementById('quietLabel').innerHTML)
    }

    let journey = {
        type : travelType,
        from : fromLocation,
        to : toLocation,
        out : start,
        return : end,
        extras : extrasList
    }
    if(journey.type ==="one way"){
        document.getElementById("confirmation").innerHTML = `You have booked a ${journey.type} trip from ${journey.from} to ${journey.to} on ${journey.out}.<br> You have booked the following extras: ${journey.extras}.`
    } else if (journey.type ==="round"){

        document.getElementById("confirmation").innerHTML = `You have booked a ${journey.type} trip from ${journey.from} to ${journey.to} on ${journey.out}, with a return trip on ${journey.return}.<br> You have booked the following extras: ${journey.extras}.`
    }
}

function setDefaultDates() {

    let date = new Date();
    let dateFormatted = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();   
    document.getElementById('startdate').value = dateFormatted;
    document.getElementById('startdate').setAttribute('min', dateFormatted)
    let dateFormatted2 = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + (date.getDate() + 1);
    document.getElementById('enddate').value = dateFormatted2;
    document.getElementById('enddate').setAttribute('min', dateFormatted)
}

function showExtras() {
    for (let extraPost of extrasList()) {
        let extraDiv = document.getElementById('extras');
        let newRow = document.createElement("div");
        newRow.setAttribute('class', 'row');
        extraDiv.appendChild(newRow);
        let newCol = document.createElement("div");
        newCol.setAttribute('class', 'col');
        newRow.appendChild(newCol);
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('value', extraPost.value);
        checkbox.setAttribute('id', extraPost.id);
        newCol.appendChild(checkbox);
        let label = document.createElement('label');
        label.setAttribute('for', extraPost.id);
        label.setAttribute('id', extraPost.id + "Label");
        newCol.appendChild(label);
        label.innerHTML = extraPost.text;
    }


}

function extrasList() {
    let extrasList =
        [
            {
                "text": "Food onboard",
                "id": "food",
                "value": "food"
            },
            {
                "text": "First class",
                "id": "firstclass",
                "value": "firstclass"
            },
            {
                "text": "Quiet area",
                "id": "quiet",
                "value": "quiet"
            }
        ];
    return extrasList;
}

function addDestinations() {

    let options =
        [
            {
                "text": "Stockholm",
                "value": "Stockholm"
            },
            {
                "text": "Milano",
                "value": "Milano"
            },
            {
                "text": "Wuhan",
                "value": "Wuhan"
            }
        ];

    var selectBoxes = document.getElementsByClassName('locations');

    for (let j = 0; j < selectBoxes.length; j++) {
        for (var i = 0, l = options.length; i < l; i++) {
            var option = options[i];
            selectBoxes[j].options.add(new Option(option.text, option.value, option.selected));
        }
    }

}

