// Saving id in SessionStorage
// Id denotes -
const wePlanLink = document.querySelectorAll(".weplan-link");
wePlanLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    let id = e.target.id;
    sessionStorage.setItem("id", id);
  });
});
