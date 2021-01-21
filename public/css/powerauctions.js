
// http://www.aspsnippets.com/Articles/Make-AJAX-Call-to-ASP.Net-Server-Side-Web-service-method-using-jQuery.aspx
// http://www.aspdotnet-suresh.com/2012/10/aspnet-create-jquery-countdown-timer.html
// http://www.codeproject.com/Articles/45275/Create-a-JSON-WebService-in-ASP-NET-with-a-jQu
// http://aspsnippets.com/Articles/Send-and-Receive-JSON-objects-to-Web-Service-Methods-using-jQuery-AJAX-in-ASPNet.aspx
// https://github.com/Reflejo/jquery-countdown

var thisPlaceBid = '';
var thisLang = '';
var thisAdv1 = '';
var thisAdv2 = '';

function InitializePowerAuctionsCountdown(secs, strPlaceBid, adv1, adv2, strLang) {
    // alert(adv1);
    $('#power_auctions_counter').countdown({
        format: 'sss',
        startTime: "" + secs + "",
        // continuous: true,
        timerEnd: function () { ShowPowerAuctions(strPlaceBid, adv1, adv2, strLang); }, //
        // image: "digits.png"
    });
}

function ShowPowerAuctions(strPlaceBid, adv1, adv2, strLang) {

    //alert($.active);
    //if ($.active > 0) {
    //    alert($.active);
    //    return;
    //}
    thisPlaceBid = strPlaceBid;
    thisLang = strLang;
    thisAdv1 = adv1;
    thisAdv2 = adv2;

    // alert(strLang);
    $.ajax({
        type: "POST",
        url: "webmethods.aspx/GetPowerAuctions",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: '{placebid: "' + strPlaceBid + '", adv1: "' + adv1 + '", adv2: "' + adv2 + '",  lang: "' + strLang + '" }',
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);
        }
    });

    //         data: '{placebid: "' + $("#<%=txtUserName.ClientID%>")[0].value + '" }',

}

