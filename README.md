# shriken-patel-portfolio

Personal portfolio website for Shriken Patel — Full-Stack & Mobile Engineer.

Built with Next.js 14, Tailwind CSS, and TypeScript. Dark-mode, fully responsive, animated, and optimized for recruiter impact.

## Classification

**Role:** Full-Stack Software Engineer (Junior → Mid)  
**Strengths:** React.js, Flutter, Node.js, AI-integrated product development, cross-functional collaboration

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** Tailwind CSS with custom design tokens
- **Language:** TypeScript
- **Fonts:** Syne (display) + DM Sans (body) + JetBrains Mono (code)
- **Animations:** CSS keyframes + IntersectionObserver

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/shriken-patel-portfolio.git
cd shriken-patel-portfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
shriken-patel-portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page assembly
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── Nav.tsx          # Sticky navigation
│   ├── Hero.tsx         # Hero + tagline + stats
│   ├── About.tsx        # About + trait cards + education
│   ├── Projects.tsx     # Featured project cards
│   ├── Experience.tsx   # Timeline with bullet achievements
│   ├── Skills.tsx       # Grouped skill pills
│   ├── Contact.tsx      # CTA block + contact links
│   └── Footer.tsx       # Footer with links
├── public/              # Static assets
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Sections

| Section    | Description |
|------------|-------------|
| Hero       | Name, tagline, live stats, CTA buttons |
| About      | Bio, trait cards, education highlight |
| Projects   | StudyBuddy (AI), Prescripto (Web), InsureFlow (Mobile) |
| Experience | Tiger Advisory → Parthvitech → Digikentro timeline |
| Skills     | 7 grouped skill categories with hover effects |
| Contact    | CTA block with email, LinkedIn, phone |

## Build

```bash
npm run build
```

Output is generated in the `out/` directory (static export ready for any static host).
