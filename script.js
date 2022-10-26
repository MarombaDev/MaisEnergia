window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-2', { duration: 2000 });

sr.reveal('.area-1',{
    rotate: {x:0, y:80, z:0},
    duration: 2000
});

sr.reveal('.area-3' ,{
    rotate: {x:80, y:0, z:0},
    duration: 3000
});

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const value = name.value;
    return false()
    

    
});