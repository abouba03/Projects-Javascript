const names = document.querySelector(".user")
const btn = document.querySelector(".btn")
const img = document.querySelector(".img-user")


data = [
    {
        name: "Abouba",
        img: "abouba.jpg"
    },
    {
        name: "Inacio",
        img: "Inacio.jpg"

    },
    {
        name:"Petelson",
        img: "pete.jpg"
    },
    {
        name:"Eunilcia",
        img: "garcia.jpg"
    },
    {
        name:"Queta",
        img: "Keta.jpg"
    }   
]

const aleatoire = () => {
    return Math.floor(Math.random() * data.length);
    
}

for (let i=0; i<=10; i++){
    btn.addEventListener("click",  function(){
        currentIndex = aleatoire();
        let name = data[currentIndex].name;
        let image = data[currentIndex].img
        names.textContent= name;
        img.src = `./src/${image}`;
    }); 
    
}
      

