// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = generateBadge(data.license);
  const licenseUrl = generateLicenseUrl(data.license);

  return `# ${data.projectName}
![License](${licenseBadge})

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Please remove generated- from the generated-README.md file name.

## License
This project is licensed under the ${data.license} license - see the [License Page](${licenseUrl}) for details.`;
}

// Function to generate badge based on license
function generateBadge(license) {
  const badges = {
    "MIT": "brightgreen",
    "GNU General Public License 2.0": "blue",
    "Apache License 2.0": "green",
    "GNU General Public License 3.0": "red",
  };

  const color = badges[license] || "lightgrey"; // Default color if license not found
  return `https://img.shields.io/badge/license-${license}-${color}.svg`;
}

// Function to generate license URL
function generateLicenseUrl(license) {
  const licensePaths = {
    "MIT": "mit",
    "GNU General Public License 2.0": "gpl-2.0",
    "Apache License 2.0": "apache-2.0",
    "GNU General Public License 3.0": "gpl-3.0",
  };

  const path = licensePaths[license] || "";
  return `https://choosealicense.com/licenses/${path}/`;
}

module.exports = generateMarkdown;
