function displayTimetable(grade) {
  const downloadsContainer = document.getElementById("downloadsContainer");

  // Clear previous content
  downloadsContainer.innerHTML = "";

  // Object containing timetables for each grade
  const timetables = {
    "1st grade": [
      {
        file: "1st_grade_class1_timetable.jpg",
        download: "1st_grade_class1_timetable.jpg",
      },
      {
        file: "1st_grade_class2_timetable.jpg",
        download: "1st_grade_class2_timetable.jpg",
      },
      {
        file: "1st_grade_class3_timetable.jpg",
        download: "1st_grade_class3_timetable.jpg",
      },
      {
        file: "1st_grade_class4_timetable.jpg",
        download: "1st_grade_class4_timetable.jpg",
      },
      {
        file: "1st_grade_class5_timetable.jpg",
        download: "1st_grade_class5_timetable.jpg",
      },
      {
        file: "1st_grade_class6_timetable.jpg",
        download: "1st_grade_class6_timetable.jpg",
      },
      {
        file: "1st_grade_class7_timetable.jpg",
        download: "1st_grade_class7_timetable.jpg",
      },
      {
        file: "1st_grade_class8_timetable.jpg",
        download: "1st_grade_class8_timetable.jpg",
      },
    ],
    "2nd grade": [
      {
        file: "2nd_grade_class1_timetable.jpg",
        download: "2nd_grade_class1_timetable.jpg",
      },
      {
        file: "2nd_grade_class2_timetable.jpg",
        download: "2nd_grade_class2_timetable.jpg",
      },
      {
        file: "2nd_grade_class3_timetable.jpg",
        download: "2nd_grade_class3_timetable.jpg",
      },
      {
        file: "2nd_grade_class4_timetable.jpg",
        download: "2nd_grade_class4_timetable.jpg",
      },
      {
        file: "2nd_grade_class5_timetable.jpg",
        download: "2nd_grade_class5_timetable.jpg",
      },
      {
        file: "2nd_grade_class6_timetable.jpg",
        download: "2nd_grade_class6_timetable.jpg",
      },
      {
        file: "2nd_grade_class7_timetable.jpg",
        download: "2nd_grade_class7_timetable.jpg",
      },
      {
        file: "2nd_grade_class8_timetable.jpg",
        download: "2nd_grade_class8_timetable.jpg",
      },
    ],
    "3rd grade": [
      {
        file: "3rd_grade_class1_timetable.jpg",
        download: "3rd_grade_class1_timetable.jpg",
      },
      {
        file: "3rd_grade_class2_timetable.jpg",
        download: "3rd_grade_class2_timetable.jpg",
      },
      {
        file: "3rd_grade_class3_timetable.jpg",
        download: "3rd_grade_class3_timetable.jpg",
      },
      {
        file: "3rd_grade_class4_timetable.jpg",
        download: "3rd_grade_class4_timetable.jpg",
      },
      {
        file: "3rd_grade_class5_timetable.jpg",
        download: "3rd_grade_class5_timetable.jpg",
      },
      {
        file: "3rd_grade_class6_timetable.jpg",
        download: "3rd_grade_class6_timetable.jpg",
      },
      {
        file: "3rd_grade_class7_timetable.jpg",
        download: "3rd_grade_class7_timetable.jpg",
      },
      {
        file: "3rd_grade_class8_timetable.jpg",
        download: "3rd_grade_class8_timetable.jpg",
      },
    ],
    "4th grade": [
      {
        file: "images/timetables/4th grade technology.jpg",
        download: "images/timetables/4th grade technology.jpg",
      },
      {
        file: "4th_grade_class2_timetable.jpg",
        download: "4th_grade_class2_timetable.jpg",
      },
      {
        file: "4th_grade_class3_timetable.jpg",
        download: "4th_grade_class3_timetable.jpg",
      },
      {
        file: "4th_grade_class4_timetable.jpg",
        download: "4th_grade_class4_timetable.jpg",
      },
      {
        file: "4th_grade_class5_timetable.jpg",
        download: "4th_grade_class5_timetable.jpg",
      },
      {
        file: "4th_grade_class6_timetable.jpg",
        download: "4th_grade_class6_timetable.jpg",
      },
      {
        file: "4th_grade_class7_timetable.jpg",
        download: "4th_grade_class7_timetable.jpg",
      },
      {
        file: "4th_grade_class8_timetable.jpg",
        download: "4th_grade_class8_timetable.jpg",
      },
    ],
  };

  // Check if the selected grade has timetables
  if (timetables[grade]) {
    timetables[grade].forEach((timetable, index) => {
      downloadsContainer.innerHTML += `
          <div class="timetable-entry">
            <h3>Class ${index + 1} Timetable</h3>
            <img src="timetables/${
              timetable.file
            }" alt="Timetable for ${grade}, Class ${index + 1}">
            <br>
            <a href="images/timetables/${
              timetable.download
            }" download>Download Timetable</a>
          </div>
        `;
    });
  } else {
    downloadsContainer.innerText = "Please select a valid grade.";
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
