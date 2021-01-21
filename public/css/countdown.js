/*
Author: Robert Hashemian
http://www.hashemian.com/

You can use this code in any manner so long as the author's
name, Web address and this disclaimer is kept intact.
********************************************************
Usage Sample:

<script language="JavaScript">
TargetDate = "12/31/2020 5:00 AM";
BackColor = "palegreen";
ForeColor = "navy";
CountActive = true;
CountStepper = -1;
DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
FinishMessage = "It is finally here!";
</script>
<script language="JavaScript" src="http://www.hashemian.com/js/countdown.js"></script>
*/

function calcage(secs, num1, num2) {
  s = ((Math.floor(secs/num1))%num2).toString();
  if (s.length < 2)
    s = "0" + s;
  return "" + s + "";
}

function CountBack(secs) {
    
  if (secs <= 0) {
      // alert('Auktionen er afsluttet' + secs);
      var Href = document.location.href;
      if (document.getElementById('spanCountDown'))
      {
          var txtPlzWait = "Please wait";
          if ($("#lit2052").length>0 && $("#lit2052").val().trim() != "")
          {
              txtPlzWait = $("#lit2052").val();
          }
          document.getElementById('spanCountDown').innerHTML = txtPlzWait;
          document.getElementById('dvWaitMessage').innerHTML = txtPlzWait;
          document.getElementById('dvWaitMessageMobile').innerHTML = txtPlzWait;
          
          //$('#spanEndAuction').addClass('timeEnded');
          //$('#spanCountDown').addClass('pleasewaitMsg');
          $('#dvWaitMessage, #dvWaitMessageMobile').removeClass();

          $('#dvTimer, #dvTimerMobile').removeClass();
          $('#dvTimer, #dvTimerMobile').addClass('displayNone');
      }
//          document.getElementById('spanCountDown').innerHTML = "<img src='/gfx/spinner2.gif' class='mca_spinner' title='Please wait' width='40' height='40' style='display:inline-flex;' />";
      // setInterval(function () { document.location.href = Href.replace("#", "") }, 5000);
      
      // window.location.reload();
      //to check if page have ReloadHREF function is defined then use it else reload
      //if (typeof ReloadHREF === 'function')
      //{
      //    ReloadHREF();
      //}
      if (typeof RefreshListWhenCountZero === 'function') {
          if (secs < -2)
          {
              RefreshListWhenCountZero();
          }
          else {
              setTimeout(function () {
                  RefreshListWhenCountZero();
              }, 2000);
          }
      }
      else {
          if ($("#Signin1_pnlLoginModals .modal.fade.in").length == 0) {
              window.location.reload();
          }

      }
      
    //  document.location.href = Href.replace("#","");
    //  //document.getElementById("cntdwn").innerHTML = FinishMessage;
    return;
  }
  
  DisplayStr = DisplayFormat; // DisplayFormat.replace(/%%D%%/g, calcage(secs,86400,100000));
  // alert(calcage(secs,86400,100000));
  // alert(DisplayStr);

  if(calcage(secs,86400,100000) > 0)
  {
    DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs,86400,100000));
  }
  if(calcage(secs,3600,24) > 0)
  {
    DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs,3600,24));
  }
  if(calcage(secs,60,60) > 0)
  {
    DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));
  }
  DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));
  
  DisplayStr = DisplayStr.replace('%%D%%d,', '');
  DisplayStr = DisplayStr.replace('%%H%%h,', '');
  DisplayStr = DisplayStr.replace('%%M%%m,', '00');
  DisplayStr = DisplayStr.replace('%%M%%', '00');
  DisplayStr = DisplayStr.replace('%%H%%', '00');


    //document.getElementById("cntdwn").innerHTML = DisplayStr;
  if (document.getElementById('spanCountDown'))
  {
      document.getElementById('spanCountDown').innerHTML = DisplayStr;

      //$('#spanCountDown').css({ color: '#c35' });
      //$('#spanEndAuction').removeClass('timeEnded');
      //$('#spanCountDown').removeClass('pleasewaitMsg');
      
      let splitTimer = DisplayStr.split(":");
      document.getElementById('hours').innerHTML  = splitTimer[0];
      document.getElementById('minutes').innerHTML = splitTimer[1];
      document.getElementById('seconds').innerHTML = splitTimer[2];

      document.getElementById('hoursMobile').innerHTML = splitTimer[0];
      document.getElementById('minutesMobile').innerHTML = splitTimer[1];
      document.getElementById('secondsMobile').innerHTML = splitTimer[2];

      $('#dvTimer, #dvTimerMobile').removeClass();
      $('#dvWaitMessage, #dvWaitMessageMobile').removeClass();
      $('#dvWaitMessage, #dvWaitMessageMobile').addClass('displayNone');
  }
    
  if (CountActive)
  {
      
      CountBackTimeOutId = setTimeout("CountBack(" + (secs + CountStepper) + ")", SetTimeOutPeriod);
      //console.log("sec=" + secs + ",CountBackTimeOutId" + CountBackTimeOutId);
  }
}

