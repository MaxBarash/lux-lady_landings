let wrapper = document.querySelector('.wrapper');

function fall() {
    let randomHeight;
    window.innerWidth <= 1000 ? randomHeight = Math.floor(Math.random() * (100 - 50) + 50) :
    window.innerWidth <= 1300 ? randomHeight = Math.floor(Math.random() * (120 - 60) + 60) :
    randomHeight = Math.floor(Math.random() * (150 - 80) + 80);
    

    const randomZindex = Math.floor(Math.random() * 3);
    const randomPoint = Math.floor(Math.random() * window.innerWidth);
    const randomRotate = Math.floor(Math.random() * 360);
    const randomTransition = Math.random() * (1 - 0) + 2;

    const money = document.createElement('img');
    money.classList.add('money');
    money.setAttribute('src', 'images/money.webp');
    money.style.cssText = `
        height: ${randomHeight}px;
        transform: translateX(${randomPoint + randomHeight}px) rotate(${randomRotate}deg);
        top: -${randomHeight}px;
        transition: ${randomTransition}s linear;
        z-index: ${randomZindex === 1 ? 1 : 3};`;

    wrapper.appendChild(money);

    setTimeout(() => {
        money.style.transform = `translate(${randomPoint + randomHeight}px, ${window.innerHeight + randomHeight}px) rotate(${randomRotate * 1.3}deg)`;
        setTimeout(() => {
            const rect = money.getBoundingClientRect();
            if (rect.bottom > 0) {
                money.remove();
            }
        }, randomTransition * 1000);
        fall();
    }, 290);
}

fall();

function adaptationElements() {
    window.innerWidth/window.innerHeight <= 0.49 ? (wrapper.classList.add('modificate1'), wrapper.classList.remove('modificate')) :
    window.innerWidth/window.innerHeight < 1 ? (wrapper.classList.add('modificate'), wrapper.classList.remove('modificate1')) :
    (wrapper.classList.remove('modificate'), wrapper.classList.remove('modificate1'));
};


adaptationElements();

window.addEventListener('resize', adaptationElements);