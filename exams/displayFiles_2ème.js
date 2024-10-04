const downloadableFiles = {
  Maths: {
    "1st term": ["maths_1st_term_exam1.pdf", "maths_1st_term_exam2.pdf"],
    "2nd term": [
      "maths_2nd_term_exam1.pdf",
      "maths_2st_term_exam2.pdf",
      "maths_2st_term_exam3.pdf",
    ],
    "3rd term": [
      "maths_3rd_mid_term_exam1.pdf",
      "maths_3rd_mid_term_exam2.pdf",
      "maths_3rd_mid_term_exam3.pdf",
    ],
  },
  Physics: {
    "1st term": ["physics_1st_term_exam1.pdf"],
    "2nd term": ["physics_2nd_term_exam1.pdf", "physics_2nd_term_exam2.pdf"],
    "3rd term": ["physics_3rd_term_exam1.pdf"],
  },
  Technology: {
    "1st term": ["Tech_end-term1_exam1.pdf"],
    "2nd term": ["Tech_end-term2_exam1.pdf"],
    "3rd term": ["Tech_end-term3_exam1.pdf"],
  },
  // Add more subjects and terms as needed
};

function showDownloadableFiles() {
  const subject = document.querySelector(
    ".dropdown_space .dropdown:nth-child(1) .selected"
  ).innerText;
  const term = document.querySelector(
    ".dropdown_space .dropdown:nth-child(2) .selected"
  ).innerText;
  const container = document.getElementById("downloadsContainer");

  container.innerHTML = "";

  if (downloadableFiles[subject] && downloadableFiles[subject][term]) {
    downloadableFiles[subject][term].forEach((file) => {
      const link = document.createElement("a");
      link.href = `pdf/2ème/${file}`; // Adjust the path to match your folder structure
      link.innerText = file;
      link.className = "download-link";
      link.download = file; // Optional: this attribute suggests the default file name when saving

      const icon = document.createElement("i");
      icon.className = "fas fa-download"; // Font Awesome download icon
      link.appendChild(icon); // Add the icon after the text

      container.appendChild(link);
    });
  } else {
    container.innerText =
      "No files available for the selected subject and term.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showDownloadableFiles();

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const options = dropdown.querySelectorAll(".dropdown_menu li");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        showDownloadableFiles();
      });
    });
  });
});
