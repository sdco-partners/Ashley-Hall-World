$j=jQuery.noConflict(),$j(document).ready(function(){var t={href:window.location.href,assets:"content/themes/ahw/assets/"},i=[{still:t.href+t.assets+"still-violin.gif",gifs:t.href+t.assets+"gif-violin.gif",id:"violin"},{still:t.href+t.assets+"still-bball.gif",gifs:t.href+t.assets+"gif-bball.gif",id:"bball"},{still:t.href+t.assets+"still-gate.gif",gifs:t.href+t.assets+"gif-gate.gif",id:"gate1"},{still:t.href+t.assets+"still-swimmer.gif",gifs:t.href+t.assets+"gif-swimmer.gif",id:"swimmer"},{still:t.href+t.assets+"still-watercan.gif",gifs:t.href+t.assets+"gif-watercan.gif",id:"watercan"},{still:t.href+t.assets+"still-bear.gif",gifs:t.href+t.assets+"gif-bear.gif",id:"bear"},{still:t.href+t.assets+"still-gate2.gif",gifs:t.href+t.assets+"gif-gate2.gif",id:"gate2"}],s=function(){$j(".hover-bttn").animate({width:"+=3px",height:"+=3px",right:"-=1.5px",top:"-=1.5px",opacity:.4},"fast").delay(600).animate({width:"-=3px",height:"-=3px",right:"+=1.5px",top:"+=1.5px",opacity:.6},"fast")};setInterval(function(){s()},4e3);var e=function(t,s){$j("#"+i[t].id).attr("src",i[t].gifs),a(++t,s)},a=function(t,s){return t>=i.length?void a(0,5e3):void setTimeout(e.bind(null,t,s),s)};a(0,8e3),$j(".gifs").hover(function(){var t=$j(this).attr("id");for(var s in i)i[s].id===t&&$j("#"+t).attr("src",i[s].gifs)})}),$j(function(){$j(window).width(),$j(window).height();$j.post("http://localhost/ashley-hall-world/",{width:screen.width,height:screen.height},function(t){"success"==t.outcome?console.log("success"):console.log("ajax fail")},"json")}),$j(".hover-bttn").click(function(t){t.preventDefault(),$j("#popup-overlay").fadeIn("slow",function(){$j("#map-popup").fadeIn("slow",function(){})}),console.log($j(this).attr("id")," was clicked")}),$j(".close-bttn").click(function(t){t.preventDefault(),$j("#map-popup").fadeOut("slow",function(){$j("#popup-overlay").fadeOut("slow",function(){})}),console.log($j(this).attr("class")," was clicked")});