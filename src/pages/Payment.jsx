import React from "react";
import { CreditCard, CheckCircle, Settings } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Initial Deposit */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Initial Deposit
              </h3>
              <p className="text-blue-600 font-semibold">
                40% (After Sample Approval)
              </p>
            </div>

            <p className="text-gray-600  mb-8 leading-relaxed">
              Secure your project and initiate preliminary work after the
              approval of your sample document
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Project initiation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">
                  Sample document finalization
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">
                  Dedicated project manager assigned
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Priority scheduling</span>
              </div>
            </div>
          </div>

          {/* Production phase payment */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Production Phase Payment
              </h3>
              <p className="text-blue-600 font-semibold">
                40% (After First Meeting for Final Document)
              </p>
            </div>

            <p className="text-gray-600  mb-8 leading-relaxed">
              Proceed with the full development of your project after reviewing
              the final document plan in our initial meeting.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">
                  Full document development begins
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Regular progress updates</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">
                  Initial rounds of revisions
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">
                  Continuous dedicated support
                </span>
              </div>
            </div>
          </div>
          {/* Final Completion */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Final Completion
              </h3>
              <p className="text-blue-600 font-semibold">
                20% (Upon Final Delivery)
              </p>
            </div>

            <p className="text-gray-600  mb-8 leading-relaxed">
              Complete your payment after the successful delivery and your final
              satisfaction with the completed project.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Final document delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Post-delivery support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">
                  Any remaining minor adjustments
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Project handover</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
