let jobSearchInput = document.querySelector('.job-search__input');
let hiddenElements = document.querySelectorAll('div.job-search__mobile--hidden');
let jobSearchBtn = document.querySelector('.job-search__btn');
let open = false;

jobSearchInput.addEventListener('click', animationDisplay)




function animationDisplay(e) {

    if(document.body.clientWidth < 1000) {

        hiddenElements.forEach(item => item.classList.toggle('show'));
        hiddenElements.forEach(item => item.classList.toggle('animation'));

    }   
}
