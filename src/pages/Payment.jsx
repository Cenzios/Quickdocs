import React from "react";
import { CreditCard, CheckCircle } from "lucide-react";
import mobile from "../assets/mobile.png";

const Payment = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Flexible Payments Options
          </h2>
          <p className="text-gray-600 mx-auto max-w-md md:max-w-full md:whitespace-nowrap">
            Choose a payment structure that works best for your project and
            budget.
          </p>
        </div>

        {/* Mobile Illustration - Only on mobile */}
        <div className="md:hidden flex justify-center mb-8">
          <img
            src={mobile}
            alt="Payment Illustration"
            className="w-64 h-40 object-contain"
          />
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Advance Payment Option */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Advance Payment
              </h3>
              <p className="text-blue-600 font-semibold">40% Upfront</p>
            </div>

            <p className="text-gray-600  mb-8 leading-relaxed">
              Secure your project with an advance payment to begin work
              immediately.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Project initiation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Priority scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Sample development</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Dedicated support</span>
              </div>
            </div>
          </div>

          {/* Full Payment Option */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Full Payment
              </h3>
              <p className="text-blue-600 font-semibold">After Approval</p>
            </div>

            <p className="text-gray-600  mb-8 leading-relaxed">
              Complete the remaining payment after final approval and
              satisfaction.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Final document delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Unlimited revisions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Format variations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Future support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
