
let getReservationButton = document.getElementById("getUsers")
let listOfDates = document.getElementById("listOfDates");

function getUsers() {
    listOfDates.innerHTML = "";
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

            div_user.appendChild(h2_username);
            div_user.appendChild(p_phone);
            div_user.appendChild(p_email);
            div_user.appendChild(p_about);

            listOfDates.appendChild(div_user);
        });
    });
}

getReservationButton.addEventListener("click", getUsers); 
