"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, HelpCircle, MessageCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoElite"
          button={{ text: "Get Quote", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Find Your Perfect Ride"
          description="Discover premium vehicles with unmatched quality, exceptional service, and competitive financing options tailored to your needs."
          tag="Premium Dealership"
          tagIcon={Star}
          buttons={[
            { text: "Browse Cars", href: "inventory" },
            { text: "Get Financing", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/12982564/pexels-photo-12982564.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury car showroom with premium vehicles"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="AutoElite"
          description={[
            "We've been connecting drivers with their dream cars for over 15 years, building a reputation for quality, trust, and exceptional customer service.",
            "Our extensive inventory features carefully selected vehicles from top manufacturers, each thoroughly inspected to ensure the highest standards of performance and reliability."
          ]}
          buttons={[{ text: "Our Story", href: "about" }]}
          showBorder={true}
        />
      </div>

      <div id="inventory" data-section="inventory">
        <ProductCardOne
          title="Featured Vehicles"
          description="Explore our hand-picked selection of premium vehicles, each offering exceptional quality and performance."
          tag="Best Sellers"
          tagIcon={Award}
          products={[
            {
              id: "sedan-1",
              name: "BMW 5 Series Sedan",
              price: "$45,900",
              imageSrc: "https://images.pexels.com/photos/3541743/pexels-photo-3541743.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "BMW 5 Series luxury sedan"
            },
            {
              id: "suv-1",
              name: "Mercedes-Benz GLE SUV",
              price: "$62,500",
              imageSrc: "https://images.pexels.com/photos/13101559/pexels-photo-13101559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mercedes-Benz GLE premium SUV"
            },
            {
              id: "sports-1",
              name: "Porsche 911 Carrera",
              price: "$98,700",
              imageSrc: "https://images.pexels.com/photos/17623967/pexels-photo-17623967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Porsche 911 Carrera sports car"
            },
            {
              id: "electric-1",
              name: "Tesla Model S",
              price: "$89,900",
              imageSrc: "https://images.pexels.com/photos/5158167/pexels-photo-5158167.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tesla Model S electric vehicle"
            }
          ]}
          buttons={[{ text: "View All Inventory", href: "https://autoelite.com/inventory" }]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who found their perfect vehicle with us."
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              handle: "@mchen_auto",
              testimonial: "Outstanding service from start to finish. The team helped me find exactly what I was looking for and made the financing process incredibly smooth.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "2",
              name: "Sarah Rodriguez",
              handle: "@sarah_drives",
              testimonial: "I've never had such a pleasant car buying experience. The staff was knowledgeable, honest, and truly cared about finding me the right vehicle within my budget.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Rodriguez"
            },
            {
              id: "3",
              name: "James Wilson",
              handle: "@jwilson_cars",
              testimonial: "The quality of their pre-owned vehicles is exceptional. My car has been running perfectly for two years now. Highly recommend AutoElite!",
              imageSrc: "https://images.pexels.com/photos/7144186/pexels-photo-7144186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "4",
              name: "Emily Davis",
              handle: "@emily_automotive",
              testimonial: "Professional, reliable, and trustworthy. They went above and beyond to ensure I was completely satisfied with my purchase.",
              imageSrc: "https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Davis"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our vehicles, financing, and services."
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What financing options do you offer?",
              content: "We offer competitive financing through multiple lenders including banks, credit unions, and manufacturer financing. Our finance team works to find the best rates and terms for your situation, with options for all credit levels."
            },
            {
              id: "2",
              title: "Do you accept trade-ins?",
              content: "Yes! We accept trade-ins and offer competitive appraisals. Our team will evaluate your vehicle and provide a fair market value that can be applied toward your purchase."
            },
            {
              id: "3",
              title: "What warranty comes with your vehicles?",
              content: "All our vehicles come with comprehensive warranties. New cars include full manufacturer warranties, while certified pre-owned vehicles come with extended warranties and thorough multi-point inspections."
            },
            {
              id: "4",
              title: "Can I schedule a test drive online?",
              content: "Absolutely! You can schedule test drives through our website or by calling our showroom. We recommend scheduling in advance to ensure your preferred vehicle is available."
            },
            {
              id: "5",
              title: "Do you offer vehicle delivery services?",
              content: "Yes, we offer complimentary delivery within 50 miles of our dealership. For customers outside this area, we can arrange delivery for a small fee."
            },
            {
              id: "6",
              title: "What maintenance services do you provide?",
              content: "Our full-service center offers everything from routine maintenance to major repairs. We use genuine parts and our technicians are factory-trained on all major brands."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Find Your Perfect Car?"
          description="Get in touch with our team to schedule a test drive, discuss financing options, or ask any questions about our inventory."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "vehicle", type: "text", placeholder: "Vehicle of Interest", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your needs, budget, or any questions you have...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Inventory",
              items: [
                { label: "New Cars", href: "inventory" },
                { label: "Pre-Owned", href: "inventory" },
                { label: "Certified Pre-Owned", href: "inventory" },
                { label: "Luxury Vehicles", href: "inventory" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Financing", href: "financing" },
                { label: "Trade-In Appraisal", href: "trade" },
                { label: "Service Center", href: "service" },
                { label: "Parts & Accessories", href: "parts" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "careers" },
                { label: "Reviews", href: "testimonials" }
              ]
            }
          ]}
          copyrightText="© 2025 | AutoElite Premium Motors"
        />
      </div>
    </ThemeProvider>
  );
}