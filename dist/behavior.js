let slider = document.querySelector("#toggler");
let basicPrice = document.querySelector("#basicPrice");
let proPrice = document.querySelector("#proPrice");
let masterPrice = document.querySelector("#masterPrice");
slider.checked = false;


slider.addEventListener("click", function(){
    if(slider.checked){
        basicPrice.innerText = "$199.99";
        proPrice.innerText = "$249.99";
        masterPrice.innerText = "$399.99";
    }
    else{
        basicPrice.innerText = "$19.99";
        proPrice.innerText = "$24.99";
        masterPrice.innerText = "$39.99";

    }
});

document.addEventListener('keyup', (event) => {
    if(event.keyCode === 13){
        slider.click();
    }
});
