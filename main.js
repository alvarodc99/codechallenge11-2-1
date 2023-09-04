function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());

  console.log({ value });

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response Data:', data);
    })
    .catch(error => {
      console.error('Error: ', error);
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
