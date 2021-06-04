        const footerNav = document.getElementById('footer-nav');
        const navigationHeader = document.querySelectorAll('div.footer__header');

        navigationHeader.forEach(item => item.addEventListener('click', function(e) {

        if(document.documentElement.offsetWidth < 768) {
            const navigationHeaderIcon = this.querySelector('i');

            navigationHeaderIcon.classList.toggle('active');

            this.classList.toggle('active');
            
            let navigationBody = this.nextElementSibling;


            if(navigationBody.style.maxHeight) {
                navigationBody.style.maxHeight = null;
            } else {
                navigationBody.style.maxHeight = `${navigationBody.scrollHeight}px`;
            }
        }

            
        }));