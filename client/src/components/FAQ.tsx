import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is it legal to download TikTok videos?",
    answer:
      "Downloading TikTok videos for personal use is generally acceptable, but redistributing or using them commercially may infringe on copyright. Always respect the original creator's rights and TikTok's terms of service.",
  },
  {
    question: "Why would I want to remove the watermark?",
    answer:
      "Many users prefer to remove watermarks for cleaner videos when sharing with friends, creating compilations, or saving content for personal viewing without branding.",
  },
  {
    question: "Is this service completely free?",
    answer:
      "Yes, our TikTok video downloader is completely free to use with no hidden costs or limitations on the number of downloads.",
  },
  {
    question: "How do I find the TikTok video URL?",
    answer:
      "In the TikTok app, tap 'Share' on the video you want to download, then select 'Copy Link'. On the TikTok website, copy the URL from your browser's address bar.",
  },
  {
    question: "Can I download private TikTok videos?",
    answer:
      "No, our service can only download public TikTok videos. Private videos are not accessible without proper authorization.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 text-left font-semibold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 border-t border-gray-100 text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
