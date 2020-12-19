
$(document).ready(function () {

    //var LogInUserId = document.getElementById("LogInUserId").nodeValue;
    var LogInUserId = $('#LogInUserId').val();

    if (LogInUserId == "") {

        var cookieValue = getCookie("user_Id");
        function getIPFunction() {
            // თუ ქუქი ცარიელია
            if (cookieValue == "") {

                //რენდომი
                var rendomnamber = Math.floor(Math.random() * 10000 + 1);
                // მომხმარებლის Ip
                $.getJSON("http://jsonip.com/?callback=?", function (data) {
                    userId = data.ip + rendomnamber;
                    document.cookie = "user_Id=" + userId;
                });
            }

        }
        getIPFunction();

    } 
    else if (LogInUserId === undefined) {

        var cookie = getCookie("user_Id");
        function getIPFunction() {
            // თუ ქუქი ცარიელია
            if (cookie == "") {

                //რენდომი
                var rend = Math.floor(Math.random() * 10000 + 1);
                // მომხმარებლის Ip
                $.getJSON("http://jsonip.com/?callback=?", function (d) {
                    userId = d.ip + rend;
                    document.cookie = "user_Id=" + userId;
                });
            }

        }
        getIPFunction();
    }
    else {

        var cookie = getCookie("user_Id");

        // თუ ქუქი ცარიელია
        if (cookie.length > 10) {
            console.log(cookie.length);
            document.cookie = "user_Id=" + LogInUserId;
        }

    }



    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


});