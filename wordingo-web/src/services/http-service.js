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

  getWords = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:5000/api/words").then(response => {
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

  getDefinitionsForOneWord = word_id => {
    var promise = new Promise((resolve, reject) => {
      fetch(`http://localhost:5000/api/definitions/word-:${word_id}`).then(
        response => {
          resolve(response.json());
        }
      );
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
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService; //equal to module.exports ==....
