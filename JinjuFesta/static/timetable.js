// 텝 메뉴 구현
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});

// 달력 1
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar1');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    
    initialView: 'dayGridMonth',
    locale : 'ko',
    headerToolbar: {

      left: 'prev',

      center: 'title',

      right: 'next today,dayGridMonth'

     },
     events: [
      {
        title: 'Business Lunch',
        start: '2020-12-03',
      },
      {
        title: 'Meeting',
        start: '2019-08-13T11: 00: 00',
        constraint: 'availableForMeeting', // defined below
        color: '# 257e4a'
      },
    ]

  });
  calendar.render();
});

// 달력 2
document.addEventListener('click', function() {
  var calendarEl = document.getElementById('calendar2');
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale : 'ko',
    headerToolbar: {

      left: 'prev',

      center: 'title',

      right: 'next today,dayGridMonth'

     },
     events: [
      {
        title: 'Business Lunch',
        start: '2020-12-03',
      },
      {
        title: 'Meeting',
        start: '2019-08-13T11: 00: 00',
        constraint: 'availableForMeeting', // defined below
        color: '# 257e4a'
      },
    ]
  });
  calendar.render();
});

// 달력 3
document.addEventListener('click', function() {
  var calendarEl = document.getElementById('calendar3');
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale : 'ko',
    headerToolbar: {

      left: 'prev',

      center: 'title',

      right: 'next today,dayGridMonth'

     },
     events: [
      {
        title: 'Business Lunch',
        start: '2020-12-03',
      },
      {
        title: 'Meeting',
        start: '2019-08-13T11: 00: 00',
        constraint: 'availableForMeeting', // defined below
        color: '# 257e4a'
      },
    ]
  });
  calendar.render();
});

// 올라가는 버튼 구현 //
$(function(){
$('#back-to-top').on('click',function(e){
e.preventDefault();
$('html,body').animate({scrollTop:0},600);
  });
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('#back-to-top').addClass('show');
    } else {
      $('#back-to-top').removeClass('show');
    }
  });
});

