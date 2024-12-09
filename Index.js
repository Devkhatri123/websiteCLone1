const SliderSection = document.getElementsByClassName("SliderSection")[0];
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");
const Navigationbtns = document.querySelectorAll(".btn");
const arrows = document.querySelectorAll(".arrow");
const stickyNavbarTop = document.getElementById("stickyNavbarTop");
const headerInner = document.getElementById("headerInner");
const home_benefit_Section_Sliders = document.querySelectorAll(".home_benefit_Section_Slider");
const stickyNavbarTopLeft = document.getElementById("stickyNavbarTopLeft");
const stickyNavbarTopLeftHeading = document.getElementById("stickyNavbarTopLeftHeading");
const barIcon = document.getElementsByClassName("barIcon")[0];
const logo = document.getElementById("logo");
const smallDeviceInput = document.getElementsByClassName("bottom")[0];
const imgs =["./2024season-sale_banner-home.png","./ai-servers-banner-pc.png","./Mellanox_Products_banner3.jpg"];
let timeOut;
let idx = 0;
function sectionImage(){
     timeOut = setInterval(()=>{
        idx++;
        if(idx == imgs.length){
           idx = 0
        }
        SliderSection.style.backgroundImage = `url(${imgs[idx]})`;
        if(idx == 0){
            slider1.style.display = "block";
            slider2.style.display = "none";
            slider3.style.display = "none";
            Navigationbtns[0].style.background = "#fff";
            Navigationbtns[1].style.background = "#aaa";
            Navigationbtns[2].style.background = "#aaa";
        }else if(idx == 1){
            slider1.style.display = "none"
            slider2.style.display = "block"
            slider3.style.display = "none"
            Navigationbtns[0].style.background = "#aaa";
            Navigationbtns[1].style.background = "#fff";
            Navigationbtns[2].style.background = "#aaa";
        }else{
            slider1.style.display = "none"
            slider2.style.display = "none"
            slider3.style.display = "block"
            Navigationbtns[0].style.background = "#aaa";
            Navigationbtns[1].style.background = "#aaa";
            Navigationbtns[2].style.background = "#fff";
        }
    },3000);
}
sectionImage(this);
Navigationbtns.forEach((Navigationbtn)=>{
    Navigationbtn.addEventListener("click",(e)=>{
        clearInterval(timeOut);
        if(e.target.dataset.btnid == 1){
            SliderSection.style.backgroundImage = `url(${imgs[0]})`;
            slider1.style.display = "block";
            slider2.style.display = "none";
            slider3.style.display = "none";
            Navigationbtns[0].style.background = "#fff";
            Navigationbtns[1].style.background = "#aaa";
            Navigationbtns[2].style.background = "#aaa";
        }else if (e.target.dataset.btnid == 2){
            SliderSection.style.backgroundImage = `url(${imgs[1]})`;
            slider1.style.display = "none"
            slider2.style.display = "block"
            slider3.style.display = "none";
            Navigationbtns[0].style.background = "#aaa";
            Navigationbtns[1].style.background = "#fff";
            Navigationbtns[2].style.background = "#aaa";
        }else{
            SliderSection.style.backgroundImage = `url(${imgs[2]})`;
            slider1.style.display = "none"
            slider2.style.display = "none"
            slider3.style.display = "block"
            Navigationbtns[0].style.background = "#aaa";
            Navigationbtns[1].style.background = "#aaa";
            Navigationbtns[2].style.background = "#fff";
       }
    })
});
arrows.forEach((arrow)=>{
    arrow.addEventListener("click",(e)=>{
        clearInterval(timeOut);
       if(e.target.dataset.direction == "left"){
        idx--;
        if(idx < 0) idx = imgs.length - 1;
       }
       else{
        idx++;
        if(idx == imgs.length)
        idx = 0;
       }
       if(idx == 0){
        SliderSection.style.backgroundImage = `url(${imgs[idx]})`;
        slider1.style.display = "block";
        slider2.style.display = "none";
        slider3.style.display = "none";
        Navigationbtns[idx].style.background = "#fff";
        Navigationbtns[1].style.background = "#aaa";
        Navigationbtns[2].style.background = "#aaa";
       }else if (idx == 1){
        SliderSection.style.backgroundImage = `url(${imgs[idx]})`;
        slider1.style.display = "none"
        slider2.style.display = "block"
        slider3.style.display = "none";
        Navigationbtns[0].style.background = "#aaa";
        Navigationbtns[1].style.background = "#fff";
        Navigationbtns[2].style.background = "#aaa";
       }else{
        SliderSection.style.backgroundImage = `url(${imgs[idx]})`;
        slider1.style.display = "none"
        slider2.style.display = "none"
        slider3.style.display = "block"
        Navigationbtns[0].style.background = "#aaa";
        Navigationbtns[1].style.background = "#aaa";
        Navigationbtns[2].style.background = "#fff";
       }
    })
});
function homeBenefitSectionSlider() {
    const sliderContainer = document.querySelector('.home_benefit_Sections');
    const slides = document.querySelectorAll('.home_benefit_Section_Slider');
    const slideCount = slides.length;
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
  
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slideCount - 1].cloneNode(true);
  
    sliderContainer.appendChild(firstClone);
    sliderContainer.prepend(lastClone);
    function moveToNextSlide() {
      currentIndex++;
    if (currentIndex >= slideCount) {
        const firstClone = slides[1].cloneNode(true);
        firstClone.style.marginLeft = "0px";
        const secondClone = slides[0].cloneNode(true);
        const lastClone = slides[2].cloneNode(true);
      
        sliderContainer.appendChild(firstClone);
        sliderContainer.appendChild(secondClone);
        sliderContainer.appendChild(lastClone)
      }
      
      sliderContainer.style.transition = 'transform 0.5s ease-in-out';
      if(currentIndex < 1) sliderContainer.style.transform = `translateX(${(-slideWidth * (currentIndex))}px)`;
     else sliderContainer.style.transform = `translateX(${(-slideWidth * (currentIndex)-430)}px)`;
    }
    setInterval(moveToNextSlide, 7000);
  }  

  homeBenefitSectionSlider();
window.addEventListener("scroll",()=>{
  const currentScroll = Math.round(window.scrollY);
  const result = stickyNavbarTop.classList.add("fixedNav");
  const fixedNav = document.getElementsByClassName("fixedNav")[0];
  if(currentScroll > 0){
    headerInner.style.display = "none";
    fixedNav.style.top = "0";
   if(window.innerWidth > 768){
    logo.style.display = "none";
    stickyNavbarTopLeftHeading.style.display = "block";
    barIcon.style.display = "block";
   }else{
    logo.style.display = "block";
    barIcon.style.display = "none";
    stickyNavbarTopLeftHeading.style.display = "none";
    smallDeviceInput.style.display = "none";
   }
  }
  else if(currentScroll <= window.scrollY){
    headerInner.style.display = "flex";
    const fixedNav = document.getElementsByClassName("fixedNav")[0];
    fixedNav.style.top = "40px";
    stickyNavbarTop.style.display = "flex";
    stickyNavbarTop.classList.remove("fixedNav");
    barIcon.style.display = "none";
    stickyNavbarTopLeftHeading.style.display = "none";
    if(window.innerWidth > 768){
        logo.style.display = "block";
        stickyNavbarTopLeftHeading.style.display = "none";
        barIcon.style.display = "";
    }else{
        smallDeviceInput.style.display = "flex";
    }
  }
})