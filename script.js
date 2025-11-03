// ========================================
// MODAL POPUP APPLICATION - ANNOTATED CODE
// ========================================

// Get all DOM elements we need to interact with
// These are the buttons and modal container elements
const openModalBtn = document.getElementById("openModal"); // button to open the modal
const closeModalBtn = document.getElementById("closeModal"); // X button to close the modal
const cancelBtn = document.getElementById("cancelBtn"); // Cancel button in  modal footer
const confirmBtn = document.getElementById("confirmBtn"); // Confirm button in the modal footer
const modalOverlay = document.getElementById("modalOverlay"); // The overlay(dark background + modal)

/// ========================================
// FUNCTION: Open Modal
// ========================================
// This function adds the 'active' class to show the modal
function openModal() {
    modalOverlay.classList.add("active");
    // optional: Prevents body scrolling when modal is open
    document.body.style.overflow = "hidden";
}

// ========================================
// FUNCTION: Close Modal
// ========================================
// This function removes the 'active' class to hide the modal
function closeModal() {
    modalOverlay.classList.remove("active");
    //Re-enable body scrolling
    document.body.style.overflow = "auto";
}

// ========================================
// EVENT LISTENERS
// ========================================

// 1. Open modal when "Open Modal" button is clicked

openModalBtn.addEventListener("click", openModal);

// 2. Close modal when X button is clicked
closeModalBtn.addEventListener("click", closeModal);

// 3. Close modal when Cancel button is clicked
cancelBtn.addEventListener("click", closeModal);

// 4. Close modal and perform action when confirm button is clicked 
confirmBtn.addEventListener("click", function () {
   //We can add custom logic here before closing
   console.log("Confirmed!");
   alert("You Clicked confirm!");
   closeModal();
});

// 5. Close modal when clicking outside of the modal box (on the overlay)
// This improves user experience by allowing users to close modal by clicking the dark background
modalOverlay.addEventListener("click", function (event) {
  // Check if the click target is the overlay itself (not its children)
  // This prevents closing when clicking inside the modal
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// 6. Close modal when ESC key is pressed(Optional but improves UX)
document.addEventListener("keydown", function (event) {
    // Check if ESC key was pressed (key code 27 or key name 'Escape')
    if (event.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
    }
});

// ========================================
// ADDITIONAL NOTES
// ========================================
// - The modal uses CSS animations for smooth fade-in/slide-in effects
// - The 'active' class controls visibility via CSS display property
// - Body overflow is managed to prevent background scrolling when modal is open
// - Multiple ways to close: X button, Cancel, outside click, ESC key
