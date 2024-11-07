// Wait for the DOM content to load before executing scripts
document.addEventListener('DOMContentLoaded', function () {
    // Login functionality
    const loginForm = document.getElementById('loginForm'); // Reference to the login form
    const popup = document.getElementById('popup'); // Reference to the login success popup
    const closePopup = document.getElementById('closePopup'); // Reference to the close button

    // Event listener for submitting the login form
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Show the popup when user logs in 
            popup.classList.remove('hidden');
        });
    }

    // Close the login success popup when the close button is clicked
    if (closePopup) {
        closePopup.addEventListener('click', function () {
            popup.classList.add('hidden'); // Hide the popup
        });
    }

    // Close popup when clicking outside the popup content
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.classList.add('hidden'); // Hide the popup
        }
    });

    // Feedback form submission with popup
    const feedbackForm = document.getElementById('feedbackForm'); // Reference to the feedback form
    const successPopup = document.getElementById('successMessage'); // Reference to the feedback success popup
    const closeFeedbackPopup = document.getElementById('closePopupFeedback'); // Reference to the close button for feedback popup

    // Event listener for submitting the feedback form
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            const userMessage = document.getElementById('userMessage').value; // Get user message

            // Simple validation check to ensure feedback is provided
            if (userMessage.trim() === "") {
                alert('Please enter your feedback before submitting.'); // Alert if empty
                return; // Stop form submission if validation fails
            }

            // Show success popup upon successful submission
            successPopup.classList.remove('hidden');
        });
    }

    // Close the feedback success popup when the close button is clicked
    if (closeFeedbackPopup) {
        closeFeedbackPopup.addEventListener('click', function () {
            successPopup.classList.add('hidden'); // Hide the popup
        });
    }

    // Close the popup when clicking outside the popup content
    window.addEventListener('click', function (event) {
        if (event.target === successPopup) {
            successPopup.classList.add('hidden'); // Hide the popup
        }
    });

    // Populate the continent page with countries
    const continentNameEl = document.getElementById('continentName'); // Reference continent name placeholder
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
