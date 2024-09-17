const ulItems = document.querySelector("#items");
const menuBtn = document.querySelector('#menu_toggle');

menuBtn.addEventListener('click', () => {
    ulItems.classList.toggle("active");
});

const navScroll = document.querySelector("#nav");
let lastScrollY = window.scrollY;
const menuToggle = document.querySelector('#menu_toggle')

window.addEventListener("scroll", () => {

    if (lastScrollY < window.scrollY) {
        navScroll.classList.add('navdown');
        menuToggle.classList.add('scrollYBtn');
        ulItems.classList.remove("active");
    } else {
        navScroll.classList.remove('navdown');
        menuToggle.classList.remove('scrollYBtn');
    }

    lastScrollY = window.scrollY

})

const roundimg = document.querySelector(".roundimg");


function randomlyImage() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    roundimg.style.backgroundImage = `url(./image/img${randomNumber}.jpeg)`

}

setInterval(randomlyImage, 1000)



const essence = `My Name is Nazmul Haque.Skilled web designer, with 5+ years of experience.Adept at designing attractive and effective websites according to user needs and current design trends.Proficient in HTML, CSS, JavaScript.`;





let countEssence = 0;
function counted() {
    if (countEssence === 226) {
        clearInterval(counted)
    } else {
        countEssence++;
        const startEssence = essence.slice(0, countEssence);
        document.querySelector('.text').textContent = startEssence;
    }
}

setInterval(counted, 50);


const count1 = document.querySelector('.count1');
const count2 = document.querySelector('.count2');
const count3 = document.querySelector('.count3');
const count4 = document.querySelector('.count4');



let countPro1 = 0;
let countPro2 = 0;
let countPro3 = 0;
let countPro4 = 0;

setInterval(() => { countPro1 === 275 ? clearInterval(this) : countPro1++; count1.textContent = countPro1 + "K" }, 10);
setInterval(() => { countPro2 === 350 ? clearInterval(this) : countPro2++; count2.textContent = countPro2 + "K" }, 15);
setInterval(() => { countPro3 === 750 ? clearInterval(this) : countPro3++; count3.textContent = countPro3 + "K" }, 10);
setInterval(() => { countPro4 === 999 ? clearInterval(this) : countPro4++; count4.textContent = countPro4 + "K" }, 10);




const proggresMain = document.querySelector('.proggresMain');
const probar = document.querySelectorAll('.probar');
const proggresbarHtml = document.querySelector('.proggresbarHtml');
const proggresbarCss = document.querySelector('.proggresbarCss');
const proggresbarBoot = document.querySelector('.proggresbarBoot');
const proggresbarjava = document.querySelector('.proggresbarjava');


function showProgress() {
    proggresbarHtml.style.animation = `proHtmlAni 1s linear`;
    proggresbarCss.style.animation = `procssAni 1s linear`;
    proggresbarBoot.style.animation = `proBootAni 1s linear`;
    proggresbarjava.style.animation = `projsAni 1s linear`;

}


window.addEventListener('scroll', () => {
    const sectionPos = proggresMain.getBoundingClientRect().top + 200;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        showProgress();
    }
})


var mixer = mixitup('.portfolio-gallery');


const linkBlock=document.querySelector('.linkBlock');
const linkContainer=document.querySelector(".linkPro")
const closeBtn=document.querySelector(".closeBtn");
const imgal=document.querySelector('.imgal');
const viewChange=document.querySelector('.viewChange');
const technologiesChange=document.querySelector('.technologiesChange');
const dataChange=document.querySelector('.dataChange');
const createdPro=document.querySelector('.createdPro');

const alItem1 = document.querySelector('.alItem1');
const alItem2 = document.querySelector('.alItem2');
const alItem3 = document.querySelector('.alItem3');
const alItem4 = document.querySelector('.alItem4');
const alItem5 = document.querySelector('.alItem5');
const alItem6 = document.querySelector('.alItem6');
const alItem7 = document.querySelector('.alItem7');

function blockli(){
    linkBlock.style.display='block';
    linkBlock.style.opacity='1';
}

closeBtn.addEventListener("click",()=>linkBlock.style.display='none');

alItem1.addEventListener('click', () => {
    blockli();
    imgal.src='./image/pimg1.png';
    createdPro.innerHTML=`BOOTSTRAP PROJECT`;
    dataChange.innerHTML=`Created- 04 Dec 2022`;
    viewChange.href='http://nsshop.liveblog365.com/?i=1';
    viewChange.innerHTML=`http://nsshop.liveblog365.com/?i=1`;
    technologiesChange.innerHTML=`Technalogies- Html Bootstrap`;
});

