// // ----------heart_icon-------------

const heart_icon = document.querySelectorAll(".heart_icon");

heart_icon.forEach((item) => {
  item.addEventListener("click", function () {
    const heartIcon = document.getElementById("heart");
    let heartVaule = parseInt(heartIcon.innerText);
    heartVaule++;

    heartIcon.innerText = heartVaule;
  });
});

// // ------------------------copy_button--------------

const copy_btn = document.querySelectorAll(".copy_btn");

let copy_value_change = 0;
const copy_count = document.getElementById("copy_count");
copy_btn.forEach((item) => {
  item.addEventListener("click", function () {
    const number = item
      .closest(".card")
      .querySelector(".service_num").innerText;

    navigator.clipboard.writeText(number);
    alert(`Copied ${number} to clipboard`);

    copy_value_change++;
    copy_count.innerText = copy_value_change;
  });
});


const copy_call = document.querySelectorAll(".copy_call");
let coines_main_value = 100;

const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

copy_call.forEach((item) => {
  item.addEventListener("click", function () {
    const cards = item.closest(".card");
    const service_names = cards.querySelector(".service_name").innerText;
    const service_numbers = cards.querySelector(".service_num").innerText;
    const coines = document.getElementById("coine");

    if (coines_main_value < 20) {
      alert("You don't have enough coins to make a call.");
      return;
    }

    coines_main_value -= 20;
    coines.innerText = coines_main_value;

    alert(`📞 Calling ${service_names} ${service_numbers}...`);

    const time = new Date().toLocaleTimeString();

    const itemDiv = document.createElement("div");
    itemDiv.className =
      "flex items-center justify-between bg-[gray]/5 px-3 py-2 rounded-md shadow-sm";

    const left_side = document.createElement("div");
    left_side.innerHTML = `<p class="font-bold">${service_names}</p><p class="text-xs text-gray-600">${service_numbers}</p>`;

    const timetext = document.createElement("p");
    timetext.className = "text-xs text-gray-500";
    timetext.innerText = time;

    itemDiv.appendChild(left_side);
    itemDiv.appendChild(timetext);

    historyList.prepend(itemDiv);
  });
});

// ------ Clear history section -----------
clearHistoryBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});

