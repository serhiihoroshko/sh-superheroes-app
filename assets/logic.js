autoSlider();
var left = 0;
var timer;

function autoSlider() {
    timer = setTimeout(function () {
        var rules = document.getElementById('rules');
        left = left - 128;
        if (left < -1024) {
            left = 0;
            clearTimeout(timer);
        }
        rules.style.left = left + 'px';
        autoSlider();
    }, 2000);
}