//dynamically show the hiring label and input
function show_hiring() {
    var hourly_label = document.querySelector("#hourly_label");
    var hourly_input = document.querySelector("#hourly");
    hourly_input.type = "number";
    hourly_input.min = 15;
    hourly_input.max = 90;
    hourly_input.step = 0.1;
    hourly_label.setAttribute("for", "hourly");
    hourly_label.style.display = "block";
}

function hide_hiring() {
    var hourly_label = document.querySelector("#hourly_label");
    var hourly_input = document.querySelector("#hourly");
    hourly_label.style.display = "none";
    hourly_input.type = "hidden";
}

//go to "Contact" section
function go_to(anchor) {
    var place = document.location.toString().split('#')[0];
    document.location = place + '#' + anchor;
    return false;
}

//download resume
function download() {
    window.open('misc/resume.docx');
}