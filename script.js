"use strict";
let incompleteTasks = ["Class Lecture @ 2:30pm", "Learn React"];
let completedTasks = ["Unlearn React"];

//LOCAL STORAGE
//TAILWIND, HTML, RESPONSIVE,should have just set the text input limit.

// const check = document.querySelectorAll(".check");
// const undo = document.querySelectorAll(".undo");
// const del = document.querySelectorAll(".delete");
// const delUndo = document.querySelectorAll(".deleteundo");
const main = document.querySelector(".main-container");
const button = document.querySelector("button");
const input = document.querySelector("input");
const incompleteTab = document.querySelector(".incomplete-tab");
const completedTab = document.querySelector(".completed-tab");
const activeNo = document.querySelector(".active-no");

const render = function () {
  return incompleteTasks
    .map(
      (ev, i) => `<div
          class="flex items-center relative border-b border-gray-500 py-5"
          data-id="${i}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            class="fill-current text-gray-500 w-5 h-5 mr-5 cursor-pointer hover:text-green-400 check"
          >
            <path
              d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0"
            />
          </svg>
          <span class="text-lg capitalize overflow-x-auto mr-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-dark-theme w-11/12">${ev}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 407.521 407.521"
            style="enable-background: new 0 0 407.521 407.521"
            xml:space="preserve"
            class="w-5 h-5 fill-current text-gray-500 absolute right-3 cursor-pointer hover:text-red-500 delete"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M335.94,114.944H71.581c-2.86-0.243-5.694,0.702-7.837,2.612c-2.107,2.024-3.083,4.954-2.612,7.837l27.167,236.669     c3.186,26.093,25.436,45.647,51.722,45.453h131.657c27.026,0.385,49.791-20.104,52.245-47.02l22.465-236.147     c0.139-2.533-0.811-5.005-2.612-6.792C341.634,115.646,338.8,114.701,335.94,114.944z M303.026,359.45     c-1.642,15.909-15.366,27.803-31.347,27.167H140.022c-15.694,0.637-29.184-11.024-30.825-26.645L83.075,135.842h241.371     L303.026,359.45z"
                  />
                  <path
                    d="M374.079,47.026H266.454V30.307c0.58-16.148-12.04-29.708-28.188-30.288c-0.53-0.019-1.061-0.024-1.591-0.014h-65.829     c-16.156-0.299-29.494,12.555-29.793,28.711c-0.01,0.53-0.005,1.061,0.014,1.591v16.718H33.442     c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h340.637c5.771,0,10.449-4.678,10.449-10.449     S379.849,47.026,374.079,47.026z M245.556,30.307v16.718h-83.592V30.307c-0.589-4.579,2.646-8.768,7.225-9.357     c0.549-0.071,1.104-0.086,1.656-0.047h65.829c4.605-0.326,8.603,3.142,8.929,7.748C245.643,29.203,245.627,29.758,245.556,30.307     z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
  `
    )
    .join("");
};
const renderNoTask = function () {
  return `
        <div class="flex items-center relative border-b border-gray-500 py-5">
          <span class="text-sm text-gray-400 mx-auto capitalize"
            >you have no pending task.</span
          >
        </div>
    `;
};
const renderCompleted = function () {
  return completedTasks
    .map(
      (ev, i) => `
      <div class="flex items-center relative border-b border-gray-500 py-5" data-id="${i}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="512pt"
        viewBox="0 0 512 512.00241"
        width="512pt"
        class="fill-current text-gray-500 w-5 h-5 mr-5 cursor-pointer hover:text-sky-blue undo"
      >
        <path
          d="m256 .00390625c-62.675781 0-123.605469 23.08203175-171.09375 62.26953175l-57.597656-57.597657c-4.585938-4.566406-11.457032-5.933593-17.429688-3.457031-5.972656 2.472656-9.878906 8.296875-9.878906 14.785156v138.664063c0 8.832031 7.167969 16 16 16h138.667969c6.484375 0 12.308593-3.902344 14.785156-9.875 2.472656-5.972657 1.109375-12.84375-3.480469-17.429688l-50.75-50.773437c39.445313-31.425782 89.363282-49.921875 140.777344-49.921875 117.632812 0 213.335938 95.703125 213.335938 213.335937 0 117.628906-95.703126 213.332032-213.335938 213.332032-56.9375 0-110.503906-22.207032-150.804688-62.527344-8.339843-8.34375-21.824218-8.34375-30.164062 0-8.34375 8.339844-8.34375 21.824218 0 30.164062 48.363281 48.382813 112.640625 75.03125 180.96875 75.03125 141.164062 0 256-114.839844 256-256 0-141.164062-114.835938-255.99999975-256-255.99999975zm0 0"
        />
      </svg>
      <span class="text-lg capitalize line-through text-gray-400 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-dark-theme overflow-x-auto w-11/12"
        >${ev}</span
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 407.521 407.521"
        style="enable-background: new 0 0 407.521 407.521"
        xml:space="preserve"
        class="w-5 h-5 fill-current text-gray-500 absolute right-3 cursor-pointer hover:text-red-500 deleteundo"
      >
        <g>
          <g>
            <g>
              <path
                d="M335.94,114.944H71.581c-2.86-0.243-5.694,0.702-7.837,2.612c-2.107,2.024-3.083,4.954-2.612,7.837l27.167,236.669     c3.186,26.093,25.436,45.647,51.722,45.453h131.657c27.026,0.385,49.791-20.104,52.245-47.02l22.465-236.147     c0.139-2.533-0.811-5.005-2.612-6.792C341.634,115.646,338.8,114.701,335.94,114.944z M303.026,359.45     c-1.642,15.909-15.366,27.803-31.347,27.167H140.022c-15.694,0.637-29.184-11.024-30.825-26.645L83.075,135.842h241.371     L303.026,359.45z"
              />
              <path
                d="M374.079,47.026H266.454V30.307c0.58-16.148-12.04-29.708-28.188-30.288c-0.53-0.019-1.061-0.024-1.591-0.014h-65.829     c-16.156-0.299-29.494,12.555-29.793,28.711c-0.01,0.53-0.005,1.061,0.014,1.591v16.718H33.442     c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h340.637c5.771,0,10.449-4.678,10.449-10.449     S379.849,47.026,374.079,47.026z M245.556,30.307v16.718h-83.592V30.307c-0.589-4.579,2.646-8.768,7.225-9.357     c0.549-0.071,1.104-0.086,1.656-0.047h65.829c4.605-0.326,8.603,3.142,8.929,7.748C245.643,29.203,245.627,29.758,245.556,30.307     z"
              />
            </g>
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
    `
    )
    .join("");
};
const renderNoCompleted = function () {
  return `
  <div class="flex items-center relative border-b border-gray-500 py-5">
  <span class="text-sm text-gray-400 mx-auto capitalize"
    >you have no completed task.</span
  >
</div>
      `;
};

