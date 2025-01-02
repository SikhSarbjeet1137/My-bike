const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

// Function to move to the next slide
function nextSlide() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
}

// Function to move to the previous slide
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateSliderPosition();
}

// Update the slider position based on the currentIndex
function updateSliderPosition() {
    const offset = -currentIndex * 100; // Each image takes up 100% of the container
    slider.style.transform = `translateX(${offset}%)`;
}

// Event listeners for the navigation buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success message or handle response here
        form.reset(); // Reset the form after submission
    })
    .catch(error => {
        alert('Error: ' + error);
    });
});
