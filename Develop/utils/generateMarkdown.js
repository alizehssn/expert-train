// function to generate markdown for README
//where the template literal goes from user response
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;