function book(){
    let start = document.getElementById("startdate").value
    let end = document.getElementById("enddate").value
    let fromLocation = document.getElementById("fromLocation").value
    let toLocation = document.getElementById("toLocation").value
    document.getElementById("confirmation").innerHTML = `You have booked from ${fromLocation} to ${toLocation} on ${start}, with a return trip on ${end}`
}