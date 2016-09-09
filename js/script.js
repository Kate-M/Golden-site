 function showError(container) {
	   	  container.classList.add("error");
		  var error_mess='Validation errors occurred';
		  container.placeholder=error_mess;
         
    }

    function resetError(container) {
		container.classList.remove("error");
  	  
    }

    function validate(form) {
      var elems = form.elements;
      var RegName = new RegExp("^.*[^A-Za-z].*$");
	  var RegEmail = new RegExp("^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$");
	  var RegSubject = new RegExp("^.*[^A-Za-z]+\s+[^A-Za-z]*$");
	  var RegText = new RegExp("^.*[0-9^A-Za-z]*$");
	  
         resetError(elems.name);
	  
      if (!isNaN(elems.name.value) || RegName.test(elems.name.value)) {
        showError(elems.name);
      } 
	resetError(elems.email);
	 if (!isNaN(elems.email.value) || !(RegEmail.test(elems.email.value)) ) {
        showError(elems.email);
      }
	 resetError(elems.subject);
     if (!isNaN(elems.subject.value) || RegSubject.test(elems.subject.value) || elems.subject.value.length>40) {
        showError(elems.subject);
      }
	 resetError(elems.text); 
     if (!isNaN(elems.text.value) || !(RegText.test(elems.text.value))) {
        showError(elems.text);
      }
	  
}
	