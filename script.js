document.addEventListener('scroll', function() {
    const parallax1 = document.getElementById('parallax1');
    const parallax2 = document.getElementById('parallax2');

    let scrollPosition = window.pageYOffset;

    parallax1.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    parallax2.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
