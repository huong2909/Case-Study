function start() {

    window.onload = function () {
        twominutes = 30;
        let x = document.getElementById("time").innerHTML
        startTimer(twominutes,x)
    }
    audio3.pause()
    audio.play()
    round++
    document.getElementById('status').innerHTML = 'Câu hỏi số: ' + round
    if (round === 1) {
        document.getElementById('50').disabled  = false;
        document.getElementById('play').disabled  = true;
        document.getElementById("50").innerHTML = "50:50";
        document.getElementById("question").innerHTML = million1.question;
        document.getElementById("answer1").innerHTML = million1.answer1;
        document.getElementById("answer2").innerHTML = million1.answer2;
        document.getElementById("answer3").innerHTML = million1.answer3;
        document.getElementById("answer4").innerHTML = million1.answer4;
    }
    if (round === 2) {
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million2.question;
        document.getElementById("answer1").innerHTML = million2.answer1;
        document.getElementById("answer2").innerHTML = million2.answer2;
        document.getElementById("answer3").innerHTML = million2.answer3;
        document.getElementById("answer4").innerHTML = million2.answer4;
    }
    if (round === 3) {
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million3.question;
        document.getElementById("answer1").innerHTML = million3.answer1;
        document.getElementById("answer2").innerHTML = million3.answer2;
        document.getElementById("answer3").innerHTML = million3.answer3;
        document.getElementById("answer4").innerHTML = million3.answer4;
    }
    if (round === 4) {
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million4.question;
        document.getElementById("answer1").innerHTML = million4.answer1;
        document.getElementById("answer2").innerHTML = million4.answer2;
        document.getElementById("answer3").innerHTML = million4.answer3;
        document.getElementById("answer4").innerHTML = million4.answer4;
    }
    if (round === 5) {
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million5.question;
        document.getElementById("answer1").innerHTML = million5.answer1;
        document.getElementById("answer2").innerHTML = million5.answer2;
        document.getElementById("answer3").innerHTML = million5.answer3;
        document.getElementById("answer4").innerHTML = million5.answer4;
    }
    if (round === 6) {
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million6.question;
        document.getElementById("answer1").innerHTML = million6.answer1;
        document.getElementById("answer2").innerHTML = million6.answer2;
        document.getElementById("answer3").innerHTML = million6.answer3;
        document.getElementById("answer4").innerHTML = million6.answer4;
    }
    if (round === 7) {
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million7.question;
        document.getElementById("answer1").innerHTML = million7.answer1;
        document.getElementById("answer2").innerHTML = million7.answer2;
        document.getElementById("answer3").innerHTML = million7.answer3;
        document.getElementById("answer4").innerHTML = million7.answer4;
    }
    if (round === 8) {
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million8.question;
        document.getElementById("answer1").innerHTML = million8.answer1;
        document.getElementById("answer2").innerHTML = million8.answer2;
        document.getElementById("answer3").innerHTML = million8.answer3;
        document.getElementById("answer4").innerHTML = million8.answer4;
    }
}