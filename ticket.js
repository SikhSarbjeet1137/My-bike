
// Parse query parameters from the URL
const params = new URLSearchParams(window.location.search);

// Get ticket elements
const ticketName = document.getElementById("ticket-name");
const ticketEmail = document.getElementById("ticket-email");
const ticketNumber = document.getElementById("ticket-number");
const ticketMethod = document.getElementById("ticket-method");
const ticketTime = document.getElementById("ticket-time");

// Populate ticket details from the query parameters
ticketName.textContent = params.get("name") || "N/A";
ticketEmail.textContent = params.get("email") || "N/A";
ticketNumber.textContent = params.get("number") || "N/A";
ticketMethod.textContent = params.get("method") || "N/A";

// Get the current date and time
const now = new Date();
ticketTime.textContent = now.toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
