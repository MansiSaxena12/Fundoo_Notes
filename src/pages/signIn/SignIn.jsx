import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";
import "../../App.css";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function MultiActionAreaCard() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Email must end with @gmail.com";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try{
        const res=await api.get(`/user?email=${formData.email}&password=${formData.password}`);
        if(res.data.length>0){
          const user =res.data[0];
          localStorage.setItem('userId',user.id);
          localStorage.setItem('userName',`${user.firstName}&{user.lastName}`);
          alert("Login Sucessful");
          navigate('/');
        }
      
      else{
        alert("invalid Password");
      }
    }
    catch(err){
      console.log("Logn Error",err);
    }
    }
  };
  const navigate=useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fff",
      }}
    >
      <Card
        sx={{
          width: 450,
          p: 4,
          borderRadius: 2,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "pink",
            mb: 1,
          }}
        >
          Fundoo
        </Typography>

        {/* Heading */}
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 500 }}>
          Sign in
        </Typography>

        <Typography variant="body1" sx={{ color: "#5f6368", mb: 3 }}>
          Use your <i>fundoo</i> account
        </Typography>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email or phone"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />

          <Typography
            sx={{
              color: "#1a73e8",
              fontSize: 14,
              cursor: "pointer",
              mb: 2,
              textAlign: "left",
            }}
          >
            Forgot email?
          </Typography>

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            variant="outlined"
          />

          <Typography
            sx={{
              color: "#1a73e8",
              fontSize: 14,
              cursor: "pointer",
              mt: 1,
              textAlign: "left",
            }}
          >
            Forgot password?
          </Typography>
        </Box>

        <CardContent sx={{ px: 0, mt: 3 }}>
          <Typography
            variant="body2"
            sx={{ color: "#5f6368", textAlign: "left" }}
          >
            Not your computer? Use Guest mode to sign in privately.
            <span style={{ color: "#1a73e8", cursor: "pointer" }}>
              {" "}
              Learn more
            </span>
          </Typography>
        </CardContent>

        {/* Buttons */}
        <CardActions sx={{ justifyContent: "space-between", mt: 2 }}>
          <Button
            sx={{
              textTransform: "none",
              color: "#1a73e8",
              fontSize: "15px",
              pl: 0,
            }}
          >
            <Link href="/SignUp" underline="none">
              <b>Create account</b>
            </Link>
          </Button>

          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              textTransform: "none",
              bgcolor: "#1a73e8",
              "&:hover": { bgcolor: "#1558b0" },
            }}
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
