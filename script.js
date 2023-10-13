document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.getElementById("reservation-form");

  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const reservationDetails = `Name: ${name}\nPhone Number: ${phone}\nDate: ${date}\nTime: ${time}`;
    alert("Reservation details:\n\n" + reservationDetails);
  });
});
