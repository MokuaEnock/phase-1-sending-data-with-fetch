let data = {
  dogName: "Byron",
  dogBreed: "Poodle",
};
const configuration = {
  method: "POST",
  header: {
    "content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),
};

fetch("http://localhost:3000/dogs", configuration);

fetch("http://localhost:3000/dogs", configuration)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  });
