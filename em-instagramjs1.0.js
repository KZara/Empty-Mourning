var token = '210164408.67c2d81.25b8123cf6db47a6a855f6483285e412';
userid = 210164408;
num_photos = 20;
 
$.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        for( x in data.data ){
            $('.carousel').append('<div class="carousel-cell"> <img src="'+data.data[x].images.standard_resolution.url+'"></div>');
        }
    },
    error: function(data){
        console.log(data);
    }
});
