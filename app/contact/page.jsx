import React from 'react';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us | Lavita Malam Jabba',
  description: 'Get in touch with our concierge for reservations, investment opportunities, and curated alpine experiences.',
};

const ContactPage = () => {
  return (
    <main className="bg-midnight-pine min-h-screen text-alabaster-mist overflow-hidden">
      <ContactForm />
    </main>
  );
};

export default ContactPage;