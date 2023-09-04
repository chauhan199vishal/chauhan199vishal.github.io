//Side nav start--
$(document).ready(function () {
    $('.sidenav').sidenav();
});
//Side nav end--

//Carousel start--
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        fullWidth: true,
        indicators: true
    };
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
    setInterval(function () {
        $('#demo-carousel-auto').carousel('next');
    }, 5000);

});
//Carousel end--


// website dark/light mode toggle start--
const toggleButton = document.getElementById('themeToggleButton');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
});
// website dark/light mode toggle end--

//Landing page intro banne start--
$(document).ready(function () {
    $('.parallax').parallax();
});

//Landing page intro banner end--

//social icons model start--
document.addEventListener('DOMContentLoaded', function () {
    var options =
    {
        inDuration: 800,
        outDuration: 2500,
        preventScrolling: false,
        dismissible:true
    };
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});
//social icons model end--

//input chanrecter counter start--
$('input#txtname, input#txtphone, input#txtemail, textarea#txtquery').characterCounter();

//input chanrecter counter end--