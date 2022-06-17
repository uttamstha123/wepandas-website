const id = sessionStorage.getItem("ID");
const fetchData = fetch("api/weplan.json");
fetchData
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    let getData = data[id];
    generateData(getData);
  });

function generateData(data) {
  // access title and change innerText of title in DOM
  const title = document.getElementById("title");
  title.classList.add("title");
  // Break two section 'WE' - 'other part'
  title.innerText = data?.title.slice(0, 2); // 'WE'

  // create span element for accent text
  const accentText = document.createElement("span");
  accentText.classList.add("accent-text");
  accentText.innerText = data?.title.slice(2); // 'other part'

  title.appendChild(accentText);

  // Description Section
  const description = document.getElementById("description");
  data?.description.forEach((element) => {
    // Creating elements
    const container = document.createElement("div");
    const subtitle = document.createElement("h3");
    const info = document.createElement("p");

    // updating innerText
    subtitle.innerText = element.subTitle;
    info.innerText = element.desc;

    container.appendChild(subtitle);
    container.appendChild(info);

    // adding necessary class name
    subtitle.classList.add("sub-title");
    info.classList.add("info");

    description.appendChild(container);
  });
}
