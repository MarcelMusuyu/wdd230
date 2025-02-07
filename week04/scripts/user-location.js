if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Success! We have the user's coordinates.
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const encodedLatitude = encodeURIComponent(latitude);
      const encodedLongitude = encodeURIComponent(longitude);
      const apiKey = "16de52930a8f41b28e758f5eba7b4f85";
      const url = `https://api.opencagedata.com/geocode/v1/json?q=<span class="math-inline">\{encodedLatitude\}\+</span>{encodedLongitude}&key=${apiKey}`;

      fetch(url);

      // Now, you need to convert these coordinates to a country.
      // This is where things get tricky.  You can't reliably
      // get a country directly from latitude/longitude in the browser.

      // Option 1: Reverse Geocoding (API Call)
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodedLatitude}+${encodedLongitude}&key=apiKey`
      ) // Replace with a geocoding API of your choice
        .then((response) => response.json())
        .then((data) => {
          if (data.results && data.results.length > 0) {
            const country = data.results[0].components.country;
            console.log(country);
            const countrySelect = document.getElementById("country"); // Your country select element
            if (countrySelect) {
              // Set the country in the select dropdown.  Make sure the values
              // in your <select> match the country names returned by the API.
              for (let i = 0; i < countrySelect.options.length; i++) {
                if (countrySelect.options[i].text === country) {
                  countrySelect.selectedIndex = i;
                  break;
                }
              }
            }
          }
        })
        .catch((error) => {
          console.error("Error getting country:", error);
          // Handle the error gracefully.  Maybe provide a fallback.
        });

      // Option 2: GeoIP Database (Less Accurate, but No API Calls)
      // You can use a GeoIP database (e.g., MaxMind's GeoLite2) to map IP
      // addresses to countries.  This is less accurate than reverse geocoding
      // and requires a database download.  It's usually done server-side.
    },
    function (error) {
      // Error! The user denied access to their location, or there was another issue.
      console.error("Error getting location:", error);
      // Handle the error.  Don't make the form unusable.  Perhaps
      // explain why you're asking for the location and offer a way to
      // select the country manually.
    }
  );
} else {
  // Geolocation is not supported by this browser.
  console.log("Geolocation is not supported.");
  // Provide a fallback for manual country selection.
}
