import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../firebase";

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    createUserDocumentFromAuth(response.user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  );
}
