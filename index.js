const links = document.getElementsByClassName('nav-link');


[...links].forEach((ele)=>{
    ele.addEventListener('mouseover', function(eve){
        const tar = eve.target.parentNode.children[1].style; 
        tar.animation = 'slide 0.3s ease-in';
        tar.width = "100%";
    });
    ele.addEventListener('mouseout', function(eve){
        const tar = eve.target.parentNode.children[1].style; 
        tar.animation='';
        tar.width = '0';
    })
})

