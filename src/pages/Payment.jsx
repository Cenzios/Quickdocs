import React from "react";
import { CreditCard, CheckCircle, Settings } from "lucide-react";
import { motion } from "framer-motion";
import mobile from "../assets/mobile.png";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Payment = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Flexible Payment Options
          </h2>
          <p className="text-gray-600 mx-auto max-w-md md:max-w-full md:whitespace-nowrap">
            Choose a payment structure that works best for your project and
            budget.
          </p>
        </motion.div>

        {/* Mobile Illustration - Only on mobile */}
        <motion.div
          className="md:hidden flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <img
            src={mobile}
            alt="Payment Illustration"
            className="w-64 h-40 object-contain"
          />
        </motion.div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <CreditCard className="w-8 h-8 text-white" />,
              title: "Initial Deposit",
              subtitle: "40% (After Sample Approval)",
              desc: "Secure your project and initiate preliminary work after the approval of your sample document",
              points: [
                "Project initiation",
                "Sample document finalization",
                "Dedicated project manager assigned",
                "Priority scheduling",
              ],
            },
            {
              icon: <Settings className="w-8 h-8 text-white" />,
              title: "Production Phase Payment",
              subtitle: "40% (After First Meeting for Final Document)",
              desc: "Proceed with the full development of your project after reviewing the final document plan in our initial meeting.",
              points: [
                "Full document development begins",
                "Regular progress updates",
                "Initial rounds of revisions",
                "Continuous dedicated support",
              ],
            },
            {
              icon: <CheckCircle className="w-8 h-8 text-white" />,
              title: "Final Completion",
              subtitle: "20% (Upon Final Delivery)",
              desc: "Complete your payment after the successful delivery and your final satisfaction with the completed project.",
              points: [
                "Final document delivery",
                "Post-delivery support",
                "Any remaining minor adjustments",
                "Project handover",
              ],
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                >
                  {plan.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-blue-600 font-semibold">{plan.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">{plan.desc}</p>

              {/* Features */}
              <div className="space-y-4">
                {plan.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payment;
