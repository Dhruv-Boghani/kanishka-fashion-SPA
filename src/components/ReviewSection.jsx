import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

const initialReviews = [
  //   {
  //     id: 1,
  //     name: "Sarah Jenkins",
  //     rating: 5,
  //     description:
  //       "Absolutely stunning quality! The fabric feels premium, and the fit is just perfect. Kanishka Fashion really understands modern elegance.",
  //     date: "Oct 12, 2025",
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Chen",
  //     rating: 4,
  //     description:
  //       "Great design and very comfortable. I bought the summer collection shirt and it's my new favorite piece. Highly recommend.",
  //     date: "Nov 03, 2025",
  //   },
  //   {
  //     id: 3,
  //     name: "Emily Rodriguez",
  //     rating: 5,
  //     description:
  //       "The attention to detail is incredible. Even the packaging felt luxurious. I'll definitely be ordering again soon!",
  //     date: "Dec 15, 2025",
  //   },
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rating: 5,
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch reviews from Postgres DB on component mount
  useEffect(() => {
    fetch("http://localhost:3001/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        // Only replace if we got valid data from the DB
        if (Array.isArray(data) && data.length > 0) {
          setReviews(data);
        }
      })
      .catch((err) => console.error("Failed to fetch reviews from DB:", err));
  }, []);

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
        ).toFixed(1)
      : 0;

  // Sort by rating to show the best ones first, otherwise use chronological order
  const displayedReviews = showAll
    ? reviews
    : [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 4);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:3001/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newReview = await response.json();
        setReviews([newReview, ...reviews]);
        setFormData({ name: "", description: "", rating: 5 });
      }
    } catch (err) {
      console.error("Failed to submit review to DB:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reviews"
      className="py-16 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Scroll Reveal Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
          Loved by Thousands
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Discover why our customers choose Kanishka Fashion for their daily
          elegance.
        </p>

        {/* Overall Rating Stats */}
        {reviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-3 sm:gap-4 bg-emerald-50 dark:bg-emerald-900/20 px-5 sm:px-6 py-3 sm:py-4 rounded-3xl border border-emerald-100 dark:border-emerald-800/30 shadow-sm">
              <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                {averageRating}
              </span>
              <div className="flex flex-col items-start gap-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(averageRating)
                          ? "fill-emerald-400 text-emerald-400"
                          : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Based on{" "}
                  <strong className="text-slate-900 dark:text-white">
                    {reviews.length}
                  </strong>{" "}
                  reviews
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Review Form - Antigravity Floating style */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none h-fit"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Share Your Experience
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating System */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Overall Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= (hoveredRating || formData.rating)
                          ? "fill-emerald-400 text-emerald-400"
                          : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="desc"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Review
              </label>
              <textarea
                id="desc"
                required
                rows="4"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none resize-none"
                placeholder="What did you like about the product?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-white font-semibold transition-all shadow-lg active:scale-95 ${
                isSubmitting
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </motion.div>

        {/* Reviews Grid */}
        <div className="lg:col-span-7 flex flex-col mt-8 lg:mt-0 lg:h-[calc(100vh-100px)]">
          <div
            className={`transition-all duration-500 ease-in-out ${showAll ? "max-h-[700px] overflow-y-auto pr-4 custom-scrollbar" : ""}`}
          >
            <div className="columns-1 md:columns-2 gap-6">
              {displayedReviews.map((review, index) => (
                <div key={review.id} className="break-inside-avoid mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-slate-800/50 transition-all flex flex-col h-full"
                  >
                    <div className="flex justify-between items-start mb-5">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "fill-emerald-400 text-emerald-400" : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium whitespace-nowrap ml-2">
                        {review.date}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow italic">
                      "{review.description}"
                    </p>

                    <div className="flex items-center gap-3 mt-auto pt-5 border-t border-slate-100 dark:border-slate-800/50">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                          {review.name}
                        </h4>
                        {/* <span className="text-xs text-emerald-500 flex items-center gap-1 mt-0.5 font-medium">
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          Verified Buyer
                        </span> */}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {reviews.length > 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-8 lg:mt-10"
            >
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 shadow-sm active:scale-95"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
