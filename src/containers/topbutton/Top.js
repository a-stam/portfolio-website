import React from "react";
import "./Top.scss";
// import { doc } from "prettier";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  function ScrollToSkills() {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      // document.body.scrollTop > 20 ||
      // document.documentElement.scrollTop > 20
      // if scrollTop is in first vievipoint then show button
      window.scrollY > window.innerHeight
    ) {
      let topButton = document.getElementById("topButton")
      if (topButton) topButton.style.visibility = "visible";

      let skillsButton = document.getElementById("skillsButton")
      if (skillsButton) skillsButton.style.visibility = "hidden";
    } else {
      let topButton = document.getElementById("topButton")
      if (topButton) topButton.style.visibility = "hidden";

      let skillsButton = document.getElementById("skillsButton")
      if (skillsButton) skillsButton.style.visibility = "visible";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document

  // if scroll is > 20 then show button: 
  // else show button that points down and scrolls to the skill section
  return (
    <>
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-solid fa-arrow-up" aria-hidden="true"></i>
    </button>
    <button onClick={ScrollToSkills} id="skillsButton" title="Go to skills">
      <i className="fas fa-solid fa-arrow-down" aria-hidden="true"></i>
    </button>
    </>
  );
  
}