const updateActiveNO = function () {
  activeNo.textContent = incompleteTasks.length;
};
main.addEventListener("click", function (e) {
  if (e.target.classList.contains("check")) {
    const id = e.target.closest(".relative").dataset.id;
    completedTasks.push(incompleteTasks[id]);
    incompleteTasks.splice(id, 1);
    const html = render();
    main.innerHTML = "";
    main.insertAdjacentHTML("afterbegin", html);
    updateActiveNO();
    setLocalStorage();
  } else if (e.target.classList.contains("delete")) {
    const id = e.target.closest(".relative").dataset.id;
    incompleteTasks.splice(id, 1);
    const html = render();
    main.innerHTML = "";
    main.insertAdjacentHTML("afterbegin", html);
    updateActiveNO();
    setLocalStorage();
  } else if (e.target.classList.contains("deleteundo")) {
    const id = e.target.closest(".relative").dataset.id;
    completedTasks.splice(id, 1);
    const html = renderCompleted();
    main.innerHTML = "";
    main.insertAdjacentHTML("afterbegin", html);
    setLocalStorage();
  } else if (e.target.classList.contains("undo")) {
    const id = e.target.closest(".relative").dataset.id;
    incompleteTasks.push(completedTasks[id]);
    completedTasks.splice(id, 1);
    const html = renderCompleted();
    main.innerHTML = "";
    main.insertAdjacentHTML("afterbegin", html);
    updateActiveNO();
    setLocalStorage();
  }
  if (main.innerHTML == "") {
    const html = renderNoTask();
    main.insertAdjacentHTML("afterbegin", html);
  }
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (!input.value == "") {
    incompleteTasks.unshift(input.value);
    input.value = "";
    const html = render();
    main.innerHTML = "";
    main.insertAdjacentHTML("afterbegin", html);
    updateActiveNO();
    setLocalStorage();
  }

  //after submittimg move to the incomple tasks tab
  incompleteTab.classList.add("text-white");
  incompleteTab.classList.remove("text-gray-400");
  completedTab.classList.remove("text-white");
  completedTab.classList.add("text-gray-400");
});
incompleteTab.addEventListener("click", function () {
  const html = render();
  main.innerHTML = "";
  main.insertAdjacentHTML("afterbegin", html);
  incompleteTab.classList.add("text-white");
  incompleteTab.classList.remove("text-gray-400");
  completedTab.classList.remove("text-white");
  completedTab.classList.add("text-gray-400");
  if (incompleteTasks.length == 0) {
    const html = renderNoTask();
    main.insertAdjacentHTML("afterbegin", html);
  }
});
completedTab.addEventListener("click", function () {
  const html = renderCompleted();
  main.innerHTML = "";
  main.insertAdjacentHTML("afterbegin", html);
  completedTab.classList.add("text-white");
  completedTab.classList.remove("text-gray-400");
  incompleteTab.classList.remove("text-white");
  incompleteTab.classList.add("text-gray-400");
  if (completedTasks.length == 0) {
    const html = renderNoCompleted();
    main.insertAdjacentHTML("afterbegin", html);
  }
});
const date = document.querySelector(".date");
const dateNO = new Date().getDate();
const month = new Date().toLocaleString("default", { month: "long" });
const week = new Date().toLocaleString("default", { weekday: "long" });
date.textContent = `${week}, ${month} ${dateNO}`;

// LOCAL STORAGE
function setLocalStorage() {
  localStorage.setItem("incompleteTasks", JSON.stringify(incompleteTasks));
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

function getLocalStorage() {
  const localData1 = JSON.parse(localStorage.getItem("incompleteTasks"));
  const localData2 = JSON.parse(localStorage.getItem("completedTasks"));
  if (!localData1) return;
  if (!localData2) return;
  incompleteTasks = localData1;
  completedTasks = localData2;
}

window.addEventListener("load", function () {
  getLocalStorage();
  const html = render();
  main.innerHTML = "";
  main.insertAdjacentHTML("afterbegin", html);
});
