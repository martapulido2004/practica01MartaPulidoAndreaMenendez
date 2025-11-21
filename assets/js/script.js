
$(document).ready(function() {
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out-quart'
  });

  // Smooth scroll for internal links
  $('a[href^="#"]').on('click', function(event) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600);
    }
  });

  // Newsletter validation
  const form = $('#newsletterForm');
  form.on('submit', function(event) {
    event.preventDefault();
    if (this.checkValidity()) {
      $('#successAlert').removeClass('d-none');
      this.reset();
      form.removeClass('was-validated');
    } else {
      event.stopPropagation();
      form.addClass('was-validated');
    }
  });

  // Hover captions for gallery cards (jQuery fallback for touch)
  $('.gallery-card').on('click', function() {
    const caption = $(this).data('caption');
    const toast = $('<div class="toast align-items-center text-bg-dark border-0" role="alert" aria-live="assertive" aria-atomic="true">\
      <div class="d-flex">\
        <div class="toast-body">' + caption + '</div>\
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>\
      </div>\
    </div>');
    $('.toast').remove();
    $('body').append(toast);
    const bsToast = new bootstrap.Toast(toast[0], { delay: 2200 });
    bsToast.show();
  });
});