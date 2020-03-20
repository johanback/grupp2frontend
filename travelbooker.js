
function start(){
    addDestinations();
    setDefaultDates();
    travelType();
}

function travelType(){
    let oneway = document.getElementById("oneway").checked;
    let roundtrip = document.getElementById("roundtrip").checked;

    if (oneway){
        document.getElementById("enddate").setAttribute("disabled", "disabled");
    } else {
        document.getElementById("enddate").removeAttribute("disabled", "disabled")
    }
}

function book(){
    let start = document.getElementById("startdate").value
    let end = document.getElementById("enddate").value
    let fromLocation = document.getElementById("fromLocation").value
    let toLocation = document.getElementById("toLocation").value
    document.getElementById("confirmation").innerHTML = `You have booked from ${fromLocation} to ${toLocation} on ${start}, with a return trip on ${end}`
}

function setDefaultDates(){

    let date = new Date();
    let dateFormatted = date.getFullYear() + "-0" + (date.getMonth()+1) + "-" + date.getDate();
    document.getElementById('startdate').value = dateFormatted;
    document.getElementById('startdate').setAttribute('min', dateFormatted)
    let dateFormatted2 = date.getFullYear() + "-0" + (date.getMonth()+1) + "-" + (date.getDate()+1);
    document.getElementById('enddate').value = dateFormatted2;
    document.getElementById('enddate').setAttribute('min', dateFormatted)
}

function addDestinations(){
    // get reference to select element
// let select = document.getElementById('fromLocation');

// // create new option element
// let option = document.createElement('option');

// // create text node to add to option element (opt)
// option.appendChild( document.createTextNode('New Option Text') );

// // set value property of opt
// option.value = 'Stockholm'; 

// // add opt to end of select box (sel)
// select.appendChild(option); 

let options =
[
  {
    "text"  : "Stockholm",
    "value" : "Stockholm"
  },
  {
    "text"     : "Milano",
    "value"    : "Milano"
  },
  {
    "text"  : "Wuhan",
    "value" : "Wuhan"
  }
];

var selectBoxes = document.getElementsByClassName('locations');

for(let j = 0; j < selectBoxes.length; j++){
    for(var i = 0, l = options.length; i < l; i++){
    var option = options[i];
    selectBoxes[j].options.add( new Option(option.text, option.value, option.selected) );
    }
}

}

