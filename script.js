const navbarHTML = `
  <nav class="navbar" >
      <div class="logo">
        <img
          src="images/club_robotique-removebg-preview.png"
          alt="logo of the website"
          width="50px"
        />
        <a href="index.html">LPA</a>
      </div>
      <div class="menu">
        <ul>
          <li>
            <a href="about us.html">about us</a>
          </li>
          <li>
            <a href="">school years<i class="fas fa-caret-down"></i></a>
            <div class="school_years_menu">
              <ul>
                <li>
                  <a href="">2024/2025 <i class="fas fa-caret-right"></i></a>
                  <div class="years_menu">
                    <ul>
                      <li><a href="">calendar</a></li>
                      <li><a href="">list of students</a></li>
                      <li><a href="">events</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">2023/2024 <i class="fas fa-caret-right"></i></a>
                  <div class="years_menu">
                    <ul>
                      <li><a href="">calendar</a></li>
                      <li><a href="">list of students</a></li>
                      <li><a href="">events</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">2022/2023 <i class="fas fa-caret-right"></i></a>
                  <div class="years_menu">
                    <ul>
                      <li><a href="">calendar</a></li>
                      <li><a href="">list of students</a></li>
                      <li><a href="">events</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">2021/2022 <i class="fas fa-caret-right"></i></a>
                  <div class="years_menu">
                    <ul>
                      <li><a href="">calendar</a></li>
                      <li><a href="">list of students</a></li>
                      <li><a href="">events</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">2020/2021 <i class="fas fa-caret-right"></i></a>
                  <div class="years_menu">
                    <ul>
                      <li><a href="">calendar</a></li>
                      <li><a href="">list of students</a></li>
                      <li><a href="">events</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li><a href="">clubs</a></li>
          <li><a href="">time table</a></li>
          <li><a href="">Exams</a></li>
        </ul>
      </div>
      <div class="search"></div>
    </nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbarHTML;
});
