const form = document.getElementById("bookingForm");
    const userList = document.getElementById("userList");

    async function loadUsers() {
      const res = await fetch("http://localhost:3000/api/users");
      const users = await res.json();
      userList.innerHTML = "";
      users.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${user.name} - ${user.email} - ${user.appointmentDate}
          <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        userList.appendChild(li);
      });
    }

    async function deleteUser(id) {
      await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "DELETE"
      });
      loadUsers();
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        appointmentDate: document.getElementById("appointmentDate").value,
      };
      await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });
      form.reset();
      loadUsers();
    });

    window.onload = loadUsers;