const burgerIcon = document.querySelector('.nav-icon');
const menuContent = document.querySelector('#burger-target');

function toggleNavbar(e) {
    burgerIcon.classList.toggle('active');
    menuContent.classList.toggle('active');
}

document.addEventListener('scroll', () => {
    const searchResult = document.querySelector('div.search-result')
    let resultBlockPosition = searchResult.getBoundingClientRect();
    const stickyElem = document.getElementById('sticky');
    
    if(resultBlockPosition.top < -20) {
        stickyElem.classList.add('sticky--animation');
        stickyElem.style.left = `${resultBlockPosition.left}px`;
        stickyElem.style.width = `${resultBlockPosition.width}px`;
        console.log(stickyElem.style.left)

    } else {
        stickyElem.classList.remove('sticky--animation');
    }
})