console.log('1. верстка валидная +10,\n 2. верстка семантическая +17,\n 3. верстка соответсвует макекту +48,\n 4. требования к css +10,\n 5. интекрактивность +15, \n total: 100');

//burger-handler 
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.header-nav-close')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    });
})();

