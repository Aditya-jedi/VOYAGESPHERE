// Wait for the DOM content to load before executing scripts
document.addEventListener('DOMContentLoaded', function () {
    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm'); // Reference to the login form
    const loginSuccessMessage = document.getElementById('loginSuccessMessage'); // Reference to the success message for login

    // Event listener for submitting the login form
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get the username and password values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Basic validation to check if both fields are filled
            if (username && password) {
                loginSuccessMessage.textContent = 'Login successful! Welcome, ' + username + '!'; // Show success message
                loginSuccessMessage.classList.remove('hidden'); // Make the success message visible
                loginForm.reset(); // Reset the form fields
            }
        });
    }

    // Handle Feedback Form Submission
    const feedbackForm = document.getElementById('feedbackForm'); // Reference to the feedback form
    const feedbackSuccessMessage = document.getElementById('feedbackSuccessMessage'); // Reference to the success message for feedback

    // Event listener for submitting the feedback form
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default submission

            // Get the selected feedback type and message
            const feedbackType = document.querySelector('input[name="feedbackType"]:checked').value; // Get checked feedback type
            const userMessage = document.getElementById('userMessage').value; // Get user message

            // Basic validation to ensure the feedback message is not empty
            if (userMessage.trim() !== "") {
                feedbackSuccessMessage.textContent = 'Thank you for your feedback! We appreciate it!'; // Show success message
                feedbackSuccessMessage.classList.remove('hidden'); // Make the success message visible
                feedbackForm.reset(); // Reset the form fields
            }
        });
    }

    // Populate the continent page with countries
    const continentNameEl = document.getElementById('continentName'); // Reference to continent name placeholder
    const countryList = document.getElementById('countryList'); // Reference to country list
    const urlParams = new URLSearchParams(window.location.search); // URL parameters for continent
    const continent = urlParams.get('continent'); // Get continent value from URL

    // If a continent is specified, populate the country list
    if (continent) {
        continentNameEl.textContent = continent; // Set continent name in the header
        const countriesData = { // Object containing continents and their respective countries
            'Asia': ['China', 'Japan', 'India'],
            'Europe': ['France', 'Germany', 'Italy'],
            'North America': ['USA', 'Canada', 'Mexico'],
            'South America': ['Brazil', 'Argentina', 'Chile'],
            'Africa': ['South Africa', 'Kenya', 'Egypt'],
            'Australia': ['Australia'],
            'Antarctica': ['Antarctica']
        };

        // Populate country links based on the selected continent
        countriesData[continent].forEach(country => {
            const a = document.createElement('a'); // Create a new anchor element
            a.href = `country.html?country=${country}`; // Set href to country page
            a.textContent = country; // Set link text to country name
            a.className = "country"; // Add class for CSS styling
            countryList.appendChild(a); // Append the link to the country list
        });
    }

    // Populate the country page with activities
    const countryName = urlParams.get('country'); // Get country name from URL

    // If a country is specified, populate the activities list
    if (countryName) {
        const countryNameDisplay = document.getElementById('countryName'); // Reference to country name display
        countryNameDisplay.textContent = countryName; // Set country name in header
        const thingsToDoList = document.getElementById('thingsToDoList'); // Reference to activity list

        // Object containing activities for each country
        const thingsToDo = {
            'China': [
                "Visit the Great Wall of China",
                "Explore the Forbidden City",
                "Take a river cruise on the Yangtze",
                "Sample authentic Peking duck",
                "Visit Terra Cotta Warriors"
            ],
            'Japan': [
                "See Mount Fuji",
                "Experience a Traditional Tea Ceremony",
                "Visit temples in Kyoto",
                "Explore Tokyo's nightlife",
                "Relax in an Onsen (Hot Spring)"
            ]
            // Extend with more countries and activities as needed
        };

        // Populate activities for the selected country
        thingsToDo[countryName].forEach(activity => {
            const div = document.createElement('div'); // Create a new div for each activity
            div.className = "thing"; // Add class for CSS styling
            div.innerHTML = `<strong>${activity}</strong>`; // Set activity inner HTML
            thingsToDoList.appendChild(div); // Append the activity to the list
        });
    }
});
