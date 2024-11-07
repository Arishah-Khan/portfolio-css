"use client";
import { useState } from 'react';
import Swal from 'sweetalert2';
import '@/styles/contact.css'; 


export default function ContactMe() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const response = await fetch('https://formspree.io/f/xkgnndwy', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.ok) {
            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Your message has been sent successfully.',
                });
                form.reset();
            }, 100);
        } else {
            console.error('Form submission failed:', response.statusText);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Please try again later.',
            });
        }

        setLoading(false);
    };

    return (
        <section className="section-contact">
            <div className="contact-container">
                <h2 className="contact-title">
                    Get In Touch
                </h2>
                <p className="contact-description">
                    Have any questions? Feel free to send a message.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="flex-gap">
                        <div className="input-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="input-field"
                                placeholder="Name"
                            />
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                required
                                className="input-field"
                                placeholder="Surname"
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <input
                            type="tel"
                            id="phNum"
                            name="phNum"
                            required
                            className="input-field"
                            placeholder="Phone Number"
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="input-field"
                            placeholder="Email"
                        />
                    </div>

                    <div className="input-group">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="textarea-field"
                            placeholder="Your Message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`submit-button ${loading ? 'disabled' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}
