// TO FILTER SEARCHED RESTAURANTS

const useFilterRestaurants = (searchText, restaurants) => {
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredRestaurants;

}

export default useFilterRestaurants;

