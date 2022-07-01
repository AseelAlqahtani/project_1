const matrix = ['hightemp', 'turbine', 'compressor', 'reduction', 'bleed', 'naturalgas', 'air', 'shear', 'gen1800', 'fuelInjector', 'combustionchamber'];

document.getElementById("rect1").onmouseover = function () {
    document.getElementById("Path_27").style.fill = "#74BB40"
    document.getElementById("Path_27").style.cursor = "default"

}

document.getElementById("rect1").onmouseleave = function () {
    document.getElementById("Path_27").style.fill = "#404040"
}

document.getElementById("rect2").onmouseover = function () {
    document.getElementById("Path_2").style.fill = "#74BB40"
    document.getElementById("Path_2").style.cursor = "default"

}

document.getElementById("rect2").onmouseleave = function () {
    document.getElementById("Path_2").style.fill = "#52A8B7"
}

document.getElementById("rect3").onmouseover = function () {
    document.getElementById("Path_11").style.fill = "#74BB40"
    document.getElementById("Path_11").style.cursor = "default"

}

document.getElementById("rect3").onmouseleave = function () {
    document.getElementById("Path_11").style.fill = "#52A8B7"
}

document.getElementById("rect4").onmouseover = function () {
    document.getElementById("Path_14").style.fill = "#74BB40"
    document.getElementById("Path_14").style.cursor = "default"

}

document.getElementById("rect4").onmouseleave = function () {
    document.getElementById("Path_14").style.fill = "#52A8B7"
}


// Show and hide text:
document.getElementById("AllText").style.visibility = "hidden"
document.getElementById("Path_1").onclick = function () {
    document.getElementById("bleed").style.visibility = "visible"
    hide("bleed");

}

document.getElementById("Path_28").onclick = function () {
    document.getElementById("naturalgas").style.visibility = "visible"
    hide("naturalgas");

}

document.getElementById("Path_13").onclick = function () {
    document.getElementById("air").style.visibility = "visible"
    hide("air");

}

document.getElementById("Path_19").onclick = function () {
    document.getElementById("shear").style.visibility = "visible"
    hide("shear");

}
document.getElementById("Path_17").onclick = function () {
    document.getElementById("gen1800").style.visibility = "visible"
    hide("gen1800");

}

document.getElementById("rect4").onclick = function () {
    document.getElementById("reduction").style.visibility = "visible"
    hide("reduction");

}

document.getElementById("rect3").onclick = function () {
    document.getElementById("compressor").style.visibility = "visible"
    hide("compressor");

}

document.getElementById("Path_29").onclick = function () {
    document.getElementById("fuelInjector").style.visibility = "visible"
    hide("fuelInjector");

}

document.getElementById("Path_7").onclick = function () {
    document.getElementById("combustionchamber").style.visibility = "visible"
    hide("combustionchamber");

}

document.getElementById("rect1").onclick = function () {
    document.getElementById("turbine").style.visibility = "visible"
    hide("turbine");

}
document.getElementById("rect2").onclick = function () {
    document.getElementById("hightemp").style.visibility = "visible"
    hide("hightemp");

}




function hide(m) {

    for (var i = 0; i < matrix.length; i++) {
        if (matrix[i] != m) {
            document.getElementById(matrix[i]).style.visibility = "hidden"
        }


    }
}
