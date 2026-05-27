// Dynamic Layout Engine for OgirimaObey.com
document.addEventListener("DOMContentLoaded", () => {
    // 1. Load the universal navigation header
    const headerContainer = document.getElementById("global-header");
    if (headerContainer) {
        fetch("components/header.html")
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
            })
            .catch(error => console.error("Error loading header mapping:", error));
    }

    // You can attach dynamic external API calls here later
    // e.g., fetch('https://api.afridam.com/v1/ads/banner')
});
