// Function to slabtext the H1 headings
function slabTextHeadlines() {
    $("h1").slabText({
        // Don't slabtext the headers if the viewport is under 380px
        "viewportBreakpoint":20
    });
};