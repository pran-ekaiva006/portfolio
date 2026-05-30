# Pranjal Verma - Portfolio Website

<p align="center">
  <img src="/public/banner2.png" alt="Pranjal Verma | Full Stack Developer" width="800">
</p>

<p align="center">
  <a href="https://pranjalverma.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Site-pranjalverma.vercel.app-blue?style=for-the-badge&logo=vercel&labelColor=000000" alt="Live Website">
  </a>
  <img src="https://img.shields.io/github/license/pran-ekaiva006/portfolio?style=for-the-badge&labelColor=000000" alt="License">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&labelColor=000000" alt="React Version">
  <img src="https://img.shields.io/badge/Vite-7+-646CFF?style=for-the-badge&logo=vite&labelColor=000000" alt="Vite">
</p>

## Overview

A modern, highly-optimized portfolio website showcasing my skills, projects, and professional experience as a Full Stack Developer. Built with elite performance and user experience in mind, featuring custom dynamic routing, fully functional forms without a backend, and strict accessibility standards.

**🌐 Live Demo:** [pranjalverma.vercel.app](https://pranjalverma.vercel.app/)

## ✨ Key Features

### 🎨 Design & User Experience
- **Responsive Architecture** - Meticulously optimized for mobile, tablet, and desktop viewports using Tailwind CSS.
- **Glassmorphism & Dark Theme** - Sleek aesthetic utilizing backdrop blurs and a curated dark-mode color palette.
- **Smooth Animations** - Enhanced scroll-based user interactions.
- **Accessibility First** - 100/100 Lighthouse Accessibility score. Includes semantic HTML and comprehensive ARIA labels.

### ⚡ Core Functionality
- **Dynamic Project Case Studies** - Utilizes `react-router-dom` to render dedicated, deep-linked technical case studies for each featured project.
- **Serverless Contact Form** - Fully integrated with `Web3Forms` to securely handle user inquiries directly from the client.
- **Native Resume Hosting** - Bypasses external cloud drives by securely hosting the CV natively on the domain.
- **Visitor Tracking** - Real-time traffic and demographic tracking powered by Vercel Web Analytics.

## 💻 Technology Stack

| Category | Technologies |
|----------|-------------|
| **Frontend Framework** | React 18, React Router DOM |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS v3 |
| **Icons & Assets** | Lucide React |
| **Forms** | Web3Forms API |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel Edge Network |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pran-ekaiva006/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static public assets
│   ├── banner2.png         # Primary hero banner
│   ├── favicon.svg         # Custom branded PV SVG favicon
│   └── Pranjal_Verma_Resume.pdf # Native resume file
├── src/
│   ├── components/         # Reusable React UI sections (Navbar, Hero, Contact, etc.)
│   ├── data/               # Static data stores
│   │   └── projects.js     # Master project registry and case study details
│   ├── pages/              # Route level components
│   │   ├── Home.jsx        # Main SPA landing page
│   │   └── ProjectDetails.jsx # Dynamic case study renderer
│   ├── App.jsx             # React Router and Vercel Analytics wrapper
│   ├── index.css           # Global Tailwind CSS imports and utility classes
│   └── main.jsx            # React DOM entry point
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind theme configuration
└── vite.config.js          # Vite configuration
```

## 📈 Performance

- **Lighthouse Score:** 100/100 Accessibility & Best Practices.
- **Loading Speed:** Highly optimized asset delivery via Vercel Edge Network.
- **Cross-OS Build Support:** Explicit Rollup Linux bindings configured for CI/CD consistency.

## 📬 Contact

**Pranjal Verma** - Full Stack Developer

- 🌐 Website: [pranjalverma.vercel.app](https://pranjalverma.vercel.app/)
- 💼 GitHub: [@pran-ekaiva006](https://github.com/pran-ekaiva006)
- 👔 LinkedIn: [in/pranjal-verma-74954325a](https://linkedin.com/in/pranjal-verma-74954325a)

---

<p align="center">
  ⭐ If you like this project, please consider giving it a star!
</p>