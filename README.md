# HeyRon Website

Official website for HeyRon — your personal AI agent.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/heyron/heyron-site.git
   cd heyron-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Clerk and Stripe keys
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Open** http://localhost:3000

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Payments:** Stripe
- **Animation:** Framer Motion
- **Hosting:** Vercel (free tier)

## 📁 Project Structure

```
heyron-site/
├── app/                 # Next.js app router pages
│   ├── blog/           # Blog listing and posts
│   ├── docs/           # Documentation
│   ├── dashboard/      # User dashboard (requires auth)
│   ├── login/          # Sign in page
│   └── signup/         # Sign up page
├── components/         # React components
├── public/             # Static assets
└── lib/               # Utility functions
```

## 🔧 Configuration

### Clerk (Authentication)
1. Go to https://clerk.com
2. Create a new application
3. Copy your publishable and secret keys to `.env.local`
4. Configure redirect URLs:
   - Sign in: `http://localhost:3000/login`
   - Sign up: `http://localhost:3000/signup`
   - Dashboard: `http://localhost:3000/dashboard`

### Stripe (Payments)
1. Go to https://stripe.com
2. Create a new account (or use test mode)
3. Copy your API keys to `.env.local`
4. Create products in Stripe Dashboard for pricing tiers

## 🎨 Brand Guidelines

See [HEYRON_BRAND_GUIDE.md](./HEYRON_BRAND_GUIDE.md) for colors, fonts, and usage.

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com
3. Import the repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Custom Domain
1. In Vercel, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 📝 Editing Content

### Blog Posts
Add new blog posts in `app/blog/[slug]/page.tsx` or connect a CMS.

### Docs
Add documentation pages in `app/docs/` directory.

### Pages
Edit landing page in `app/page.tsx`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📋 Pending Changes / Changelog

### Latest Update: April 28, 2026
- ✅ Design refresh: hero visual, enhanced gradients, How It Works icons (commit e524b6d)
- ⏳ Motion/Animation effects: scroll-triggered entrance animations + hover effects

### Features In Progress:
- [ ] Motion animations (scroll-triggered + hover effects)

### Notes:
- Live URL: (REDEPLOY NEEDED - project was deleted)
- Vercel auto-deploys on push to master
- Preview deployments created for each commit (check Vercel dashboard)
- **IF BROKEN:** Re-import from Vercel dashboard: Import → sarapopephotography/heyron-site → Deploy

---

## 📄 License

MIT License — see LICENSE for details.

