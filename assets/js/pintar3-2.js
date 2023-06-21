
    // 3.2
//    let ele = document.getElementById("ele1");


   let ele = document.getElementById("ele1");
   ele.style.backgroundColor = 'green'; // Establecer color verde predeterminado
   ele.addEventListener("click", function() { pintar('yellow') });

    function pintar(color){
    ele.style.backgroundColor = color;
    }

