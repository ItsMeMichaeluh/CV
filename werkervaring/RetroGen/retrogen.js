$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('.nav').addClass('affix');
  } else {
    $('.nav').removeClass('affix');
  }
});

//         // Get a reference to the image element
document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the image element with the id 'scrollImage'
  const foto = document.getElementById('scrollImage');

  // Check if the element was found
  if (foto) {
      console.log("Element found:", foto);

      // Define the minimum and maximum sizes for the image
      const minSize = 200; // Minimum width in pixels
      const maxSize = 300; // Maximum width in pixels

      // Add a scroll event listener to the window
      window.addEventListener('scroll', () => {
          // Calculate the current scroll position
          const scrollPosition = window.scrollY;

          // Calculate the new size based on the scroll position
          const newSize = Math.max(minSize, maxSize - scrollPosition);

          // Set the new size as the width of the image
          foto.style.width = newSize + 'px';
      });
  } else {
      console.log("Element with id 'scrollImage' not found.");
  }
});


