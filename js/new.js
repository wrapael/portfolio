/*navbar functionality*/
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight - 15,
                behavior: 'smooth'
            });
        }
    });
});

/*contact me number*/
function showPhoneNumber() {
    alert("My contact number: +63 977 769 2411");
}
