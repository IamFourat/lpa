document.addEventListener("DOMContentLoaded", () => {
  const base = window.location.pathname.includes("/lpa") ? "/lpa/" : "/";
  const navbarHTML = `
      <nav class="navbar">
          <div class="logo">
              <img
                  src="${base}images/CRLPA.png"
                  alt="logo of the website"
                  width="50px"
              />
              <a href="${base}index.html">LPA</a>
          </div>
           <div class="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
          <div class="menu">
              <ul>
                  <li>
                      <a href="${base}about us.html">about us</a>
                  </li>
                  <li>
                      <a href="#">2024/2025<i class="fas fa-caret-down"></i></a>
                      <div class="years_menu">
                         <ul>
                             <li><a href="${base}calendar.html">calendar</a></li>
                             <li><a href="#">list of students</a></li>
                             <li><a href="#">events</a></li>
                         </ul>
                      </div>                                                                       
                  </li>
                  <li><a href="${base}clubs.html">clubs</a></li>
                  <li><a href="${base}timetable.html">time table</a></li>
                  <li>
                      <a href="#">exams<i class="fas fa-caret-down"></i></a>
                      <div class="exams_menu">
                          <ul>
                              <li>
                                  <a href="${base}exams/1ère.html">1st grade</a>
                              </li>
                              <li>
                                  <a href="${base}exams/2ème.html">2nd grade</a>
                              </li>
                              <li>
                                  <a href="#">3rd grade<i class="fas fa-caret-left"></i></a>
                                  <div class="pre_bac">
                                      <ul>
                                          <li><a href="#">Math</a></li>
                                          <li><a href="#">Science</a></li>
                                          <li><a href="#">Technology</a></li>
                                      </ul>
                                  </div>
                              </li>
                              <li>
                                  <a href="#">4th grade<i class="fas fa-caret-left"></i></a>
                                  <div class="bac">
                                      <ul>
                                          <li><a href="#">Math</a></li>
                                          <li><a href="#">Science</a></li>
                                          <li><a href="#">Technology</a></li>
                                      </ul>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="search"></div>
      </nav>
  `;
  document.getElementById("navbar").innerHTML = navbarHTML;
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
      navbar.style.height = "auto"; // Adjust the height of the navbar when menu is open
    } else {
      navbar.style.height = "auto"; // Adjust back to original height when menu is closed
    }
  });
});
