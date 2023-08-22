$(".slide .singer-body").slideUp(0);

$(".open-btn").click(function () {
  $("#slider").animate({ opacity: "100" }, 0);
  $("#slider").animate({ width: "100%" }, 500);
  $(".open-btn").animate({ left: "260" }, 100);
});
$("#close-button").click(function () {
  $("#slider").animate({ width: "0" }, 200);
  $("#slider").animate({ opacity: "0" }, 0);
  $(".open-btn").animate({ left: "10" }, 1000);
});

$(".singer-header").click(function () {
  $(".singer-body").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

let counter = setInterval(function () {
  let deadline = new Date("nov 23, 2023 20:00:00").getTime();
  let now = new Date().getTime();
  let time = deadline - now;
  let sec = Math.floor((time % (1000 * 60)) / 1000);
  let min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let day = Math.floor(time / (1000 * 60 * 60 * 24));
  document.getElementById("counter-day").innerHTML = `<span>${day}D</span>`;
  document.getElementById("counter-hour").innerHTML = `<span>${hour}h</span>`;
  document.getElementById("counter-minute").innerHTML = `<span>${min}m</span>`;
  document.getElementById("counter-seconds").innerHTML = `<span>${sec}s</span>`;
  if (time < 0) {
    clearInterval(counter);
  }
}, 100);
