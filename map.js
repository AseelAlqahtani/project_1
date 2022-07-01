
//to show selected marker in map: 
const markers = document.getElementsByClassName('Allmarkers')
const ids = document.getElementsByClassName('buttonStyle1')
//alert(markers[0].id)
// alert(ids[0].id)

document.getElementById('Allmarker_map').style.visibility = "hidden"
function show(item) {
    switch (item) {
        case 'Steam':
            document.getElementById('MSteam').style.visibility = "visible"
            chosen(item)
            hideMarker(item)
            break;
        case 'Gas':
            document.getElementById('MGas').style.visibility = "visible"
            chosen(item)
            hideMarker(item)
            break;
        case 'Diesel':
            document.getElementById('MDiesel').style.visibility = "visible"
            chosen(item)
            hideMarker(item)
            break;

        case 'Combined_Cycle':
            document.getElementById('MCombined_Cycle').style.visibility = "visible"
            chosen(item)
            hideMarker(item)
            break;
        case 'Diesel_Gas':
            document.getElementById('MDiesel_Gas').style.visibility = "visible"
            chosen(item)
            hideMarker(item)
            break;
        case 'Showall':
            chosen(item)
            showAll();
            break;
    }
}

function chosen(element) {

    document.getElementById(element).classList.add("MrkerSelected")
    for (var i = 0; i < ids.length; i++) {
        if (ids[i].id != element) {
            document.getElementById(ids[i].id).classList.remove("MrkerSelected")
        }
    }
}

function hideMarker(element) {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id != "M" + element)
            document.getElementById(markers[i].id).style.visibility = "hidden"
    }
}
function showAll() {
    for (var i = 0; i < markers.length; i++) {
        document.getElementById(markers[i].id).style.visibility = "visible"

    }
}
