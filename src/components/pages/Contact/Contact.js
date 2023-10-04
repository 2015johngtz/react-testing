// Imports
import React, { useState } from "react";
import { TextField, dividerClasses } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./Contact.css";
import PdfFile from "../../../Resumé.pdf";
import Box from "@mui/material/Box";


// Exports
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Validates name
  const validateName = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setName(value);
    if (name === "name") {
      if (value === "") {
        setName("");
        setErrorMessage(`Please enter a name. This field is required.`);
      }
    }
    if (value.length > 0) {
      setErrorMessage(``);
    }
  };

  // Validates email
  const validateEmail = (e) => {
    e.preventDefault();
    console.log(e);
    const { name, value } = e.target;
    setEmail(value);
    if (name === "email") {
      if (value === "") {
        setEmail("");
        setErrorMessage(
          `Please enter a valid email address. This field is required.`
        );
      }
      const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      console.log(!pattern.test(value));
      if (!pattern.test(value)) {
        setErrorMessage(`Please enter a valid email`);
      } else {
        setErrorMessage("");
      }
    }
  };

  // Validates message
  const validateMessage = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setMessage(value);
    if (name === "message") {
      if (value === "") {
        setMessage("");
        setErrorMessage(`Please enter a message. This field is required.`);
      }
    }
    if (value.length > 0) {
      setErrorMessage(``);
    }
  };

  // Renders contact form
  return (
    <>
    <div className="contact-skills-wrap">

    {/* SKILLS */}
    <Box>
      <div>
        <h1 className="skillst" style={{ display: "flex", justifyContent: "center" }}>
          Skills
        </h1>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
            color: "#528AAE",
            fontFamily: 'Montserrat',
          }}
        >
          Front-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "100px",
          }}
        >
          - HTML
          <br></br>- CSS
          <br></br>- JavaScript
          <br></br>- JQuery
          <br></br>- Responsive Design
          <br></br>- React
          <br></br>- Bootstrap
        </p>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
            color: "#528AAE",
            fontFamily: 'Montserrat',
          }}
        >
          Back-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "80px",
          }}
        >
          - HTML
          <br></br>- API's
          <br></br>- Node
          <br></br>- Express
          <br></br>- MySQL, Sequelize
          <br></br>- MongoDB, Mongoose
          <br></br>- Bootstrap
          <br></br>- REST
          <br></br>- GraphQL
        </p>
        <a
          href={PdfFile}
          download="Ryan Messett Resumé"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button id="resume-button" className="pop-on-hover">
            Click Here to Download My Resume
          </Button>
        </a>
      </div>
    </Box>
        
        <div className="wrap-contact">
        <div>
          <h1 className="contactt" style={{ display: "flex", justifyContent: "center" }}>
            Contact Me
          </h1>
        </div>
        <form style={{ display: "flex", justifyContent: "center" }}>
          <Stack spacing={2}>
            <MenuItem>
              <TextField
                defaultValue={name}
                onBlur={validateName}
                id="outlined-basic"
                fullWidth
                label="Name"
                name="name"
                type="text"
                variant="outlined"
                style={{ backgroundColor: "floralwhite" }}
              />
            </MenuItem>
            <MenuItem>
              {" "}
              <TextField
                defaultValue={email}
                onBlur={validateEmail}
                id="outlined-basic"
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                variant="outlined"
                style={{ backgroundColor: "floralwhite" }}
              />
            </MenuItem>
            <MenuItem>
              <textarea
                defaultValue={message}
                onBlur={validateMessage}
                rows="15"
                cols="40"
                id="outlined-basic"
                label="Message"
                name="message"
                type="text"
                variant="outlined"
                style={{ backgroundColor: "floralwhite" }}
                placeholder="Type your message here!"
              />
            </MenuItem>
            {errorMessage && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <MenuItem style={{ justifyContent: "center" }}>
              <Button
                id="contact-button"
                className="pop-on-hover"
                xs={{ width: "100%" }}
                variant="contained"
              >
                Submit
              </Button>
            </MenuItem>
          </Stack>
        </form>
        </div>
      </div>
    </>
  );
}

// Below is a possible functional Google Form that can be implemented to receive contact info and messages without a backend set-up

// <div style={{ display: "flex", justifyContent: "center" }}>
//   <iframe
//     src="https://docs.google.com/forms/d/e/1FAIpQLScysYfJHsIA9Wvf5bYfiF_yPb5QtSX9wwZCdlxV42WoCxT_tQ/viewform?embedded=true"
//     width="640"
//     height="678"
//     frameborder="0"
//     marginheight="0"
//     marginwidth="0"
//   >
//     Loading…
//   </iframe>
// </div>;
