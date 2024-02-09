const fs = require('fs');
const axios = require('axios');

async function updateReadme() {
  try {
    // Fetch GitHub stats
    const { data: stats } = await axios.get('https://api.github.com/users/prajwal-101');

    // Generate the new README content
    const newReadmeContent = `<!-- Your updated README content here with dynamically inserted stats -->`;

    // Write the updated content to README.md
    fs.writeFileSync('README.md', newReadmeContent);
    
    console.log('README.md updated successfully!');
  } catch (error) {
    console.error('Error updating README.md:', error.message);
  }
}

updateReadme();
