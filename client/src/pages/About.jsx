import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaGlobeAmericas,
  FaHeartbeat,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaFire,
  FaCrown,
  FaHandshake,
  FaCode,
} from "react-icons/fa";

const About = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const features = [
    {
      icon: FaRocket,
      title: "Lightning Fast",
      description: "Real-time messaging with instant message delivery",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaUsers,
      title: "Connect Anywhere",
      description: "Reach out to friends and colleagues across the globe",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Private",
      description: "Your conversations are encrypted and protected",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaLightbulb,
      title: "Smart Features",
      description: "AI-powered suggestions and smart notifications",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "100K+", label: "Active Users", icon: FaUsers },
    { number: "50M+", label: "Messages Daily", icon: FaFire },
    { number: "150+", label: "Countries", icon: FaGlobeAmericas },
    { number: "99.9%", label: "Uptime", icon: FaCheckCircle },
  ];

  const faqItems = [
    {
      question: "Is ChatApp really free to use?",
      answer:
        "Yes! ChatApp is completely free to use with all core messaging features. We also offer premium features for power users.",
    },
    {
      question: "How is my data protected?",
      answer:
        "We use end-to-end encryption for all messages. Your data is encrypted on your device and can only be decrypted by the intended recipient.",
    },
    {
      question: "Can I use ChatApp on multiple devices?",
      answer:
        "Absolutely! You can sync your account across all your devices and access your messages anywhere, anytime.",
    },
    {
      question: "What platforms does ChatApp support?",
      answer:
        "ChatApp is available on Web, iOS, and Android. Download the app from the App Store, Google Play, or use our web version.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 10 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          className="hero min-h-[70vh] bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/90 text-primary-content relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated shapes in hero */}
          <motion.div
            className="absolute top-10 right-10 text-6xl opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FaRocket />
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-10 text-5xl opacity-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <FaFire />
          </motion.div>

          <div className="hero-content text-center z-20">
            <motion.div
              className="max-w-3xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="mb-4 inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="badge badge-lg badge-primary gap-2 bg-white/20 text-white border-white/30">
                  <FaCrown className="text-yellow-300" />
                  #1 Messaging Platform
                </span>
              </motion.div>

              <h1 className="mb-5 text-6xl md:text-7xl font-black leading-tight">
                Chat with
                <motion.span
                  className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Confidence
                </motion.span>
              </h1>

              <p className="mb-8 text-xl md:text-2xl font-light opacity-95 leading-relaxed">
                Experience the future of communication. Secure, instant, and
                intuitive messaging at your fingertips.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.button
                  className="btn btn-lg btn-accent group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
                <motion.button
                  className="btn btn-lg btn-outline btn-accent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Quick Stats in Hero */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-4 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">100K+</div>
                  <div className="text-sm opacity-80">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50M+</div>
                  <div className="text-sm opacity-80">Messages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section with Enhanced Design */}
        <motion.div
          className="max-w-7xl mx-auto px-4 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-5xl font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose ChatApp?
            </motion.h2>
            <motion.p
              className="text-lg text-base-content/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Packed with powerful features designed to enhance your
              communication experience
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                variants={itemVariants}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500`}
                />

                {/* Card */}
                <motion.div
                  className="card bg-base-100 shadow-lg relative overflow-hidden border border-base-200 group-hover:border-transparent transition-all duration-500"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Top accent line */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                  />

                  <div className="card-body items-center text-center">
                    <motion.div
                      className={`text-5xl bg-gradient-to-br ${feature.color} bg-clip-text text-transparent mb-3`}
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <feature.icon />
                    </motion.div>
                    <h3 className="card-title text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-base-content/70 group-hover:text-base-content/90 transition-colors">
                      {feature.description}
                    </p>
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      Learn more <FaArrowRight />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="relative bg-gradient-to-r from-primary via-secondary to-accent text-primary-content py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute inset-0"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 20, repeat: Infinity }}
              style={{
                backgroundImage:
                  "linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.1) 50%, rgba(255,255,255,.1) 75%, transparent 75%, transparent)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center group"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                >
                  <motion.div
                    className="inline-block mb-3 text-4xl group-hover:scale-125 transition-transform"
                    whileHover={{ rotate: 20 }}
                  >
                    <stat.icon />
                  </motion.div>
                  <motion.h3
                    className="text-3xl md:text-4xl font-black mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-sm md:text-base opacity-90 font-semibold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission Section - Enhanced */}
        <motion.div
          className="max-w-4xl mx-auto px-4 py-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-2xl border-2 border-primary/20 relative overflow-hidden"
            whileHover={{ borderColor: "var(--color-primary)" }}
          >
            {/* Accent corner */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-full blur-3xl"
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="card-body space-y-6 relative z-10">
              <motion.div
                className="flex items-center gap-3 mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <FaHandshake className="text-2xl text-primary" />
                <h2 className="card-title text-3xl md:text-4xl">Our Mission</h2>
              </motion.div>

              <motion.p
                className="text-lg text-base-content/80 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                At ChatApp, we believe that communication should be effortless,
                secure, and accessible to everyone. Our mission is to break down
                barriers and connect people across the world through instant,
                reliable messaging.
              </motion.p>

              <motion.p
                className="text-lg text-base-content/80 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We're committed to providing a platform that prioritizes user
                privacy, security, and user experience. Every feature is
                designed with you in mind.
              </motion.p>

              <motion.div
                className="pt-4 flex gap-4 flex-wrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {["Secure", "Fast", "Reliable", "User-Centric"].map(
                  (tag, idx) => (
                    <motion.span
                      key={idx}
                      className="badge badge-lg badge-primary gap-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaCheckCircle /> {tag}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section - Enhanced */}
        <motion.div
          className="max-w-6xl mx-auto px-4 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FaHeartbeat,
                title: "Trust & Transparency",
                description:
                  "We believe in complete transparency with our users and building trust through honest communication.",
                gradient: "from-red-500 to-pink-500",
              },
              {
                icon: FaGlobeAmericas,
                title: "Global Community",
                description:
                  "We're building a global community where everyone can connect, regardless of location or background.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: FaCode,
                title: "Innovation",
                description:
                  "We continuously innovate to bring you the best features and user experience.",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((value, idx) => (
              <motion.div key={idx} className="group" variants={itemVariants}>
                <motion.div
                  className={`card bg-gradient-to-br ${value.gradient} p-0.5 h-full relative`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="card bg-base-100 h-full rounded-2xl">
                    <div className="card-body items-center text-center">
                      <motion.div
                        className={`text-5xl bg-gradient-to-br ${value.gradient} bg-clip-text text-transparent mb-3`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <value.icon />
                      </motion.div>
                      <h3 className="card-title text-lg">{value.title}</h3>
                      <p className="text-sm text-base-content/70">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - Enhanced */}
        <motion.div
          className="relative bg-gradient-to-br from-secondary via-primary to-accent text-primary-content py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Animated background shapes */}
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
            <motion.h2
              className="text-5xl font-black"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Join Our Community?
            </motion.h2>
            <motion.p
              className="text-xl opacity-95 max-w-2xl mx-auto font-light"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Start connecting with friends and colleagues today. Experience the
              future of communication with ChatApp.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="btn btn-lg btn-accent font-bold shadow-lg group"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
              <motion.button
                className="btn btn-lg btn-outline btn-accent font-bold"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Section - Enhanced */}
        <motion.div
          className="max-w-6xl mx-auto px-4 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            className="text-center text-base-content/70 mb-12 text-lg"
            variants={itemVariants}
          >
            Join thousands of satisfied users worldwide
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Manager",
                text: "ChatApp has transformed the way our team collaborates. It's intuitive, fast, and reliable.",
                stars: 5,
                avatar: "1",
              },
              {
                name: "Mike Chen",
                role: "Freelancer",
                text: "The best messaging app I've used. Clean interface and amazing performance!",
                stars: 5,
                avatar: "2",
              },
              {
                name: "Emma Williams",
                role: "Team Lead",
                text: "Security and privacy are top-notch. I feel comfortable discussing sensitive matters here.",
                stars: 5,
                avatar: "3",
              },
            ].map((testimonial, idx) => (
              <motion.div key={idx} className="group" variants={itemVariants}>
                <motion.div
                  className="card bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg border border-primary/10 h-full relative overflow-hidden"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Top accent */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                  />

                  <div className="card-body">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + i * 0.1 }}
                        >
                          <FaStar className="text-warning text-lg" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="italic text-base-content/80 mb-4 leading-relaxed flex-1">
                      "{testimonial.text}"
                    </p>
                    <div className="divider my-0"></div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="avatar">
                        <motion.div
                          className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                          whileHover={{ scale: 1.15 }}
                        >
                          <img
                            src={`https://i.pravatar.cc/50?img=${testimonial.avatar}`}
                            alt={testimonial.name}
                          />
                        </motion.div>
                      </div>
                      <div>
                        <p className="font-semibold text-base-content">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-base-content/60">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-4xl mx-auto px-4 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="collapse collapse-plus bg-base-100 border border-base-300 shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <input type="checkbox" checked={expandedFaq === idx} readOnly />
                <div className="collapse-title flex items-center gap-3 font-bold text-lg hover:bg-base-200 transition">
                  <motion.div
                    animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaArrowRight />
                  </motion.div>
                  {item.question}
                </div>
                <motion.div
                  className="collapse-content"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: expandedFaq === idx ? 1 : 0,
                  }}
                >
                  <p className="text-base-content/80 pt-4">{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="max-w-4xl mx-auto px-4 pb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="card bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl text-primary-content relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 15, repeat: Infinity }}
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            <div className="card-body items-center text-center relative z-10">
              <motion.div
                className="text-5xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCheckCircle />
              </motion.div>
              <h3 className="card-title mt-4 text-2xl">
                Join Thousands of Happy Users
              </h3>
              <p className="opacity-90 text-lg">
                Experience the difference that great communication can make.
                Start chatting today!
              </p>
              <motion.button
                className="btn btn-accent btn-lg mt-6 font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up Now
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