function OnSuccess(response) {
    
    var powerauctions = $.trim(response.d);
    $('#power_auctions_panel').empty()
    $('#power_auctions_panel').html(powerauctions);
    InitializePowerAuctionsCountdown(20, thisPlaceBid, thisAdv1, thisAdv2, thisLang);
    
    if ($("#pa_1").length > 0) {
        var seconds_01 = $('#pa_1').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_1').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_1').backward_timer('start');
    }

    if ($("#pa_2").length > 0) {
        var seconds_01 = $('#pa_2').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_2').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_2').backward_timer('start');
    }

    if ($("#pa_3").length > 0) {
        var seconds_01 = $('#pa_3').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_3').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_3').backward_timer('start');
    }

    if ($("#pa_4").length > 0) {
        var seconds_01 = $('#pa_4').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_4').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_4').backward_timer('start');
    }

    if ($("#pa_5").length > 0) {
        var seconds_01 = $('#pa_5').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_5').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_5').backward_timer('start');
    }

    if ($("#pa_6").length > 0) {
        var seconds_01 = $('#pa_6').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_6').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_6').backward_timer('start');
    }

    if ($("#pa_7").length > 0) {
        var seconds_01 = $('#pa_7').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_7').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_7').backward_timer('start');
    }

    if ($("#pa_8").length > 0) {
        var seconds_01 = $('#pa_8').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_8').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_8').backward_timer('start');
    }

    if ($("#pa_9").length > 0) {
        var seconds_01 = $('#pa_9').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_9').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_9').backward_timer('start');
    }
    if ($("#pa_10").length > 0) {
        var seconds_01 = $('#pa_10').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_10').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_10').backward_timer('start');
    }
    if ($("#pa_11").length > 0) {
        var seconds_01 = $('#pa_11').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_11').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_11').backward_timer('start');
    }
    if ($("#pa_12").length > 0) {
        var seconds_01 = $('#pa_12').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_12').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_12').backward_timer('start');
    }
    if ($("#pa_13").length > 0) {
        var seconds_01 = $('#pa_13').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_13').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_13').backward_timer('start');
    }
    if ($("#pa_14").length > 0) {
        var seconds_01 = $('#pa_14').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_14').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_14').backward_timer('start');
    }
    if ($("#pa_15").length > 0) {
        var seconds_01 = $('#pa_15').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_15').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_15').backward_timer('start');
    }
    if ($("#pa_16").length > 0) {
        var seconds_01 = $('#pa_16').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_16').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_16').backward_timer('start');
    }
    if ($("#pa_17").length > 0) {
        var seconds_01 = $('#pa_17').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_17').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_17').backward_timer('start');
    }
    if ($("#pa_18").length > 0) {
        var seconds_01 = $('#pa_18').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_18').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_18').backward_timer('start');
    }
    if ($("#pa_19").length > 0) {
        var seconds_01 = $('#pa_19').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_19').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_19').backward_timer('start');
    }
    if ($("#pa_20").length > 0) {
        var seconds_01 = $('#pa_20').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_20').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_20').backward_timer('start');
    }

    if ($("#pa_21").length > 0) {
        var seconds_01 = $('#pa_21').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_21').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_21').backward_timer('start');
    }
    if ($("#pa_22").length > 0) {
        var seconds_01 = $('#pa_22').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_22').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_22').backward_timer('start');
    }
    if ($("#pa_23").length > 0) {
        var seconds_01 = $('#pa_23').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_23').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_23').backward_timer('start');
    }
    if ($("#pa_24").length > 0) {
        var seconds_01 = $('#pa_24').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_24').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_24').backward_timer('start');
    }
    if ($("#pa_25").length > 0) {
        var seconds_01 = $('#pa_25').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_25').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_25').backward_timer('start');
    }
    if ($("#pa_26").length > 0) {
        var seconds_01 = $('#pa_26').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_26').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_26').backward_timer('start');
    }
    if ($("#pa_27").length > 0) {
        var seconds_01 = $('#pa_27').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_27').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_27').backward_timer('start');
    }
    if ($("#pa_28").length > 0) {
        var seconds_01 = $('#pa_28').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
        var seconds = Number(seconds_01).toString();
        $('#pa_28').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_28').backward_timer('start');
    }


}


