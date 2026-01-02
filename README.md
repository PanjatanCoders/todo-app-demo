# 📝 Todo App Demo

A modern, responsive Todo application built with React and deployed using GitHub Actions CI/CD pipeline.

## 🚀 Live Demo

[View Live App](https://panjatancoders.github.io/todo-app-demo/)

## ✨ Features

- ✅ Add, complete, and delete todos
- 🔍 Filter todos (All/Active/Completed)
- 💾 Persistent storage using localStorage
- 📱 Responsive design
- 🎨 Modern UI with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Styling**: CSS3
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## 🏗️ Project Structure
```
todo-app-demo/
├── .github/
│   └── workflows/
│       ├── test.yml          # Run tests on PR
│       └── deploy.yml        # Deploy on merge to master
├── src/
│   ├── App.jsx               # Main app component
│   ├── App.test.jsx          # App tests
│   ├── main.jsx              # React entry point
│   ├── index.css             # Styles
│   └── setupTests.js         # Test configuration
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies and scripts
```

## 🚦 CI/CD Pipeline

### Pull Request Workflow
- Triggers on PR to master/main branch
- Runs all tests
- Builds the application
- Blocks merge if tests fail

### Deployment Workflow
- Triggers on merge to master/main
- Runs tests again
- Builds production bundle
- Deploys to GitHub Pages

## 💻 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/PanjatanCoders/todo-app-demo.git
cd [repo-name]
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🧪 Testing

Run tests once:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 🏗️ Build

Create production build:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📝 Contributing

1. Create a feature branch
2. Make your changes
3. Ensure tests pass locally
4. Open a Pull Request
5. Wait for CI tests to pass
6. Merge after approval

## 📄 License

MIT

## 👤 Author

[Saddam Hossain]