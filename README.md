# 🎭 Motion Playground

A dedicated workspace for experimenting with **Framer Motion** and **React**.  
This repository contains multiple modules to master **animations, transitions, and gesture-driven UI components**.

---

## 📂 Project Directory

The project is organized into modular folders for better learning and scalability:

```bash
motion-playground/
├─ 01-framer-motion-basics/        # Core concepts of Framer Motion
│   └─ Testtown/                   # Sub-project for basic animation properties (initial, animate, transition)
├─ 02-framer-motion-animation/     # Advanced playground using Vite + React
│   ├─ public/                     # Static assets like favicon, images
│   ├─ src/
│   │   ├─ components/             # Reusable React components (AnimatedCard.jsx, MotionBox.jsx, etc.)
│   │   ├─ App.jsx                 # Main app component
│   │   └─ main.jsx                # Entry point
│   ├─ package.json                 # Dependencies & scripts
│   └─ vite.config.js               # Vite configuration
└─ README.md                        # Project documentation
```
---

## 🛠️ Tech Stack


Framework: React.js (Vite)
Animation Library: Framer Motion
Styling: Tailwind CSS / CSS3 / Module CSS
Tooling: ESLint, Vite


---

## ⚙️ Installation & Setup

***To run any module (e.g., 02-framer-motion-animation) on your local machine:***
---

### Clone the repository
```bash
git clone https://github.com/corebyte56/motion-playground.git
```

### Navigate to the module folder
```bash
cd motion-playground/02-framer-motion-animation
```
### Install dependencies
```bash
npm install
```
### Start the development server
```bash
npm run dev
```

---

## 🚀 Learning Goals
```
1. Understanding the motion component
2. Implementing smooth page transitions
3. Handling drag-and-drop constraints
4. Mastering AnimatePresence for exit animations
5. Orchestrating complex sequences with useAnimate
6. Recommended Practices
7. Create a new component inside components/ for each animation idea
8. Experiment with Framer Motion props:
9. whileHover, whileTap, drag
10. variants & transition
11. keyframes & multi-stage animations
12. Combine Tailwind CSS + Framer Motion for clean and responsive UI
```
---

# 📄 License
```bash
This project is open-source and available under the MIT License.
```