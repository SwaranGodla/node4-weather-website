# Weather Web Application

A Node.js web application that provides weather information through a clean web interface. Built with Express.js and Handlebars templates.

## Features

- Dynamic web pages using Handlebars templating
- Static asset serving (CSS, JavaScript, images)
- Weather information API endpoint
- Custom 404 pages for better user experience
- Responsive design

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js (v4.18.2)** - Web application framework
- **Handlebars (hbs v4.2.0)** - Templating engine
- **HTML/CSS** - Frontend styling and structure
 - **Geoapify API** - Geocoding (address to coordinates)
 - **Weatherstack API** - Current weather data

## Project Structure

```
web-server/
├── public/                 # Static assets
│   ├── css/                # Stylesheets
│   │   └── styles.css      
│   ├── img/                # Images
│   │   ├── robo.jpg
│   │   └── robot.png
│   ├── js/                 # Client-side JavaScript
│   │   └── app.js
│   └── about.html          # Static HTML page
├── src/                    # Server-side code
│   └── app.js              # Main application file
├── templates/              # Handlebars templates
│   ├── partials/           # Reusable template parts
│   │   ├── footer.hbs      # Footer partial
│   │   └── header.hbs      # Header partial
│   └── views/              # Page templates
│       ├── 404.hbs         # Error page
│       ├── about.hbs       # About page
│       ├── help.hbs        # Help page
│       └── index.hbs       # Home page
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Usage

Start the server:

```bash
node src/app.js
```

The application will be available at http://localhost:3000

### Weather API

Endpoint:

- `GET /weather?address=<QUERY>`

Query params:

- `address` (required): A human-readable location, e.g. `Boston` or `1600 Amphitheatre Parkway`.

Examples:

```bash
curl "http://localhost:3000/weather?address=Boston"
```

Successful response:

```json
{
  "forecast": "Partly cloudy, It is currently 13°C. There is a 10% chance of rain.",
  "location": "Boston, MA, United States of America",
  "address": "Boston"
}
```

Error responses:

```json
{ "error": "You must provide an address!" }
```

```json
{ "error": "Unable to find location!" }
```

## Available Routes

- **/** - Home page
- **/about** - About page
- **/help** - Help page
- **/weather** - Weather API endpoint (returns JSON; requires `address` query param)
- **/help/*** - Custom 404 page for help section
- **Any other path** - General 404 page

## Development

To modify the application:

1. Edit templates in the `templates` directory
2. Update static assets in the `public` directory
3. Modify server logic in `src/app.js`

## Configuration (API Keys)

This app uses third-party APIs for geocoding and weather data. If you plan to change or secure keys:

- Store keys as environment variables and load them in `src/utils/geocode.js` and `src/utils/forecast.js`.
- Example (PowerShell):

```powershell
$env:GEOAPIFY_KEY = "your_key_here"
$env:WEATHERSTACK_KEY = "your_key_here"
node src/app.js
```

## Future Enhancements

- Add weather search functionality
- Implement user authentication
- Create a more detailed weather forecast
- Add geolocation support

