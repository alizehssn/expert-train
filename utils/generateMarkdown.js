// function to generate markdown for README
//where the template literal goes from user response
function generateMarkdown(data) {
    return `# :page_with_curl: **${data.title}** :page_with_curl:
    ${data.description}
    ![${data.descriptionImg}]

    ## **Getting Started**
    ${data.installation}

    ## **Usage**:
    ${data.usage}
    [![video explanation of project](${data.usageMedia})](${data.usageMedia} "Walkthrough Demonstration")
    

    ## **Built With**
    ${data.tools}

    ## **Tests**
    ${data.tests}

    ## Badges
    ${data.badges}

    ##**Credits**
    ${data.contributing}
    ### **Contact Information:**
    [Github Username](${data.githubUsername})
    [Email](${data.email})

    ## MIT License
    
    Copyright (c) 2020 Alize Hassan
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

`;
}

module.exports = generateMarkdown;