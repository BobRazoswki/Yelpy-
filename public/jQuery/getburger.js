function showRestaurant(restaurant) {
	var displayRestaurant = restaurant.is_claimed

	document.write(displayRestaurant)
}
function showRestaurants(restaurants) {
	for(restaurant in restaurants) {
		showRestaurant(restaurants[restaurant]);	
	}
	
}

//$( document ).ready(function() {
   




//});