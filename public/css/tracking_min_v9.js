function tracking(pageAction, prm_main_url, prm_clicked_url, e) {

    try {
        var mainUrl = prm_main_url;
        var url = prm_clicked_url;
        var res = "";

        if (pageAction === "click") {
            url = url.toLowerCase();
            var patt = new RegExp("btnbid");
            res = patt.test(url);

        } else {
            url = mainUrl;
            var patt = new RegExp("/category/[0-9]+/|/product/[0-9]+-[0-9]+|/auction/");
            res = patt.test(mainUrl);

            if (!res) {
                var domainValue = $('#litDomain').text();
                var hostValue = $('#litHost').text();
                var protocolValue = window.location.protocol;
                var mainUrlValue = protocolValue + '//' + hostValue + '/' + domainValue;

                if (mainUrlValue === url.replace(/\/+$/, '')) {
                    url = url.replace(/\/+$/, '') + '/category/0/dummy';
                    res = true;
                }
            }

        }

        if (res) {
            try {
                var country = "";
                elementcountry = document.getElementById("litDomain");
                if (elementcountry != null) {
                    country = elementcountry.innerHTML;
                }

                var user_id = "";
                elementuser_id = document.getElementById("UserId");
                if (elementuser_id != null) {
                    user_id = elementuser_id.value;
                }

                var auction_id = "";
                elementlitCurrAuctionId = document.getElementById('litCurrAuctionId');
                if (elementlitCurrAuctionId != null) {
                    auction_id = elementlitCurrAuctionId.value;
                }

                var user_unique_key = "";
                elementuser_unique_key = document.getElementById("UserUniqueKey");
                if (elementuser_unique_key != null) {
                    user_unique_key = elementuser_unique_key.value;
                }

                var item_id = "";
                elementitem_id = document.getElementById("ContentPlaceHolder1_SelectItemNo");
                if (elementitem_id != null) {
                    item_id = elementitem_id.value;
                }

                var request_time = Date.now();

                var finalParam = "mainurl=" + encodeURIComponent(mainUrl) + "&url=" + encodeURIComponent(url) + "&userid=" + encodeURIComponent(user_id) + "&auction_id=" + encodeURIComponent(auction_id) + "&item_id=" + encodeURIComponent(item_id) + "&userUniqueKey=" + encodeURIComponent(user_unique_key) + "&country=" + encodeURIComponent(country) 
				+ "&request_time=" + request_time + "&serverName="+ encodeURIComponent($("#MachineName").val()) + "&releaseVersion=" + encodeURIComponent($("#ConfigVersion").val());
                //httpRequest = new XMLHttpRequest();			
                //								if (httpRequest)
                //								{
                //										httpRequest.open('GET', 'http://tracking.chilindo.com/collect?' + finalParam);
                //										httpRequest.send();
                //										
                //										httpRequest.open('GET', 'http://cltracking.azurewebsites.net/api/values?' + finalParam);
                //										httpRequest.send();	

                $.when(
                    $.getJSON('https://chilindotracking.azurewebsites.net/api/values?' + finalParam)
                );



                //								}					  	
            } catch (err) {} finally {
                if (pageAction === "click") {
                    setTimeout(function() {
                        window.location = prm_clicked_url;
                    }, 200);

                    e.preventDefault();
                }
            }
        }
    } catch (err) {}
}

document.addEventListener("DOMContentLoaded", function(event) {
    try {
        var mainUrl = window.location.href;
        mainUrl = mainUrl.toLowerCase();
        tracking("load", mainUrl, mainUrl, event);
    } catch (err) {}
});


window.onclick = function(e) {
    try {
        var mainUrl = window.location.href;
        mainUrl = mainUrl.toLowerCase();
        var node = e.target;
        while (node != undefined && node.localName != 'a') {
            node = node.parentNode;
        }
        if (node) {
            var url = node.href;
            tracking("click", mainUrl, url, e);
        }
    } catch (err) {}
}