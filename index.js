// Life in years, days, weeks, and months
document.querySelector(".open").addEventListener("click", () => {
  const age = parseInt(document.getElementById("age").value.trim(), 10);
  const yearYouWishToLive = parseInt(
    document.getElementById("year").value.trim(),
    10
  );

  if (isNaN(age) || isNaN(yearYouWishToLive)) {
    alert(
      "Please enter valid numbers for both age and the year you wish to live until."
    );
    return;
  }

  if (age >= yearYouWishToLive) {
    alert(
      "The year you wish to live until must be greater than your current age."
    );
    return;
  }

  showPopup();
  displayLifeInWeeks(yearYouWishToLive, age);
});

function showPopup() {
  const popup = document.querySelector(".popup");
  popup.style.display = "block";

  // Ensure the close button listener is added only once
  const close = document.querySelector(".close");
  close.onclick = () => (popup.style.display = "none");
}

function displayLifeInWeeks(yearYouWishToLive, age) {
  const { years, months, weeks, days } = calculateLifeInWeeks(
    yearYouWishToLive,
    age
  );

  const resultMessage = `You have ${years} years, ${months} months, ${weeks} weeks, and ${days} days left.`;
  document.querySelector(".popup-results").innerHTML = resultMessage;
}

function calculateLifeInWeeks(yearYouWishToLive, age) {
  const yearsRemaining = yearYouWishToLive - age;
  return {
    years: yearsRemaining,
    days: yearsRemaining * 365,
    weeks: yearsRemaining * 52,
    months: yearsRemaining * 12,
  };
}
