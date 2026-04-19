// src/components/Contact/ContactForm.tsx
'use client';
import React, { useState } from 'react';
import toast from "react-hot-toast";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch('https://formspree.io/f/manbylro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                toast.success("Sent.");
                setFormData({ name: '', email: '', message: '' });
            }
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass = "w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#ff3366] transition-colors text-xl text-white placeholder:text-white/50";

    return (
        <form onSubmit={handleSubmit} className="space-y-10">
            <input 
                type="text" 
                placeholder="NAME" 
                className={inputClass}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
            />
            <input 
                type="email" 
                placeholder="EMAIL" 
                className={inputClass}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
            />
            <textarea 
                placeholder="MESSAGE" 
                rows={4} 
                className={inputClass}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required 
            />
            <button 
                type="submit" 
                disabled={submitting}
                className="text-2xl font-black uppercase tracking-widest hover:text-[#ff3366] transition-colors"
            >
                {submitting ? 'Sending...' : 'Send Message →'}
            </button>
        </form>
    );
}