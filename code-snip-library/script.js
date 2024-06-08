document.addEventListener("DOMContentLoaded", () => {
    const snippets = [
        {
            title: "HTML Template",
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple HTML Template</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <main>
        <p>This is a simple HTML template.</p>
    </main>
    <footer>
        <p>© 2024 My Website</p>
    </footer>
</body>
</html>`,
            css: '',
            js: ''
        },
        {
            title: "JavaScript Alert",
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Alert</title>
</head>
<body>
    <script>
        alert('Hello, World!');
    </script>
</body>
</html>`,
            css: '',
            js: ''
        },
        {
            title: "CSS Styled Button",
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Button</title>
</head>
<body>
    <button class="styled-button">Click Me!</button>
</body>
</html>`,
            css: `.styled-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.styled-button:hover {
    background-color: #45a049;
}`,
            js: ''
        },
        {
            title: "JavaScript Console Log",
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Console Log</title>
</head>
<body>
    <script>
        console.log('Hello, Console!');
    </script>
</body>
</html>`,
            css: '',
            js: ''
        }
    ];

    const snippetContainer = document.getElementById("snippet-container");
    const resultFrame = document.getElementById("result-frame");

    snippets.forEach(snippet => {
        const snippetDiv = document.createElement("div");
        snippetDiv.className = "bg-white p-6 rounded-lg shadow-md";
        
        const title = document.createElement("h2");
        title.className = "text-xl font-bold mb-4";
        title.textContent = snippet.title;
        snippetDiv.appendChild(title);
        
        const preHtml = document.createElement("pre");
        preHtml.className = "bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4";
        preHtml.textContent = snippet.html;
        snippetDiv.appendChild(preHtml);
        
        if (snippet.css) {
            const preCss = document.createElement("pre");
            preCss.className = "bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4";
            preCss.textContent = snippet.css;
            snippetDiv.appendChild(preCss);
        }
        
        if (snippet.js) {
            const preJs = document.createElement("pre");
            preJs.className = "bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4";
            preJs.textContent = snippet.js;
            snippetDiv.appendChild(preJs);
        }
        
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "flex space-x-4";

        const copyButton = document.createElement("button");
        copyButton.className = "copy-button bg-green-500 text-white px-4 py-2 rounded-lg";
        copyButton.textContent = "Copy";
        copyButton.addEventListener("click", () => {
            const fullCode = `${snippet.html}
<style>${snippet.css}</style>
<script>${snippet.js}<\/script>`;
            navigator.clipboard.writeText(fullCode).then(() => {
                alert("Code copied to clipboard!");
            });
        });
        buttonContainer.appendChild(copyButton);
        
        const runButton = document.createElement("button");
        runButton.className = "run-button bg-green-500 text-white px-4 py-2 rounded-lg";
        runButton.textContent = "Run";
        runButton.addEventListener("click", () => {
            const fullCode = `
                ${snippet.html}
                <style>${snippet.css}</style>
                <script>${snippet.js}<\/script>
            `;
            resultFrame.srcdoc = fullCode;
        });
        buttonContainer.appendChild(runButton);

        snippetDiv.appendChild(buttonContainer);
        snippetContainer.appendChild(snippetDiv);
    });
});
