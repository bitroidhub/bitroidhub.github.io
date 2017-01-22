$(document).ready(function(){

	// плавный переход по ссылкам
	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top - 60
		}, 500);
		e.preventDefault();
	});

	// фикс. шапка
  $(window).scroll(function(){
        if($(this).scrollTop()>160){
            $('.top-menu').addClass('fixed');
        }
        else if ($(this).scrollTop()<160){
            $('.top-menu').removeClass('fixed');
        }
    });

   // календари
	$('#calendar-1').bitroidCalendarEv({
	    lang: "ru",
	    sundayFirst: false,
	    years: "2010-2020",
	    showEventBlock: true,
	    events : [
	    	{
	    		day : "03",
	    		month : "02",
	    		year : "2017",
	    		event_description : "Описание события",
	    		event_title : "Заголовок для события",
	    		event_body : "Описание для события"
	    	},
	    	{
	    		day : "03",
	    		month : "02",
	    		year : "2017",
	    		event_description : "Описание события 2",
	    		event_body : "Событие 2!"
	    	},
	    	{
	    		day : "20",
	    		month : "02",
	    		year : "2017",
	    		event_description : "Описание события",
	    		event_body : "Событие!"
	    	}
	    ],
	    containers : {
	    	events : ".calendarev-events-container"
	    }
	});

	$('#calendar-2').bitroidCalendarEv({
	    lang: "ru",
	    sundayFirst: true,
	    years: "2010-2020",
	    showEventBlock: false,
	});

	$('#calendar-3').bitroidCalendarEv({
	    lang: "en",
	    sundayFirst: true,
	    years: "2017-2050",
	    showEventBlock: false
	});
	$('#calendar-4').bitroidCalendarEv({
		lang: "ja",
	    years: "20",
	    format: "LLLL",
	    onClick: function(date){
	        alert("onClick: " + date);
	    }
    });

})