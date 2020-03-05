import { Auth } from "../firebase/index";
import { DB } from "../firebase/index";
// initializing register auth

// Demo register
export function registerUser(userRegisterDetails) {
  const { email, password, user_details } = userRegisterDetails;

  Auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userDetails => {
      createUserProfile(userDetails.user.uid, user_details)
    })
    .catch(error => {
      console.log(error);
    });
}



function createUserProfile(user_id, user_details) {
  console.log('Creating profile', user_id, user_details)
  DB().ref("user_profile/" + user_id)
  .set(user_details)
}


