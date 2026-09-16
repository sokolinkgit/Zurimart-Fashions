import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/stores';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const FAQS = [
    {
      q: 'How does Countrywide Delivery work across Kenya?',
      a: 'We deliver to all 47 counties in Kenya! For customers in Nairobi and Murang’a town, we offer same-day doorstep motorbike delivery within 2 to 4 hours. For upcountry towns (Mombasa, Nakuru, Eldoret, Kisumu, Nyeri, Meru, etc.), we dispatch via trusted courier partners (G4S Kenya, Wells Fargo, Easy Coach, or 2NK Sacco) and your parcel arrives within 24 hours. We share your tracking parcel number on WhatsApp immediately upon dispatch.'
    },
    {
      q: 'Where are your physical shops located and can I try clothes on?',
      a: 'Yes, absolutely! We have 2 physical branches: Shop 1 is in Kawangware (Nairobi) along Naivasha Road near Stage 46 / BP Petrol Station. Shop 2 is in Murang’a Town CBD along Uhuru Highway opposite the Municipal Market. Both branches have clean, private fitting rooms where you can try on different sizes and get styling advice before buying.'
    },
    {
      q: 'How do I place an order via WhatsApp?',
      a: 'Ordering is very simple! You can click the "Order on WhatsApp" button on any product card or in your shopping bag. This automatically opens WhatsApp with our official line (0724293125) and pre-fills your chosen item, size, color, and delivery location. Our attendant will confirm stock, provide M-Pesa payment details, and arrange immediate delivery.'
    },
    {
      q: 'Tell me about the Men’s Section and its scalability?',
      a: 'While Zurimart Fashions is primarily celebrated for our chic Ladies Fashion Boutique, we have built a dedicated scalable Men’s Section! Currently featuring casual resort shirts, African craft wear, and smart-casual blazers, this line is actively expanding. If you need matching couple sets or specific men’s designs, message us on WhatsApp 0724293125 and we can tailor or source it for you!'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept M-Pesa Buy Goods Till, M-Pesa Send Money, and cash upon in-store collection at our Kawangware and Murang’a shops. For countrywide parcel delivery, payment is verified prior to parcel dispatch at the courier station.'
    },
    {
      q: 'What happens if a size does not fit me?',
      a: 'We offer hassle-free size exchanges within 48 hours of receipt. Just bring the item with its tags intact to our Kawangware or Murang’a shop, or send it back via courier, and we will swap it for your preferred size.'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF6F0] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif-luxury text-3xl font-bold text-stone-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Everything you need to know about shopping, store visits, and countrywide delivery at Zurimart Fashions.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-stone-900 hover:text-rose-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center bg-white p-6 rounded-3xl border border-stone-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-stone-900">Still have a question?</h4>
            <p className="text-xs text-stone-500">We respond on WhatsApp in under 5 minutes!</p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Zurimart Fashions! I have a question.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp: 0724 293 125</span>
          </a>
        </div>

      </div>
    </section>
  );
}
