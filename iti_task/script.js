setTimeout(() => {
  const birthdayDiv = document.getElementById("birthday-content");
  birthdayDiv.innerHTML = `
    <textarea placeholder="Write a nice message..."></textarea><br/>
    <button onclick="showThankYou()">Submit</button>
  `;
}, 5000);

function showThankYou() {
  document.getElementById("birthday").style.display = "none";
  document.getElementById("thankyou").style.display = "block";
}
