
let getButtonEquipment = document.getElementById("getWorkSpaceAndEquipment")
let listOfEquipment = document.getElementById("listOfEquipment")

function getWorkEquipment() {
    listOfDates.innerHTML = "";
    listOfEquipment.innerHTML = "";
    fetch('../content/getWorkEquipment.php').then(response => response.json()).then(data => {
        data.forEach((users) => {
            let div_user = document.createElement("div");
            div_user.classList.add("userElement");
            div_user.classList.add("workEquipmentClass");
            div_user.setAttribute("id", "divWorkEquipment");
            let h2_kindOf = document.createElement("h2");
            h2_kindOf.innerHTML = "Rodzaj: " + users.kindOf;
            let p_model = document.createElement("p");
            p_model.innerHTML = "Model: " + users.model;
            let p_number = document.createElement("p");
            p_number.innerHTML = "Oznaczenie: " + users.number;
            let p_year = document.createElement("p");
            p_year.innerHTML = "Rok zakupu:" + users.year;
            let p_value = document.createElement("p");
            p_value.innerHTML = "Wartość: " + users.value;
            let p_about = document.createElement("p");
            p_about.innerHTML = "Opis: " + users.about;
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", users.equip_number);
            checkbox.classList.add("workEquipmentChechbox");


            div_user.appendChild(h2_kindOf);
            div_user.appendChild(p_model);
            div_user.appendChild(p_number);
            div_user.appendChild(p_year);
            div_user.appendChild(p_value);
            div_user.appendChild(p_about);
            div_user.appendChild(checkbox);


            listOfEquipment.appendChild(div_user);

            listOfDates.appendChild(listOfEquipment);
        });
    });
}

getButtonEquipment.addEventListener("click", getWorkEquipment);


