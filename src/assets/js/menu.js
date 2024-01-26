export function menu(){
    const headerToggle = document.getElementById("headerToggle");   //변수지정 id
    const headerNav = document.querySelector(".header__nav");   //변수지정 class

    if (headerToggle) { //언제나무조건항상실행되는게아니라 headerToggle이 있을때만 실행해라
        headerToggle.addEventListener("click", () => {  //click하면
        headerNav.classList.toggle("show");
        //console.log(headerToggle.getAttribute("aria-expanded"))   //속성값 가져오기

        
        headerToggle.getAttribute("aria-expanded") === "true"   //ifelse문
        ? headerToggle.setAttribute("aria-expanded", "false")   //true가 맞으면?
        : headerToggle.setAttribute("aria-expanded", "true");   //true가 틀리면:


        });
    }

}