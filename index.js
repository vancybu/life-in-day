//Life in years, days, weeks and months
const btn = document.querySelector(".open");
btn.addEventListener("click", () => {
  const age = parseInt(document.getElementById("age").value);
  const yearYouWishToLive = parseInt(document.getElementById("year").value);

  if (!age || isNaN(age) || !yearYouWishToLive || isNaN(yearYouWishToLive)) {
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

  const popup = document.querySelector(".popup");
  popup.style.display = "block";

  // Close popup button
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    popup.style.display = "none";
  });

  lifeInWeeks(yearYouWishToLive, age);
});

function lifeInWeeks(yearYouWishToLive, age) {
  const yearsRemaining = yearYouWishToLive - age;
  const days = yearsRemaining * 365;
  const weeks = yearsRemaining * 52;
  const months = yearsRemaining * 12;

  const cal = `You have ${yearsRemaining} years, ${months} months, ${weeks} weeks and ${days} days left.`;

  const remain = document.querySelector(".popup-results");
  remain.innerHTML = cal;
  console.log(remain);
}
