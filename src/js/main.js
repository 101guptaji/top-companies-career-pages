// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// Description: Open external links in a new tab and PDF links in a new tab

// Open external links in a new window
function external_new_window() {
    for(let c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
        let b = c[a];
        if(b.getAttribute("href") && b.host !== location.host) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
}

function apply_rules() {
    external_new_window();
}

if (typeof document$ !== "undefined") {
    // Compatibility with mkdocs-material's instant loading feature
    document$.subscribe(function() {
        apply_rules();
    });
} else {
    // For browsers without mkdocs-material's instant loading feature
    document.addEventListener("DOMContentLoaded", function() {
        apply_rules();
    });
}
