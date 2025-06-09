import Link from "next/link"
import { Icons } from "@/components/icons";


export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-16 mt-24 border-t border-border">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-0">
        {/* Brand & About */}
        <div>
          <h2 className="text-3xl font-extrabold text-foreground mb-4">StyleStore</h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Discover premium quality fashion products and latest trends all in one place.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">&copy; 2025 StyleStore. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-foreground transition">Home</Link></li>
            <li><Link href="/shop" className="hover:text-foreground transition">Shop</Link></li>
            <li><Link href="/categories" className="hover:text-foreground transition">Categories</Link></li>
            <li><Link href="/new-arrivals" className="hover:text-foreground transition">New Arrivals</Link></li>
            <li><Link href="/sale" className="hover:text-foreground transition">Sale</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-foreground">Customer Service</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/help" className="hover:text-foreground transition">Help Center</Link></li>
            <li><Link href="/returns" className="hover:text-foreground transition">Returns</Link></li>
            <li><Link href="/shipping" className="hover:text-foreground transition">Shipping Info</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
          <address className="not-italic text-sm space-y-3 text-muted-foreground">
            <p>123 Fashion Street</p>
            <p>Karachi, Pakistan</p>
            <p>
              Phone:{" "}
              <a href="tel:+923001234567" className="hover:text-foreground transition">
                +92 300 1234567
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:support@stylestore.com" className="hover:text-foreground transition">
                support@stylestore.com
              </a>
            </p>
          </address>
          <div className="flex space-x-5 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Icons.facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Icons.twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Icons.instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

