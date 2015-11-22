 var btn = document.querySelector('.show-form');
        var form = document.querySelector('.form-content');

        btn.addEventListener('click', function () {
            form.classList.add('is-open');
        });