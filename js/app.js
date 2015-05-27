var main = function () {
	"use strict";

	// this is actually just one string,
	// but i spread it out over two lines
	// to make it more readable

	var url = "http://api.flickr.com/services/feeds/photos_public.gne" +
	"?tags=mecha&format=json&jsoncallback=?"

	$.getJSON(url, function (flickrResponse) {
			flickrResponse.items.forEach(function (photo) {
				console.log(photo.media.m);
			});

			// we'll simply print the response to the console
			// for the time being
			console.log(flickrResponse);

	});

};

$(document).ready(main);