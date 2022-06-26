

const player = new Plyr('#player');

player.source = {
    type: 'video',
    sources: [
        {
            src: 'https://youtu.be/3l4fQoZh2DE',
            provider: 'youtube',
        },
    ],
};

function showHidelist1() {
    let list = document.getElementById("list1");
    if (list.style.display == "none") {
        list.style.display = "block"
    }
    else {
        list.style.display = "none"
    }


};

function showHidelist2() {
    let list = document.getElementById("list2");
    if (list.style.display == "none") {
        list.style.display = "block"
    }
    else {
        list.style.display = "none"
    }

};
// to handle the lock icon
function showIcon() {
    let LeftSide = document.getElementById("LeftSide")
    let icon = document.getElementById("lockIcon")
    if (icon.className == "bi bi-lock-fill") {
        icon.className = "bi bi-unlock-fill"
        LeftSide.style.height = "540px"
        LeftSide.style.overflow = "auto"
    }
    else {
        icon.className = "bi bi-lock-fill"
        LeftSide.style.height = "auto"
        LeftSide.style.overflow = "auto"

    }
    LeftSide.style.overflowX = "hidden"
}

//to show marker in map

function show(item){

    switch (item) {
        case steam:
                    
            break;
        case Gas:

            break;
        case Diesel:

            break;
        case Showall:

            break;
        case Combined_Cycle:

            break;
        case Diesel_Gas:

            break;

        default:
            break;
    }
}







