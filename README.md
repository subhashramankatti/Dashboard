# Dashboard UI Project

A responsive Dashboard UI built with Next.js and shadcn/ui components. This project demonstrates how to structure a clean layout, use reusable components, and implement a responsive design.

## Features

- Responsive sidebar navigation
- Data table with filtering, sorting, and pagination
- Overview dashboard with charts and statistics
- Multiple pages (Dashboard, Articles, Settings)
- Loading states and skeletons
- Clean component organization

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Recharts for data visualization
- TanStack Table for data tables

## Pages

- **Dashboard**: Overview with statistics, charts, and recent articles
- **Articles**: Article management with data table
- **Settings**: User account settings

## Project Structure

\`\`\`
app/
  layout.tsx (main layout with sidebar)
  page.tsx (dashboard home)
  loading.tsx (loading skeleton)
  articles/
    page.tsx (articles page)
    loading.tsx (loading skeleton)
  settings/
    page.tsx (settings page)
    loading.tsx (loading skeleton)
components/
  main-nav.tsx (main navigation)
  user-nav.tsx (user navigation)
  search.tsx (search component)
  overview.tsx (chart component)
  recent-sales.tsx (recent articles component)
  date-range-picker.tsx (date picker component)
  articles-table.tsx (articles table component)
lib/
  utils.ts (utility functions)
\`\`\`

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project can be easily deployed on Vercel or any other hosting platform that supports Next.js.
https://dashboardsd.netlify.app/

## License

MIT
