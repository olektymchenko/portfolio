$(function () {
    let getReservationButton = document.getElementById("removeWorkSpaceAndEquipmentBtn")
    let listOfUsersToGet = document.getElementById("listOfEquipment");
    let allUsers = document.getElementsByClassName("userCheckbox");
    let checkedUsers = [];
    let myJSON = {};


    function disconect() {
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


    function getCheckedBoxed(chkboxname) {
        let checkboxChecked = [];

        for (let i = 0; i < chkboxname.length; i++) {
            if (chkboxname[i].checked) {
                checkboxChecked.push(chkboxname[i].id);
            }
        }
        return checkboxChecked.length > 0 ? checkboxChecked : null;
    }

    function makeJSON() {

        let objPlace = 'id_user';
        let objValuePlace = checkedUsers[0];
        myJSON[objPlace] = objValuePlace;

    }
    function sendData() {
        $.ajax({
            type: 'POST',
            url: '../content/removeWorkSpaceBtn.php',
            data: myJSON,
            success: function () {
                let success = document.createElement("h3");
                success.innerText = "Rozdzielone pomyślnie!";
                listOfDates.appendChild(success);
                listOfDates.innerHTML = "";
                listOfEquipment.innerHTML = "";
                listOfWorkspaces.innerHTML = "";
                disconect();

            }
        });
        return false;
    }

    getReservationButton.addEventListener("click", () => {
        checkedUsers = getCheckedBoxed(allUsers);
        makeJSON();
        sendData();


    });
})

