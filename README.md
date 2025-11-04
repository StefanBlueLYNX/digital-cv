# Digital CV Portfolio - Blueprint Theme

A futuristic, interactive portfolio website with a blueprint aesthetic. Features a central vertical career timeline with branching horizontal lines connecting projects, skills, and sections. Built with React, GSAP animations, and Supabase integration.

## 🎨 Features

- **Blueprint Aesthetic**: Dark background with neon glowing lines and nodes
- **Interactive Timeline**: Central vertical line representing career path
- **Animated Sections**: Smooth scroll-triggered animations using GSAP
- **Responsive Design**: Fully optimized for desktop and mobile devices
- **Contact Form**: Supabase integration for storing messages
- **Interactive Nodes**: Hover effects on skills and expandable project cards
- **Background Effects**: Animated grid and circuit-like patterns

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with custom properties
- **Animations**: GSAP with ScrollTrigger
- **Backend**: Supabase (for contact form messages)
- **Fonts**: Orbitron, Roboto Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd CV-digital
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Supabase credentials:
```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Set up Supabase:
   - Create a new Supabase project at [supabase.com](https://supabase.com)
   - Create a table named `messages` with the following schema:
   ```sql
   CREATE TABLE messages (
     id BIGSERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Customization

### Personal Information

1. **Header Section** (`src/components/Header.jsx`):
   - Update name and tagline

2. **About Section** (`src/components/About.jsx`):
   - Modify the about text
   - Add your profile picture (replace the placeholder)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update the `skills` array with your skills, proficiency levels, and icons

4. **Projects Section** (`src/components/Projects.jsx`):
   - Update the `projects` array with your projects, descriptions, tech stacks, and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, LinkedIn, and GitHub links

### Styling

- Color scheme: Modify CSS variables in `src/index.css`
- Fonts: Update font imports in `index.html`
- Animations: Adjust GSAP animation parameters in component files

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 🎯 Project Structure

```
CV-digital/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── BlueprintBackground.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🌐 Deployment

You can deploy this portfolio to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions or deploy the `dist` folder
- Any static hosting service

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

**Note**: Remember to update all placeholder content (name, email, links, projects, skills) with your actual information before deploying!

