const links = document.querySelectorAll('#mainmanu ul li a');
links.forEach(link => 
    {link.addEventListener('click',function(event){
    links.foreach(link =>{
        link.parentElement.classList.remove('active');
    });
    this.parentElement.classList.add('active');
});
    
});