export const handleSubmit = (e) => {
  e.preventDefault();

  const sections = document.querySelectorAll('[data-section]');
  const formData = {};

  sections.forEach(section => {
    const sectionName = section.getAttribute('data-section');
    formData[sectionName] = {};

    const inputs = section.querySelectorAll('input');
    const placeholdersCount = {};

    inputs.forEach(input => {
      const placeholder = input.placeholder || 'Campo sin placeholder';
      if (placeholdersCount[placeholder]) {
        placeholdersCount[placeholder] += 1;
      } else {
        placeholdersCount[placeholder] = 1;
      }
    });

    inputs.forEach(input => {
      const placeholder = input.placeholder || 'Campo sin placeholder';
      const value = input.value.trim();

      if (value) {
        if (placeholdersCount[placeholder] > 1) {
          if (formData[sectionName][placeholder]) {
            formData[sectionName][placeholder].push(value);
          } else {
            formData[sectionName][placeholder] = [value];
          }
        } else {
          formData[sectionName][placeholder] = value;
        }
      }
    });
  });

  console.log(formData);
};
