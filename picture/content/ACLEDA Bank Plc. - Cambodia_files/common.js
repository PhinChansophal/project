// JavaScript Document

var Cookies = {
	init: function (){
		var allCookies = document.cookie.split('; ');
		for (var i=0;i<allCookies.length;i++){
			var cookiePair = allCookies[i].split('=');
			this[cookiePair[0]] = cookiePair[1];
		}
	},
	create: function (name,value){
		var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
		this[name] = value;
	},
	erase: function (name){this.create(name,'',-1);}
};
Cookies.init();

function Get_Cookie(check_name) {
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false;

	for ( i = 0; i < a_all_cookies.length; i++ ){
		a_temp_cookie = a_all_cookies[i].split( '=' );
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
		if ( cookie_name == check_name ){
			b_cookie_found = true;
			if ( a_temp_cookie.length > 1 ) cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found ) return null;
}

function Set_Cookie( name, value, expires, path, domain, secure ){
// set time, it's in milliseconds
var today = new Date();
today.setTime( today.getTime() );
if ( expires ) expires = expires * 1000 * 60 * 60 * 24;
var expires_date = new Date( today.getTime() + (expires) );

document.cookie = name + "=" +escape( value ) +
( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
( ( path ) ? ";path=" + path : "" ) +
( ( domain ) ? ";domain=" + domain : "" ) +
( ( secure ) ? ";secure" : "" );
}
/* end cookie */

/* tooltip */
function showToolTip(e,text){
	if(document.all) var e=event;
	var obj=document.getElementById('tooltip');
	document.getElementById('ctn').innerHTML=text;
	obj.style.display='block';
	obj.style.top=(e.clientY+25)+Math.max(document.body.scrollTop,document.documentElement.scrollTop)+'px';
	obj.style.left=(e.clientX-10)+Math.max(document.body.scrollLeft,document.documentElement.scrollLeft)+'px';	
}	
function hideToolTip(){document.getElementById('tooltip').style.display='none';}
/* end tooltip */
function ismaxlength(obj){ /*max length for textarea*/
	var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : "";
	if (obj.getAttribute && obj.value.length>mlength) obj.value=obj.value.substring(0,mlength);
}
function getemail(domain,name){document.write("<a href='mail"+"to:"+name.replace(/%23/g,"@")+domain.replace(/%23/g,".")+"'>"+name.replace(/%23/g,"@")+domain.replace(/%23/g,".")+"</a>");}
function icon_sb(id, sb){document.getElementById(id).style.display=sb;}


//TAB BAR 1
function tab_content1(evt, tabctn){
	var i, x, tablinks;
	x = document.getElementsByClassName("tab-content");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab-bar-item");
	for (i = 0; i < x.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" tab-bar-hl", "");
	}
	document.getElementById(tabctn).style.display = "block";
	evt.currentTarget.className += " tab-bar-hl";
}
//END TAB BAR 1

//TAB BAR 2
function tab_content2(evt, tabctn){
	var i, x, tablinks;
	x = document.getElementsByClassName("tab-content2");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab-bar-item2");
	for (i = 0; i < x.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" tab-bar-hl2", "");
	}
	document.getElementById(tabctn).style.display = "block";
	evt.currentTarget.className += " tab-bar-hl2";
}
//END TAB BAR 2

//TAB BAR 3
function tab_content3(evt, tabctn){
	var i, x, tablinks;
	x = document.getElementsByClassName("tab-content3");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab-bar-item3");
	for (i = 0; i < x.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" tab-bar-hl3", "");
	}
	document.getElementById(tabctn).style.display = "block";
	evt.currentTarget.className += " tab-bar-hl3";
}
//END TAB BAR 3

//Dark Mode
function link_dark_css(){
    var filename ="../assets/css/dark_button.css";
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    document.getElementsByTagName('HEAD')[0].appendChild(link);
}
function view_dark_mode(){
    var chk = document.getElementById("checkbox");
    if(localStorage.getItem("dark_mode")=="Dark"){
        chk.checked = true;
        link_dark_css();		
    }else chk.checked = false;
    //if browser use dark mode check dark mode button automatically
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) chk.checked = true; 
}
function dark_mode(){
    var chk = document.getElementById("checkbox");   
    if(chk.checked == true) {
        localStorage.setItem("dark_mode","Dark"); 
        link_dark_css();
    }
    else localStorage.setItem("dark_mode","Light");
}
//End Dark Mode

//--------------jQuery--------

