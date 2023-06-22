const btnEl = document.querySelector("#generate");

const getRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max-min +1)+ min);
}

const generate = ()=>{
    const minEl = document.querySelector("#min");
    const maxEl = document.querySelector("#max");
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    console.log(typeof(min))

    const plaseholderEL = document.querySelector("#placeholder");
    plaseholderEL.textContent = getRandomNumber(min, max);
}


btnEl.addEventListener('click', generate);

