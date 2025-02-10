// Array of image paths
const images = [
   "Slide-0.01.jpg","Slide-0.02.jpg","Slide-0.03.jpg","Slide-0.04.jpg","Slide-0.05.jpg","Slide-0.06.jpg","Slide-0.07.jpg","Slide-0.08.jpg","Slide-0.1.jpg", "Slide-0.2.jpg", "Slide-0.3.jpg", "Slide-0.4.jpg",  "Slide-1.jpg", "Slide-1a.jpg", "Slide-1b.jpg", "Slide-2.jpg", "Slide-3.jpg", "Slide-4.jpg", "Slide-4a.jpg", "Slide-5.jpg", "Slide-6.jpg", "Slide-7.jpg", "Slide-8.jpg",  "Slide-9.jpg", "Slide-10.jpg",  "Slide-11.jpg", "Slide-12.jpg", "Slide-13.jpg", "Slide-14.jpg",  "Slide-15.jpg", "Slide-16.jpg",  "Slide-17.jpg", "Slide-18.jpg",  "Slide-19.jpg", "Slide-20.jpg",  "Slide-21.jpg", "Slide-22.jpg",  "Slide-23.jpg", "Slide-24.jpg",  "Slide-25.jpg", "Slide-26.jpg", "Slide-26c.jpg", "Slide-27.jpg", "Slide-28.jpg",  "Slide-29.jpg", "Slide-30.jpg", "Slide-31.jpg",  "Slide-32.jpg", "Slide-33.jpg",  "Slide-34.jpg", "Slide-35.jpg", "Slide-36.jpg",  "Slide-36c.jpg", "Slide-36d.jpg", "Slide-36e.jpg", "Slide-36f.jpg", "Slide-36g.jpg", "Slide-36h.jpg", "Slide-36i.jpg", "Slide-36j.jpg", "Slide-36k.jpg", "Slide-36l.jpg", "Slide-37.jpg", "Slide-38.jpg", "Slide-39.jpg", "Slide-40.jpg", "Slide-41.jpg", "Slide-42.jpg", "Slide-42a.jpg", "Slide-42b.jpg", "Slide-43.jpg", "Slide-44.jpg", "Slide-45.jpg", "Slide-46.jpg", "Slide-47.jpg", "Slide-48.jpg", "Slide-49.jpg", "Slide-50.jpg", "Slide-51.jpg", "Slide-52.jpg", "Slide-53.jpg", "Slide-54.jpg", "Slide-55.jpg", "Slide-56.jpg", "Slide-57.jpg", "slide-58.jpg", "Slide-59.jpg", "Slide-60.jpg", "Slide-61.jpg", "Slide-62.jpg", "Slide-63.jpg", "Slide-64.jpg", "Slide-65.jpg", "Slide-65a.jpg", "Slide-65b.jpg", "Slide-65c.jpg", "Slide-66.jpg", "Slide-66a.jpg", "Slide-67.jpg", "Slide-68.jpg", "Slide-69.jpg", "Slide-70.jpg", "Slide-71.jpg", "Slide-72.jpg", "Slide-74.jpg", "Slide-74.jpg", "Slide-75.jpg", "Slide-76.jpg", "Slide-77.jpg", "Slide-78.jpg"
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
