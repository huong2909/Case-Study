function help() {
    if (round === 1) {
        document.getElementById("answer1").innerHTML = "";
        document.getElementById("answer4").innerHTML = "";
        document.getElementById("50").innerHTML = "Đã dùng";
        document.getElementById('50').disabled  = true;
    }
    if (round === 2) {
        document.getElementById("answer1").innerHTML = "";
        document.getElementById("answer2").innerHTML = "";
        document.getElementById("50").innerHTML = "Đã dùng";
        document.getElementById('50').disabled  = true;
    }
    if (round === 3) {
        document.getElementById("answer4").innerHTML = "";
        document.getElementById("answer2").innerHTML = "";
        document.getElementById("50").innerHTML = "Đã dùng";
        document.getElementById('50').disabled  = true;
    }
    if (round === 4) {
        document.getElementById("answer3").innerHTML = "";
        document.getElementById("answer2").innerHTML = "";
        document.getElementById("50").innerHTML = "Đã dùng";
        document.getElementById('50').disabled  = true;
    }
    if (round === 5) {
        document.getElementById("answer1").innerHTML = "";
        document.getElementById("answer2").innerHTML = "";
        document.getElementById("50").innerHTML = "Đã dùng";
        document.getElementById('50').disabled  = true;
    }
    if (round === 6) {
        document.getElementById("answer4").innerHTML = "";
        document.getElementById("answer1").innerHTML = "";
        document.getElementById("50").innerHTML = "Đã dùng";
        document.getElementById('50').disabled  = true;
    }
    if (round === 7) {
        document.getElementById("answer1").innerHTML = "";
        document.getElementById("answer4").innerHTML = "";
        document.getElementById("50").innerHTML = "Đã dùng";
        document.getElementById('50').disabled  = true;
    }if (round === 8) {
        document.getElementById("answer1").innerHTML = "";
        document.getElementById("answer3").innerHTML = "";
        document.getElementById("50").innerHTML = "Đã dùng";
        document.getElementById('50').disabled  = true;
    }
}
function goidien() {
    document.getElementById("status").innerHTML = "Đừng gọi tốn tiền bạn ơi, lên google nhanh hơn đấy"
}
function  tuvan() {
    document.getElementById("status").innerHTML = "Quay sang hỏi thằng bên cạnh bạn điiii"
}