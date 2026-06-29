const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });
}

function calculatePrice() {
  const roomType = document.getElementById("roomType");
  const nights = document.getElementById("nights");
  const totalCost = document.getElementById("totalCost");

  if (!roomType || !nights || !totalCost) return;

  const price = parseInt(roomType.value);
  const total = price * parseInt(nights.value);

  totalCost.textContent = "Total Cost: ₹" + total;
}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const room = document.getElementById("room").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (!name || !email || !phone || !room || !checkin || !checkout) {
      alert("Please fill in all required fields.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    alert("Booking submitted successfully!");
    bookingForm.reset();
  });
}
