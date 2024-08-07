document.addEventListener("DOMContentLoaded", () => {
    const base = window.location.pathname.includes('/lpa') ? '/lpa/' : '/';
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
            <div class="menu">
                <ul>
                    <li>
                        <a href="${base}about us.html">about us</a>
                    </li>
                    <li>
                        <a href="#">school years<i class="fas fa-caret-down"></i></a>
                        <div class="school_years_menu">
                            <ul>
                                <li>
                                    <a href="#">2024/2025 <i class="fas fa-caret-right"></i></a>
                                    <div class="years_menu">
                                        <ul>
                                            <li><a href="#">calendar</a></li>
                                            <li><a href="#">list of students</a></li>
                                            <li><a href="#">events</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">2023/2024 <i class="fas fa-caret-right"></i></a>
                                    <div class="years_menu">
                                        <ul>
                                            <li><a href="#">calendar</a></li>
                                            <li><a href="#">list of students</a></li>
                                            <li><a href="#">events</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">2022/2023 <i class="fas fa-caret-right"></i></a>
                                    <div class="years_menu">
                                        <ul>
                                            <li><a href="#">calendar</a></li>
                                            <li><a href="#">list of students</a></li>
                                            <li><a href="#">events</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">2021/2022 <i class="fas fa-caret-right"></i></a>
                                    <div class="years_menu">
                                        <ul>
                                            <li><a href="#">calendar</a></li>
                                            <li><a href="#">list of students</a></li>
                                            <li><a href="#">events</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">2020/2021 <i class="fas fa-caret-right"></i></a>
                                    <div class="years_menu">
                                        <ul>
                                            <li><a href="#">calendar</a></li>
                                            <li><a href="#">list of students</a></li>
                                            <li><a href="#">events</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">clubs</a></li>
                    <li><a href="#">time table</a></li>
                    <li>
                        <a href="#">exams<i class="fas fa-caret-down"></i></a>
                        <div class="exams_menu">
                            <ul>
                                <li>
                                    <a href="${base}exams/1ère.html">1st grade</a>
                                </li>
                                <li>
                                    <a href="#">2nd grade</a>
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
});
