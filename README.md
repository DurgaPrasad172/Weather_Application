# Weather Application

This Weather Application is a user-friendly, visually appealing, and functional application that provides users with current weather information based on their input. It allows users to search for weather data by city name or zip code, displays weather information for multiple locations simultaneously, and offers a dark mode and light mode toggle for enhanced user experience.

## Features

- Fetch and display current weather information based on user input.
- Display basic weather details including location, temperature, date, and time.
- Implement a search option for users to fetch weather data for other cities.
- Allow users to add multiple locations and display weather info for each simultaneously.
- Dark mode and light mode toggle functionality.
- Responsive design that works well on various devices (desktop, tablet, mobile).
- Interactive background images and colors.

## Technologies Used

- React.js: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- OpenWeatherMap API: API for fetching weather data.
- CSS: Styling for the application.
- Unsplash: Source for background images.

## Setup and Run Instructions

1. **Clone the Repository**

    ```bash
    git clone https://github.com/DurgaPrasad172/Weather_Application.git
    cd weather-app
    ```

2. **Install Dependencies**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

    ```bash
    npm install
    ```

3. **Create a `.env` File**

    Create a `.env` file in the root directory of the project and add your OpenWeatherMap API key:

    ```
    REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
    ```

4. **Run the Application**

    ```bash
    npm start
    ```

    The application will open in your default web browser at `http://localhost:3000`.

## Project Structure

- `src/`
  - `api/`
    - `index.js`: Contains the API call to OpenWeatherMap.
  - `components/`
    - `WeatherCard.js`: Component for displaying weather information.
    - `SearchBar.js`: Component for the search input and button.
    - `ToggleSwitch.js`: Component for the dark mode/light mode toggle switch.
  - `App.js`: Main component that manages the state and renders child components.
  - `App.css`: Global styles for the application.
  - `WeatherCard.css`: Styles specific to the `WeatherCard` component.
  - `SearchBar.css`: Styles specific to the `SearchBar` component.
  - `ToggleSwitch.css`: Styles specific to the `ToggleSwitch` component.

## Known Limitations or Issues

- **API Rate Limiting**: The OpenWeatherMap API may limit the number of requests per minute. Ensure that your usage stays within the free tier limits or consider upgrading your API plan if necessary.
- **Error Handling**: While the application handles common errors (e.g., invalid location, network issues), there may be edge cases that are not covered.
- **UI/UX**: Further improvements can be made to the user interface and experience based on user feedback.
