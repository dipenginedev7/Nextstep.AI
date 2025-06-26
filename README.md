# NextStep.AI Frontend

NextStep.AI is an AI-powered career guidance platform that helps users discover their ideal career paths based on their skills, interests, and aspirations. This is the frontend application, built with React and styled using Tailwind CSS.

## Features
- **Modern, responsive UI** with beautiful gradients and animations
- **Comprehensive career assessment form**: Collects personal info, skills, preferences, and goals
- **Skill tag selection**: Interactive skill selection with progress tracking
- **AI-powered career recommendations** (simulated on frontend)
- **Dynamic results section**: Displays top career matches with salary and growth insights
- **Smooth navigation**: Hero, Features, Assessment, and Results sections

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd nextstep-ai-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## Project Structure
```
nextstep-ai-frontend/
├── public/
│   ├── Arghyalogo.png
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   ├── components/
│   │   ├── CareerCard.jsx
│   │   ├── InputForm.jsx
│   │   └── Navbar.jsx
│   └── pages/
│       ├── Assess.jsx
│       ├── Home.jsx
│       ├── Login.jsx
│       └── Results.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Customization
- Update the logo in `public/Arghyalogo.png`.
- Edit assessment questions and skills in `public/index.html` or migrate logic to React components in `src/` for scalability.
- Adjust theme and styles via Tailwind config or custom CSS.

## License
This project is for educational and demonstration purposes.

---
**Author:** Arghyadip
