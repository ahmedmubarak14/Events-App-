import Link from 'next/link';
import {
  Truck, Users, Printer, Armchair, LayoutGrid, Wrench, Gift,
  UtensilsCrossed, CalendarDays, Speaker, Music, Sparkles,
  Shield, Clock, UsersRound, CheckCircle, ChevronDown,
  Facebook, Twitter, Instagram, Wallet, MapPin, FileCheck, Leaf
} from 'lucide-react';

const services = [
  { icon: Truck, label: "Logistics" },
  { icon: Users, label: "Manpower" },
  { icon: Printer, label: "Printing" },
  { icon: Armchair, label: "Furniture" },
  { icon: LayoutGrid, label: "Booth Stands" },
  { icon: Wrench, label: "Equipment" },
  { icon: Gift, label: "Giveaways" },
  { icon: UtensilsCrossed, label: "Catering & Hospitality" },
  { icon: CalendarDays, label: "Event Planning" },
  { icon: Speaker, label: "AVL" },
  { icon: Music, label: "Entertainment" },
  { icon: Sparkles, label: "Post-event Services" },
];

const features = [
  { icon: FileCheck, title: "Plan & Comply", desc: "Regulatory concierge for GEA, MOMRAH permits. Venue marketplace with 3D tours." },
  { icon: Truck, title: "Source & Move", desc: "Smart procurement with verified vendors. Green logistics with carbon tracking." },
  { icon: Users, title: "Staff & Manage", desc: "Workforce operations with geo-fencing. Staff sourcing and shift management." },
  { icon: Wallet, title: "Supplify Pay", desc: "Digital wallet for event payments. Vendor factoring for instant payouts." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h2 className="text-xl font-bold text-primary">Supplify</h2>
          </div>

          <nav className="hidden md:flex flex-1 justify-center gap-8">
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#services">Services</a>
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#faq">FAQ</a>
          </nav>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors"
            >
              Launch App
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 bg-secondary text-primary rounded-lg text-sm font-medium hover:bg-secondary-dark transition-colors hidden sm:block"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-4 sm:px-10 lg:px-20 py-8">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative min-h-[500px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 sm:p-12"
              style={{
                backgroundImage: `linear-gradient(rgba(31, 4, 51, 0.7) 0%, rgba(31, 4, 51, 0.85) 100%), url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop")`
              }}
            >
              <div className="flex flex-col gap-4 text-center max-w-3xl">
                <span className="text-white/70 text-sm font-medium tracking-wider uppercase">The National Events Operating System</span>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                  Your Premier B2B Event Partner in Saudi Arabia
                </h1>
                <p className="text-white/80 text-lg sm:text-xl">
                  Connecting organizers, vendors, and government bodies. Plan, source, staff, and pay — all in one platform.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <Link
                  href="/dashboard"
                  className="px-6 py-3 bg-white text-primary rounded-lg text-base font-semibold hover:bg-secondary transition-colors"
                >
                  Get Started Free
                </Link>
                <button className="px-6 py-3 bg-white/10 text-white rounded-lg text-base font-semibold hover:bg-white/20 transition-colors border border-white/20">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4" id="how-it-works">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-4">How It Works</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Simplify your event operations with our comprehensive 4-phase lifecycle management
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-8 items-center text-center card-hover">
                <div className="bg-primary/10 p-4 rounded-full">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-primary">1. Plan & Comply</h3>
                  <p className="text-muted-foreground text-sm">
                    Navigate regulatory requirements with our concierge service. Book venues with 3D virtual tours.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-8 items-center text-center card-hover">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-primary">2. Source & Move</h3>
                  <p className="text-muted-foreground text-sm">
                    Find verified vendors with Saudization compliance. Track shipments with carbon footprint monitoring.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-8 items-center text-center card-hover">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-primary">3. Staff, Manage & Pay</h3>
                  <p className="text-muted-foreground text-sm">
                    Source and manage temporary staff with geo-fencing. Pay vendors instantly with factoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 bg-secondary" id="features">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-4">Platform Features</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Everything you need to execute flawless events in Saudi Arabia
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-border card-hover">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4" id="services">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-4">B2B Event Services</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Connect with verified service providers across all event categories
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-secondary hover:bg-primary hover:text-white transition-all cursor-pointer group">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white mb-3" />
                  <h3 className="font-semibold text-sm text-primary group-hover:text-white">{service.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Why Choose Supplify?</h2>
                <p className="text-muted-foreground">
                  We provide specialized tools and connections for flawless corporate events and concerts.
                  Access trusted B2B professionals, save time, and get competitive quotes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Verified & Compliant</h4>
                      <p className="text-muted-foreground text-sm">
                        All vendors vetted for Saudization compliance and quality standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Streamlined Procurement</h4>
                      <p className="text-muted-foreground text-sm">
                        Manage RFQs, communications, and bookings in one platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Leaf className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Vision 2030 Aligned</h4>
                      <p className="text-muted-foreground text-sm">
                        Built for Saudi Arabia&apos;s growing events industry with sustainability tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-96 rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Professional event in Saudi Arabia"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4" id="faq">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How are B2B providers vetted?", a: "Rigorous vetting includes business licenses, insurance, corporate references, and portfolio reviews." },
                { q: "Is the platform free for event organizers?", a: "Yes, Supplify is free for organizers. Revenue comes from a small commission from providers." },
                { q: "What regulatory support do you provide?", a: "Our concierge helps with GEA, MOMRAH, Civil Defense, and SFDA permits and certifications." },
                { q: "How does vendor factoring work?", a: "Vendors can receive instant payment on approved invoices for a small fee (2-3.5%)." },
              ].map((faq, idx) => (
                <details key={idx} className="group p-6 bg-white rounded-xl border border-border cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-primary list-none">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-primary rounded-2xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to transform your event operations?</h2>
              <p className="mb-8 max-w-2xl mx-auto text-white/80">
                Join the leading B2B events platform in Saudi Arabia and discover seamless event management.
              </p>
              <Link
                href="/dashboard"
                className="inline-block px-8 py-4 bg-white text-primary rounded-lg text-base font-semibold hover:bg-secondary transition-colors"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">S</span>
                </div>
                <h2 className="text-xl font-bold">Supplify</h2>
              </div>
              <p className="text-sm text-white/70">The National Events Operating System for Saudi Arabia.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link className="text-sm text-white/70 hover:text-white transition-colors" href="/dashboard">Dashboard</Link></li>
                <li><Link className="text-sm text-white/70 hover:text-white transition-colors" href="/plan-comply">Plan & Comply</Link></li>
                <li><Link className="text-sm text-white/70 hover:text-white transition-colors" href="/source-move">Source & Move</Link></li>
                <li><Link className="text-sm text-white/70 hover:text-white transition-colors" href="/staff-manage">Staff & Manage</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">About Us</a></li>
                <li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Contact</a></li>
                <li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a className="text-white/70 hover:text-white transition-colors" href="#"><Facebook className="w-5 h-5" /></a>
                <a className="text-white/70 hover:text-white transition-colors" href="#"><Twitter className="w-5 h-5" /></a>
                <a className="text-white/70 hover:text-white transition-colors" href="#"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2026 Supplify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
