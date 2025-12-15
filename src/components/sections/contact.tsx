"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { SectionTitle } from "../ui/section-title";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! (Simulação)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Tem um projeto em mente? Vamos conversar!"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-theme mb-4">
                Vamos trabalhar juntos!
              </h3>
              <p className="text-theme-muted">
                Estou sempre aberto a novos projetos e oportunidades. Se você tem
                uma ideia ou precisa de ajuda com seu projeto, não hesite em
                entrar em contato.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 glass-card rounded-2xl transition-all duration-300 group"
              >
                <div className="p-3 glass-badge rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-theme" />
                </div>
                <div>
                  <p className="text-sm text-theme-subtle">
                    Email
                  </p>
                  <p className="font-medium text-theme">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 glass-card rounded-2xl transition-all duration-300 group"
              >
                <div className="p-3 glass-badge rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-theme" />
                </div>
                <div>
                  <p className="text-sm text-theme-subtle">
                    Telefone
                  </p>
                  <p className="font-medium text-theme">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                <div className="p-3 glass-badge rounded-xl">
                  <MapPin className="w-6 h-6 text-theme" />
                </div>
                <div>
                  <p className="text-sm text-theme-subtle">
                    Localização
                  </p>
                  <p className="font-medium text-theme">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-theme mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass-badge text-theme placeholder:text-theme-subtle focus:ring-2 focus:ring-[var(--primary)]/50 focus:outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-theme mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass-badge text-theme placeholder:text-theme-subtle focus:ring-2 focus:ring-[var(--primary)]/50 focus:outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-theme mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl glass-badge text-theme placeholder:text-theme-subtle focus:ring-2 focus:ring-[var(--primary)]/50 focus:outline-none transition-all resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
