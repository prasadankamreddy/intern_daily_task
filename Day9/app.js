
const recordForm = document.getElementById("recordForm");
const recordName = document.getElementById("recordName");
const recordCategory = document.getElementById("recordCategory");
const recordsList = document.getElementById("recordsList");
const message = document.getElementById("message");

let records = [];

recordForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = recordName.value.trim();
    const category = recordCategory.value.trim();

    if (name === "" || category === "") {
        message.textContent = "Please fill all fields.";
        message.style.color = "red";
        return;
    }

    const record = {
        id: Date.now(),
        name: name,
        category: category
    };

    records.push(record);

    displayRecords();

    message.textContent = "Record added successfully!";
    message.style.color = "green";

    recordForm.reset();
});

function displayRecords() {
    recordsList.innerHTML = "";

    records.forEach(function(record) {
        const li = document.createElement("li");

        li.textContent = `${record.name} - ${record.category}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            deleteRecord(record.id);
        });

        li.appendChild(deleteButton);
        recordsList.appendChild(li);
    });
}

function deleteRecord(id) {
    const oldLength = records.length;

    records = records.filter(function(record) {
        return record.id !== id;
    });

    if (records.length === oldLength) {
        message.textContent = "Record not found.";
        message.style.color = "red";
        return;
    }

    displayRecords();

    message.textContent = "Record deleted successfully!";
    message.style.color = "green";
}
