// Saving id in SessionStorage
// Id denotes -
const wePlanLink = document.querySelectorAll(".weplan-link");
wePlanLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    // error: session storage is not saving data after deploying
    let id = e.target.id;
    sessionStorage.setItem("ID", id);
  });
});
