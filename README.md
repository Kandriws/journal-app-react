# Daily Journal App with React and Vite

Welcome to the Daily Journal App, a simple and efficient way to chronicle your daily experiences. This application is built using React and Vite and leverages Firebase for authentication and Firestore for data storage.

## Project Setup

Before you get started with the Daily Journal App, you need to configure some essential environment variables. These variables are necessary for the proper functioning of Firebase services. To do this, create an `.env` file in the project root and add the following variables:

```env
VITE_APIKEY=YourFirebaseAPIKey
VITE_AUTHDOMAIN=YourFirebaseAuthDomain
VITE_PROJECTID=YourFirebaseProjectID
VITE_STORAGEBUCKET=YourFirebaseStorageBucket
VITE_MESSAGINGSENDERID=YourFirebaseMessagingSenderID
VITE_APPID=YourFirebaseAppID
```

Make sure to replace the placeholders (`YourFirebaseAPIKey`, `YourFirebaseAuthDomain`, etc.) with your actual Firebase project credentials. If you don't have a Firebase project, you can create one on the Firebase Console.

By following the guidance of Professor Fernando Herrera, this React and Vite project is designed to provide a robust and user-friendly platform for journaling your day. The combination of modern frontend technologies and Firebase services ensures a secure and seamless experience for recording and reviewing your daily moments. Enjoy your journaling journey with the Daily Journal App!