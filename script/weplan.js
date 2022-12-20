let id = sessionStorage.getItem("ID");

const fetchData = fetch("api/weplan.json");
fetchData
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    let getData = data[id];
    generateData(getData, id);
  });

// Update the page number state - change color of current page number
const pageNumber = document.querySelectorAll(
  ".we-section__page--number .number"
);
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

function pageNumberState() {
  let getId = Number(sessionStorage.getItem("ID"));
  pageNumber.forEach((page) => {
    page.innerText == getId + 1 ? page.setAttribute("id", "active") : "";
    // update page navigation arrow state - change color when it is active
    if (getId > 0 && getId < pageNumber.length - 1) {
      arrowLeft.childNodes[0].childNodes[1].setAttribute("id", "active");
      arrowRight.childNodes[1].childNodes[1].setAttribute("id", "active");
      arrowRight.style = "pointer-events: auto";
      arrowLeft.style = "pointer-events: auto";
    }
    if (getId == 0) {
      arrowRight.childNodes[1].childNodes[1].setAttribute("id", "active");
      arrowLeft.childNodes[0].childNodes[1].setAttribute("id", "");
      arrowLeft.style = "pointer-events: none";
      arrowRight.style = "pointer-events: auto";
    }
    if (getId == pageNumber.length - 1) {
      arrowRight.childNodes[1].childNodes[1].setAttribute("id", "");
      arrowRight.style = "pointer-events: none";
      arrowLeft.style = "pointer-events: auto";
      arrowLeft.childNodes[0].childNodes[1].setAttribute("id", "active");
    }
    if (page.innerText != getId + 1) {
      page.setAttribute("id", "");
    }
  });
}

// Inital calling
pageNumberState();

// page crousel
arrowLeft.addEventListener("click", async () => {
  let currentId = sessionStorage.getItem("ID");
  --currentId;
  sessionStorage.setItem("ID", Number(currentId));

  const fetchData = await fetch("api/weplan.json");
  if (fetchData.ok) {
    let data = await fetchData.json();
    let getData = data[currentId];
    const content = document.querySelector(".we-section__content");
    content.innerHTML = "";
    generateData(getData);
  }
  pageNumberState();
});

arrowRight.addEventListener("click", async () => {
  let currentId = sessionStorage.getItem("ID");
  ++currentId;
  sessionStorage.setItem("ID", Number(currentId));

  if (currentId >= pageNumber.length - 1)
    sessionStorage.setItem("ID", pageNumber.length - 1);

  const fetchData = await fetch("api/weplan.json");

  if (fetchData.ok) {
    let data = await fetchData.json();
    let getData = data[currentId];
    const content = document.querySelector(".we-section__content");
    content.innerHTML = "";
    generateData(getData);
  }
  pageNumberState();
});

function generateData(data) {
  // access title and change innerText of title in DOM
  const section = document.querySelector(".we-section__content");
  const title = document.createElement("h2");
  title.classList.add("title");
  // Break two section 'WE' - 'other part'
  title.innerText = data?.title.slice(0, 2); // 'WE'

  // create span element for accent text
  const accentText = document.createElement("span");
  accentText.classList.add("accent-text");
  accentText.innerText = data?.title.slice(2); // 'other part'

  title.appendChild(accentText);

  section.appendChild(title);

  // Description Section
  const description = document.createElement("div");
  description.classList.add("description", "flex", "flex-col");
  data?.subtitle.forEach((element, index) => {
    // Creating elements
    const container = document.createElement("div");
    container.classList.add("info-container");
    const subtitle = document.createElement("h3");
    const info = document.createElement("p");

    const desc = data?.description[index];

    // updating innerText
    subtitle.innerText = element;
    info.innerText = desc;

    container.appendChild(subtitle);
    container.appendChild(info);

    // adding necessary class name
    subtitle.classList.add("sub-title");
    info.classList.add("info");

    description.appendChild(container);
  });
  section.appendChild(description);
}
