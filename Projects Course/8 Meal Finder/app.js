const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal')


// Search meal and fetch from API
function searchMeal(e) {
    

    // Clear single meal when new search is made
    single_mealEl.innerHTML = '';

    // Get search term
    const term = search.value;
    search.textContent = ''

    console.log(term)

    e.preventDefault()
}


// Event Listeners
    submit.addEventListener('submit', searchMeal)