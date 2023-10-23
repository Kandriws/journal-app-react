# Daily Journal App with React and Vite

Welcome to the Daily Journal App, a simple and efficient way to chronicle your daily experiences. This application is built using React and Vite and leverages Firebase for authentication and Firestore for data storage.

## Getting Started

### Project Setup

Before you get started with the Daily Journal App, you need to install the necessary dependencies and configure some essential environment variables. To do this:

1. Clone this repository to your local machine.

2. In the project root directory, install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### Environment Variables

Create an `.env` file in the project root and add the following variables:

```env
VITE_APIKEY=YourFirebaseAPIKey
VITE_AUTHDOMAIN=YourFirebaseAuthDomain
VITE_PROJECTID=YourFirebaseProjectID
VITE_STORAGEBUCKET=YourFirebaseStorageBucket
VITE_MESSAGINGSENDERID=YourFirebaseMessagingSenderID
VITE_APPID=YourFirebaseAppID
```

Make sure to replace the placeholders (`YourFirebaseAPIKey`, `YourFirebaseAuthDomain`, etc.) with your actual Firebase project credentials. If you don't have a Firebase project, you can create one on the Firebase Console.

### Testing

To run tests, create an `.env.test` file with the same variables as in the `.env` file, but use testing credentials if applicable. This allows you to isolate your test environment from the production environment.

### Start the Development Server

You can now start the development server to run the Daily Journal App:

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000` by default.

By following the guidance of Professor Fernando Herrera, this React and Vite project is designed to provide a robust and user-friendly platform for journaling your day. The combination of modern frontend technologies and Firebase services ensures a secure and seamless experience for recording and reviewing your daily moments. Enjoy your journaling journey with the Daily Journal App!