$(function () {
    let workSpace = document.getElementById("addWorkSpace");
    let cleanDiv = document.getElementById("listOfDates");


    workSpace.addEventListener("click", () => {

        cleanDiv.innerHTML = "";
        let div_workspace = document.createElement("div");
        div_workspace.classList.add("input-group");


        let label_opis = document.createElement("label");
        label_opis.innerHTML = "Nazwa miejsca:";
        let input_opis = document.createElement("input");
        input_opis.setAttribute("name", "work_opis")


        let submit_button = document.createElement("button");
        submit_button.innerHTML = "Dodaj"
        submit_button.classList.add("btn");
        submit_button.setAttribute("id", "submit_workSpace");
        submit_button.setAttribute("type", "submit");

        let success = document.createElement("h3");
        success.setAttribute("id", "success");

        let form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("id", "frmBox");
        form.setAttribute("action", "../content/addWorkSpace.php")
        form.setAttribute("onsubmit", "return formSubmit1();");

        div_workspace.appendChild(label_opis);
        div_workspace.appendChild(input_opis);
        div_workspace.appendChild(submit_button);
        div_workspace.appendChild(success);

        form.appendChild(div_workspace);
        cleanDiv.appendChild(form);
    })


})

function formSubmit1() {
    $.ajax({
        type: 'POST',
        url: '../content/addWorkSpace.php',
        data: $('#frmBox').serialize(),
        success: function () {
            $('#success').text("Informacja została dodana do bazy dannych");
        }
    });
    let form = document.getElementById('frmBox').reset();
    return false;
}
