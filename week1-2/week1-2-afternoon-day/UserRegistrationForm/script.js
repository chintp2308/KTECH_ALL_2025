document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  const fields = {
    fullName: {
      input: document.getElementById("fullName"),
      error: document.getElementById("fullNameError"),
      validate: function () {
        const value = this.input.value.trim();
        if (!value) return "Full Name is required.";
        if (value.length < 3) return "Full Name must be at least 3 characters.";
        return "";
      },
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("emailError"),
      validate: function () {
        const value = this.input.value.trim();
        if (!value) return "Email is required.";
        // Simple email regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value))
          return "Please enter a valid email address.";
        return "";
      },
    },
    password: {
      input: document.getElementById("password"),
      error: document.getElementById("passwordError"),
      validate: function () {
        const value = this.input.value;
        if (!value) return "Password is required.";
        if (value.length < 8) return "Password must be at least 8 characters.";
        if (!(/[a-zA-Z]/.test(value) && /[0-9]/.test(value)))
          return "Password must contain letters and numbers.";
        return "";
      },
    },
    confirmPassword: {
      input: document.getElementById("confirmPassword"),
      error: document.getElementById("confirmPasswordError"),
      validate: function () {
        const value = this.input.value;
        const passwordValue = fields.password.input.value;
        if (!value) return "Please confirm your password.";
        if (value !== passwordValue) return "Passwords do not match.";
        return "";
      },
    },
    phone: {
      input: document.getElementById("phone"),
      error: document.getElementById("phoneError"),
      validate: function () {
        const value = this.input.value.trim();
        if (!value) return "Phone number is required.";
        if (!/^\d{10,}$/.test(value))
          return "Phone number must be at least 10 digits.";
        return "";
      },
    },
    gender: {
      inputs: document.getElementsByName("gender"),
      error: document.getElementById("genderError"),
      validate: function () {
        for (let input of this.inputs) {
          if (input.checked) return "";
        }
        return "Please select your gender.";
      },
    },
    dob: {
      input: document.getElementById("dob"),
      error: document.getElementById("dobError"),
      validate: function () {
        const value = this.input.value;
        if (!value) return "Date of Birth is required.";
        const dob = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
          age--;
        }
        if (age < 18) return "You must be over 18 years old.";
        return "";
      },
    },
    country: {
      input: document.getElementById("country"),
      error: document.getElementById("countryError"),
      validate: function () {
        const value = this.input.value;
        if (!value) return "Please select your country.";
        return "";
      },
    },
    hobbies: {
      inputs: document.getElementsByName("hobbies"),
      error: document.getElementById("hobbiesError"),
      validate: function () {
        for (let input of this.inputs) {
          if (input.checked) return "";
        }
        return "Please select at least one hobby.";
      },
    },
    profilePic: {
      input: document.getElementById("profilePic"),
      error: document.getElementById("profilePicError"),
      validate: function () {
        const file = this.input.files[0];
        if (!file) return "";
        const allowed = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowed.includes(file.type))
          return "Profile picture must be a JPG or PNG image.";
        return "";
      },
    },
    bio: {
      input: document.getElementById("bio"),
      error: document.getElementById("bioError"),
      validate: function () {
        const value = this.input.value;
        if (value.length > 300) return "Bio must be at most 300 characters.";
        return "";
      },
    },
  };

  function setInvalid(input, errorElem, message) {
    if (Array.isArray(input)) {
      input.forEach((i) => i.classList.add("invalid"));
    } else {
      input.classList.add("invalid");
    }
    errorElem.textContent = message;
  }

  function setValid(input, errorElem) {
    if (Array.isArray(input)) {
      input.forEach((i) => i.classList.remove("invalid"));
    } else {
      input.classList.remove("invalid");
    }
    errorElem.textContent = "";
  }

  // Validate on submit
  form.addEventListener("submit", function (e) {
    let isValid = true;
    for (let key in fields) {
      const field = fields[key];
      const message = field.validate();
      if (message) {
        isValid = false;
        if (field.input) {
          setInvalid(field.input, field.error, message);
        } else if (field.inputs) {
          setInvalid(Array.from(field.inputs), field.error, message);
        }
      } else {
        if (field.input) {
          setValid(field.input, field.error);
        } else if (field.inputs) {
          setValid(Array.from(field.inputs), field.error);
        }
      }
    }
    if (!isValid) {
      e.preventDefault();
    }
  });

  // Real-time validation
  for (let key in fields) {
    const field = fields[key];
    if (field.input) {
      field.input.addEventListener("input", function () {
        const message = field.validate();
        if (message) {
          setInvalid(field.input, field.error, message);
        } else {
          setValid(field.input, field.error);
        }
      });
    } else if (field.inputs) {
      field.inputs.forEach((input) => {
        input.addEventListener("change", function () {
          const message = field.validate();
          if (message) {
            setInvalid(Array.from(field.inputs), field.error, message);
          } else {
            setValid(Array.from(field.inputs), field.error);
          }
        });
      });
    }
  }
});
