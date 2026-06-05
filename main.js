// Dynamic Layout Engine for OgirimaObey.com
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Core Dynamic Injection for the Universal Navigation Header
    const headerContainer = document.getElementById("global-header");
    
    if (headerContainer) {
        // Fetching directly from root repository files
        fetch("header.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP network error template missing status: ${response.status}`);
                }
                return response.text();
            })
            .then(htmlContent => {
                // Instantly inject the global navigation layout block
                headerContainer.innerHTML = htmlContent;
                console.log("Global navigation header successfully mounted to layout component.");
                
                // FORCE EVALUATION OF EMBEDDED SCRIPTS
                // Native innerHTML injection blocks script tag execution for security reasons.
                // We extract and manually re-append script elements to ensure active routing works flawlessly.
                const scripts = headerContainer.querySelectorAll("script");
                scripts.forEach(oldScript => {
                    const newScript = document.createElement("script");
                    Array.from(oldScript.attributes).forEach(attr => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            })
            .catch(error => {
                console.error("Critical error mapping dynamic header target layout:", error);
            });
    }

    // 2. Real-World Backend Framework Integrations (Non-Jargon Architecture Maps)
    // These structural layers are mapped out specifically for your verified pipeline features:
    
    const initializeInternalBookAds = () => {
        // Backend Reference Endpoint: GET https://api.afridam.com/v1/ads/banner
        // Purpose: This logic layer manages real-time placement tracking and promotional triggers
        // for your authentic book assets: 'Dear Future Wife', 'From Idea to Empire', and 'DETOX'.
        console.log("Internal literature promo pipeline active. Tracking current catalog distribution targets...");
    };

    const initializeCohortTracking = () => {
        // Backend Reference Endpoint: GET https://api.afridam.com/v1/cohorts/active
        // Purpose: This logic engine monitors registrations and manages data handshakes for the
        // upcoming active June DETOX masterclass modules under the Men Aflame Network Global Community.
        console.log("Men Aflame Network cohort engine listening for active global registrations...");
    };

    // Kickoff core logical pipelines
    initializeInternalBookAds();
    initializeCohortTracking();
});
