var resumeLink = document.querySelector("#resume-button-1");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/10GkYN2SF1vK3L5Ltpr_4fF_2q_vKSev_/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=10GkYN2SF1vK3L5Ltpr_4fF_2q_vKSev_";
  link.download = "NADIMUDDIN-SHAIKH-RESUME";
  link.click();
});

var resumeLink = document.querySelector("#resume-button-2");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/10GkYN2SF1vK3L5Ltpr_4fF_2q_vKSev_/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=10GkYN2SF1vK3L5Ltpr_4fF_2q_vKSev_";
  link.download = "NADIMUDDIN-SHAIKH-RESUME";
  link.click();
});