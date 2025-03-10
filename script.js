document.addEventListener("DOMContentLoaded", function() {
    console.log("StockVision AI Loaded!");

    // Select all buttons in the sidebar
    const buttons = document.querySelectorAll(".nav-button");

    // Add event listeners for each button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const page = this.getAttribute("data-page"); // Get target page
            if (page) {
                window.location.href = page; // Navigate to the page
            }
        });
    });
});
