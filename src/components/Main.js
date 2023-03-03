import React from "react";

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>It is a JavaScript library for building user interfaces</li>
        <li>Virtual DOM is faster than real DOM</li>
        <li>Keep your components small</li>
        <li>Supports Type Systems</li>
        <li>React development and SEO go together</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}