alItem2.addEventListener('click', () => {
    blockli();

    imgal.src='./image/pim2.png';
    createdPro.innerHTML=`CSS PROJECT`;
    dataChange.innerHTML=`Created- 16 Dec 2022`;
    viewChange.href='./Projects/NS PROTFOLIO/index.html';
    viewChange.innerHTML=`www.NSPROTFOLIO.com`;
    technologiesChange.innerHTML=`Technalogies- Html Css`;

});

alItem3.addEventListener('click', () => {
    blockli();

    imgal.src='./image/pimg3.png';
    createdPro.innerHTML=`BOOTSTRAP PROJECT`;
    dataChange.innerHTML=`Created- 22 Dec 2022`;
    viewChange.href='./Projects/Food/index.html';
    viewChange.innerHTML=`www.foodshop.com`;
    technologiesChange.innerHTML=`Technalogies- Html Css Bootstrap`;
});

alItem4.addEventListener('click', () => {
    blockli();
    imgal.src='./image/pimg4.png';
    createdPro.innerHTML=`BOOTSTRAP PROJECT`;
    dataChange.innerHTML=`Created- 26 Dec 2022`;
    viewChange.href='./Projects/Bproject4/index.html';
    viewChange.innerHTML=`www.mexant.com`;
    technologiesChange.innerHTML=`Technalogies- Html Css Bootstrap`;
});

alItem5.addEventListener('click', () => {
    blockli();

    imgal.src='./image/pimg5.png';
    createdPro.innerHTML=`CSS PROJECT`;
    dataChange.innerHTML=`Created- 31 Dec 2022`;
    viewChange.href='./Projects/PROTFOLIO 3/index.html';
    viewChange.innerHTML=`www.nazmul.com`;
    technologiesChange.innerHTML=`Technalogies- Html Css js`;
});


alItem6.addEventListener('click', () => {
    blockli();

    imgal.src='./image/pimg6.png';
    createdPro.innerHTML=`CSS PROJECT`;
    dataChange.innerHTML=`Created- 04 Jan 2023`;
    viewChange.href='./Projects/PROTFOLIO 1/index.html';
    viewChange.innerHTML=`www.protfolio.com`;
    technologiesChange.innerHTML=`Technalogies- Html Css`;
});

alItem7.addEventListener('click', () => {
    blockli();
    imgal.src='./image/pimg7.png';
    createdPro.innerHTML=`JS PROJECT`;
    dataChange.innerHTML=`Created- 10 Jan 2023`;
    viewChange.href='./Projects/color game/index.html';
    viewChange.innerHTML=`www.jscolorgame.com`;
    technologiesChange.innerHTML=`Technalogies- Html Css js`;
});



// servise 

const serviesAll = document.querySelector('.serviesAll');
let isDown = false;
let startX;
let scrollLeft;



serviesAll.addEventListener('mousedown', (e) => {
    isDown = true;
    serviesAll.classList.add('active');
    startX = e.pageX - serviesAll.offsetLeft;
    scrollLeft = serviesAll.scrollLeft;
});


serviesAll.addEventListener('mouseleave', () => {
    isDown = false;
    serviesAll.classList.remove('active');

});

serviesAll.addEventListener('mouseup', () => {
    isDown = false;
    serviesAll.classList.remove('active');
});


serviesAll.addEventListener('mousemove', (e) => {
    if (!isDown) return; //stop the if from running
    e.preventDefault();
    const x = e.pageX - serviesAll.offsetLeft;
    // console.log({x,startX});
    const walk = (x - startX) * 3;
    // console.log(walk);
    serviesAll.scrollLeft = scrollLeft - walk;
});




// Client section start

const sliderC=document.querySelectorAll('.sliderC')
var countcl=0;
sliderC.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)


const slideImg=()=>{
    sliderC.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${countcl*100}%)`
        }
    )
}



const goNext=()=>{

if(countcl===4){
}else{
countcl++;
slideImg();
}
}
const goPrev=()=>{
if(countcl===0){
    // this.style.display='none'
}else{

    countcl--;
    slideImg();
}
}
// Client section end





/* Blog section start */



const blog=document.querySelector(".blog");
const serviesAllImg=document.querySelectorAll(".serviesAllImg");
// for (let i=0;i<serviesAllImg.length;i++){
//     console.log(serviesAllImg[i]);
// }

// function sliderStarblog({
    
// })
// animation: firstblog 8s infinite;
// blog.addEventListener('mouseover',sliderStarblog)


/* Blog section end */
