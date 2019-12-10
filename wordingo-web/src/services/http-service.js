import "whatwg-fetch"; //we don't have to store in a variable

class HttpService {
  //this is equivalent to var getProducts = function(){...}
  getUsers = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/users").then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };

  //Add users function here 
  addUsers = (data) => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/users/add", 
      {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Origin": "*"
      },
      body: JSON.stringify(data)}).then(response => {
        resolve(response.json());
      });
    });

    
    return promise;
  };

  getOneWord = word_name => {
    var promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:5000/api/words/${word_name}`).then(response => {
        console.log("VAR IN HTTP IS " + word_name);
        resolve(response.json());
      });
    });

    return promise;
  };

  getOneUser = username => {
    var promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:5000/api/users/${username}`).then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };

  getOneUserById = id => {
    var promise = new Promise((resolve, reject) => {
      console.log("here in getoneuserbyid, id is " + id );
      fetch(`http://localhost:5000/api/usersID/${id}`).then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
  getWords = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/words").then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };

  addWords = (data) => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/words/add", 
      {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Origin": "*"
      },
      body: JSON.stringify(data)}).then(response => {
        resolve(response.json());
      });
    });

    
    return promise;
  };
  
  addCategory = (data) => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/categories/add", 
      {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Origin": "*"
      },
      body: JSON.stringify(data)}).then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
      
  getOneWord = word_name => {
    var promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:5000/api/words/${word_name}`).then(response => {
        console.log("VAR IN HTTP IS " + word_name);
        resolve(response.json());
      });
    });

    return promise;
  };

  getOneWordById = wordID => {
    var promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:5000/api/wordsgetid/${wordID}`).then(response => {
        console.log("wordID is: " + wordID);
        console.log("response is: " + response.name);
        resolve(response.json());
      });
    });

    return promise;
  };

  getDefinitionsForOneWord = word_id => {
    var promise = new Promise((resolve, reject) => {
      console.log("word id in http-service: " + word_id);
      fetch(`http://localhost:5000/api/definitions/word-${word_id}`).then(
        response => {
          console.log("test in response in http-service: " + response.wordID);
          resolve(response.json());
        }
      );
    });
   
    return promise;
  };


    addDefinition = (data) => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/definitions/add", 
      {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Origin": "*"
      },
      body: JSON.stringify(data)}).then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };

  updateDefinition = (data) => {
  
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/definitions/update", 
      {method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Origin": "*"
      },
      body: JSON.stringify(data)}).then(response => {
        console.log("here in update http-server response")    
        resolve(response.json());
      });
    });

    return promise;
  };

  updateDefinitionText = (data) => {

    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/definitions/textupdate", 
      {method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Origin": "*"
      },
      body: JSON.stringify(data)}).then(response => {
        console.log("here in update http-server response")    
        resolve(response.json());
      });
    });

    return promise;
  };

  deleteDefinition = (data) => {
  
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/definitions/delete", 
      {method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Origin": "*"
      },
      body: JSON.stringify(data)}).then(response => {
        console.log("here in update http-server response")    
        resolve(response.json());
      });
    });

    return promise;
  };
  getDefinitions = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/definitions").then(response => {
        
        resolve(response.json());
      });
    });

    return promise;
  };
        
  getCategories = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/categories").then(response => {
        console.log("category response is: ");
        resolve(response.json());
      });
    });
    return promise;
  };

  getCategoryWordIDs = categoryName => {
    var promise = new Promise((resolve, reject) => {
    
      fetch(`http://localhost:5000/api//categories/${categoryName}`).then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService; //equal to module.exports ==....
