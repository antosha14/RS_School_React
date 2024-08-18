import fs from "fs";
//TODO: сделать большой сетап файл под фулл проект на этом стеке

const indexCssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

const eslintConfig = ``;
const prettierConfig = ``;

async function setup() {
  try {
    // Step 1: Installing libraries
    // npm create vite@latest reactapp -- --template react-ts
    // npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    // npm install eslint-define-config --save-dev

    // npm install --save-dev --save-exact prettier
    // node --eval "fs.writeFileSync('.prettierrc','{}\n')"

    // npm install --save-dev husky lint-staged
    // npx husky init
    // node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"

    // npm install @reduxjs/toolkit
    // npm install react-redux

    // npm install react-router-dom
    // npm install react-hook-form yup @hookform/resolvers

    // npm install -D tailwindcss postcss autoprefixer
    // npx tailwindcss init -p
    // npm install vite-tsconfig-paths

    // npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-refresh eslint-plugin-react-compiler prettier

    // Step 2: Create folder structure
    console.log("Creating directories...");
    fs.mkdirSync("src/components");
    fs.mkdirSync("src/public");
    fs.mkdirSync("src/hooks");
    fs.mkdirSync("src/services");
    fs.mkdirSync("src/store");
    fs.mkdirSync("src/tests");
    fs.mkdirSync("src/pages");
    fs.mkdirSync("src/router");
    fs.mkdirSync("src/styles");
    fs.mkdirSync("src/contexts");
    fs.mkdirSync("src/models");
    fs.unlink("src/App.css");

    // Step 3: Modify files
    // Добавить путии в ts-config
    // add route with a loader
    fs.writeFile("src/index.css", indexCssContent);

    console.log("Setup complete!");
  } catch (error) {
    console.error("Error during setup:", error);
  }
}

setup();

//подсветка после редайректа
