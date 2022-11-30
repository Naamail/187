const ActivePage = window.location.pathname;
console.log(ActivePage);

function AddIMG() {
    document.getElementById("IMG").src = "../Static/wiliy.jpg";    
}

//print date to log
const d = Date();
console.log(d);


//pull the pathname from window location
const activePage = window.location.pathname;
console.log(window);
console.log(window.location);
console.log(activePage);

/*create an arey of the links in nav, 
compare each to pathname and mark the one that is active
*/ 
const navLinks = document.querySelectorAll('nav a').forEach(link => {    
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
});



console.log(navLinks);







/*
const activePage = window.location.pathname;
console.log(activePage);

const x = document.querySelectorAll("div a");
console.log(x);

const links = document.querySelectorAll('nav a');
console.log(links);
links.forEach(
    link => {
        if (link.href.includes(`${activePage}`)) {
            link.classList.add('active');
        }
    }
);

while (i <10) {
    
    
}

const cars = ['BMW', 'SKODA', 'MAZDA'];
cars.forEach(car =>{
    console.log("I would like to buy a " + car);
});

const plane = ['F-RONI', 'F-15', 'F-16'];
plane.forEach(
    plane =>{
        console.log("I fly with " + plane);
    }
);
*/