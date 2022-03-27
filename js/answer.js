function answer(id) {
    let nextRound = round + 1;
    if (round === 1) {

        if (id === million1.check) {
            check = true
            document.getElementById('play').innerHTML = 'Xin mời bạn đến với câu hỏi số: ' + nextRound;
            document.getElementById('status').innerHTML = 'Câu này thì ai chả đúng!!! tiếp đi bạn ơi'
            document.getElementById("score").innerHTML = "200 điểm"
            document.getElementById("giay").innerHTML = "0"
            clearTime()
        } else {
            check = false;
            round = 0;
            document.getElementById('status').innerHTML = 'Ahihi sai rồi đồ ngốc ạ!!! Hãy bắt đầu lại'
            document.getElementById('play').innerHTML = "Start game"
            clearTime()
        }
        document.getElementById('play').disabled  = false;
    }
    if (round === 2) {
        if(thoiluong<0) {
            audio.pause()
            round = 0;
            audio2.play()
        }
        if (id === million2.check) {
            check = true
            document.getElementById('play').innerHTML = 'Xin mời bạn đến với câu hỏi số: ' + nextRound;
            document.getElementById('status').innerHTML = 'Đúng rồi bạn giỏi vãiiiii'
            document.getElementById("score").innerHTML = "400 Điểm"
            clearTime()
        } else {
            round = 0;
            check = false;
            document.getElementById('status').innerHTML = 'Ahihi sai rồi đồ ngốc ạ!!! Hãy bắt đầu lại'
            document.getElementById('play').innerHTML = "Start game"
            clearTime()
        }
        document.getElementById('play').disabled  = false;
    }
    if (round === 3) {
        if (id === million3.check) {
            check = true
            document.getElementById('play').innerHTML = 'Xin mời bạn đến với câu hỏi số: ' + nextRound;
            document.getElementById('status').innerHTML = 'Chúc mừng bạn đã trả lời đúng'
            document.getElementById("score").innerHTML = "600 Điểm"
            clearTime()
        } else {
            round = 0;
            check = false;
            document.getElementById('status').innerHTML = 'Bạn trả lời sai !!!'
            document.getElementById('play').innerHTML = "Start game"
            clearTime()
        }
        document.getElementById('play').disabled  = false;
    }
    if (round === 4) {
        if (id === million4.check) {
            check = true
            document.getElementById('play').innerHTML = 'Xin mời bạn đến với câu hỏi số: ' + nextRound;
            document.getElementById('status').innerHTML = 'Chúc mừng bạn đã trả lời đúng'
            document.getElementById("score").innerHTML = "1000 Điểm"
            clearTime()
        } else {
            round = 0;
            check = false;
            document.getElementById('status').innerHTML = 'Bạn trả lời sai !!!'
            document.getElementById('play').innerHTML = "Start game"
            clearTime()
        }
        document.getElementById('play').disabled  = false;
    }
    if (round === 5) {
        if (id === million5.check) {
            check = true
            document.getElementById('play').innerHTML = 'Xin mời bạn đến với câu hỏi số: ' + nextRound;
            document.getElementById('status').innerHTML = 'Chúc mừng bạn đã trả lời đúng'
            document.getElementById("score").innerHTML = "2000 Điểm"
            clearTime()
        } else {
            round = 0;
            check = false;
            document.getElementById('status').innerHTML = 'Bạn trả lời sai !!!'
            document.getElementById('play').innerHTML = "Start game"
            clearTime()
        }
        document.getElementById('play').disabled  = false;
    }
    if (round === 6) {
        if (id === million6.check) {
            check = true
            document.getElementById('play').innerHTML = 'Xin mời bạn đến với câu hỏi số: ' + nextRound;
            document.getElementById('status').innerHTML = 'Chúc mừng bạn đã trả lời đúng'
            document.getElementById("score").innerHTML = "4000 Điểm"
            clearTime()
        } else {
            round = 0;
            check = false;
            document.getElementById('status').innerHTML = 'Bạn trả lời sai !!!'
            document.getElementById('play').innerHTML = "Start game"
            clearTime()
        }
        document.getElementById('play').disabled  = false;
    }
    if (round === 7) {
        if (id === million7.check) {
            check = true
            document.getElementById('play').innerHTML = 'Xin mời bạn đến với câu hỏi số: ' + nextRound;
            document.getElementById('status').innerHTML = 'Chúc mừng bạn đã trả lời đúng'
            document.getElementById("score").innerHTML = "6000 Điểm"
            clearTime()
        } else {
            round = 0;
            check = false;
            document.getElementById('status').innerHTML = 'Bạn trả lời sai !!!'
            document.getElementById('play').innerHTML = "Start game"
            clearTime()
        }
        document.getElementById('play').disabled  = false;
    }
    if (round === 8) {
        if (id === million8.check) {
            check = true
            round=0
            document.getElementById('play').innerHTML = 'Xin mời bạn đến với câu hỏi số: ' + nextRound;
            document.getElementById('status').innerHTML = 'Bạn đã giành được số điểm cao nhất 10000 điểm'
            document.getElementById("score").innerHTML = "10000 Điểm"
            document.getElementById('play').innerHTML = "Start game"
            clearTime()
        } else {
            round = 0;
            check = false;
            document.getElementById('status').innerHTML = 'Bạn trả lời sai !!!'
            document.getElementById('play').innerHTML = "Start game"
            clearTime()
        }
        document.getElementById('play').disabled  = false;
    }
    if (check) {
        audio.pause()
        let audio1 = new Audio('audio/dap.an.dung.mp3')
        audio1.play()
    } else {
        audio.pause()
        let audio2 = new Audio('audio/sai2.mp3')
        audio2.play()
    }

}
