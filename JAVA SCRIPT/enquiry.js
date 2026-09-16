document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('enquiry-form');
  var success = document.getElementById('enquiry-success');

  if (!form || !success) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      success.classList.remove('is-visible');
      return;
    }

    success.classList.add('is-visible');
    form.reset();
    success.setAttribute('tabindex', '-1');
    success.focus();
  });
});
