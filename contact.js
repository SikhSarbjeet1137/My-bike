document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("5aaGCtfwnpD79YIGR");
  
    const form = document.getElementById("contact-form");
    const notification = document.getElementById("notification");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      const emailParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
  
      emailjs
        .send("service_hyvaz0n", "template_bu2m02q", emailParams)
        .then(() => {
          notification.classList.remove("hidden");
          notification.style.display = "block";
  
          setTimeout(() => {
            window.location.href = "index.html";
          }, 3000); // Redirect after 3 seconds
        })
        .catch((error) => {
          console.error("Failed to send message:", error);
          alert("An error occurred while sending your message. Please try again.");
        });
    });
  });
  