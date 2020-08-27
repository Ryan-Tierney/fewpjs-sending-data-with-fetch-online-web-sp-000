let formData = {
  name: "Steve",
  email: "steve@steve.com"
};
 
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  });
  
  
  function submitData() {
    fetch("http://localhost:3000/users", configObj) 
    .then(function(response) {
      return response.json(); 
    })
    .then(function(object) {
      console.log(object);
    });
  }