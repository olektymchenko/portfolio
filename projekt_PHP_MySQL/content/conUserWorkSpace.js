$(function () {
    let getReservationButton = document.getElementById("connectWorkPlaceWithUser")
    let listOfUsersToGet = document.getElementById("listOfEquipment");
    let listOfPlacesToGet = document.getElementById("listOfWorkplaces");


    function getUsers() {
        fetch('../content/getDates.php').then(response => response.json()).then(data => {
            data.forEach((users) => {
                let div_user = document.createElement("div");
                div_user.classList.add("userElement");
                let h2_username = document.createElement("h2");
                h2_username.innerHTML = "Imię i nazwisko: " + users.username;
                let p_email = document.createElement("p");
                p_email.innerHTML = "Email: " + users.email;
                let p_phone = document.createElement("p");
                p_phone.innerHTML = "Telefon: " + users.phone_number;
                let p_about = document.createElement("p");
                p_about.innerHTML = "Opis: " + users.about;
                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("id", users.user_id);
                checkbox.classList.add("userCheckbox");
                let reservationDate = document.createElement("input");
                reservationDate.setAttribute("type", "date");
                reservationDate.setAttribute("id", "resDate");
                let reservationTimeFrom = document.createElement("input");
                reservationTimeFrom.setAttribute("type", "time");
                reservationTimeFrom.setAttribute("id", "timeFrom");
                let reservationTimeTo = document.createElement("input");
                reservationTimeTo.setAttribute("type", "time");
                reservationTimeTo.setAttribute("id", "timeTo");
                let empty = document.createElement("p");

                div_user.appendChild(h2_username);
                div_user.appendChild(p_phone);
                div_user.appendChild(p_email);
                div_user.appendChild(p_about);
                div_user.appendChild(reservationDate);
                div_user.appendChild(empty);
                div_user.appendChild(reservationTimeFrom);
                div_user.appendChild(empty);
                div_user.appendChild(reservationTimeTo);
                div_user.appendChild(empty);
                div_user.appendChild(checkbox);

                listOfUsersToGet.appendChild(div_user);
                listOfDates.appendChild(listOfUsersToGet);
            });
        });
    }
    function getWorkPlaces() {
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
                checkbox.setAttribute("id", users.about);
                checkbox.classList.add("workSpaceCheckbox");



                div_user.appendChild(h2_number);
                div_user.appendChild(p_about);
                div_user.appendChild(checkbox);

                listOfPlacesToGet.appendChild(div_user);
                listOfDates.appendChild(listOfPlacesToGet);
            });
        });
    }


    getReservationButton.addEventListener("click", () => {
        listOfDates.innerHTML = "";
        listOfEquipment.innerHTML = "";
        listOfWorkspaces.innerHTML = "";
        getWorkPlaces();
        getUsers();
    });
})

