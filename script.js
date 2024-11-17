// Script for handling form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Show a response message
  const response = document.getElementById("responseMessage");
  response.textContent = `Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`;
  response.style.color = "green";

  // Clear form fields
  document.getElementById("contactForm").reset();
});
