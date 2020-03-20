function book(){
    let start = document.getElementById("startdate").value
    let end = document.getElementById("enddate").value
    let fromLocation = document.getElementById("fromLocation").value
    let toLocation = document.getElementById("toLocation").value
    document.getElementById("confirmation").innerHTML = `You have booked from ${fromLocation} to ${toLocation} on ${start}, with a return trip on ${end}`
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

