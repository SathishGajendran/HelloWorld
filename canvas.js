$(document).ready(function () {
    var Canvas = $('#gradCanvas')[0];
    var PrevX, PrevY, CanvasClick = false, InitialPointY;
    var CanvasContext = Canvas.getContext('2d');
    Canvas.onmousedown = function (e) {
        CanvasClick = true;
        InitialPointY = e.offsetY;
        PrevX = e.offsetX;
        PrevY = e.offsetY;
    };
    Canvas.onmousemove = function (e) {
        if (CanvasClick) {
            Draw(e.offsetX, e.offsetY);
            PrevY = e.offsetY;
        }
    };
    document.onmouseup = function (e) {
        CanvasClick = false;
    };
    function Draw(CurrentX, CurrentY) {
        if (CanvasClick) {
            CanvasContext.fillStyle = "red";
            if (InitialPointY > PrevY) {
                CanvasContext.clearRect(0, 0, 200, CurrentY);
                CanvasContext.fillRect(0, CurrentY, 200, PrevY - CurrentY);
            }
            else if (InitialPointY < PrevY) {
                CanvasContext.clearRect(0, PrevY, 200, 500);
                CanvasContext.fillRect(0, PrevY, 200, CurrentY - PrevY);
            }
        }
    }
});
