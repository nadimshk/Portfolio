var resumeLink = document.querySelector("#resume-button-1");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1SNcdAuqe-cpASQxNG8nY6xwQ8m7VQtuG/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1SNcdAuqe-cpASQxNG8nY6xwQ8m7VQtuG";
  link.download = "NADIMUDDIN-SHAIKH-RESUME";
  link.click();
});

var resumeLink = document.querySelector("#resume-button-2");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1SNcdAuqe-cpASQxNG8nY6xwQ8m7VQtuG/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1SNcdAuqe-cpASQxNG8nY6xwQ8m7VQtuG";
  link.download = "NADIMUDDIN-SHAIKH-RESUME";
  link.click();
});