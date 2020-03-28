$(function () {
    let getButtonEquipment = document.getElementById("addReservations")
    let listOfEquipment = document.getElementById("listOfEquipment")

    function getReservations() {
        listOfDates.innerHTML = "";
        listOfEquipment.innerHTML = "";
        fetch('../content/showReservations.php').then(response => response.json()).then(data => {
            data.forEach((users) => {
                let div_user = document.createElement("div");
                div_user.classList.add("userElement");
                div_user.classList.add("workEquipmentClass");
                div_user.setAttribute("id", "divWorkEquipment");
                let h2_kindOf = document.createElement("h2");
                h2_kindOf.innerHTML = "Nazwa użytkownika: " + users.username;
                let p_model = document.createElement("p");
                p_model.innerHTML = "Miejsce pracy: " + users.workSpace;
                let p_number = document.createElement("p");
                p_number.innerHTML = "Wyposażenie: " + users.equipment;
                let date = document.createElement("p");
                let from = document.createElement("p");
                let to = document.createElement("p");
                date.innerHTML = " Wybierz date: ";
                from.innerHTML = " Od której: ";
                to.innerHTML = " Do której: ";
                let empty = document.createElement("p");
                let checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("id", users.userId);
                checkbox.classList.add("userCheckbox");
                let reservationDate = document.createElement("input");
                reservationDate.setAttribute("type", "date");
                reservationDate.setAttribute("id", users.username);
                let reservationTimeFrom = document.createElement("input");
                reservationTimeFrom.setAttribute("type", "time");
                reservationTimeFrom.setAttribute("id", "timeFrom");
                let reservationTimeTo = document.createElement("input");
                reservationTimeTo.setAttribute("type", "time");
                reservationTimeTo.setAttribute("id", "timeTo");


                div_user.appendChild(h2_kindOf);
                div_user.appendChild(p_model);
                div_user.appendChild(p_number);
                div_user.appendChild(date);
                div_user.appendChild(reservationDate);
                div_user.appendChild(from);
                div_user.appendChild(reservationTimeFrom);
                div_user.appendChild(to);
                div_user.appendChild(reservationTimeTo);
                div_user.appendChild(empty);
                div_user.appendChild(checkbox);





                listOfEquipment.appendChild(div_user);

                listOfDates.appendChild(listOfEquipment);
            });
        });
    }

    getButtonEquipment.addEventListener("click", getReservations);



})
