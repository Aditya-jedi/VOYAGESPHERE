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
                // Redirect to login success page
                window.location.href = "login-success.html";
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
                // Redirect to feedback success page
                window.location.href = "feedback-success.html";
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
            'Asia': ['China', 'Japan', 'India','Hong Kong','Russia','singapore','saudi arabia','United Arab Emirates','Thailand','vietnam'],
            'Europe': ['France', 'Spain', 'Italy', 'Turkey', 'United Kingdom', 'Germany', 'Greece', 'Portugal', 'Netherlands', 'Switzerland'],
            'North America': ['United States Of America', 'Canada', 'Mexico','Caribbean','Cuba','Belize','Costa Rica','Greenland','The Bahamas','Panama'],
            'South America': ['Brazil', 'Chile', 'Peru', 'Argentina', 'Colombia', 'Venezuela', 'Paraguay', 'Uruguay', 'Bolivia' ],
            'Africa': ['Botswana', 'South Africa', 'Mauritius', 'Zimbabwe', 'Egypt', 'Nigeria', 'Morocco', 'Kenya', 'Seychelles', 'Madagascar'],
            'Australia': ['New Zealand','Kiribati','Marshall Island','Solomon Island','Tonga','Samoa','Palau','Micronesia'],
            'Antarctica': ['Antarctica']
        };  
        }
        });
