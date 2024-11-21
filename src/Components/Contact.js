import React from "react";
import { useState } from "react";
import { FormControl, FormLabel } from "@mui/material";
import {Button} from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

const Contact = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <FormControl className="form-control" id="message">
          <FormLabel>Message</FormLabel>
          <textarea
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>

        <Button
          onClick={() => {
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/919958995724?text=${encodedMessage}`;
            window.open(url, "_blank");
          }}
        >
          <WhatsApp />
        </Button>
      </div>
    </div>
  );
};

export default Contact;
