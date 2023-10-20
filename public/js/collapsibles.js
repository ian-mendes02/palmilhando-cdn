const collapsibles = document.querySelectorAll('[data-collapsible="body"]');
const collapsibleContent = document.querySelectorAll('[data-collapsible="content"]');
const collapsibleTitles = document.querySelectorAll('[data-collapsible="title"]');

function toggleExpand(content) {
    if (content.parentElement.style.maxHeight) {
        content.parentElement.style.maxHeight = null;
    } else {
        content.parentElement.style.maxHeight = (content.scrollHeight * 1.5) + 'px'
    }
}

function collapseNeighbors() {
    for (const content of collapsibleContent) {
        if (content.parentElement.classList.contains('active')) {
            content.parentElement.classList.remove('active');
            toggleExpand(content);
        }
    }
}

for (const collapsible of collapsibles)
    collapsible.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            collapseNeighbors();
        }
        this.classList.toggle('active');
        toggleExpand(this.lastElementChild)
    });

for (let i = 0; i < collapsibleTitles.length; i++) {
    let title = collapsibleTitles[i];
    let caret = document.createElement("div");
    title.appendChild(caret);
    caret.setAttribute("data-collapsible", "style")
}