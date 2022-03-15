class Millionaire {
    constructor(question,answer1,answer2,answer3,answer4,check) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.check = check;
    }
    getQuestion() {
        return this.question;
    }
    setQuestion(question) {
        this.question = question;
    }
    getAnswer1(){
        return this.answer1;
    }
    setAnswer1(answer1){
        this.answer1 = answer1;
    }
    getAnswer2(){
        return this.answer2;
    }
    setAnswer2(answer2){
        this.answer2 = answer2;
    }
    getAnswer3(){
        return this.answer3;
    }
    setAnswer3(answer3){
        this.answer3 = answer3;
    }
    getAnswer4(){
        return this.answer4;
    }
    setAnswer4(answer4){
        this.answer4 = answer4;
    }
    getCheck(){
        return this.check;
    }
    setCheck(check){
        this.check = check;
    }
}
let million1 = new Millionaire("Đâu là một bài hát của nhạc sĩ thế hiển","A:Tóc em đuôi voi","B:Tóc em đuôi gà","C:Tóc em đuôi chó","D:Tóc em đuôi sam","answer2")
let million2 = new Millionaire("Đâu không phải tên phố cổ ở Hà Nội","A:Hàng Thiếc","B:Hàng Đồng","C:Hàng Bạc","D:Hàng Vàng",'answer4')
let million3 = new Millionaire("27-02 là ngày kỉ niệm nào sau đây","A:Ngày thầy thuốc Việt Nam","B:Ngày Quốc tế Thiếu nhi","C:Ngày Quốc tế Đàn ông","D:Ngày quốc tế phụ nữ",'answer1')
let million4= new Millionaire("Đâu là một giải thưởng thuộc lĩnh vực điện ảnh","A:Quả chuối vàng","B:Bắp ngô vàng","C:Múi mít vàng","D:Mâm xôi vàng",'answer4')
let million5 = new Millionaire("Điền từ còn thiếu: Hay làm thì đói, hay ...thì no ","A:Đi chơi","B:Ăn chơi","C:Nói","D:Lười nhác",'answer3')
let million6 = new Millionaire("Bách hợp là tên gọi khác của loài hoa nào","A:Hoa anh đào","B:Hoa loa kèn","C:Hoa phong lan","D:Hoa hướng dương",'answer2')
let million7 = new Millionaire("Loài thực vật nào cổ nhất trên trái đất?","A:Dương xỉ","B:Rong biển","C:Rêu","D:Tảo",'answer3')
let million8 = new Millionaire("Vịnh Vĩnh Hy nằm ở tỉnh nào nước ta","A:Bình Thuận","B:Phú Yên","C:Ninh Thuận","D:Quảng Ninh",'answer3')
