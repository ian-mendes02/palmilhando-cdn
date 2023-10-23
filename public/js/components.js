window.addEventListener("DOMContentLoaded", function () {

    const collapsibles = document.querySelectorAll("[data-component='collapsible']");
    const float_buttons = document.querySelectorAll("[data-component='floating-buttons']");
    const scroll_menu = document.querySelectorAll("[data-component='scroll-menu']");
    const theme_toggle = document.querySelectorAll("[data-component='toggle-theme']");
    const carrousel = document.querySelectorAll("[data-component='carousel']");

    function add_script(s) {
        let new_script = document.createElement("script");
        let src = `../public/js/modules/${s}.js`;
        document.body.appendChild(new_script).setAttribute("src", src);
    };

    function page_contains(m) {return(m.length > 0)};

    if (page_contains(collapsibles)) add_script("collapsibles");
    if (page_contains(float_buttons)) add_script("floating-buttons");
    if (page_contains(scroll_menu)) add_script("scroll-menu");
    if (page_contains(theme_toggle)) add_script("toggle-theme");
    if (page_contains(carrousel)) add_script("carousel");

})



