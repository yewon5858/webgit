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
    initialDate: '2020-10-01' , 
    showNonCurrentDates: false, // 31일 이후로 안보이게
    dayMaxEventRows: 4 , // 화면에 최대 몇개를 디스플레이 할것인가

    headerToolbar: {

      left: 'prev',

      center: 'title',

      right: 'next today,dayGridMonth'

     },
     events: [
      { //초혼점등
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '읍·면·동 상징 등 거리행렬', 
        start: '2020-10-01',
        end: '2020-10-01'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '고유제',
        start: '2020-10-01',
        end: '2020-10-01'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '초혼점등',
        start: '2020-10-01',
        end: '2020-10-01'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '수상 불꽃놀이',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '소망등 달기', //소망등 달기
        start: '2020-10-01',
        end: '2020-10-13'
      },

      {
        backgroundColor: '#F4CA8A',
        borderColor: '#F4CA8A',
        title: '유등 띄우기', //유등 띄우기 ㄴ
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#D6DEA5',
        borderColor: '#D6DEA5',
        title: '추억의 유등 띄우기', //추억의 유등 띄우기 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '세계풍물 등(燈) 및 한국의 미등(燈)', //수상등 전시 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '동화나라 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '진주의 혼 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '기업 참여 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '전국지자체 참여 등(燈) 전시', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '30개 읍면동 상징 등 전시',  //육상등 전시
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '세계의 귀신',  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '세계로 뻗어나가는 유등시리즈 "머라이언상"',  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '백악기월드 인 진주',  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '종교참여 등(燈)전시',  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '창작등(燈) 전시', //창작등 전시  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '추억의 문이 열립니다 | -100년의 추억', // 빛의로 되살아난 진주성 전시
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '한국의 풍습 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '유물 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '진주성전투 재현 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '삼강오륜(三綱五倫) 등', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '속담 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '민화 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '10월의 크리스마스', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '현대 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '민속놀이', 
        start: '2020-10-01',
        end: '2020-10-13'
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
    initialDate: '2020-10-01' ,
    headerToolbar: {

      left: 'prev',

      center: 'title',

      right: 'next today,dayGridMonth'

     },
     events: [
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '2019 진주남강유등축제 &#39;워터라이딩쇼&#39;',
        start: '2020-10-01',
        end: '2020-10-01'
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

