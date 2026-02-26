import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
} from "lucide-react";

const contactInfo = [
  {
    icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
    title: "WhatsApp",
    value: "+91 8238330770",
    href: "https://wa.me/918238330770",
    color: "group-hover:text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: <Phone className="w-6 h-6 text-blue-500" />,
    title: "Phone",
    value: "+91 8238330770",
    href: "tel:+918238330770",
    color: "group-hover:text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: <MapPin className="w-6 h-6 text-rose-500" />,
    title: "Location",
    value: "Surat, Gujarat, India",
    href: "https://l.instagram.com/?u=https%3A%2F%2Fmaps.app.goo.gl%2FCEXex4fGwdhBTmSz8%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnrgK3Y5d-8sjWjVh7SFobnGBWVGKIWa1XcW8f9lCgKh0oL-47oXFTiXuTUME_aem_muZrQ_gxViMMTFp5MXJCAg&e=AT7Zsg1z8g83l12Q_oyYUp3ZH2iN4a6EO8lTbEKYAOiqrWKcQrdT4uHluOaUQrZt3xnTJ9n0d2o6yfGj50_Ee9Czc734wDg-vpQz2AQxoG6PxCFd2gf8q5UA2A",
    color: "group-hover:text-rose-500",
    bg: "bg-rose-100 dark:bg-rose-900/30",
  },
];

const socialLinks = [
  {
    icon: (
      <Instagram className="w-8 h-8 text-pink-500 group-hover:text-white transition-colors duration-300" />
    ),
    name: "Instagram",
    href: "https://www.instagram.com/kanishkafashionsurat/",
    hoverColor: "hover:bg-pink-500 hover:text-white dark:hover:bg-pink-600",
    hoverShadow: "hover:shadow-pink-500/25",
  },
  {
    icon: (
      <Facebook className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
    ),
    name: "Facebook",
    href: "https://www.facebook.com/KanishkaFashionSurat/",
    hoverColor: "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600",
    hoverShadow: "hover:shadow-blue-600/25",
  },
  {
    icon: (
      <Youtube className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
    ),
    name: "YouTube",
    href: "https://www.youtube.com/@KanishkaFasionSurat",
    hoverColor: "hover:bg-red-500 hover:text-white dark:hover:bg-red-600",
    hoverShadow: "hover:shadow-red-500/25",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-emerald-100/30 dark:bg-emerald-900/10 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have questions about bulk orders or our latest collections? We're
            just a message away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Direct Contact Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Direct Contact
            </h3>
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-6 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800/50 shadow-sm hover:shadow-xl dark:shadow-none transition-all hover:-translate-y-1 block cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${contact.bg} group-hover:scale-110 transition-transform`}
                >
                  {contact.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">
                    {contact.title}
                  </p>
                  <p
                    className={`text-xl font-bold text-slate-900 dark:text-white transition-colors ${contact.color}`}
                  >
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="h-full flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Follow Our Journey
            </h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-grow bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
              {/* Decorative inner circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-slate-200 dark:border-slate-700/50 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-slate-200 dark:border-slate-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
                Connect With Us
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-10 relative z-10">
                Stay updated with our latest collections, exclusive offers, and
                behind-the-scenes moments.
              </p>

              <div className="flex flex-wrap justify-center gap-6 relative z-10">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-20 h-20 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md ${social.hoverShadow} flex flex-col items-center justify-center gap-2 transition-all ${social.hoverColor}`}
                  >
                    {/* We use cloneElement to dynamically apply group-hover logic to SVGs depending if tailwind inherits colors natively. Lucide icons inherit 'currentColor' closely. */}
                    <div className="group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
