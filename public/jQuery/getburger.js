function showRestaurant(restaurant) {
	console.log(restaurant)
	var template = $('#restaurant-information').html();
	Mustache.parse(template);
	var rendered = Mustache.render(template, {
	 name: restaurant.name,
	 url: restaurant.url,
	 display_phone: restaurant.display_phone,
	 snippet_text: restaurant.snippet_text,
	 rating_img_url_small: restaurant.rating_img_url_small,
	 image_url: restaurant.image_url,
	 location: restaurant.location.address[0]
	});
	console.log(rendered)
	$('#restaurant-container').append(rendered);
	}

function showOnMap(restaurant) {
	var templateAddress = $('#map-information').html();
	Mustache.parse(templateAddress)
	var renderedAddress = Mustache.render(templateAddress, {
		location: restaurant.location.address[0],
		city: restaurant.location.city
	});
	console.log(restaurant.location)
	$('#map-container').append(renderedAddress);
};

function showRestaurants(restaurants) {	
	$(restaurants).each(function(index) {
		showRestaurant(restaurants[index])
		showOnMap(restaurants[index]);
	});
	
};

//$('#results').append("<article><section><img src =" + restaurant.rating_img_url_small +">" + restaurant.name + restaurant.url + restaurant.display_phone + restaurant.snippet_text + "</section><aside><img src="+ restaurant.image_url +"></aside></article><h1>" + console.log(restaurant.location) + "</h1>").slideDown();