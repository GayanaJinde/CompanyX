import React, { useEffect } from "react";
import "./Header.css";
import company from "../../assets/company.jpg";
import CreateCompany from "../Company/CComponents/Organization/CreateCompany";
import AOS from "aos"; // animation on scroll
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>The world's leading</span>
            <span>employee record</span>
            <span>managing system</span>
          </h1>
          <p className="u-text-small">
            CompanyX helps you map employee of your choice to the company you want. Give it a try!
          </p>
          <div className="header-cta grow nounderline">
            <a href="/create" Class={"btn btn-light"} value="CreateCompany">Create Company</a>
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={company} alt="company" height={350}/>
        </div>
      </div>
    </section>
  );
};

export default Header;
