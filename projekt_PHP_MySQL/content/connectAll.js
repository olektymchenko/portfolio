$(function () {
    let connectBtn = document.getElementById("submitWorkSpace");
    let allWorkSpaces = document.getElementsByClassName("workSpaceCheckbox");
    let allEquipment = document.getElementsByClassName("workEquipmentChechbox");
    let checkedWorkSpaces = [];
    let checkedEquipment = [];
    let myJSON = {};

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

        let objPlace = 'id_workPlace';
        let objValuePlace = checkedWorkSpaces[0];
        myJSON[objPlace] = objValuePlace;

        let objEquip = 'id_equipment';
        let objValueEquip = checkedEquipment[0];
        myJSON[objEquip] = objValueEquip;

    }
    connectBtn.addEventListener("click", () => {
        checkedWorkSpaces = getCheckedBoxed(allWorkSpaces);
        checkedEquipment = getCheckedBoxed(allEquipment);
        makeJSON();
        sendData();
    })

    function sendData() {
        $.ajax({
            type: 'POST',
            url: '../content/connectAll.php',
            data: myJSON,
            success: function () {
                getWorkSpaces();
                getWorkEquipment();
                let success = document.createElement("h3");
                success.innerText = "Wyposażenie zostało przypisane do miejsca pracy!";
                listOfDates.appendChild(success);
            }
        });
        return false;
    }
})