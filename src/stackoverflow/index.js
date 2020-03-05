import {initFirebase} from "./firebase/index"
import {registerUser} from "./auth/register"
// import { demoLogin } from "./auth/login"
import registerData from "./data/registerdata";
// Start firebase

initFirebase()

registerUser(registerData)

