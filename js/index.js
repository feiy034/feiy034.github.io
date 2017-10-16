var albumUrl = [
  'https://cdn1.littlethings.com/app/uploads/2014/09/zOwtWFv-600x400.jpg',
  'http://www.debwatsonart.com/wp-content/uploads/2014/06/ducklingphoto.jpg',
  'https://cdn3.littlethings.com/app/uploads/2014/09/MU6I9D1-600x421.jpg',
  'https://cdn9.littlethings.com/app/uploads/2014/09/ayzHvSe-600x411.jpg',
  'https://c1.staticflickr.com/5/4036/4679888157_059f834e35_b.jpg',
  'http://www.cutestpaw.com/wp-content/uploads/2013/12/duckling-riding-turtle.jpg'
];
var counter = 0;

$('#duckling').click(function () {
  console.log('duckling clicked');
  counter = counter + 1;
  if (counter >= albumUrl.length) {
    counter = 0;
  }
  $('#duckling').attr('src', albumUrl[counter]);
});

$('#mytext').click(function () {
  console.log('text clicked');
  $('#gaga').text($('#gaga').text() + 'quack ');
  /*var newLeft = Math.floor(Math.random()*70);
  var newTop = Math.floor(Math.random()*90);
  $('div#mytext').css('top', newTop + '%');
  $('div#mytext').css('left', newLeft + '%');*/
});

$('#gaga').click(function () {
  $('#gaga').text('');
});