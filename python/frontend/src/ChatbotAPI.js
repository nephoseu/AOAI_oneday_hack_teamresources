const API = {
  GetChatbotResponse: async message => {
    return new Promise(function(resolve, reject) {
      if (message === "hi") 
        resolve("Welcome to chatbot!");
      else {
        // Call the chatbot API sending POST request
        // with the message as the body to the API endpoint /chat
        fetch('/chat', {
          method: 'POST',
          body: JSON.stringify({ "message": message }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => resolve(data.message))
          .catch(error => reject(error));

        // resolve("echo : " + response.message);

      }         
    });
  },
  GetImageURL: async formData => {
    return new Promise(function(resolve, reject) {
      // Call the chatbot API sending POST request
      // with the message as the body to the API endpoint /chat
      fetch('/generateImage', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => resolve(data.url))
        .catch(error => reject(error));


    });
  }
};

export default API;
