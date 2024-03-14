import React from "react";
import LogoImage from "../images/logo.png";

export default function Header({ logoUrl}) {
  return <div className="header">
    <div class="header-text">Your Personal Movie Assistant</div>
    <div class="header-logo"><img src={logoUrl ? logoUrl : LogoImage} width="100px" /></div></div>;
}