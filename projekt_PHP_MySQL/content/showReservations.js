$(function () {
    let getButtonEquipment = document.getElementById("getReservations")
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
                let reservDate = document.createElement("h2");
                reservDate.innerHTML = "Rezerwacja w dniu: " + users.reservedDate;
                let reservedFrom = document.createElement("p");
                reservedFrom.innerHTML = "Od godziny :" + users.reservedFrom;
                let reservedTo = document.createElement("p");
                reservedTo.innerHTML = "Do godziny: " + users.reservedTo;


                div_user.appendChild(h2_kindOf);
                div_user.appendChild(p_model);
                div_user.appendChild(p_number);
                div_user.appendChild(reservDate);
                div_user.appendChild(reservedFrom);
                div_user.appendChild(reservedTo);



                listOfEquipment.appendChild(div_user);

                listOfDates.appendChild(listOfEquipment);
            });
        });
    }

    getButtonEquipment.addEventListener("click", getReservations);



})
