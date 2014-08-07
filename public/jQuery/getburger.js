function showRestaurant(restaurant) {
	var options = {
	 name: restaurant.name,
	 url: restaurant.url,
	 display_phone: restaurant.display_phone,
	 snippet_text: restaurant.snippet_text,
	 rating_img_url_small: restaurant.rating_img_url_small,
	 image_url: restaurant.image_url,
	 location: restaurant.location.address[0],
	 city: restaurant.location.city,
	 id: restaurant.id
	};
	
	$('#restaurant-container').append(render('#restaurant-information', options));
	$('#'+restaurant.id).on('click', codeAddress);
}

function showRestaurants(restaurants) {	
	$(restaurants).each(function(index) {
		showRestaurant(restaurants[index])
	});
	
};

function init(restaurants) {
	showSearchForm();
	showRestaurants(restaurants);
}

function render(template, options) {
	var template = $(template).html();
	Mustache.parse(template);
	return Mustache.render(template, options);
}
function showSearchForm() {
	$('#form').html(render('#searchForm', {city: 'Paris'}));
	$('#geoCodeNow').on('click', codeAddress);	
}

//$('#results').append("<article><section><img src =" + restaurant.rating_img_url_small +">" + restaurant.name + restaurant.url + restaurant.display_phone + restaurant.snippet_text + "</section><aside><img src="+ restaurant.image_url +"></aside></article><h1>" + console.log(restaurant.location) + "</h1>").slideDown();