function toggleSection(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

window.onload = function() {
    const tocList = document.getElementById('toc-list');
    const sections = document.querySelectorAll('.content > section');

    sections.forEach((section) => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = `#${section.id}`; 
        anchor.innerText = section.querySelector('.toggle-button').innerText;
        li.appendChild(anchor);
        tocList.appendChild(li);
    });

    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });
};
