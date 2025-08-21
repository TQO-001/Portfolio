# Portfolio

This is a personal portfolio web application built with **React** and **Vite**. The project showcases a modern, visually appealing design with a focus on clean UI, smooth gradients, and interactive elements.

## Features

- **Responsive Layout:** Fixed sidebar navigation with profile and social links.
- **Animated Background:** Gradient spheres, glow effects, and interactive particles that respond to mouse movement.
- **Reusable Components:** Custom `Button` and `Navbar` components for consistent UI.
- **Modern Tooling:** Uses Vite for fast development and hot module replacement.
- **ESLint Integration:** Code quality enforced with ESLint and recommended React rules.

## Project Structure

```
src/
  App.jsx              # Main application component
  App.css              # Base styles
  MainBackground.css   # Background and layout styles
  index.css            # Global styles and resets
  main.jsx             # React entry point
  assets/
    img/
      profileImg.png   # Profile image for navbar
    react.svg
  components/
    Navbar.jsx         # Sidebar navigation
    Navbar.css
    Button.jsx         # Reusable button
    Button.css
public/
  vite.svg             # Favicon
```

## Design Style

- **Neumorphism & Glassmorphism:** Soft shadows, blurred backgrounds, and rounded corners for a modern, tactile feel.
- **Gradient Backgrounds:** Animated spheres and glows create depth and visual interest.
- **Minimalist Typography:** Uses Montserrat and Open Sans for clean, readable text.
- **Color Palette:** Light backgrounds with blue and purple accents for a professional look.

## Methodologies & Approach

- **Component-Based Architecture:** UI is broken into reusable, isolated components (`Navbar`, `Button`).
- **CSS Modules:** Styles are scoped to components for maintainability.
- **Responsive Design:** Layout adapts to different screen sizes (sidebar, content centering).
- **Accessibility:** Semantic HTML and ARIA labels for better accessibility.
- **ESLint:** Enforces best practices and code consistency.

## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Next Steps

- Add content to the "About", "Projects", "Resume", and "Contact" sections.
- Implement routing for navigation items.
- Enhance responsiveness for mobile devices.
- Add more animations or interactive elements as needed.

---

## Next Steps & Roadmap

1. **Content Expansion**
   - Fill in the "About", "Projects", "Resume", and "Contact" sections with real content.
   - Add project cards with images, descriptions, and links.

2. **Routing**
   - Integrate React Router to enable navigation between different sections/pages.

3. **Mobile Responsiveness**
   - Refine styles for mobile and tablet devices.
   - Test sidebar and interactive elements on smaller screens.

4. **Accessibility Improvements**
   - Add ARIA labels and keyboard navigation support.
   - Ensure color contrast and font sizes meet accessibility standards.

5. **Animations & Interactivity**
   - Enhance background animations or add subtle transitions to components.
   - Implement hover and focus effects for interactive elements.

6. **Contact Form**
   - Add a functional contact form with validation and email integration (e.g., EmailJS or a backend endpoint).

7. **Performance Optimization**
   - Optimize images and assets.
   - Audit bundle size and improve load times.

8. **Deployment**
   - Set up deployment (e.g., Vercel, Netlify, GitHub Pages).
   - Add a custom domain and configure HTTPS.

9. **Testing**
   - Add unit and integration tests for components.
   - Set up CI/CD for automated testing and deployment.

---

Feel free to adjust or expand this roadmap as your portfolio