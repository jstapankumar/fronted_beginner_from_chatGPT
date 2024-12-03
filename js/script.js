// Detect when the user interacts with the page (touch or click)
document.body.addEventListener('mouseenter', function () {
    document.body.style.backgroundPosition = 'center'; // Ensure background stays fixed and clear
  });
  
  document.body.addEventListener('mouseleave', function () {
    document.body.style.backgroundPosition = 'center'; // Ensure background stays fixed and clear
  });
  
  // Detect when user scrolls and slowly sharpen the background image
  let scrollTimeout;
  
  window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout); // Clear previous timeout
  
    // Make the background clearer while scrolling
    document.body.style.backgroundPosition = 'center'; 
  
    // Revert the background image after a delay once scrolling stops
    scrollTimeout = setTimeout(function () {
      document.body.style.backgroundPosition = 'center'; // Keeps background fixed
    }, 500); // Delay reapplication to make it smooth
  });





  