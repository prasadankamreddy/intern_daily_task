
function checkEligibility() {

    let age = Number(document.getElementById("age").value);
    let marks = Number(document.getElementById("marks").value);

    if (age >= 18 && marks >= 50) {
        document.getElementById("result").innerText =
            "You are Eligible";
    } else {
        document.getElementById("result").innerText =
            "You are Not Eligible";
    }
}
