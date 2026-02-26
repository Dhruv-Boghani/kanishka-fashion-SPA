import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Diamond, BadgeCheck, Store } from "lucide-react";

// Common floating animation for small decorative elements
const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const features = [
  {
    icon: <Store className="w-6 h-6 text-emerald-500" />,
    title: "Surat's Finest",
    description:
      "Direct from the textile hub, ensuring authentic fabrics and unmatched quality.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-emerald-500" />,
    title: "Wholesale & Retail",
    description:
      "The best rates, perfectly tailored whether you buy one piece or one hundred.",
  },
  {
    icon: <Diamond className="w-6 h-6 text-emerald-500" />,
    title: "Unbeatable Pricing",
    description: "Premium, luxurious fashion that fits your budget perfectly.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/20 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase mb-4 text-sm">
              <Sparkles className="w-4 h-4" />
              Our Story
              <Sparkles className="w-4 h-4" />
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Welcome to Kanishka Fashion
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Where Elegance Meets Affordability
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Located in the textile heart of Surat, Kanishka Fashion is your
              ultimate destination for premium women's clothing. Whether you are
              looking for wholesale bulk orders or a single beautiful piece for
              your wardrobe, we bridge the gap between high-end fashion and
              everyday affordability.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              <strong className="font-semibold text-slate-800 dark:text-slate-200">
                Our mission is simple:
              </strong>{" "}
              to provide the absolute best quality ethnic and modern wear at the
              lowest possible prices.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Collections List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Premium Collection
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-light">
                We offer a massive, carefully curated selection of women's
                apparel designed for every occasion.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Trendy Western & Indo-Western
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      Stylish Dresses, Modern Co-ord Sets, and Elegant Tunics.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Versatile Bottoms
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      Premium Pencil Pants and Comfortable Leggings.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block mb-1">
                      Our Pride – The Saree Collection
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      A beautiful variety of traditional and modern sarees,
                      featuring luxurious Pashmina and classic Kalamkari prints.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side: The Specialty Card (Floating) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              {...floatAnimation}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl shadow-emerald-500/10 dark:shadow-slate-950 border border-emerald-100 dark:border-emerald-900/30 relative overflow-hidden"
            >
              {/* Decorative glowing orb inside card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl" />

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
                The Kanishka Specialty
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed relative z-10">
                What truly sets us apart is our signature{" "}
                <strong>3-Piece Suit Pair Collection</strong>. We are incredibly
                proud to offer the highly sought-after{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Jaipuri 60/60 Pure Cotton 3-Piece Suits
                </span>
                .
              </p>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 relative z-10">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  "We guarantee that you will find these top-tier suit sets at
                  the best, most affordable prices in the market—without ever
                  compromising on quality."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Shop With Us Grid */}
        <div className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Why Shop With Us?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 shadow-inner">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
