window.onload = pageLoad;

function pageLoad(){
    document.getElementById("start").onclick = startGame;
}

function startGame(){
    // รับค่าจำนวนสี่เหลี่ยมจาก input
    var numbox = document.getElementById("numbox").value;
    var color = document.getElementById("color").value;
    
    // ตรวจสอบว่าผู้ใช้กรอกจำนวนกล่องหรือไม่
    if (numbox === "" || isNaN(numbox)) {
        alert("Please enter a valid number of boxes.");
        return;
    }
    
    alert("Ready");
    addBox(numbox, color);
    timeStart();
}

function timeStart(){
    var TIMER_TICK = 1000; // หน่วยเป็นมิลลิวินาที (1000 = 1 วินาที)
    var timer = null;
    var min = 0.5; // 0.5 นาที หรือ 30 วินาที
    var second = min * 60;
    var x = document.getElementById('clock');
    
    // ตั้งเวลาโดยใช้ setInterval
    timer = setInterval(timeCount, TIMER_TICK);

    function timeCount(){
        second--;
        x.innerHTML = second;

        var allbox = document.querySelectorAll("#layer div");
        
        if (allbox.length === 0 && second > 0) {
            // ถ้าลบกล่องหมดก่อนเวลา
            alert("You win!");
            clearInterval(timer);
            clearScreen();
        } else if (second <= 0) {
            // ถ้าเวลาหมดแต่ยังมีสี่เหลี่ยมอยู่
            alert("Game over!");
            clearInterval(timer);
            clearScreen();
        }
    }
}

function addBox(numbox, color){
    var gameLayer = document.getElementById('layer');
    gameLayer.innerHTML = ""; // เคลียร์หน้าจอก่อนสร้างใหม่
    
    for (var i = 0; i < numbox; i++){
        var tempbox = document.createElement('div');
        tempbox.className = 'square';
        tempbox.id = "box" + i;
        tempbox.style.backgroundColor = color;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        tempbox.style.position = "absolute";
        
        // เพิ่มกล่องไปที่ gameLayer
        gameLayer.appendChild(tempbox);
        
        // ผูก event เมื่อคลิกให้กล่องหายไป
        bindBox(tempbox);
    }
}

function bindBox(box){
    box.onclick = function(){
        // เมื่อกดกล่องจะถูกลบ
        box.remove();
    }
}

function clearScreen(){
    // ลบกล่องทั้งหมดจากหน้าจอ
    var allbox = document.querySelectorAll("#layer div");
    
    for (var i = 0; i < allbox.length; i++){
        allbox[i].remove();
    }
}
