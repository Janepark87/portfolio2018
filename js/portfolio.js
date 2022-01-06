// Project: modal
function opneProject() {
    document.getElementById('project-modal').style.display = "block";
}
function closeProject() {
    document.getElementById('project-modal').style.display = "none";
}

// About: Split images
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.aboutImg_wrapper');
// Left
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});
// right
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});


// Navbar: scroll
$(document).ready(function() {
    //Navbar: Fiexed on the top
    $(window).scroll(function() {
        if($(document).scrollTop() > 655 ){
            $('nav').addClass('fixed_nav');
        }
        else {
            $('nav').removeClass('fixed_nav');
        }
    });

    // Navvar: Link click event
    let headerHeight = $('nav').height();
    let scrollLink = $('.scroll');
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - headerHeight
        }, 1000 );
    });

    // simple scroll Back-to-top Button
    var btn = $('.backTop');
    $(window).scroll(function() {
        var height = $(this).height();
        var width = $(this).width();

        if($(this).scrollTop() > height && width > 750){    
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });
    btn.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


// ScrollReveal - scroll animation to element
//******************************************** Main: banner
window.sr = ScrollReveal();
sr.reveal('.banner_sm_links', {
    duration: 800,
    origin: 'right',
    distance: '400px'
});
sr.reveal('.banner_links', {
    duration: 800,
    origin: 'right',
    distance: '400px'
});
sr.reveal('.hello', {
    duration: 800,
    origin: 'right',
    distance: '400px'
});
sr.reveal('.jobName', {
    delay: 200,
    duration: 800,
    origin: 'right',
    distance: '400px'
});
sr.reveal('.name', {
    delay: 200,
    duration: 1500,
    origin: 'left',
    distance: '800px'
});
//******************************************** What I can
sr.reveal('.js_res', {
    delay: 100,
    duration: 500,
    easing: 'steps(4)',
    scale: 0.85,
    scale: 0.7,
});
sr.reveal('.js_web', {
    delay: 100,
    duration: 500,
    easing: 'steps(4)',
    scale: 0.85,
    scale: 0.7,
});
sr.reveal('.js_des', {
    delay: 100,
    duration: 500,
    easing: 'steps(4)',
    scale: 0.85,
    scale: 0.7,
});
//******************************************** Who I am
sr.reveal('.js_info', {
    duration: 800,
    delay: 100,
    easing: 'ease-in'
});
sr.reveal('.hireMe', {
    delay: 400,
    duration: 800,
    origin: 'top',
    scale: 0.85,
    viewFactor: 0.8
});
//******************************************** Project
sr.reveal('.p6', {
    duration: 800,
    origin: 'right',
    distance: '200px'
});
sr.reveal('.p5', {
    duration: 800,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.p4', {
    duration: 800,
    origin: 'right',
    distance: '200px'
});
sr.reveal('.p3', {
    duration: 800,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.p2', {
    duration: 800,
    origin: 'right',
    distance: '200px'
});
sr.reveal('.p1', {
    duration: 800,
    origin: 'left',
    distance: '200px'
});
//******************************************** Resume
sr.reveal('.resume_wrapper', {
    mobile: false,
    duration: 1000,
    delay: 300,
    rotate: {
        y: 540,
        z: 0
    }
});
sr.reveal('.r1', {
    duration: 500,
    origin: 'bottom',
    scale: 0.85,
    viewFactor: 0.8
});
sr.reveal('.r2', {
    duration: 500,
    origin: 'bottom',
    scale: 0.85,
    viewFactor: 0.8
});
sr.reveal('.r3', {
    duration: 500,
    origin: 'bottom',
    scale: 0.85,
    viewFactor: 0.8
});
sr.reveal('.r4', {
    duration: 500,
    origin: 'bottom',
    scale: 0.85,
    viewFactor: 0.8
});
sr.reveal('.r5', {
    duration: 500,
    origin: 'bottom',
    scale: 0.85,
    viewFactor: 0.8
});
sr.reveal('.js_pdf', {
    duration: 700,
    origin: 'bottom',
    scale: 0.85,
    viewFactor: 0.8
});
//******************************************** Contact
sr.reveal('.contact_title', {
    delay: 200,
    duration: 800,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.contact_contents', {
    delay: 300,
    duration: 1000,
    easing: 'steps(7)',
    scale: 0.85,
    scale: 0.7,
});
sr.reveal('.js_getin', {
    delay: 200,
    duration: 800,
    origin: 'right',
    distance: '200px'
});
sr.reveal('.js_msg', {
    duration: 1500,
    delay: 300,
    rotate: {
        y: 5000,
        z: 180
    }
});
