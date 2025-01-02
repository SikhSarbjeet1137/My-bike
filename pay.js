document.addEventListener("DOMContentLoaded", () => {
    const paymentMethod = document.getElementById("payment-method");
    const upiQrDetails = document.getElementById("upi-qr-details");
    const cardDetails = document.getElementById("card-details");
    const paymentForm = document.getElementById("payment-form");
  
    // Show/Hide payment-specific details
    paymentMethod.addEventListener("change", (e) => {
      const value = e.target.value;
      upiQrDetails.classList.toggle("hidden", value !== "upi" && value !== "qr");
      cardDetails.classList.toggle("hidden", value !== "card");
    });
  
    // Generate QR Code
    document.getElementById("generate-qr").addEventListener("click", () => {
      const amount = document.getElementById("amount").value;
      const upiId = document.getElementById("upi-id").value.trim();
  
      if (!upiId || !amount || amount <= 0) {
        alert("Please enter a valid UPI ID and amount!");
        return;
      }
  
      const upiLink = `upi://pay?pa=${upiId}&pn=My%20Bike&am=${amount}&cu=INR`;
      const qrContainer = document.getElementById("qr-code");
      qrContainer.innerHTML = "";
  
      QRCode.toCanvas(qrContainer, upiLink, { width: 200 }, (error) => {
        if (error) {
          console.error("Error generating QR code", error);
          alert("Could not generate QR code. Please try again.");
        } else {
          alert("QR code generated successfully!");
        }
      });
    });
  
    // Handle Form Submission
    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const number = document.getElementById("number").value;
      const method = paymentMethod.value;
  
      // Redirect to ticket page
      window.location.href = `ticket.html?name=${name}&email=${email}&number=${number}&method=${method}`;
    });
  });
  