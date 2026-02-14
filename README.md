# Chaeho Yoon — Portfolio

A high-performance, interactive developer portfolio designed to mimic a modern VS Code environment. Built with the cutting-edge Next.js 16 and React 19 stack, featuring a syntax-highlighted aesthetics and a responsive IDE layout.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: Native `IntersectionObserver` (No external animation libraries for maximum performance)
- **Icons**: Custom SVG Paths (No icon libraries to reduce bundle size)

## ✨ Features

- **IDE Simulation**: Authentic VS Code experience with collapsible sidebar, file tabs, status bar, and syntax highlighting.
- **Interactive Terminal**: A Zsh-inspired terminal with:
  - Real-time typing effects
  - Support for custom commands (e.g., `whoami`, `ls`)
  - Interactive action buttons for email, resume, and social links
  - Boot sequence animation simulating a real shell environment
- **Multi-Page Navigation**:
  - Seamless routing between the "editor" files and detailed project pages.
  - Active tab highlighting and sidebar sync logic.
  - Dedicated `/contact` route featuring the interactive terminal.
- **Performance First**:
  - Zero heavy external dependencies (no framer-motion, no lucide-react).
  - Native CSS transitions and intersection observers for scroll animations.
  - Optimized font loading and responsive layouts.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (Recommended 20+ for Next.js 16)
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cheneyYoon/portfolio-v3.git
   cd portfolio-v3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── page.tsx        # Main IDE view (Home)
│   │   ├── contact/        # Contact page with Terminal
│   │   └── projects/       # Dynamic project detail pages
│   ├── components/
│   │   ├── ide/            # Core IDE shell (Sidebar, TabBar, Layout)
│   │   ├── terminal/       # Terminal emulator component
│   │   ├── sections/       # Main content sections (Experience, Skills)
│   │   └── ui/             # Reusable UI primitives (TechPill, Icons)
│   └── data/               # Content Source of Truth
│       ├── fileTree.ts     # Configuration for sidebar interactions
│       ├── experience.ts   # Work history data
│       └── projects.ts     # Project metadata
```

## 🎨 Customization

The portfolio is data-driven. To update content, modify the files in `src/data/`:

- **Navigation Structure**: Edit `src/data/fileTree.ts` to change the file explorer layout.
- **Work History**: Update `src/data/experience.ts`.
- **Projects**: Update `src/data/projects.ts` (list) and `src/data/projectDetails.ts` (detailed case studies).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
