import React from 'react'
const Header = () => {
    const header = document.getElementById('header-text');

// On hover, change the text to "Janani"
header.addEventListener('mouseover', () => {
    header.textContent = 'Janani';
});

// Revert back to "Welcome to our website" when not hovering
header.addEventListener('mouseout', () => {
    header.textContent = 'Welcome to our website';
});

  return (
    <div ><!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hover Text Example</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1 id="header-text">Welcome to our website</h1>
    
        <script src="app.js"></script>
    </body>
    </html>
    </div>
  )
}

export default Header