function StartCountdownPowerAuctionsByUpdatepanel()
{ 
    var strEndingText = $("#hdnEndingText").val();
    if (strEndingText == "") {
        strEndingText = "Ending ..";
    }

    $('.power-auction-box .power-auction-ends div').each(function () {
        var timerSetValue = $(this).attr("timer-set");
        
        if (timerSetValue != 'y')
        {
            var Sec = $(this).attr("seconds");        
            $(this).attr("timer-set", "y");
            var seconds = Number(Sec).toString();
            $(this).backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text(strEndingText) }, on_tick: function (timer) { timer.target.css('color', 'rgb(255,0,0)'); } });
            $(this).backward_timer('start');
        }
    });

    //image reloader-check if plugin exists
    if (!!$.fn.imageReloader) {
        $(".power-auction-img").imageReloader();
    }
    //if ($("#pa_1").length > 0) {
    //    var seconds_01 = $('#pa_1').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_1').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_1').backward_timer('start');
    //}

    //if ($("#pa_2").length > 0) {
    //    var seconds_01 = $('#pa_2').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_2').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_2').backward_timer('start');
    //}

    //if ($("#pa_3").length > 0) {
    //    var seconds_01 = $('#pa_3').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_3').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_3').backward_timer('start');
    //}

    //if ($("#pa_4").length > 0) {
    //    var seconds_01 = $('#pa_4').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_4').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_4').backward_timer('start');
    //}

    //if ($("#pa_5").length > 0) {
    //    var seconds_01 = $('#pa_5').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_5').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_5').backward_timer('start');
    //}

    //if ($("#pa_6").length > 0) {
    //    var seconds_01 = $('#pa_6').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_6').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_6').backward_timer('start');
    //}

    //if ($("#pa_7").length > 0) {
    //    var seconds_01 = $('#pa_7').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_7').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_7').backward_timer('start');
    //}

    //if ($("#pa_8").length > 0) {
    //    var seconds_01 = $('#pa_8').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_8').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_8').backward_timer('start');
    //}

    //if ($("#pa_9").length > 0) {
    //    var seconds_01 = $('#pa_9').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_9').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_9').backward_timer('start');
    //}
    //if ($("#pa_10").length > 0) {
    //    var seconds_01 = $('#pa_10').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_10').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_10').backward_timer('start');
    //}
    //if ($("#pa_11").length > 0) {
    //    var seconds_01 = $('#pa_11').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_11').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_11').backward_timer('start');
    //}
    //if ($("#pa_12").length > 0) {
    //    var seconds_01 = $('#pa_12').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_12').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_12').backward_timer('start');
    //}
    //if ($("#pa_13").length > 0) {
    //    var seconds_01 = $('#pa_13').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_13').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_13').backward_timer('start');
    //}
    //if ($("#pa_14").length > 0) {
    //    var seconds_01 = $('#pa_14').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_14').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_14').backward_timer('start');
    //}
    //if ($("#pa_15").length > 0) {
    //    var seconds_01 = $('#pa_15').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_15').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_15').backward_timer('start');
    //}
    //if ($("#pa_16").length > 0) {
    //    var seconds_01 = $('#pa_16').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_16').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_16').backward_timer('start');
    //}
    //if ($("#pa_17").length > 0) {
    //    var seconds_01 = $('#pa_17').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_17').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_17').backward_timer('start');
    //}
    //if ($("#pa_18").length > 0) {
    //    var seconds_01 = $('#pa_18').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_18').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_18').backward_timer('start');
    //}
    //if ($("#pa_19").length > 0) {
    //    var seconds_01 = $('#pa_19').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_19').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_19').backward_timer('start');
    //}
    //if ($("#pa_20").length > 0) {
    //    var seconds_01 = $('#pa_20').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_20').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_20').backward_timer('start');
    //}

    //if ($("#pa_21").length > 0) {
    //    var seconds_01 = $('#pa_21').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_21').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_21').backward_timer('start');
    //}
    //if ($("#pa_22").length > 0) {
    //    var seconds_01 = $('#pa_22').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_22').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_22').backward_timer('start');
    //}
    //if ($("#pa_23").length > 0) {
    //    var seconds_01 = $('#pa_23').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_23').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_23').backward_timer('start');
    //}
    //if ($("#pa_24").length > 0) {
    //    var seconds_01 = $('#pa_24').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_24').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_24').backward_timer('start');
    //}
    //if ($("#pa_25").length > 0) {
    //    var seconds_01 = $('#pa_25').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_25').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_25').backward_timer('start');
    //}
    //if ($("#pa_26").length > 0) {
    //    var seconds_01 = $('#pa_26').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_26').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_26').backward_timer('start');
    //}
    //if ($("#pa_27").length > 0) {
    //    var seconds_01 = $('#pa_27').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_27').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_27').backward_timer('start');
    //}
    //if ($("#pa_28").length > 0) {
    //    var seconds_01 = $('#pa_28').attr("seconds"); // in response.d make a div tag for each auction having attribute: seconds
    //    var seconds = Number(seconds_01).toString();
    //    $('#pa_28').backward_timer({ seconds: seconds, format: 'h%:m%:s%', on_exhausted: function (timer) { timer.target.text('Ending ..') }, on_tick: function (timer) { var color = (timer.seconds_left < 60) ? '#FF0000' : '#000000'; timer.target.css('color', color); } }); $('#pa_28').backward_timer('start');
    //}



}

