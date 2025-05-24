function searchRecipes() {
    // Get the search query entered by the user
    var searchQuery = document.getElementById('searchInput').value.toLowerCase();
  
    // Get all recipe cards
    var recipeCards = document.querySelectorAll('.recipe-card');
  
    // Loop through each recipe card to check if it matches the search query
    recipeCards.forEach(function(card) {
      var title = card.querySelector('.recipe-title').innerText.toLowerCase();
      var description = card.querySelector('.recipe-description').innerText.toLowerCase();
  
      // If the title or description contains the search query, display the card; otherwise, hide it
      if (title.includes(searchQuery) || description.includes(searchQuery)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  