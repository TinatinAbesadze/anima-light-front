

// open and close video on main page

$(document).on('click', function (event) {
    if ($(event.target).hasClass('trigger-vid') && !$(".show-tutorial").hasClass('show')) {
        $(".show-tutorial").addClass("show");
        $("#tutorial-video").addClass("hide-tutorial");
        $(".anima-video-frame").addClass("started");
        $(".tutorial-title").addClass("hide-item");
        $(".anima-pricing ").css("marginTop", "20vh");
        $(".trigger-vid path").addClass("hide-item");
    } else {
        if ($(event.target).hasClass("chat-anima-btn")) {

            //do nothing, ეს ხელს უშლის დაელაპარაკე ანიმას ფბ ჩეთს
        } else {
            $(".show-tutorial").removeClass("show");
            $("#tutorial-video").removeClass("hide-tutorial");
            $(".anima-video-frame").removeClass("started");
            $(".tutorial-title").removeClass("hide-item");
            $('iframe').attr('src', $('iframe').attr('src'));
            $(".anima-pricing ").css("marginTop", "20vh");
            $(".trigger-vid path").removeClass("hide-item");
        }
    };
});


// bots have green outile on hover on assists page

$(".assists-bot").hover(function (e) {
    $(this).find("img").toggleClass("active-bot");
});

// info-box on click -- bots

$(".assists-bot").on("click", function (e) {
    $(".assists-bot").removeClass("active-bot");
    $(".assists-info-box article").addClass("hide-item");
    let $botClass = $(this).prop('id');
    $("article").each(function () {
        if ($(this).hasClass($botClass) === true) {
            $(this).toggleClass("hide-item");
        }
    })
    $(this).addClass("active-bot");
    $(".assists-info-box").css("background-image", "none");
});

// glitch-for text

$(".glitch").hover(function (e) {
    let $parent = $(this).parent();
    $parent.find("h1").toggleClass("glitch-text");
});

// show edit options on hover on profile bot cubes

$(".bot-cube-edit").hide();

$(".existing-bot").hover(function (e) {
    $(this).find(".bot-cube-edit").slideToggle(500);
});


// check if text is overflowing on profile:dialogs entry

const scrolledItem = document.querySelector(".bot-dialog-entry p");
const arrowDown = document.querySelector(".entry-angle-down");


if (window.location.pathname === "/profile:dialogs.html") { // onlyworks on this page
    for (let i = 0; i < 10; i++) {
        if (scrolledItem.scrollHeight > 40) { //check if overflow is hidden
            arrowDown.classList.remove("hide-item"); //show down arrow if overflow is hidden
            scrolledItem.style.alignSelf = "flex-start";
        };
    };
};

// show text on click on profile:bots entry

jQuery(".entry-angle-down").on('click', function (e) {

    if ($(this).parent().css("overflow") === "visible") {
        console.log("yes");
        $(this).parent().css("overflow", "hidden");
        $(this).parent().css("height", "40px");
        $(this).removeClass( "up" );
    } else {
        $(this).addClass( "up" );
        $(this).parent().css("overflow", "visible");
        $(this).parent().css("height", "auto");
    }
});

// add dialog modal popup on bots profile page

$(".add-dialog-btn").on('click', function () {
    $(".add-dialog-modal").removeClass("hide-item");
});


window.onclick = function (event) {
    if (event.target === document.getElementById("myModal")) {
        document.getElementById("myModal").classList.add("hide-item");
    }
    if (event.target === document.getElementById("add-fb-modal")) {
        document.getElementById("add-fb-modal").classList.add("hide-item");
    }
};

// add bot popup when clicking on add bot article

$(".profile-add-bot-cube").on("click", function () {
    $(".bot-cube-edit").finish();
    window.location.replace("./profile-bots-add.html");
});


// placeholder for gender select in add bot

$(".custom-selects select").change(function () {
    $(this).removeClass("place_holder");
});


// partners change color on hover

// first partner - ministry
$("#partner1").mouseover(function () {
    $("#partner1").attr("src", "./assets/svg/partner1-co.svg");
});
$("#partner1").mouseout(function () {
    $("#partner1").attr("src", "./assets/svg/partner1-gr.png");
});
// second partner - iliauni
$("#partner2").mouseover(function () {
    $("#partner2").attr("src", "./assets/svg/partner2-co.svg");
});
$("#partner2").mouseout(function () {
    $("#partner2").attr("src", "./assets/svg/partner2-gr.svg");
});
// third partners LTFR
$("#partner3").mouseover(function () {
    $("#partner3").attr("src", "./assets/svg/partner3-co.svg");
});
$("#partner3").mouseout(function () {
    $("#partner3").attr("src", "./assets/svg/partner3-gr.svg");
});

// fourth partner Radio
$("#partner4").mouseover(function () {
    $("#partner4").attr("src", "./assets/svg/partner4-co.svg");
});
$("#partner4").mouseout(function () {
    $("#partner4").attr("src", "./assets/svg/partner4-gr.svg");
});