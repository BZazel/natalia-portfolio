(()=>{var e=class extends HTMLElement{constructor(){super(),this.innerHTML=`
            <heading id="toolbar" class="toolbar">
                <span class="title" onclick="navigateToSection('home')">
                    <a href="/">
                    NATALIA KOLBIARZ
                    </a>
                </span>
                <nav class="mobile-nav">
                    <svg onclick="showMobileNavigation()" xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 50 50">
                        <path
                            d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z">
                        </path>
                    </svg>
                    <div id="navigation-mobile-container" onclick="hideMobileNavigation()">
                        <div class="navigation-mobile-list">
                            <ul class="navigation-mobile-list_list" onclick="(ev)=>ev.stopPropagation()">
                                <li>
                                    <p class="list-main-element">
                                        projects
                                    </p>
                                </li>
                                  <ul >
                                <li  class="mobile-list-subitem">

                                    <div class="mobile-subitem">
                                        <span class="nav-item-no">
                                            02
                                        </span>
                                        <span class="subitem-text">
                                            <a href="/projects/delivered"  class="subitem-text">
                                            Delivered
                                            </a>
                                        </span>
                                    </div>
                                </li>
                                <li onclick="navigateToSection('project-2')" class="mobile-list-subitem">
                                    <div class="mobile-subitem">
                                        <span class="nav-item-no">
                                            01
                                        </span>
                                        <span class="subitem-text">
                                            <a href="/projects/capitalismplants"  class="subitem-text">
                                            Capitalism Plants
                                        </span>
                                    </div>
                                </li>
                            </ul>
                                <li class="mobile-list-subitem about">
                                    <p class="list-main-element">
                                        <a href="/about">
                                        about
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav class="desktop-nav">
                    <ul>
                        <li class="dropdown-item">
                            <p>
                                projects
                            </p>
                            <ul class="dropdown-list">
                                <li>
                                    <div class="dropdown-list-item">
                                        <span class="nav-item-no">
                                            02 
                                        </span>
                                        <span class="dropdown-text">
                                            <a href="/projects/delivered"  class="subitem-text">
                                            Delivered
                                            </a>
                                            </span>
                                    </div>
                                </li>
                                <li onclick="navigateToSection('project-2')">
                                    <div class="dropdown-list-item">
                                        <span class="nav-item-no">
                                            01
                                        </span>
                                        <span class="dropdown-text">
                                            <a href="/projects/capitalismplants"  class="subitem-text">
                                            Capitalism Plants
                                            </a>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li >
                            <p class="about-nav">
                                    <a href="/about"> about </a>
                            </p>
                        </li>
                    </ul>
                </nav>
            </heading>
        `}connectedCallback(){}};function a(){customElements.define("custom-heading",e)}function o(){let i=document.getElementById("navigation-mobile-container"),t=document.querySelector(".navigation-mobile-list");window.showMobileNavigation=()=>{i&&(i.classList.add("show"),setTimeout(()=>{t&&t.classList.add("show")}))},window.hideMobileNavigation=()=>{t&&(t.classList.remove("show"),setTimeout(()=>{i&&i.classList.remove("show")},100))}}function n(){let i=document.getElementById("arrow-up");if(!i)return;let t=document.querySelector("html");window.addEventListener("scroll",()=>{t&&(t.scrollTop>(t.scrollHeight-t.clientHeight)/4?i.classList.add("active"):i.classList.remove("active"))}),i.addEventListener("click",()=>{window.scrollTo(0,0)})}var s=class extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
            <svg id="arrow-up" version="1.0" xmlns="http://www.w3.org/2000/svg" width="7vw" height="7.1vw"
                viewBox="0 0 356.000000 378.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,378.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M847 2932 l-837 -837 72 -73 73 -72 762 762 763 763 0 -1733 0 -1732
105 0 105 0 0 1732 0 1733 763 -763 762 -762 73 73 72 72 -838 838 -837 837
-100 0 -100 0 -838 -838z" />
                </g>
            </svg>
        `}};function l(){customElements.define("arrow-up",s)}a();l();function c(){o(),n()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c();})();
