/* =====================================================================
   EDUPATH COACHING INSTITUTE — VANILLA JAVASCRIPT
   No jQuery or JavaScript framework is required.
   ===================================================================== */

// Wait until the HTML has been parsed before selecting page elements.
document.addEventListener('DOMContentLoaded', () => {
  // 1. Keep the footer year current automatically.
  const yearElement = document.querySelector('#currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Close the Bootstrap mobile navigation after a visitor selects a link.
  // Bootstrap's bundle must be loaded in index.html for this behavior.
  const navigation = document.querySelector('#mainNav');
  const navigationLinks = document.querySelectorAll('#mainNav .nav-link, #mainNav .btn');

  if (navigation && window.bootstrap) {
    const navigationCollapse = window.bootstrap.Collapse.getOrCreateInstance(navigation, { toggle: false });
    navigationLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navigation.classList.contains('show')) {
          navigationCollapse.hide();
        }
      });
    });
  }

  // 3. Course CTA buttons preselect the related course in the inquiry form.
  // This reduces the number of steps between reading a course and contacting the institute.
  const courseSelect = document.querySelector('#course');
  document.querySelectorAll('[data-course]').forEach((courseLink) => {
    courseLink.addEventListener('click', () => {
      if (!courseSelect) return;

      const selectedCourse = courseLink.dataset.course;
      const matchingOption = Array.from(courseSelect.options).find((option) => option.textContent.trim() === selectedCourse);
      if (matchingOption) {
        courseSelect.value = matchingOption.value;
      }
    });
  });

  // 4. Admission form validation and demo feedback.
  // IMPORTANT: this demo validates input in the browser only. It does NOT send,
  // email, save, or transmit form data. Connect a secure backend/form service
  // before using the form on a real institute website.
  const inquiryForm = document.querySelector('#inquiryForm');
  const formStatus = document.querySelector('#formStatus');

  if (inquiryForm && formStatus) {
    const phoneInput = inquiryForm.querySelector('#phone');

    // Allow digits only in the phone field and cap it at ten characters.
    if (phoneInput) {
      phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
      });
    }

    inquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formStatus.hidden = true;
      formStatus.className = 'form-status';

      // Bootstrap's built-in validation classes display each field's feedback.
      if (!inquiryForm.checkValidity()) {
        inquiryForm.classList.add('was-validated');
        formStatus.textContent = 'Please check the highlighted fields and try again.';
        formStatus.classList.add('error');
        formStatus.hidden = false;
        const firstInvalidField = inquiryForm.querySelector(':invalid');
        if (firstInvalidField) firstInvalidField.focus();
        return;
      }

      // Do not pretend to submit data to a server. Show an honest demo message.
      formStatus.textContent = 'Demo validation successful! No information was sent or saved. Connect a backend or form service to receive real inquiries.';
      formStatus.classList.add('success');
      formStatus.hidden = false;
      inquiryForm.classList.remove('was-validated');
      inquiryForm.reset();
    });
  }
});
