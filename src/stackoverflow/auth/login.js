import { Auth } from "../firebase"

export function demoLogin() {
  Auth()
  .signInWithEmailAndPassword('stancoproof@gmail.com', 'test_password')
  .then(signedInUser => {

    console.log(signedInUser )

  })
  .catch(error => {
    console.log(error)
  })
}