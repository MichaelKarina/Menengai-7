// Array of image paths
const images = [
   "Slide-1.jpg", "Slide-1a.jpg", "Slide-1b.jpg", "Slide-2.jpg", "Slide-3.jpg", "Slide-3a.jpg", "Slide-4.jpg", "Slide-5.jpg", "Slide-5a.jpg", "Slide-6.jpg", "Slide-7.jpg", "Slide-26.jpg", "Slide-27.jpg", "Slide-28.jpg", "Slide-29.jpg", "Slide-30.jpg", "Slide-31.jpg", "Slide-32.jpg", "Slide-33.jpg", "Slide-34.jpg", "Slide-35.jpg", "Slide-36.jpg", "Slide-37.jpg", "Slide-38.jpg", "Slide-39.jpg", "Slide-40.jpg", "Slide-41.jpg", "Slide-42.jpg", "Slide-43.jpg", "Slide-44.jpg", "Slide-45.jpg", "Slide-46.jpg", "Slide-47.jpg", "Slide-48.jpg", "Slide-49.jpg", "Slide-50.jpg", "Slide-51.jpg", "Slide-52.jpg", "Slide-53.jpg", "Slide-54.jpg", "Slide-55.jpg", "Slide-56.jpg", "Slide-57.jpg", "Slide-58.jpg", "Slide-59.jpg", "Slide-60.jpg", "Slide-61.jpg", "Slide-62.jpg", "Slide-63.jpg", "Slide-64.jpg", "Slide-65.jpg", "Slide-66.jpg", "Slide-67.jpg", "Slide-68.jpg", "Slide-69.jpg", "Slide-70.jpg", "Slide-71.jpg", "Slide-72.jpg", "Slide-73.jpg", "Slide-74.jpg", "Slide-75.jpg", "Slide-76.jpg", "Slide-77.jpg", "Slide-78.jpg", "Slide-79.jpg", "Slide-80.jpg", "Slide-81.jpg", "Slide-82.jpg", "Slide-83.jpg", "Slide-84.jpg", "Slide-85.jpg", "Slide-86.jpg", "Slide-87.jpg", "Slide-88.jpg", "Slide-89.jpg", "Slide-90.jpg", "Slide-91.jpg", "Slide-92.jpg", "Slide-93.jpg", "Slide-94.jpg", "Slide-95.jpg", "Slide-96.jpg", "Slide-97.jpg", "Slide-98.jpg", "Slide-99.jpg", "Slide-100.jpg", "Slide-101.jpg", "Slide-102.jpg", "Slide-103.jpg", "Slide-104.jpg", "Slide-105.jpg", "Slide-106.jpg"
];

let currentIndex = 0; // Track the current image index
const slideshowElements = document.querySelectorAll('.slideshow'); // Get all images with the class 'slideshow'

function updateSlideshow() {
    // Update the src of the first image in the 'slideshow' class group
    slideshowElements.forEach(img => img.style.display = 'none'); // Hide all images
    slideshowElements[currentIndex].style.display = 'block'; // Show the current image

    currentIndex = (currentIndex + 1) % slideshowElements.length; // Loop back to the first image
}

// Initially hide all images except the first
slideshowElements.forEach(img => img.style.display = 'none');
slideshowElements[0].style.display = 'block';

// Change image every 10 seconds (10000ms)
setInterval(updateSlideshow, 10000);
