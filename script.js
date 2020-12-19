function get_p1() {

    var inputs = [];
    var i;
    console.log("In function");
    for (i = 1; i <= 6; i++) {

        inputs.push(document.getElementById("Input_box_" + i).value);
        console.log(inputs.join(". "));
    }

    document.getElementById("display_p").innerHTML = inputs.join(". ");
}

function get_p2() {
    var inputs2 = [];
    var i;
    for (i = 1; i <= 6; i++) {
        inputs2.push(document.getElementById("Input_box_2_" + i).value);
    }
    document.getElementById("display_p2").innerHTML = inputs2.join(". ");
}