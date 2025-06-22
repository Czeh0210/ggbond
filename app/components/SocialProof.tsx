import React from 'react';
import Image from "next/image";

const testimonials = [
  {
    name: "Ahmad Z.",
    location: "Kuala Lumpur",
    comment: "I never knew learning about my own culture could be this much fun! It's like a treasure hunt through Malaysia.",
    avatar: "/Satu Malaysia.jpg" 
  },
  {
    name: "Sarah L.",
    location: "Penang",
    comment: "My kids are obsessed! They're actually excited to learn about historical sites and traditional foods.",
    avatar: "/Satu Malaysia.jpg"
  },
  {
    name: "David T.",
    location: "Tourist from Australia",
    comment: "An incredible way to see the real Malaysia. I discovered so many hidden gems I would have missed otherwise.",
    avatar: "/Satu Malaysia.jpg"
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 uppercase tracking-wider">Loved by Explorers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-yellow-50 p-6 border-2 border-black shadow-[4px_4px_0px_0px_#000] text-left">
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="pixelated" />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-sm uppercase">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 