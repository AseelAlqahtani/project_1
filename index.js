

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
// to handl navigtion_list:
document.getElementById('frame').style.display = "none"
function navigtion_list(item) {
    switch (item) {
        case 'item 1':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/3l4fQoZh2DE',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('1').classList.add("active")
            delete_active("1")

            break;
        case 'item 2':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/GksweWY0TjI',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('2').classList.add("active")
            delete_active('2')
            break;
        case 'item 3':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/CpHHIS_hx3s',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('3').classList.add("active")
            delete_active('3')
            break;
        case 'item 4':
            player.stop()
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "block"
            document.getElementById('video').style.display = "none"
            document.getElementById('frame').src = "Quiz1.html"

            document.getElementById('4').classList.add("active")
            delete_active('4')
            break;
        case 'item 5':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/FysJKq5yCfg',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('5').classList.add("active")
            delete_active('5')
            break;
        case 'item 6':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "block"
            document.getElementById('video').style.display = "none"
            document.getElementById('frame').src = ""
            player.stop()
            document.getElementById('6').classList.add("active")
            delete_active('6')
            break;
        case 'item 7':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/2oUZ4caZ3c0',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('7').classList.add("active")
            delete_active('7')
            break;
        case 'item 8':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/g1YcZ1J4oIc',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('8').classList.add("active")
            delete_active('8')
            break;
        case 'item 9':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "block"
            document.getElementById('video').style.display = "none"
            document.getElementById('frame').src = ""
            player.stop()
            document.getElementById('9').classList.add("active")
            delete_active('9')

            break;
        case 'item 10':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "block"
            document.getElementById('video').style.display = "none"
            document.getElementById('frame').src = "map.html"
            player.stop()
            document.getElementById('10').classList.add("active")
            delete_active('10')
            break;
        case 'item 11':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "block"
            document.getElementById('video').style.display = "none"
            document.getElementById('frame').src = ""
            player.stop()
            document.getElementById('11').classList.add("active")
            delete_active('11')
            break;
        case 'item 12':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/l0LcxzuopAc',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('12').classList.add("active")
            delete_active('12')
            break;
        case 'item 13':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/zzI0Xwx6_n4',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('13').classList.add("active")
            delete_active('13')
            break;
        case 'item 14':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "block"
            document.getElementById('video').style.display = "none"
            document.getElementById('frame').src = ""
            player.stop()
            document.getElementById('14').classList.add("active")
            delete_active('14')
            break;
        case 'item 15':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "block"
            document.getElementById('video').style.display = "none"
            document.getElementById('frame').src = "CogenerationComponents.html"
            player.stop()
            document.getElementById('15').classList.add("active")
            delete_active('15')

            break;
        case 'item 16':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "block"
            document.getElementById('video').style.display = "none"
            document.getElementById('frame').src = ""
            player.stop()
            document.getElementById('14').classList.add("active")
            delete_active('14')
            break;
        case 'item 17':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            $('#button_Continue').show()
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/zjHm0xq6ozU',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('17').classList.add("active")
            delete_active('17')
            break;
        case 'item 18':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('frame').style.display = "block"
            document.getElementById('video').style.display = "none"
            $('#button_Continue').show()
            document.getElementById('frame').src = ""
            player.stop()
            document.getElementById('18').classList.add("active")
            delete_active('18')
            break;
        case 'item 19':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"
            $('#button_Continue').show()

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/XP6DBdYLwKs',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('19').classList.add("active")
            delete_active('19')
            break;
        case 'item 20':
            $('html, body').animate({ scrollTop: '0px' }, 500);
            document.getElementById('frame').style.display = "none"
            document.getElementById('video').style.display = "block"
            $('#button_Continue').hide()

            player.source = {
                type: 'video',
                sources: [
                    {
                        src: 'https://youtu.be/ranzxkS8fbU',
                        provider: 'youtube',
                    },
                ],
                autoplay: true,
            };
            document.getElementById('20').classList.add("active")
            delete_active('20')
            break;
    }
}

function delete_active(id_item) {
    for (var i = 1; i <= 20; i++) {
        if (i != id_item) {
            document.getElementById(i).classList.remove("active")
        }
    }
}



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





