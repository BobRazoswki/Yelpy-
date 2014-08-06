function showRestaurant(restaurant) {
	$('#results').append("<p>"+ restaurant.name +"</p>");
	
}

function showRestaurants(restaurants) {	
	$(restaurants).each(function(index) {
		showRestaurant(restaurants[index]);
	});
	
};