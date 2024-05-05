# Space Go
Space Go is a space themed web application developed using React and using Daisy UI (Tailwind) for styling. This is developed utilizing API provided by NASA Open API for various interactions in the web application. Kinde is used as the Authentication Provider to login and register user.

## Setup Instructions

### Prerequisites
- Visual Studio Code or any other code editor

### Steps
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd frontend
2. **Install all necessary dependencies:**
   ```bash
   npm i 
2. **Run App:**
   ```bash
   npm run dev

## API's Used

### Prerequisites
- Create an account in [Nasa Open APIs](https://api.nasa.gov/) to get an API key and make sure to pass it during each request.

### Astronomy Picture of the Day (APOD)
- This will return a unique picture each day with an expalanation.
 ```bash
  GET https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
  ```
### Earth Polychromatic Imaging Camera (EPIC)
- The EPIC API provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument.
- Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.
 ```bash
  GET https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY
  ```
### Mars Rover Photos
- This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars
- Each rover has its own set of photos stored in the database, which can be queried separately.
- The user can select the camera from the drop down to view the images taken from that particular camera
 ```bash
  GET https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
  ```
