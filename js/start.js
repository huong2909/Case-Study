function start() {
    audio3.pause()
    audio.play()
    round++
    document.getElementById('status').innerHTML = 'Câu hỏi số: ' + round
    if (round === 1) {
        thoigian(15)

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
        thoigian(15)
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million2.question;
        document.getElementById("answer1").innerHTML = million2.answer1;
        document.getElementById("answer2").innerHTML = million2.answer2;
        document.getElementById("answer3").innerHTML = million2.answer3;
        document.getElementById("answer4").innerHTML = million2.answer4;
    }
    if (round === 3) {
        thoigian(15)
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million3.question;
        document.getElementById("answer1").innerHTML = million3.answer1;
        document.getElementById("answer2").innerHTML = million3.answer2;
        document.getElementById("answer3").innerHTML = million3.answer3;
        document.getElementById("answer4").innerHTML = million3.answer4;
    }
    if (round === 4) {
        thoigian(15)
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million4.question;
        document.getElementById("answer1").innerHTML = million4.answer1;
        document.getElementById("answer2").innerHTML = million4.answer2;
        document.getElementById("answer3").innerHTML = million4.answer3;
        document.getElementById("answer4").innerHTML = million4.answer4;
    }
    if (round === 5) {
        thoigian(15)
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million5.question;
        document.getElementById("answer1").innerHTML = million5.answer1;
        document.getElementById("answer2").innerHTML = million5.answer2;
        document.getElementById("answer3").innerHTML = million5.answer3;
        document.getElementById("answer4").innerHTML = million5.answer4;
    }
    if (round === 6) {
        thoigian(15)
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million6.question;
        document.getElementById("answer1").innerHTML = million6.answer1;
        document.getElementById("answer2").innerHTML = million6.answer2;
        document.getElementById("answer3").innerHTML = million6.answer3;
        document.getElementById("answer4").innerHTML = million6.answer4;
    }
    if (round === 7) {
        thoigian(15)
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million7.question;
        document.getElementById("answer1").innerHTML = million7.answer1;
        document.getElementById("answer2").innerHTML = million7.answer2;
        document.getElementById("answer3").innerHTML = million7.answer3;
        document.getElementById("answer4").innerHTML = million7.answer4;
    }
    if (round === 8) {
        thoigian(15)
        document.getElementById('play').disabled  = true;
        document.getElementById("question").innerHTML = million8.question;
        document.getElementById("answer1").innerHTML = million8.answer1;
        document.getElementById("answer2").innerHTML = million8.answer2;
        document.getElementById("answer3").innerHTML = million8.answer3;
        document.getElementById("answer4").innerHTML = million8.answer4;
    }

}