fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const container = document.querySelector("#container");

    const cards = users.map(user => {
      return `
        <div class="card">
          <img src="https://placehold.co/400" alt="Foto de ${user.name}">
          <h2>${user.name}</h2>
           <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Telefone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> ${user.website}</p>
          <p><strong>Empresa:</strong> ${user.company.name}</p>
          <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
        </div>
      `;
    });

    container.innerHTML = cards.join("");
  });
