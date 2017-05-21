var $grid = $('.bo-gallery').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item-size',
    gutter: 10
  }
})

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


$(document).ready(function(){
  $('.bo-slide-show').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centermode:true,
  });
});

