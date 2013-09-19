console.log('json ajax');
$(document).ready(function(){
	$("body").click(function(){
		$("#project_title").text("Rahul has taken over");
	});


  $.getJSON( 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
    tags: "cats",
    tagmode: "any",
    format: "json"
  }, function( data ) {
	    console.log(data);
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });
    });
    
  $("#imageLoader").click(function() {
	console.log("you have clicked the button!");
	var tag = $("#inputTag").val();
	console.log("Input box had: " + tag);
	$.getJSON( 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
    tags: tag,
    tagmode: "any",
    format: "json"
  }, function( data ) {	    
      var imagesArr = [];
      $.each( data.items, function( i, item ) {
	      imagesArr.push("<img src=" + item.media.m + ">" + "</img>");
        if ( i === 3 ) {
          return false;
        }
      });
      console.log(imagesArr);
      $("#images").html(imagesArr.join(""));
    });  
  }
  );
});


