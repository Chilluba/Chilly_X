# Chilly_XwAgGzZ - Creative Portfolio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

This is a dynamic, fully-featured personal portfolio website built with React, TypeScript, and Tailwind CSS. It's designed to showcase a wide range of creative and technical projects with a playful, Deadpool-inspired theme. The portfolio includes a client-side admin panel for easy content management.

**Live Demo:** [https://your-live-url.com](https://your-live-url.com) *(Replace with your actual deployment URL)*

---

![Portfolio Screenshot](./screenshot-placeholder.png)
*(It is recommended to replace `screenshot-placeholder.png` with an actual screenshot of the application)*

## ✨ Features

-   **Modern & Responsive Design**: A sleek, dark-themed UI that looks great on all devices, from desktops to mobile phones.
-   **Multi-Page Layout**: Separate, well-defined sections for Home, About, Work, Services, and Contact.
-   **Snark Mode**: A unique toggle that switches the site's copy to a witty, Deadpool-inspired voice, adding a memorable touch of personality.
-   **Filterable Project Gallery**: The "Work" page features a filterable grid of projects, allowing visitors to easily browse by category.
-   **Client-Side Admin Panel**: A password-protected area (`/admin`) where you can manage portfolio content without touching the code.
    -   Update your personal profile information.
    -   Add, edit, and delete projects.
    -   Image upload functionality for project thumbnails.
-   **State Management with Context**: Uses React Context API for clean and efficient state management of user data, authentication, and UI modes.
-   **Data Persistence**: Leverages `localStorage` to persist admin-edited content, ensuring changes are not lost on browser refresh.
-   **Component-Based Architecture**: Built with reusable and well-structured React components.

## 🚀 Tech Stack

-   **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [React Router](https://reactrouter.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Build Tool**: Vite (or similar modern bundler like Create React App)

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 16.x or later) and a package manager like `npm` or `yarn` installed on your system.

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(or `yarn install`)*

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    *(or `yarn dev`)*

    The application should now be running on `http://localhost:5173` (the port may vary).

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This command will create a `dist` folder with the optimized, static assets ready for deployment.

## 🔐 Admin Panel

This portfolio comes with a built-in, client-side admin panel to manage content directly from the browser.

-   **Access URL**: Navigate to `/login` on your site.
-   **Default Password**: `admin`

**Important Note**: The authentication is for demonstration purposes and is **not secure**. The password is hard-coded in the source. For a production environment with real security needs, this should be replaced with a proper backend authentication system (e.g., Firebase Auth, Supabase, Auth0).

## 🎨 Customization

It's easy to make this portfolio your own!

1.  **Update Your Content**: The simplest way to add your own information is by editing the data files in `src/constants/data.ts`. Here you can change your profile details, social links, skills, services, and initial project list.

2.  **Change the Admin Password**: The default admin password can be changed in `src/context/AuthContext.tsx`. Find the `ADMIN_PASSWORD` constant and replace `'admin'` with your desired password.

3.  **Customize Styling**: All colors, fonts, and spacing are configured in the `tailwind.config` object within `index.html`. You can easily adjust the theme to match your personal brand.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
