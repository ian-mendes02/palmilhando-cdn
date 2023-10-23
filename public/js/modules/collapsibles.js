let collapsibleTitles = document.querySelectorAll('[data-collapsible="title"]');
let collapsibles = document.querySelectorAll('[data-component="collapsible"]');
let collapsibleContent = document.querySelectorAll('[data-collapsible="content"]');

for (let i = 0; i < collapsibleTitles.length; i++) {
    let title = collapsibleTitles[i];
    let caret = document.createElement("div");
    title.appendChild(caret);
    caret.setAttribute("data-collapsible", "style");
}

function toggleExpand(content) {
    if (content.parentElement.style.maxHeight) {
        content.parentElement.style.maxHeight = null;
    } else {
        content.parentElement.style.maxHeight = (content.scrollHeight * 1.5) + 'px';
    }
}

function collapseNeighbors() {
    for (let content of collapsibleContent) {
        if (content.parentElement.classList.contains('active')) {
            content.parentElement.classList.remove('active');
            toggleExpand(content);
        }
    }
}

for (let collapsible of collapsibles) {
    collapsible.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            collapseNeighbors();
        }
        this.classList.toggle('active');
        toggleExpand(this.lastElementChild);
    });
}