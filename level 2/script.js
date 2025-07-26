function showContent(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = `
      <h2> Home</h2>
      <p>Welcome to the Home Page! This is the default content.</p>
    `;
  } else if (page === "about") {
    content.innerHTML = `
      <h2>About Us</h2>
      <p>We are Mugesh's creative development team building cool projects for the web.</p>
    `;
  } else if (page === "contact") {
    content.innerHTML = `
      <h2> Contact</h2>
      <p>Reach us at: mugeshmurugan57@gmail.com</p>
    `;
  }
}