$(document).on("scroll", function(){
	if($(document).scrollTop() > 200){
		$(".head-ctn").addClass("sticky");
		//$(".head-ctn .alogo").fadeIn(300);
		//$(".head-ctn .bg-head-event").fadeOut(300);
	}else{
		$(".head-ctn").removeClass("sticky");
	}
	
	$(".social-media").addClass("social-media2");
});
$(document).ready(function(){
	$(".listbox li:nth-child(odd)").css({"clear":"left"});
	$("#marquee").marquee();
		
	$('.nav li').hover(function(){
		$('ul', this).stop().slideDown(200);
		$(".icon", this).text("expand_less");
  	},function(){
    	$('ul', this).stop().slideUp(200);
		$(".icon", this).text("expand_more");
  	});
	
	$('.nav-head li').hover(function(){
		$('ul', this).stop().slideDown(200);
		$(".icon", this).text("expand_less");
  	},function(){
    	$('ul', this).stop().slideUp(200);
		$(".icon", this).text("expand_more");
  	});
		
	$(".sub-menu").click(function(){
		if($(".sub-menu div i").text()=='expand_more'){
			$("ul", this).slideDown(300);
			$(".sub-menu div i").text("expand_less");
		}else{
			$(".sub-menu ul").slideUp(300);
			$(".sub-menu div i").text("expand_more");
		}
	});
	
	$(".nav-mobile li").click(function(event){
		$(".nav-mobile li ul").slideUp(300);
		$("ul", this).stop().slideToggle(300);
		if($(".sub",this).text()=='expand_more'){
			$(".nav-mobile li .sub").text('expand_more');
			$(".sub",this).text('expand_less');
			return false;
		}else{
			$(".sub",this).text('expand_more');
		}
		event.stopPropagation();
	});
	
	$(".head-ctn").click(function(event){
		$("html, body").animate({scrollTop:0}, "slow");
		event.stopPropagation();
	});
	$(".head-ctn a .logo").click(function(event){event.stopPropagation();});
	$(".head-ctn .nav-head").click(function(event){event.stopPropagation();});
	$(".head-ctn .language").click(function(event){event.stopPropagation();});
	
	$(".nav-icon-mobile").click(function(event){
		$(window).scrollTop(0);
		$(".nav-mobile").css("min-height",$(document).height());
		$(".nav-mobile").show('slide',{direction:'left'},300);
		$(".mask").fadeIn(500);
		event.stopPropagation();
	});
	
	$(".nav-mobile").click(function(event){event.stopPropagation();});
	$(".nav-mobile li .close").click(function(){
		$(".nav-mobile").hide('slide',{direction:'left'},300);
		$(".mask").fadeOut(500);
	});
	
	$(".icon-share").click(function(event){
		if(navigator.share){ //for mobile that support navigator.share
			navigator.share({url:window.location.href});
		}else{ //for computer and mobile that not support navigator.share
			$(".share-content").show('slide',{direction:'down'},300);
			$(".mask").fadeIn(500);
			event.stopPropagation();
		}
	});
	
	$("body").click(function(){
		$(".mask").fadeOut(500);
		$(".nav-mobile").hide('slide',{direction:'left'},300);
		$(".share-content").hide('slide',{direction:'down'},300);
	});
		
	if(!navigator.userAgent.match(/(iPhone|Android)/)){ //call function
		$('a.phonecall').click(function(e){
			e.preventDefault(); 
		});
	}
	
	//Dark Mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){$("#dark_chk").css("display", "none");} //check if browser use dark mode hide button dark mode
    $('#checkbox').click(function(){if(!($("#checkbox").is(":checked"))) $('link[href="../assets/css/dark_button.css"]').remove();}); //check if checkbox is uncheck remove dark manual css
	window.onload = view_dark_mode();
	//End Dard Mode
});

function Get_QnA(qna,lang){
	$.ajax({
		url: "../assets/file/Get_QnA.php",
		type: "POST",
		data:{"qna":qna,"lang":lang},
		cache: false,
		beforeSend:function(){
			$(".qna").show();
			$('html, body').animate({scrollTop: $('.qna').offset().top - 140}, 500);
			$("#loading").html("<img src='../assets/layout/loading.svg' style='width:40px; padding-bottom:15px;' />");
		},
		success: function (data){
			$("#loading").hide();
			$(".qna-ctn").html(data);
		}
	});
}
function Close_QnA(){
	$(".qna").slideUp(500);
	$('html, body').animate({scrollTop: $('.share-menu').offset().top - 160}, 500);
}