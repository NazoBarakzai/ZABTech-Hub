document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting
  clearErrors();

  let hasError = false;

  const fields = {
    student_name: 'Student Name',
    father_name: 'Father Name',
    dob: 'Date of Birth',
    qualification: 'Qualification',
    domicile: 'Domicile',
    religion: 'Religion',
    cnic: 'CNIC',
    phone: 'Phone Number',
    guardian_occupation: 'Guardian\'s Occupation',
    guardian_phone: 'Guardian\'s Phone Number',
    guardian_cnic: 'Guardian\'s CNIC',
    temp_address: 'Temporary Address',
    perm_address: 'Permanent Address',
    trade: 'Trade',
    picture: 'Picture',
    local: 'Local/Domicile File',
    education: 'Education File'
  };

  for (const fieldName in fields) {
    const field = document.getElementsByName(fieldName)[0];
    if (!field) continue;

    const value = field.type === 'file' ? field.files.length : field.value.trim();

    if (!value) {
      showError(field, `${fields[fieldName]} is required.`);
      hasError = true;
      continue;
    }

    if (fieldName === 'cnic' || fieldName === 'guardian_cnic') {
      if (!/^[0-9]{5}-[0-9]{7}-[0-9]{1}$/.test(field.value.trim())) {
        showError(field, `${fields[fieldName]} must be in format 12345-1234567-1.`);
        hasError = true;
      }
    }

    if ((fieldName === 'phone' || fieldName === 'guardian_phone') && !/^03[0-9]{9}$/.test(field.value.trim())) {
      showError(field, `${fields[fieldName]} must be a valid Pakistani number (e.g., 03XXXXXXXXX).`);
      hasError = true;
    }

    if (fieldName === 'dob' && isNaN(Date.parse(field.value))) {
      showError(field, `Enter a valid ${fields[fieldName]}.`);
      hasError = true;
    }
  }

  if (!hasError) {
    this.submit(); // Submit the form if no errors
  }
});

function showError(field, message) {
  let error = document.createElement('span');
  error.className = 'error';
  error.textContent = message;
  field.parentNode.appendChild(error);
}

function clearErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach(e => e.remove());
}
