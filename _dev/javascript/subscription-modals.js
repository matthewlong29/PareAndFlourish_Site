/********************************************************
 subscription modal
********************************************************/

$(document).ready(() => {
    
  // sign up modal constants
  const $signUpModal = $("#signUpModal");
  const $signUpModalButton = $(".join");
  const $signUpClose = $(".signUpClose");
  const $signUpSubmit = $("#mc-embedded-subscribe");

  // thank you modal constants
  const $thankYouModal = $("#thankYouModal");
  const $thankYouClose = $(".thankYouClose");

  // dark overlay
  const $darkOverlay = $('.darkness');
  
  // function for closing modal and return background back to original
  const closeModal = modal => {
    $("body").css({
      background: "url('/assets/images/other/background-pattern.png')",
      overflow: "auto"
    });
    $("html").css('overflow','auto');
    modal.hide();
    $darkOverlay.hide();
    stopBodyScrolling(false);    
  }

  // function for opening modal and setting dark overlays display to flex
  const openModal = modal => {
    $darkOverlay.css({
      'display': 'flex',
      'justify-content': 'center'
    });
    $("html").css('overflow','hidden');
    $("body").css('overflow','hidden');
    modal.fadeIn(100);
    stopBodyScrolling(true);    
  }

  // function to stop scrolling (necessary for ios)
  const stopBodyScrolling = bool => {
    if (bool === true) {
      document.body.addEventListener("touchmove", freezeVp, false);
    } else {
      document.body.removeEventListener("touchmove", freezeVp, false);
    }
  }
  const freezeVp = e => {
    e.preventDefault();
  };

  // open signup modal after 20 seconds
    // use local storage to only show sometimes
  // setInterval(() => {
  //   openModal($signUpModal)
  // }, 20000);
  
  // click event to open sign up modal
  $signUpModalButton.on("click", () => {
    openModal($signUpModal);
  });

  // click event for close button on sign up modal
  $signUpClose.on("click", () => closeModal($signUpModal));
  
  // click event for close button on thank you up modal
  $thankYouClose.on("click", () => closeModal($thankYouModal));

  // click event for submit button on sign up modal
  $signUpSubmit.on("click", e => {
    $signUpModal.hide();
    $thankYouModal.fadeIn(100);
  });
  
  // close modals on escape key
  $(document).on('keydown', e => {
    if (e.which === 27) {
      closeModal($signUpModal);
      closeModal($thankYouModal);
    }
  });

});