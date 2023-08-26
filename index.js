const btn =document.getElementById("btn");

// const randomColor = colors[Math.floor(Math.random() * colors.length)];

const changeBg = () => {
    const red =Math.floor(Math.random() * 256);
    const green =Math.floor(Math.random() * 256);
    const blue =Math.floor(Math.random() * 256);

    const rgbColor =`rgb(${red},${green},${blue})` ;

    document.body.style.backgroundColor = rgbColor
} ;
changeBg();
btn.addEventListener("click",changeBg)