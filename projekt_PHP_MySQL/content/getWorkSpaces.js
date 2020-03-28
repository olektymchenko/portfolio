
let getButtonWorkSpace = document.getElementById("getWorkSpaceAndEquipment")
let listOfWorkspaces = document.getElementById("listOfWorkplaces");

function getWorkSpaces() {
    listOfDates.innerHTML = "";
    listOfWorkspaces.innerHTML = "";
    fetch('../content/getWorkSpaces.php').then(response => response.json()).then(data => {
        data.forEach((users) => {
            let div_user = document.createElement("div");
            div_user.classList.add("userElement");
            div_user.classList.add("workPlaceClass");
            div_user.setAttribute("id", "divWorkSpace");
            let h2_number = document.createElement("h2");
            h2_number.innerHTML = "ID: " + users.number;
            let p_about = document.createElement("p");
            p_about.innerHTML = "Opis: " + users.about;
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", users.number);
            checkbox.classList.add("workSpaceCheckbox");



            div_user.appendChild(h2_number);
            div_user.appendChild(p_about);
            div_user.appendChild(checkbox);

            listOfWorkspaces.appendChild(div_user);

            listOfDates.appendChild(listOfWorkspaces);
        });
    });
    let success = document.createElement("h3");
    success.setAttribute("id", "success");
    listOfWorkspaces.appendChild(success);
}

getButtonWorkSpace.addEventListener("click", getWorkSpaces);


