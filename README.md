# Labellerr.com - Image Analyzer Web Application

This is a web application that implements the Image Analyzer feature for Labellerr.com, allowing users to upload images and receive an analysis report containing information such as image dimensions, dominant colors, and object recognition.

# Technologies Used

- Frontend: React.js
- Backend: Node.js (Express.js)
- Image Analysis API: Imagga (https://imagga.com)

# Prerequisites

Before running the application, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- Git (optional, for cloning the repository)
- Api key

# Configuration

- Before running the application, you need to obtain an API key and secret from Imagga. You can sign up for a free account and get the credentials from the Imagga dashboard
  (https:// imagga.com/dashboard).
- API_KEY=your_imagga_api_key
- API_SECRET=your_imagga_api_secret

# Running the Application

    1.Start the backend server:
        cd server
        npm start
    The backend server will run on http://localhost:8000.
    2.Start the frontend development server:
        cd client
        npm start
    The frontend development server will run on http://localhost:3000.

# How to Use

    1 Upload an image by clicking the "Choose File" button in the footer and selecting an image from your local files.

    2 Click the "Upload" button to submit the image for analysis.

    3 The application will display the analysis results, including image dimensions, dominant colors, and object recognition.

# Additional Notes

- The application is designed to be responsive and should work well on both desktop and mobile devices.

- The application uses the Imagga API for image analysis. You can refer to the Imagga API documentation (https://docs.imagga.com/) for more information on the available endpoints and response formats.

- The application is a simple implementation and can be extended with additional features as per requirements.

- For any issues or feedback, please feel free to open an issue on the GitHub repository.
