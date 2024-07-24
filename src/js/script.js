document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const contactList = document.getElementById("contactList");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        addContact(name, phone, email);
        this.reset();
    });

    function addContact(name, phone, email) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = `${name} - ${phone} - ${email}`;

        const editButton = document.createElement("i");
        editButton.classList.add("fa-regular", "fa-pen-to-square");
        editButton.title = "Editar contato";

        editButton.onclick = () => editContact(li, name, phone, email);

        const deleteButton = document.createElement("i");
        deleteButton.classList.add("fa-solid", "fa-trash");
        deleteButton.title = "Excluir contato";
        deleteButton.onclick = () => li.remove();

        li.append(span, editButton, deleteButton);

        contactList.appendChild(li);
    }

    function editContact(li, oldName, oldPhone, oldEmail) {
        const newName = prompt("Editar nome", oldName);
        const newPhone = prompt("Editar telefone", oldPhone);
        const newEmail = prompt("Editar e-mail", oldEmail);

        if (newName && newPhone && newEmail) {
            li.children[0].textContent = `${newName} - ${newPhone} - ${newEmail}`;
        }
    }
});
