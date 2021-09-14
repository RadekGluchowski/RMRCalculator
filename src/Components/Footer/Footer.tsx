import './Footer.css'
import React from "react";

enum Constants {
    CREATED_BY = "Created By:",
    AUTHOR = "Radosław Głuchowski",
    AUTHOR_GITHUB_LINK = "https://github.com/RadekGluchowski",
}

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            &copy; {new Date().getFullYear()} {Constants.CREATED_BY}
            <a href={Constants.AUTHOR_GITHUB_LINK}> {Constants.AUTHOR}  </a>
        </div>
    );
};

export default Footer;
