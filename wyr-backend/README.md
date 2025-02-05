# QR Code Attendance System

## Project Overview

This Node.js application allows professors to generate a QR code for students to scan in order to validate their attendance based on location. The system ensures that only students physically present in the classroom can register their attendance.

## Features

- **Professor functionalities:**
  - Generate a QR code for the current class session.
  - Define a geolocation range to validate attendance.
- **Student functionalities:**
  - Scan the QR code using a mobile device.
  - Send their geolocation data for validation.
  - Receive confirmation of attendance.
- **Backend functionalities:**
  - Validate student location against the professor’s location.
  - Store attendance records in a database.
  - Provide an API for retrieving attendance data.

## Tech Stack

- **Backend:** Node.js (Express.js)
- **Database:** PostgreSQL
- **Frontend:** React.js
- **QR Code Generation:** qrcode npm package
- **Geolocation Services:** Google Maps API / OpenStreetMap API
- **Authentication:** JWT-based authentication

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- PostgreSQL (if using a relational database)
- npm or yarn

### Steps

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up environment variables:
   Create a `.env` file and configure the following:
   ```env
   PORT=5000
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_secret_key
   GOOGLE_MAPS_API_KEY=your_api_key
   ```
3. Run database migrations:
   ```sh
   npm run migrate
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate and retrieve a token

### Professor Routes

- `POST /api/professor/generate-qr` - Generate QR code with location data
- `GET /api/professor/attendance` - Retrieve attendance records

### Student Routes

- `POST /api/student/scan` - Submit QR code and geolocation for validation
- `GET /api/student/attendance` - View attendance history

## Usage

1. A professor logs in and generates a QR code.
2. Students scan the QR code via their mobile device.
3. The system checks if the student's location is within the allowed range.
4. If valid, the student's attendance is recorded.
5. The professor can view attendance reports.

## Future Enhancements

- Implement real-time notifications for attendance confirmation.
- Add facial recognition for extra verification.
- Generate attendance reports and analytics.

## License

This project is licensed under the MIT License.

## Contributors

- Álef Ádonis
