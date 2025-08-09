"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Star,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Moon,
  Sun,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  {
    title: "Blazing Fast",
    description:
      "Built with a modern stack optimized for performance, accessibility, and SEO.",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description:
      "Best practices baked in: secure headers, sensible defaults, and flexible auth hooks.",
    icon: Shield,
  },
  {
    title: "Design System Ready",
    description:
      "Powered by Tailwind and shadcn/ui so you can scale your UI without friction.",
    icon: Sparkles,
  },
  {
    title: "Analytics Friendly",
    description:
      "First-class slots for product analytics, experiments, and growth instrumentation.",
    icon: TrendingUp,
  },
];

const chartData = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 200 },
  { name: "Mar", value: 260 },
  { name: "Apr", value: 340 },
  { name: "May", value: 420 },
  { name: "Jun", value: 520 },
];

const tiers = [
  {
    name: "Starter",
    price: "Free",
    features: ["Basic components", "Community support", "MIT License"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    features: [
      "Everything in Starter",
      "Premium components",
      "Email support",
      "Advanced analytics hooks",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Let's talk",
    features: [
      "Design system consulting",
      "SLA & SSO",
      "Custom integrations",
      "Priority support",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

function DarkModeToggle() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    const mq =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDark = mq ? mq.matches : false;
    const initial =
      localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", initial === "dark");
    setDark(initial === "dark");
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggle}
      className="rounded-full"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 ${className}`}>
      {children}
    </div>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="size-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
          <span className="font-semibold">Acme</span>
          <Badge className="ml-2">Beta</Badge>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <DarkModeToggle />
          <Button>Sign in</Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="border-b bg-background md:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <Button variant="secondary" className="w-full">
                Sign in
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <Container className="grid items-center gap-10 py-20 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            Ship beautiful products faster.
          </motion.h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A scalable landing page template using the latest React, Tailwind,
            and shadcn/ui patterns. Extend sections, wire your API, and go to
            market without reinventing the wheel.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="group">
              Get started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="secondary">Live demo</Button>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" /> 4.9/5
            </div>
            <div>Open-source friendly</div>
            <div>Type-safe ready</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
          aria-label="Product preview"
        >
          <div className="rounded-2xl border bg-gradient-to-br from-muted to-background p-4 shadow-sm">
            <div className="aspect-[16/10] w-full rounded-xl border bg-background">
              {/* Placeholder UI */}
              <div className="grid h-full grid-rows-6 gap-3 p-4">
                <div className="row-span-1 flex items-center gap-3">
                  <div className="h-6 w-24 rounded-md bg-muted" />
                  <div className="h-6 w-12 rounded-md bg-muted" />
                </div>
                <div className="row-span-3 rounded-lg bg-muted" />
                <div className="row-span-2 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-muted" />
                  <div className="rounded-lg bg-muted" />
                  <div className="rounded-lg bg-muted" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 size-[30rem] rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-300/20 blur-3xl"
      />
    </section>
  );
}

function LogoCloud() {
  return (
    <section className="border-b">
      <Container className="py-10">
        <p className="mb-6 text-center text-sm uppercase tracking-wider text-muted-foreground">
          Trusted by fast-moving teams
        </p>
        <div className="grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {["Gamma", "Nova", "Vertex", "Nimbus", "Quanta", "Helios"].map(
            (name) => (
              <div key={name} className="flex items-center justify-center">
                <div
                  className="h-8 w-24 rounded-md border bg-muted/50"
                  aria-label={`${name} logo`}
                />
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="border-b">
      <Container className="grid gap-8 py-16 md:grid-cols-2">
        <div>
          <Badge className="mb-3">What you get</Badge>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            A foundation you can grow with
          </h2>
          <p className="mt-3 text-muted-foreground">
            Compose sections as your product evolves. Replace placeholders with
            your data models and routes.
          </p>
          <div className="mt-6 rounded-xl border p-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ left: 8, right: 8, top: 8, bottom: 8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Example analytics component using Recharts.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <Card key={f.title} className="rounded-2xl">
              <CardHeader>
                <div className="mb-2 inline-flex size-10 items-center justify-center rounded-xl border bg-muted">
                  <f.icon className="h-5 w-5" />
                </div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Install", desc: "Drop into your Next.js/Remix/Vite app." },
    { title: "Customize", desc: "Wire auth, data fetching, and analytics." },
    { title: "Launch", desc: "Iterate quickly with a scalable design system." },
  ];

  return (
    <section id="how" className="border-b bg-muted/30">
      <Container className="py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          How it works
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border bg-background p-6">
              <div className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {[1, 2].map((n) => (
                  <li key={n} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>Sample checklist item {n}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      name: "Avery Park",
      role: "Product Lead @ Vertex",
      quote:
        "We shipped our MVP in days. The components and layout primitives are rock-solid.",
    },
    {
      name: "Jordan Kim",
      role: "Founder @ Nimbus",
      quote: "It saved us weeks of design and front-end plumbing.",
    },
  ];

  return (
    <section className="border-b">
      <Container className="py-16">
        <div className="mb-8 flex items-center gap-2">
          <Star className="h-5 w-5" />
          <h2 className="text-3xl font-semibold tracking-tight">
            What people say
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <Card key={q.name} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">“{q.quote}”</CardTitle>
                <CardDescription>
                  <span className="font-medium text-foreground">{q.name}</span>{" "}
                  — {q.role}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-b bg-muted/30">
      <Container className="py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Simple pricing
          </h2>
          <p className="mt-2 text-muted-foreground">
            Start free. Upgrade when you grow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={`rounded-2xl ${
                t.highlighted ? "border-primary shadow-lg" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {t.name}
                  {t.highlighted && <Badge>Most popular</Badge>}
                </CardTitle>
                <CardDescription>{t.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">{t.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Can I use this in commercial projects?",
      a: "Yes. Replace the branding and ship. It’s a generic, extensible template.",
    },
    {
      q: "Which frameworks are supported?",
      a: "Any React setup works: Next.js, Remix, Vite/SPA. Tailwind and shadcn/ui are framework-agnostic.",
    },
    {
      q: "Is it accessible?",
      a: "We follow semantic HTML, keyboard navigation, and contrast guidelines. Always audit before launch.",
    },
  ];

  return (
    <section id="faq" className="border-b">
      <Container className="py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          FAQs
        </h2>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="border-b bg-muted/30">
      <Container className="py-16">
        <div className="rounded-2xl border bg-background p-8 md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Stay in the loop
              </h3>
              <p className="mt-2 text-muted-foreground">
                Get product updates, component drops, and tips. No spam.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const email = formData.get("email");
                alert(`Subscribed: ${email}`);
                form.reset();
              }}
              className="flex w-full gap-2"
            >
              <Input
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className="h-11"
              />
              <Button type="submit" className="h-11">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const linkCols = [
    {
      title: "Product",
      links: ["Overview", "Features", "Pricing", "Changelog"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["Docs", "Guides", "Community", "Support"],
    },
  ];

  return (
    <footer className="bg-background">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div>
          <a href="#" className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
            <span className="font-semibold">Acme</span>
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            A modern, extensible landing page you can adapt to any product.
          </p>
          <div className="mt-4 flex gap-3">
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {linkCols.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 font-semibold">{col.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t">
        <Container className="flex items-center justify-between py-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Acme Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}
