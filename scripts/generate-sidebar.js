const fs = require("fs");
const path = require("path");

const docsPath = path.join(__dirname, "../docs/prompts");
const sidebarFile = path.join(__dirname, "../sidebars.ts");

const getCategories = (dir) => {
  return fs.readdirSync(dir).reduce((acc, folder) => {
    const folderPath = path.join(dir, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      const files = fs.readdirSync(folderPath)
        .filter((file) => file.endsWith(".md"))
        .map((file) => `prompts/${folder}/${file.replace(".md", "")}`);

      acc.push({
        type: 'category',
        label: folder,
        items: files,
      });
    }
    return acc;
  }, []);
};

// Convert JSON to a valid TypeScript export
const sidebarContent = `const sidebars = ${JSON.stringify(
  {
    sidebar: [
      {
        type: 'doc',
        id: 'intro',
        label: 'Introduction',
      }
    ].concat(getCategories(docsPath))
  },
  null,
  2
)};

export default sidebars;`;

fs.writeFileSync(sidebarFile, sidebarContent);
console.log("✅ Sidebar (TypeScript) updated successfully!");
