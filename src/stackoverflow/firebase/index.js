import { fireBaseConfig } from "./config";

// Function to Initialize firebase
export function initFirebase() {

  firebase.initializeApp(fireBaseConfig);

}
