import React from "react";
import "./Contacts.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function MultilineTextFields() {
  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "50ch",
            display: "flex",
            flexDirection: "column",
            border: "none",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& input::placeholder": {
              color: "lightgray",
              opacity: 1,
            },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="Firstname"
            variant="outlined"
            color="success"
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "lightgray",
              },
            }}
          />
        </div>
        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="Lastname"
            variant="outlined"
            color="success"
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "lightgray",
              },
            }}
          />
        </div>
        <div className="inputs">
          <TextField
            id="outlined-basic"
            label="contact@email.com"
            variant="outlined"
            type="email"
            color="success"
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "lightgray",
              },
            }}
          />
        </div>
        <div className="inputs">
          <TextField
            id="outlined-multiline-flexible"
            label="Your Message"
            placeholder="Enter Your Message"
            color="success"
            multiline
            rows={6}
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "lightgray",
              },
            }}
          />
        </div>
        <div className="button">
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#5e7b58",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            Send
          </Button>
        </div>
      </Box>
    </div>
  );
}
