(() => {
    "use strict";

    const PAGES = [
        {
            id: "login",
            label: "Login",
            src: "chatty-login.html",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
        },
        {
            id: "chat",
            label: "Chat",
            src: "chatty-chat.html",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
        },
        {
            id: "components",
            label: "Components",
            src: "chatty-components.html",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
        },
        {
            id: "themes",
            label: "Themes",
            src: "chatty-themes.html",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.8-1.7 1.7-1.7H16c3.3 0 6-2.7 6-6 0-5.2-4.5-9.4-10-9.4z"/></svg>',
        },
    ];

    const LOGO_SVG = `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="logo-grad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8B5CF6"/><stop offset="1" stop-color="#7C3AED"/>
        </linearGradient></defs>
        <rect width="80" height="80" rx="20" fill="url(#logo-grad)"/>
        <path d="M24 26c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v16c0 3.3-2.7 6-6 6H38l-8 8v-8h-0c-3.3 0-6-2.7-6-6V26z" fill="white" fill-opacity="0.95"/>
        <circle cx="34" cy="34" r="3" fill="#8B5CF6"/>
        <circle cx="40" cy="34" r="3" fill="#8B5CF6" fill-opacity="0.6"/>
        <circle cx="46" cy="34" r="3" fill="#8B5CF6" fill-opacity="0.3"/>
    </svg>`;

    let currentPage = null;

    function buildNav() {
        const nav = document.getElementById("demo-nav");

        // Brand
        const brand = document.createElement("div");
        brand.className = "demo-brand";
        brand.innerHTML = `${LOGO_SVG}<span class="demo-brand-name">chatty</span>`;
        nav.appendChild(brand);

        // Badge
        const badge = document.createElement("span");
        badge.className = "demo-brand-badge";
        badge.textContent = "Demo";
        nav.appendChild(badge);

        // Separator
        const sep = document.createElement("div");
        sep.className = "demo-sep";
        nav.appendChild(sep);

        // Tabs
        const tabs = document.createElement("div");
        tabs.className = "demo-tabs";
        tabs.setAttribute("role", "tablist");

        PAGES.forEach((page) => {
            const btn = document.createElement("button");
            btn.className = "demo-tab";
            btn.setAttribute("role", "tab");
            btn.setAttribute("aria-selected", "false");
            btn.dataset.page = page.id;
            btn.innerHTML = `${page.icon}<span>${page.label}</span>`;
            btn.addEventListener("click", () => navigateTo(page.id));
            tabs.appendChild(btn);
        });

        nav.appendChild(tabs);

        // Spacer
        const spacer = document.createElement("div");
        spacer.className = "demo-spacer";
        nav.appendChild(spacer);

        // Hint
        const hint = document.createElement("span");
        hint.className = "demo-hint";
        hint.textContent = "Internal design preview";
        nav.appendChild(hint);

        // Keyboard nav
        tabs.addEventListener("keydown", (e) => {
            const tabBtns = Array.from(tabs.querySelectorAll(".demo-tab"));
            const idx = tabBtns.indexOf(document.activeElement);
            if (idx === -1) return;

            let next = -1;
            if (e.key === "ArrowRight") next = (idx + 1) % tabBtns.length;
            if (e.key === "ArrowLeft") next = (idx - 1 + tabBtns.length) % tabBtns.length;

            if (next !== -1) {
                e.preventDefault();
                tabBtns[next].focus();
                tabBtns[next].click();
            }
        });
    }

    function navigateTo(pageId) {
        const page = PAGES.find((p) => p.id === pageId);
        if (!page || page.id === currentPage) return;

        // Update tabs
        document.querySelectorAll(".demo-tab").forEach((tab) => {
            tab.setAttribute("aria-selected", tab.dataset.page === pageId ? "true" : "false");
        });

        // Transition
        const container = document.getElementById("demo-frame-container");
        container.classList.add("transitioning");

        const frame = document.getElementById("demo-frame");
        frame.onload = () => {
            container.classList.remove("transitioning");
        };
        frame.src = page.src;

        currentPage = pageId;

        // Update hash without triggering hashchange
        try {
            history.replaceState(null, "", `#${pageId}`);
        } catch (_) {
            window.location.hash = pageId;
        }
    }

    function getInitialPage() {
        const hash = window.location.hash.slice(1);
        const match = PAGES.find((p) => p.id === hash);
        return match ? match.id : "login";
    }

    // Init
    function init() {
        buildNav();
        navigateTo(getInitialPage());
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    // Back/forward
    window.addEventListener("hashchange", () => {
        const hash = window.location.hash.slice(1);
        const match = PAGES.find((p) => p.id === hash);
        if (match && match.id !== currentPage) {
            navigateTo(match.id);
        }
    });
})();
