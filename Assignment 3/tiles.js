function drawTiles() {
    const grid = document.querySelector("#gridbackground");
    var red=0;
    var green= 227;
    var blue= 255; 
    for (let i = 0; i < 10; i++) {
        for(let j=0;j<10;j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.position="absolute"
            square.style.top=i*50+"px";
            square.style.width = "50px";
            square.style.height = "50px";
            square.style.right = j*50+"px";
            var diag= Math.sqrt(Math.pow(i,2)+Math.pow(j,2));
            var newR=red+27*i;
            var newB=blue-14*j;
            var newG=green-14*diag;
            var color="rgb("+newR+","+newG+","+newB+")";
            square.style.backgroundColor = color;
            grid.appendChild(square)


        }
    }

}