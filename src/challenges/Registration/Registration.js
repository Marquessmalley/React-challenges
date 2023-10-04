import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (name.length < 2) {
      setNameError(true);
      return;
    }

    const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;

    if (!regex.test(email)) {
      setEmailError(true);
    }
    if (password.length < 8) {
      setPasswordError(true);
    }
    console.log("Form Submitted!");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" required onChange={handleName} />
        {nameError && <p>Invalid Name</p>}
        <input type="email" required onChange={handleEmail} />
        {emailError && <p>Invalid Email</p>}
        <input type="password" required onChange={handlePassword} />
        {passwordError && <p>Invalid Password</p>}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Registration;
