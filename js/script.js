// Enable Navbar Visible on Scroll feature
// on larger device
$(document).ready(() => {
    $(".landing").css("height", window.innerHeight);
    $(".landing img").css("height", window.innerHeight);
    $(".overlay").css("height", window.innerHeight);
    
    if ($(window).width() >= 768) {
        $(window).scroll(() => {
            if ($(window).scrollTop() >= 50) {
                $('.navbar').css('background-color', '#343a40');
            } else {
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }

    $('#sock').tooltip({
        title: "Sock is the first android application I created with very little knowledge of " + 
        "Android Development. The app itself works for muting/turning off your phone automatically. " + 
        "You specify the time and your phone will be muted/turned off when it's time."
    });

    $('#bssc').tooltip({
        title: "BSSC Webpage is the website for BSSC as its identity. I work in a team of two people " +
        "(including me), and our job is to reimplement a new design into the website. You can find any " + 
        "information related to BSSC here. bscc.or.id"
    });

    $('#attendance').tooltip({
        title: "I participated in an event as a staff, and each staff from other divisions has their " +
        "decorating schedule. So, I created an attendance system to keep track of their attendance time. " +
        "They will get points based on their spent time (in minutes) and will be shown on the leaderboard page."
    });

    $('#flappy-chaos').tooltip({
        title: "Flappy Chaos is a game inspired by Flappy Bird. Instead of avoiding moving pipes, " +
        "you will face enemies that keep coming towards you. Shoot all of them, don't die, and get the " +
        "highest score."
    });
})
