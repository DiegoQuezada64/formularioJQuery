// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        nombre: "required",
        apellido: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
      },
      // Specify validation error messages
      messages: {
        nombre: "Por favor, introduzca su nombre",
        apellido: "Por favor, introduzca su apellido",
        email: "Por favor, introduce una dirección de correo electrónico válida"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });