gsap.from(".navbar a"  , {
    duration : 1 , 
    opacity : 0 , 
    y : -20 , 
    stagger : 0.2 , 
    delay : 1 
})


gsap.from(".follow a"  , {
    duration : 1 , 
    opacity : 0 , 
    x : -20 , 
    stagger : 0.2 , 
    delay : 1 
})

   
gsap.utils.toArray('.follow a ').forEach((anchor, index) => {
    gsap.to(anchor, {
        yoyo: true,
        repeat: -1,
        y: 50,
        duration: 2,
        ease: 'sine.inOut',
        delay: index * 0.2, // Delay each animation by 0.2 seconds
    });
});


let cursor1 = document.querySelector(".cursor1");
let cursor2 = document.querySelector(".cursor2");

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + "px";
    cursor1.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";
}

const menuBars = document.getElementById("menu-bars");
const header = document.querySelector("header");

menuBars.addEventListener("click", () => {
    header.classList.toggle("open-header");
});
// Add this JavaScript code at the end of your existing script.js file

// Smooth scrolling for navigation links

const toggleTextElement = document.getElementById("toggleText");
const texts = ["Samay Jain" , "Full Stack Developer" ,"UI/UX Designer"];
let textIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < texts[textIndex].length){
        toggleTextElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type , 100);
    }
    else{
        setTimeout(erase  , 1000);
    }
}
function erase(){
    if(charIndex > 0){
        toggleTextElement.innerHTML = texts[textIndex].substring(0 , charIndex-1);
        charIndex--;
        setTimeout(erase, 50);
    }
    else{
        textIndex =(textIndex + 1) % texts.length;
        setTimeout(type  , 500);
    }
}
type()
erase()
gsap.from('.typing-animation', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 1.5,
});
document.querySelectorAll("a").forEach(links => {
    links.onmouseenter =() => {
        cursor1.classList.add("active");
        cursor2.classList.add("active");
    }
    links.onmouseleave = () => {
        cursor1.classList.remove("active");
        cursor2.classList.remove("active");
    }
})

const image = document.querySelector(".image img");
gsap.registerPlugin(ScrollTrigger);

gsap.to(".image img" , {
   opacity : 0,
    scale : 0.8 , 
    duration : 1  , 
    ScrollTrigger : {
        trigger : ".image" , 
        start : "top 10%" ,
        end : "buttom 10%" , 
        scrub : true
    }
});
gsap.from('.image img', {
    y: -100, // Initial bounce position
    opacity: 0,
    duration: 1.5,
    ease: 'bounce.out', // Bounce easing effect
    delay: 0.5,
});
gsap.from('.hi', {
    scale : 0.2 ,  // Initial bounce position
    opacity: 0,
    duration: 1,
    rotation : -30 ,  // Bounce easing effect
    delay: 0.5,
});


gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.box').forEach(box => {
    gsap.from(box , {
        opacity : 0 , 
        y : 70 , 
        scrollTrigger:{
            trigger : box,
            start : 'top 68%' , 
            tooggleActions : 'play none none reverse' , 
        }
    })
})
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.progress').forEach(progress => {
    gsap.from(progress , {
        opacity : 0 , 
        y : 50 , 
        scrollTrigger:{
            trigger : progress,
            start : 'top 68%' , 
            tooggleActions : 'play none none reverse' , 
        }
    })
})


const iconDivs = document.querySelectorAll('.icons');

iconDivs.forEach((iconDiv , index) => {
    gsap.from(iconDiv , {
        opacity : 0 , 
        y : 100 , 
        duration : 1 , 
        ease : "back.out(1.7)" , 
        scrollTrigger : {
            trigger : iconDiv , 
            start : 'top 86%' ,
            tooggleActions : "play none none reverse" , 
            markers : false
        }
    })
})

iconDivs.forEach(iconDiv  => {
    const icon = iconDiv.querySelector("i");
    gsap.fromTo(icon , {opacity : 0 , y : -20 } , {opacity : 1 , y : 0 , duration : 1 , delay : 0.5 , ease : 'power2.out'});
})
gsap.to(".icons i" , {
    rotation : 360 , 
    scale : 1.2 , 
    repeat : -1 , 
    duration : 3 , 
    ease : "power1.inOut" , 
    transformOrigin : "center center"
})
gsap.from('footer', {
    scale : 0.2 ,  // Initial bounce position
    opacity: 0,
    duration: 1,
    rotation : -50 ,  // Bounce easing effect
    delay: 0.5,
});

gsap.utils.toArray(".exp-tra").forEach(box => {
    box.addEventListener('mouseenter' , () => {
        gsap.to(box , {scale : 1.05 , duration : 0.3})
    });
    box.addEventListener('mouseleave' , () => {
        gsap.to(box , {scale : 1 , duration : 0.3})
    })
});