"use client"

import * as React from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Facebook, Instagram, Send, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-black bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-2xl font-bold tracking-wider uppercase">Stay in the Loop!</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Sign up for our newsletter for the latest updates on new routes and features.
            </p>
            <form className="relative flex">
              <Input
                type="email"
                placeholder="your.email@example.com"
                className="!rounded-none border-2 border-r-0 border-black"
              />
              <Button
                type="submit"
                size="icon"
                className="!rounded-none border-2 border-black"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">Quick Links</h3>
            <nav className="space-y-2 text-sm uppercase">
              <a href="#about" className="block hover:text-primary">About</a>
              <a href="#features" className="block hover:text-primary">Features</a>
              <a href="#media" className="block hover:text-primary">Media</a>
              <a href="#community" className="block hover:text-primary">Community</a>
              <a href="#faq" className="block hover:text-primary">FAQ</a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Cuti-Cuti Explorer HQ</p>
              <p>Kuala Lumpur, Malaysia</p>
              <p>Email: contact@cuticutiexplorer.my</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold uppercase">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <Button variant="outline" size="icon" className="!rounded-none border-2 border-black">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="!rounded-none border-2 border-black">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="!rounded-none border-2 border-black">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-black pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Cuti-Cuti Explorer. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm uppercase">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  )
} 