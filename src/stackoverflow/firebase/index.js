import { fireBaseConfig } from "./config";

// Function to Initialize firebase
export function initFirebase() {
  firebase.initializeApp(fireBaseConfig);
}

// Function to Initialize Athentication
export function Auth() {
  return firebase.auth();
}

// Function to initiliaze Databse
export function DB() {
  return firebase.database();
}
