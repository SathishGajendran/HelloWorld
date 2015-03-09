


function canvas_load() {
    var canvas = $(".sign");
    var canvasCopy = $(".signcopy");
    var canvasContext;
    var canvasContextCopy = [];
    var mouseCanvasClick = false;
    var prevX, prevY;
    var can = document.getElementById('canvasid1');
    canvasContext = can.getContext('2d');
    canvasContext.moveTo(0, 48);
    canvasContext.lineTo(500, 48);
    canvasContext.stroke();


    for (i = 0; i < canvasCopy.length; i++) {
        canvasContextCopy[i] = canvasCopy[i].getContext('2d');
    }
    for (i = 0; i < canvasContextCopy.length; i++) {
        canvasContextCopy[i].beginPath();
        canvasContextCopy[i].lineWidth = 2;
        canvasContextCopy[i].strokeStyle = "black";
        canvasContextCopy[i].moveTo(0, 48);
        canvasContextCopy[i].lineTo(500, 48);
        canvasContextCopy[i].stroke();
        canvasContextCopy[i].closePath();
    }

    canvas.mousedown(function (e) {

        mouseCanvasClick = true;
        prevX = e.pageX - this.offsetLeft;
        prevY = e.pageY - this.offsetTop;
        Draw(prevX + 1, prevY + 1);

    });

    canvas.mousemove(function (e) {

        if (mouseCanvasClick) {
            Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        }
    });

    $('*').mouseup(function (e) {

        mouseCanvasClick = false;

    });



    canvas.mouseenter(function (e) {

        if (mouseCanvasClick) {
            Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        }
    });





    function Draw(x, y) { 
        if (mouseCanvasClick) {
            canvasContext.beginPath();
            canvasContext.lineCap = "round";
            canvasContext.lineJoin = "round";
            canvasContext.lineWidth = 3;
            canvasContext.strokeStyle = "blue";
            canvasContext.moveTo(prevX, prevY);
            canvasContext.lineTo(x, y);
            canvasContext.stroke();
            canvasContext.closePath();
        }
        prevX = x;
        prevY = y;
    }
}


function putImage() {
    //var canvas1 = document.getElementById("canvasSignature");
    var can = document.getElementById('canvasid1');
    //canvasContext = can.getContext('2d');
    if (can.getContext) {
        var ctx = can.getContext("2d");
        var myImage = can.toDataURL("image/png");
    }
    var imageElement = new imageElement();
    imageElement.src = myImage;

}

function ApplyButton_onclick() {
    var i;
    var canvas = $(".sign");
    var canvasCopy = $(".signcopy");
    var canvasContextCopy = [];

    if ($('#canvasid1').is(':visible')) {
        var can = document.getElementById('canvasid1');
        var canvasContext = can.getContext('2d');
        var content = canvasContext.getImageData(0, 0, can.width, can.height);
    }
    else {
        var signText = $("#txtCanvas1").val();
    }

    for (i = 0; i < canvasCopy.length; i++) {
        canvasContextCopy[i] = canvasCopy[i].getContext('2d');
    }

    for (i = 0; i < canvasContextCopy.length; i++) {
        if ($('#canvasid1').is(':visible')) {
            canvasContextCopy[i].putImageData(content, 0, 0);
        }
        else {
            canvasContextCopy[i].clearRect(0, 0, canvasCopy[i].width, canvasCopy[i].height);
            canvasContextCopy[i].beginPath();
            canvasContextCopy[i].lineWidth = 2;
            canvasContextCopy[i].strokeStyle = "black";
            canvasContextCopy[i].moveTo(0, 48);
            canvasContextCopy[i].lineTo(500, 48);
            canvasContextCopy[i].stroke();
            canvasContextCopy[i].closePath();
            canvasContextCopy[i].font = "16pt Arial";
            canvasContextCopy[i].fillText(signText, 0, 28);
        }
    }
}

function ClearCanvas() {
    var can = document.getElementById('canvasid1');
    var canvasContext = can.getContext('2d');
    canvasContext.clearRect(0, 0, can.width, can.height);
    canvasContext.beginPath();
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = "black";
    canvasContext.moveTo(0, 48);
    canvasContext.lineTo(500, 48);
    canvasContext.stroke();
    canvasContext.closePath();
    $("#txtCanvas1").val('');
   

}



function Clear_onclick() {
    var can = document.getElementById('canvasid1');
    var canvasContext = can.getContext('2d');
    var dataUrl = can.toDataURL();
    //alert(dataUrl);
  //  var imageElement = document.getElementById("MyPix");
   // imageElement.src = dataUrl;


    var imageElement = document.createElement("img");
    imageElement.src = dataUrl
    
    
    var cann = document.getElementById('canvasid2');
    var ctx = cann.getContext('2d');
   
    ctx.drawImage(imageElement, 0, 0);
    
    var x = confirm("do u want clear the content");
    if (x) {
        ClearCanvas();
    }
    putImage();
}


function chechBoxCanvas_onchange(e) {
    var checkboxState = document.getElementById("checkBoxCanvas").checked;
    var x = confirm("do u want clear the content");
    if (checkboxState) {

        if (x) {
            $(".sign").hide();
            $("#txtCanvas1").val('');
            $("#txtCanvas1").show();
        }
        else {
            document.getElementById("checkBoxCanvas").checked = false;
        }
    }
    else {
        if (x) {
            $("#txtCanvas1").hide();
            ClearCanvas();
            $(".sign").show();
        }
        else {
            document.getElementById("checkBoxCanvas").checked = true;
        }

    }
}
