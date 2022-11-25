// let eraser = document.getElementById("eraser");
//         let pencil = document.getElementById("pencil");

//         let pencilX = pencil.style.left;
//         let pencilY = pencil.style.top;

//         let eraserX = eraser.style.left;
//         let eraserY = eraser.style.top;


//         let imgs = document.querySelectorAll("#img .img");
//         let target = undefined;

//         for (var i = 0; i < imgs.length; i++) {
//             var item = imgs.item(i);
//             item.style.border = "2px solid #ff0000";
//             item.style.left = (i * 62) + "px";
//         }

//         function pencilSet(target) {
//             if (target == undefined) {
//                 document.body.onmousemove = function (e) {

//                 }
//             } else {
//                 document.body.onmousemove = function (e) {
//                     target.style.top = (e.clientY - target.height) + "px";
//                     target.style.left = (e.clientX) + "px";
//                     target.style.zIndex = "1";
//                 }
//             }

//         }
//         function eraserSet(target) {
//             if (target == undefined) {
//                 document.body.onmousemove = function (e) {

//                 }
//             } else {
//                 document.body.onmousemove = function (e) {
//                     target.style.top = (e.clientY - target.height / 2) + "px";
//                     target.style.left = (e.clientX - target.width / 2) + "px";
//                     target.style.zIndex = "1";
//                 }
//             }

//         }

        
//         pencil.onmouseover = function (e) {
//             // document.body.style.cursor = "none";
//             target = this;
//             pencilSet(this);
//         }
//         eraser.onmouseover = function () {
//             target = this;
//             eraserSet(this);
//         }


//         pencilSet();

       

//         const element1 = document.getElementById("box1");
//         const element2 = document.getElementById("box2");
//         const element3 = document.getElementById("box3");
//         const element4 = document.getElementById("box4");

//         const eraserRect = eraser.getBoundingClientRect();
//         const pencilRect = pencil.getBoundingClientRect();

//         const clientRect1 = element1.getBoundingClientRect();
//         const clientRect2 = element2.getBoundingClientRect();
//         const clientRect3 = element3.getBoundingClientRect();
//         const clientRect4 = element4.getBoundingClientRect();

//         function Box(x, y, width, height){
//             this.x = x;
//             this.y = y;
//             this.width = width;
//             this.height = height; 
//         }
//         function init(){ 
//             drawBox();
//         }
//         function drawBox() {
//             boxPositionE = new Box(eraserRect.x, eraserRect.y, eraserRect.width, eraserRect.height);
//             boxPositionP = new Box(pencilRect.x, pencilRect.y, pencilRect.width, pencilRect.height);

//             boxPosition1 = new Box(clientRect1.x, clientRect1.y, clientRect1.width, clientRect1.height);
//             boxPosition2 = new Box(clientRect2.x, clientRect2.y, clientRect2.width, clientRect2.height);
//             boxPosition3 = new Box(clientRect3.x, clientRect3.y, clientRect3.width, clientRect3.height);
//             boxPosition4 = new Box(clientRect4.x, clientRect4.y, clientRect4.width, clientRect4.height);
//         }


//         function onMousemove(e){
//             drawBox();
//             mouseXinCanvas = e.clientX;
//             mouseYinCanvas = e.clientY;

//             if(IsCollision(boxPositionE, mouseXinCanvas, mouseYinCanvas)){
//                 if(target != undefined) {
//                     if (target.id == "pencil") {
//                         console.log("지우개");
//                         document.body.onmousemove = null;
//                         pencil.style.left = pencilX;
//                         pencil.style.top = pencilY;
//                     }
//                 } 
//             }
//             if(IsCollision(boxPositionP, mouseXinCanvas, mouseYinCanvas)){
//                 if(target != undefined) {
//                     if (target.id == "eraser") {
//                         console.log("연필");
//                         document.body.onmousemove = null;
//                         eraser.style.left = eraserX;
//                         eraser.style.top = eraserY;
//                     }
//                 } 
//             }

//             if(IsCollision(boxPosition1, mouseXinCanvas, mouseYinCanvas)){
//                 console.log("box1");
//                 if(target != undefined) {
//                     if (target.id == "pencil") {
//                         element1.style.opacity = "1";
//                     }
//                 } 
//             }
//             if(IsCollision(boxPosition2, mouseXinCanvas, mouseYinCanvas)){
//                 console.log("box2");
//                 if(target != undefined) {
//                     if (target.id == "pencil") {
//                         element2.style.opacity = "1";
//                     }
//                 } 
//             }
//             if(IsCollision(boxPosition3, mouseXinCanvas, mouseYinCanvas)){
//                 console.log("box3");
//                 if(target != undefined) {
//                     if (target.id == "pencil") {
//                         element3.style.opacity = "1";
//                     }
//                 } 
//             }
//             if(IsCollision(boxPosition4, mouseXinCanvas, mouseYinCanvas)){
//                 console.log("box4");
//                 if(target != undefined) {
//                     if (target.id == "pencil") {
//                         element4.style.opacity = "1";
//                     }
//                 } 
//             }

//             if(IsCollision(boxPosition1, mouseXinCanvas, mouseYinCanvas)){
//                 console.log("box1");
//                 if(target != undefined) {
//                     if (target.id == "eraser") {
//                         element1.style.opacity = "0";
//                     }
//                 } 
//             }
//             if(IsCollision(boxPosition2, mouseXinCanvas, mouseYinCanvas)){
//                 console.log("box2");
//                 if(target != undefined) {
//                     if (target.id == "eraser") {
//                         element2.style.opacity = "0";
//                     }
//                 } 
//             }
//             if(IsCollision(boxPosition3, mouseXinCanvas, mouseYinCanvas)){
//                 console.log("box3");
//                 if(target != undefined) {
//                     if (target.id == "eraser") {
//                         element3.style.opacity = "0";
//                     }
//                 } 
//             }
//             if(IsCollision(boxPosition4, mouseXinCanvas, mouseYinCanvas)){
//                 console.log("box4");
//                 if(target != undefined) {
//                     if (target.id == "eraser") {
//                         element4.style.opacity = "0";
//                     }
//                 } 
//             }
 
//             document.getElementById("mouse").innerText = "x:" + mouseXinCanvas + ", y:" + mouseYinCanvas;
//             document.getElementById("boxXY").innerText = "x:" + clientRect1.x + ", y:" + clientRect1.y;
//             }

//         function IsCollision(box, x, y){    
//             return  x > box.x  && x < box.x + box.width && y > box.y  && y < box.y + box.height      
//         }

//         window.addEventListener("load", init, false);
//         window.addEventListener("mousemove", onMousemove, false);


