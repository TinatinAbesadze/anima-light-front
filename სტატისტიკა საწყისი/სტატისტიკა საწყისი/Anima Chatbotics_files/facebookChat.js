


//window.fbAsyncInit = function () {
//    FB.init({
//        appId: '1436432569824879',
//        cookie: true,
//        xfbml: true,
//        version: 'v5.0'
//    });

//    FB.AppEvents.logPageView();

//    //FB.CustomerChat.show();

//};



//(function (d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) return;
//    js = d.createElement(s); js.id = id;
//    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//    fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));










var clicked = false;



function fbChat() {

    

    //FB.XFBML.parse()


    //event.preventDefault();
    //alert();

    //if (!clicked) {
    //    FB.XFBML.parse();
    //    FB.CustomerChat.show();
    //    FB.CustomerChat.showDialog();
    //    clicked = true;
    //}
    //else {
    //    FB.CustomerChat.hide();
    //    clicked = false;
    //}
  

    FB.XFBML.parse();
    FB.CustomerChat.show();
    FB.CustomerChat.showDialog();

//    FB.CustomerChat.show();
//    FB.CustomerChat.showDialog();

//    //FB.CustomerChat.hide();
//    //FB.CustomerChat.hideDialog();


//    FB.CustomerChat.update({
//        logged_in_greeting: 'Hello There!',
//        logged_out_greeting: 'Log in to Chat with Us',
//        ref: 'coupon_15',
//    });

}