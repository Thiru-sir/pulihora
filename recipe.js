// JavaScript for Recipe Details Scroll
function showRecipe(recipeId) {
  var recipeDetails = document.getElementById(recipeId);
  var allRecipeDetails = document.querySelectorAll('.recipe-details');
  
  // Hide all recipe details
  allRecipeDetails.forEach(function(detail) {
      if (detail.id !== recipeId) {
          detail.style.display = "none";
      }
  });

  if (recipeDetails.style.display === "none" || recipeDetails.style.display === "") {
      recipeDetails.style.display = "block";
      // Scroll to recipe details
      recipeDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
      recipeDetails.style.display = "none";
  }
}