function putspan(backcolor, forecolor) {

}

var SetTimeOutPeriod;
var CountBackTimeOutId;
var previousDBNOWTimePeriod;
var previousDBNOWTimePeriodCnt = 0;
startCountDownTimer();
 function startCountDownTimer(){
if (typeof(BackColor)=="undefined")
  BackColor = "white";
if (typeof(ForeColor)=="undefined")
  ForeColor= "black";
if (typeof(TargetDate)=="undefined")
  TargetDate = "12/31/2020 5:00 AM";
if (typeof(DisplayFormat)=="undefined")
  DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
if (typeof(CountActive)=="undefined")
  CountActive = true;
if (typeof(FinishMessage)=="undefined")
  FinishMessage = "";
if (typeof(CountStepper)!="number")
  CountStepper = -1;

CountStepper = Math.ceil(CountStepper);

if (CountStepper == 0)
    CountActive = false;

SetTimeOutPeriod = (Math.abs(CountStepper)-1)*1000 + 990;
putspan(BackColor, ForeColor);
var dthen = new Date(TargetDate);
//console.log("dthen1=" + dthen);
//dthen.setSeconds(dthen.getSeconds() - 2);

//console.log("dthen2=" + dthen);

var dnow = new Date(DBBOWDate);
//dnow.setSeconds(dnow.getSeconds() - 2);
//console.log("dnow=" + dnow);
//console.log("previousDBNOWTimePeriod1=" + previousDBNOWTimePeriod);

////fix: same time was looping to timer function. so checked this condition
//if (previousDBNOWTimePeriod == DBBOWDate)
//{
//    previousDBNOWTimePeriodCnt = previousDBNOWTimePeriodCnt + 1;
//    if (previousDBNOWTimePeriodCnt=>2)
//    {
//        previousDBNOWTimePeriodCnt = 0;
//        document.getElementById('spanCountDown').innerHTML = "Please wait";
//        //console.log("previousDBNOWTimePeriod3 return=" + previousDBNOWTimePeriod);
//        return;
//    }
//}
//else{
//    previousDBNOWTimePeriod = DBBOWDate;
//}
//console.log("previousDBNOWTimePeriod2=" + previousDBNOWTimePeriod);
if(CountStepper>0)
  ddiff = new Date(dnow-dthen);
else
  ddiff = new Date(dthen - dnow);


gsecs = Math.floor(ddiff.valueOf() / 1000);

//substracted 2 sec so when user bid in less remaining time then also bid can be proceed
gsecs = gsecs - 2;
//console.log('gsecs=' + gsecs);
CountBack(gsecs);
 }

 function stopCountDownTimer() {
     //console.log("stopCountDownTimer=" + CountBackTimeOutId);
     clearTimeout(CountBackTimeOutId);
 }