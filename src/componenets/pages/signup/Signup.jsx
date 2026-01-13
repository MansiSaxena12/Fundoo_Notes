import "./Signup.css";
import signupImg from "../../../assets/Signup.jpeg";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "@mui/material";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.firstName.match(/^[A-Za-z]{2,}$/)) {
      newErrors.firstName = "Enter a valid first name";
    }

    if (!formData.lastName.match(/^[A-Za-z]{2,}$/)) {
      newErrors.lastName = "Enter a valid last name";
    }

    if (!formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Email must end with @gmail.com";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">

        {/* LEFT – FORM */}
        <div className="signup-left">
          <h2><i>fundoo</i></h2>
          <h2>
            Create your <span>fundoo</span> Account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <TextField
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />

              <TextField
                label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </div>

            <TextField
              label="Username"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email || "You can use letters, numbers and periods"}
              fullWidth
            />

            <div className="row">
              <TextField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <TextField
                label="Confirm"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </div>

            <FormControlLabel
              control={<Checkbox />}
              label="Show password"
              className="show-password"
            />

            <div className="action-row">
              <button type="button" className="link-btn">
                <Link href="/SignIn">Signin instead?</Link>
              </button>

              <button type="submit" className="primary-btn">
                Next
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="signup-right">
          <img src={signupImg} alt="Signup Illustration" />
          <p>
            One account. All of <span>fundoo</span> working for you.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
