function formSubmit() {
    var formData =readFormData();
    insertNewRecord(formData);
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["age"] = document.getElementById("age").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["adhaar"] = document.getElementById("adhaar").value;
    formData["address"] = document.getElementById("address").value;
    formData["date"] = document.getElementById("date").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("admin").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.adhaar;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.address;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.date;
    
}