let text=""
var payload = []
var index = 0

function onSubmit() {
    var Firstname = document.getElementById("fname").value;
    var Middlename = document.getElementById("mname").value;
    var Lastname = document.getElementById("lname").value;
    var checkboxes = document.getElementsByClassName("checkbox")
    text = ""
    payload.length = 0
    for (const checkbox of checkboxes) {
        if (payload.length == 0) {
            document.getElementById("sports").innerHTML = "No Selected Sports"

        }
        if (checkbox.checked == true) {
            payload.push(checkbox.value);
        }

    }
    payload.forEach(transformData);
    document.getElementById("fullname").innerHTML = Firstname + Middlename + Lastname
}
function transformData(item, index) {
    text += index + ": " + item + "<br>"
    document.getElementById("sports").innerHTML = text

}
