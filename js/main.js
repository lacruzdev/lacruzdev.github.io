// Function to fetch the Markdown file and render it as HTML
async function renderMarkdown() {
    try {
        // Fetch the Markdown file (e.g., 'example.md')
        const response = await fetch('conventions.md');
        const markdown = await response.text();

        // Convert the Markdown to HTML
        const htmlContent =  marked.parse(markdown);

        // Set the HTML content to the content div
        document.getElementById('content').innerHTML = htmlContent;
    } catch (error) {
        console.error('Error fetching or rendering Markdown file:', error);
    }
}

// Call the function to render the Markdown on page load
renderMarkdown();