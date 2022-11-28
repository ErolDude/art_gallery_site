const content = document.querySelectorAll('.hover-image');

function showContent(e) {
    for (var i = 0; i < content.length; i++) {
        x = e.pageX;
        y = e.pageY;
        content[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
};
document.addEventListener('mousemove', showContent);