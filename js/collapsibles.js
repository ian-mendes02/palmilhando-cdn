document.body.classList.add('blue-grad');


const collapsibles = document.querySelectorAll('[data-collapsible="toggle"]');
const collapsibleContent = document.querySelectorAll('[data-collapsible="content"]');
const wrapper = document.querySelector('[data-collapsible="wrapper"]');

function toggleExpand(content) {
    if (content.parentElement.style.maxHeight) {
        content.parentElement.style.maxHeight = null;
    } else {
        content.parentElement.style.maxHeight = (content.scrollHeight + content.scrollHeight * 25 / 100) + 'px'
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

/*---------------------------------------------------------------------------------------------------------*/

const scrollButtons = document.querySelectorAll('#scroll-buttons button');
const maskImage0 = 'linear-gradient(to right, black 95%, rgba(0, 0, 0, 0.5), transparent)';
const maskImage50 = 'radial-gradient(circle, black 90%, rgba(0, 0, 0, 0.5), transparent)';
const maskImage100 = 'linear-gradient(to left, black 95%, rgba(0, 0, 0, 0.5), transparent)';

let current = 0;

disable(scrollButtons[0]);
wrapper.style.webkitMaskImage = maskImage0

function disable(button) {
    button.setAttribute('disabled', 'true');
    button.style.cursor = 'default';
    button.style.opacity = '0.3'
};

function enable(button) {
    button.removeAttribute('disabled');
    button.style.cursor = 'pointer';
    button.style.opacity = '1'
};

for (let i = 0; i < scrollButtons.length; i++) {
    scrollButtons[i].addEventListener('click', () => {
        scrollButtons.forEach(button => enable(button));
        collapseNeighbors();
        i == 0 ? --current : current++;
        if (current <= 0) {
            current = 0;
            disable(scrollButtons[0])
        };
        if (current >= collapsibles.length - 7) {
            current = collapsibles.length - 7;
            disable(scrollButtons[1])
            setTimeout(function() {
                wrapper.style.webkitMaskImage = maskImage100;
            }, 200)
        } else if (current > 0 && current < collapsibles.length - 7) {
            wrapper.style.webkitMaskImage = maskImage50
        } else {
            setTimeout(function() {
                wrapper.style.webkitMaskImage = maskImage0;
            }, 200)
        }
        wrapper.scrollLeft = collapsibles[0].scrollWidth * (current * 2)
    })
};