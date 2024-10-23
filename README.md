# Static Blog Site

A simple static blog site built with Next.js, TypeScript, and Tailwind CSS. This project allows you to write blog posts in Markdown and renders them server-side for optimal performance.

## Features

- Write blog posts in Markdown format.
- Server-side rendering for improved SEO and performance.
- Styled with Tailwind CSS for a modern and responsive design.
- Easy to add new posts by creating Markdown files.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/starlitnightsky/static-blog.git
   cd static-blog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`.

## Adding a New Post

1. Create a new Markdown file in the `posts` directory.
2. Use the following format:

   ```markdown
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   ---

   Your post content goes here.
   ```

3. Save the file and refresh the site to see your new post.
