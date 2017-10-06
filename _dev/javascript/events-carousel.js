$(document).ready(function () {
  /********************************************************
  events carousel on homepage
  ********************************************************/

  const eventImage = {
    1: 'http://www.pareandflourish.com/images/events/event1-pic1.jpg',
    2: 'http://www.pareandflourish.com/images/events/event1-pic2.jpg',
    3: 'http://www.pareandflourish.com/images/events/event1-pic3.jpg',
    4: 'http://www.pareandflourish.com/images/events/event1-pic4.jpg',
    5: 'http://www.pareandflourish.com/images/events/event1-pic5.jpg',
    6: 'http://www.pareandflourish.com/images/events/event1-pic6.jpg',
    7: 'http://www.pareandflourish.com/images/events/event1-pic7.jpg',
    8: 'http://www.pareandflourish.com/images/events/event2-pic1.jpg',
    9: 'http://www.pareandflourish.com/images/events/event2-pic2.jpg',
    10: 'http://www.pareandflourish.com/images/events/event2-pic3.jpg',
    11: 'http://www.pareandflourish.com/images/events/event2-pic4.jpg',
    12: 'http://www.pareandflourish.com/images/events/event2-pic5.jpg'
  }
    
  let eventImages = '';
  
  for (let i = 1; i < 12; i++) {
    eventImages += '<div class="eventImage" style="background: url(' + eventImage[i] + ')"></div>';
  }
  
  $('.eventGallery').append(eventImages);
  
  $('.eventGallery').slick({
    centerMode: true,
    centerPadding: '3rem',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '2rem',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '2rem',
          slidesToShow: 1
        }
      }
    ]
  });
});