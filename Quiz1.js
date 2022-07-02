
document.getElementById('submitBtn').disabled = true
let radio = document.getElementsByName('group1')


function check_option() {
    document.getElementById('submitBtn').disabled = false

}

function submitBtn() {
    document.getElementById('submitBtn').disabled = true
    let msge = ['The pulsating components of each phase cancel each other because of 1200 phase shifts. Thus, the power delivered to a three-phase load is <u>constant</u> in nature and not pulsating.', 'Power per kilogram of metal from a Three-phase machine is <u>more</u> as compared to single phase machine.', '', 'Mechanical vibrations in three-phase motors are <u>less</u> as compared to single-phase motors.'];
    let text = ""
    for (let i = 0; i < radio.length; i++) {
        radio[i].disabled = true;

    }

    if (radio[2].checked) {

        document.getElementById('exampleModallabel').innerHTML = '<i class="bi bi-check2-circle"></i> Correct';
        document.getElementById('exampleModallabel').style.color = "green"
        document.getElementById('msge').innerHTML = "That’s correct! A three-phase machine does not require a starter.";
    }
    else {
        document.getElementById('exampleModallabel').innerHTML = '<i class="bi bi-exclamation-circle"></i>Incorrect';
        // document.getElementById('reasone').innerHTML = "That’s not quite right. Power per kilogram of metal from a Three-phase machine is more as compared to single phase machine."
        document.getElementById('exampleModallabel').style.color = "red"
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked && i != 2) {
                text = msge[i]
                break;
            }

        }

        document.getElementById('msge').innerHTML = "That's not quite right." + text;

    }
}
