const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', (e) => {
        removePreviousActive();
        panel.classList.add('active');
    });
});

function removePreviousActive() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}