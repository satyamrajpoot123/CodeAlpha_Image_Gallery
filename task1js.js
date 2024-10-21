// Get the displayed image and all thumbnail images
const displayedImage = document.getElementById("displayed-image");
const thumbnails = document.querySelectorAll(".thumbnail");

// Add click event to each thumbnail to update the main image
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
        // Change the source of the main image to the clicked thumbnail's source
        displayedImage.src = this.src;
    });
});
