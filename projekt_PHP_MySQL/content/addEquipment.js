$(function () {

    let cleanDiv = document.getElementById("listOfDates");
    let workEquipment = document.getElementById("addWorkEquipment");

    workEquipment.addEventListener("click", () => {
        cleanDiv.innerHTML = "";

        let div_workspace = document.createElement("div");
        div_workspace.classList.add("input-group");

        let success = document.createElement("h3");
        success.setAttribute("id", "success");

        let label_rodzaj = document.createElement("label");
        label_rodzaj.innerHTML = "Rodzaj:";

        let label_model = document.createElement("label");
        label_model.innerHTML = "Model:";

        let label_oznaczenie = document.createElement("label");
        label_oznaczenie.innerHTML = "Oznaczenie:";

        let label_rok = document.createElement("label");
        label_rok.innerHTML = "Rok zakupu:";

        let label_wartosc = document.createElement("label");
        label_wartosc.innerHTML = "Wartość:";

        let label_opis = document.createElement("label");
        label_opis.innerHTML = "Opis";

        let input_rodzaj = document.createElement("input");
        input_rodzaj.setAttribute("name", "rodzaj")

        let input_model = document.createElement("input");
        input_model.setAttribute("name", "model")

        let input_oznaczenie = document.createElement("input");
        input_oznaczenie.setAttribute("name", "oznaczenie");

        let input_rok = document.createElement("input");
        input_rok.setAttribute("name", "rok");

        let input_wartosc = document.createElement("input");
        input_wartosc.setAttribute("name", "wartosc");

        let input_opis = document.createElement("input");
        input_opis.setAttribute("name", "opis");

        let submit_button = document.createElement("button");
        submit_button.innerHTML = "Dodaj";
        submit_button.classList.add("btn");
        submit_button.setAttribute("id", "submit_equipment");
        submit_button.setAttribute("type", "submit");

        let form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "../content/addEquipment.php")
        form.setAttribute("onsubmit", "return formSubmit2();");
        form.setAttribute("id", "frmBox");

        div_workspace.appendChild(label_rodzaj);
        div_workspace.appendChild(input_rodzaj);
        div_workspace.appendChild(label_model);
        div_workspace.appendChild(input_model);
        div_workspace.appendChild(label_oznaczenie);
        div_workspace.appendChild(input_oznaczenie);
        div_workspace.appendChild(label_rok);
        div_workspace.appendChild(input_rok);
        div_workspace.appendChild(label_wartosc);
        div_workspace.appendChild(input_wartosc);
        div_workspace.appendChild(label_opis);
        div_workspace.appendChild(input_opis);
        div_workspace.appendChild(submit_button);
        div_workspace.appendChild(success);

        form.appendChild(div_workspace);
        cleanDiv.appendChild(form);
    })

})
function formSubmit2() {

    $.ajax({
        type: 'POST',
        url: '../content/addEquipment.php',
        data: $('#frmBox').serialize(),
        success: function () {
            $('#success').text("Informacja została dodana do bazy dannych");
        }
    });
    let form = document.getElementById('frmBox').reset();
    return false;
}