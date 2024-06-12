import React from "react";
import { FooterContainer } from "../styles/Footer.styled";

const Footer = () => {
    return (
    <FooterContainer>
        <div style={{display: "flex",justifyContent:"space-between"}}>
            <div style={{display: "flex",width: "192px"}}></div>
            <div style={{display: "flex", justifyContent:"center",flexGrow:1}}>
                <div style={{display: "flex", padding:"15px"}}>
                    <a href="/session/:id" style={{textDecoration: "none", color: "#FFF"}}>Session</a>
                </div>
                <div style={{display: "flex", padding:"15px"}}>
                    <a href="/legal/" style={{textDecoration: "none", color: "#FFF"}}>Mentions légales</a>
                </div>
                <div style={{display: "flex", padding:"15px",textDecoration: "none"}}>
                    <a href="/contact/" style={{textDecoration: "none", color: "#FFF"}}>Contact</a>
                </div>
            </div>
            <div style={{display: "flex", justifyContent:"flex-end", marginRight: "20px"}}>
                <div>
                    <img src="icon-facebook.png"></img>
                </div>
                <div>
                    <img src="icon-instagram.png"></img>
                </div>
                <div>
                    <img src="icon-twitterx.png"></img>
                </div>
                <div>
                    <img src="icon-tiktok.png"></img>
                </div>
            </div>
        </div>
        <p>&copy; 2024 La Maison Horrifique. Tous droits réservés.</p>
    </FooterContainer>
    )
}

export default Footer;