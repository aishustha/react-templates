# Wanderlust - React Project

A modern React application built with Vite, featuring a professional design system and comprehensive code quality tools.

## 🚀 Features

- **React 19** with modern hooks and features
- **Vite** for fast development and building
- **Professional Design System** with CSS variables and utility classes
- **ESLint** for code quality and consistency
- **Prettier** for automatic code formatting
- **Responsive Design** with mobile-first approach
- **Google Fonts** (Inter) for beautiful typography

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: CSS with custom design system
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm

## 📁 Project Structure

```
wanderlust/
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx       # Header component
│   │   ├── Header.css       # Header styles
│   │   ├── PurposeCompanies.jsx  # Main page component
│   │   └── PurposeCompanies.css  # Main page styles
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore rules
├── eslint.config.js         # ESLint configuration
├── design-system.md         # Design system documentation
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

The project includes a comprehensive design system with:

- **CSS Variables** for colors, spacing, typography, and more
- **Utility Classes** for quick styling
- **Responsive Breakpoints** for mobile-first design
- **Consistent Spacing** using an 8px grid system
- **Modern Animations** with smooth transitions

See `src/design-system.md` for complete documentation.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wanderlust
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Check code quality with ESLint
- **`npm run lint:fix`** - Fix ESLint issues automatically
- **`npm run format`** - Format code with Prettier
- **`npm run format:check`** - Check if code is formatted

## 🔧 Code Quality Tools

### ESLint
- **React-specific rules** for JSX and hooks
- **Code style enforcement** for consistency
- **Best practices** for modern JavaScript
- **Automatic fixing** with `npm run lint:fix`

### Prettier
- **Automatic formatting** for consistent code style
- **Configurable rules** in `.prettierrc`
- **Integration** with ESLint for no conflicts

## 🎯 Code Style

The project follows these coding standards:

- **Single quotes** for strings
- **2 spaces** for indentation
- **Semicolons** always required
- **Trailing commas** for multiline objects/arrays
- **Consistent spacing** around operators and brackets

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: 640px (mobile), 768px (tablet), 1024px+ (desktop)
- **Flexible grids** that adapt to screen sizes
- **Touch-friendly** interactions

## 🚀 Development Workflow

1. **Code**: Write your React components
2. **Format**: Run `npm run format` to auto-format
3. **Lint**: Run `npm run lint` to check quality
4. **Fix**: Run `npm run lint:fix` to auto-fix issues
5. **Test**: Ensure your app works in the browser

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)

## 🤝 Contributing

1. Follow the established code style
2. Run linting before committing: `npm run lint`
3. Format code before committing: `npm run format`
4. Test your changes in the browser

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using React, Vite, and modern web development tools.
