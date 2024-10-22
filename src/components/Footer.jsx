import React from "react";
import "./Footer.css";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="http://www.instagram.com">
          <InstagramIcon className="instagram" />
        </Link>
        <Link href="http://www.linkedin.com">
          <LinkedInIcon className="linkedin" />
        </Link>
        <Link href="http://www.twitter.com">
          <XIcon className="twitter" />
        </Link>
        <Link href="http://www.pinterest.com">
          <PinterestIcon className="pinterest" />
        </Link>
      </div>

      <div className="informations">
        <p>10 Rue des Arts, 44000 Nantes, France</p>
        <p>contact@horizonstudio.com</p>
        <p>843.915.3905</p>
      </div>
    </div>
  );
}

export default Footer;
