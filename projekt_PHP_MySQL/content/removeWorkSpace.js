$(function () {
    let getReservationButton = document.getElementById("removeWorkSpaceAndEquipment")
    let listOfUsersToGet = document.getElementById("listOfEquipment");

    function disconnect() {
        fetch('../content/removeWorkSpace.php').then(response => response.json()).then(data => {
            data.forEach((users) => {
                let div_user = document.createElement("div");
                div_user.classList.add("userElement");
                let h2_username = document.createElement("h2");
                h2_username.innerHTML = "Imię i nazwisko: " + users.username;
                let h2_workPlace = document.createElement("h2");
                h2_workPlace.innerHTML = "Miejsce prace: " + users.workPlace;
                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("id", users.userId);
                checkbox.classList.add("userCheckbox");

                div_user.appendChild(h2_username);
                div_user.appendChild(h2_workPlace);
                div_user.appendChild(checkbox);

                listOfUsersToGet.appendChild(div_user);
                listOfDates.appendChild(listOfUsersToGet);
            });
        });
    }


    getReservationButton.addEventListener("click", () => {
        listOfDates.innerHTML = "";
        listOfEquipment.innerHTML = "";
        listOfWorkspaces.innerHTML = "";
        disconnect();
    });
})

