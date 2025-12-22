# ML Mondays – Neural Hive Blog Platform

A modern, fast, and SEO-optimized static blog platform built as part of the **Neural Hive – ML Mondays Web Development Recruitment Challenge**.

This project is a production-ready clone of the ML Mondays blog, designed with clean UI, strong performance, and a smooth content-writing workflow for contributors.

---

## 🔗 Live Website

👉 https://divyagupta-mlmondays.netlify.app  

---

## 📦 GitHub Repository

👉 https://github.com/divyaguptamo/DivyaGupta-mlmondays

---

## 🛠️ Tech Stack

- **Astro** – Static Site Generator (SSG)
- **Markdown** – Blog content management
- **TypeScript**
- **HTML5 & CSS3**
- **Netlify** – Hosting & deployment

---

## ✨ Features

- Static Site Generation for fast performance
- SEO-friendly structure with clean URLs
- Responsive design (mobile & desktop)
- Modular and reusable components
- Markdown-based blog system
- Easy content publishing workflow
- Optimized assets and fast load times

---

## ✍️ Writer Workflow (Non-Developer Friendly)

This project is designed so that **writers do not need to modify core code**.

### ➕ How to add a new blog post

1. Go to the following directory:
src/content/posts/


2. Create a new Markdown file:
my-new-blog.md


3. Add frontmatter at the top of the file:
```md
---
title: "My Blog Title"
description: "Short summary of the blog"
author: "Author Name"
date: 2025-01-01
tags: ["Machine Learning", "AI"]
---
4. Write your blog content below the frontmatter using Markdown.

5. Save the file, commit, and push to GitHub.
The blog post will automatically appear on the website after deployment.

### 🗂️ Project Structure
src/
 ├── components/        # Reusable UI components
 ├── content/
 │    └── posts/        # Markdown blog posts
 ├── layouts/           # Layout components
 └── pages/             # Route-based pages
public/                 # Static assets
astro.config.mjs
package.json

### 🚀 Running the Project Locally

To run this project on your local machine:

npm install
npm run dev


Then open:

http://localhost:4321

### 🌍 Deployment

The project is deployed on Netlify using GitHub integration.
Deployment Configuration:
Build Command: npm run build
Publish Directory: dist
Any new push to the main branch automatically triggers a redeployment.

### 🎯 Challenge Requirements Fulfilled

This project fulfills all Neural Hive ML Mondays Challenge requirements:
Static Site Generator (SSG) ✔
Modular and clean code architecture ✔
SEO & performance optimized ✔
Smooth writer workflow ✔
Public GitHub repository ✔
Live deployed site ✔

### 👩‍💻 Author

Divya Gupta
GitHub: https://github.com/divyaguptamo

### 📄 License

This project is developed for educational and evaluation purposes as part of the Neural Hive recruitment challenge.

