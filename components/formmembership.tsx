"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function MembershipForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_zwiu1fq",   // ✅ your service ID
        "template_lquwsyb",  // ✅ your template ID
        formRef.current,
        "rL1keWsfZqDjIVl6P"  // ✅ your public key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset(); // ✅ safe reset
        },
        (error) => {
          console.error("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="membership" className="relative py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            Membership Application Form
          </h2>
          <p className="text-slate-600">
            Fill in the details below to become a member of{" "}
            <span className="font-semibold">RAJSME ENTERPRISES ASSOCIATION</span>
          </p>
        </div>

        <Card className="shadow-lg border-0 bg-white">
          <CardContent className="p-8">
            {!success ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* --- BASIC DETAILS --- */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-700">
                    1. Basic Details of the Applicant
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="enterpriseName" placeholder="Enterprise / Organization" required className="border p-2 rounded w-full" />
                    <input name="ownerName" placeholder="Owner / Proprietor / Director" required className="border p-2 rounded w-full" />
                    <select name="organizationType" required className="border p-2 rounded w-full">
                      <option value="">Select Organization Type</option>
                      <option>Proprietorship</option>
                      <option>Partnership</option>
                      <option>Pvt. Ltd.</option>
                      <option>LLP</option>
                      <option>Trusteeship</option>
                      <option>Others</option>
                    </select>
                    <input name="establishmentDate" type="date" required className="border p-2 rounded w-full" />
                    
                    <input name="udyamNumber" placeholder="UDYAM Registration No." className="border p-2 rounded w-full" />
                    <input name="panNumber" placeholder="PAN Number" required className="border p-2 rounded w-full" />
                    <input name="gstNumber" placeholder="GST Number" className="border p-2 rounded w-full" />
                  </div>
                </div>

                {/* --- CONTACT INFO --- */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-700">
                    2. Contact Information
                  </h3>
                  <textarea name="officeAddress" placeholder="Registered Office Address" required className="border p-2 rounded w-full" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <input name="city" placeholder="City" required className="border p-2 rounded w-full" />
                    <input name="district" placeholder="District" required className="border p-2 rounded w-full" />
                    <input name="state" placeholder="State" required className="border p-2 rounded w-full" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <input name="pincode" placeholder="Pin Code" required className="border p-2 rounded w-full" />
                    <input name="email" type="email" placeholder="Email ID" required className="border p-2 rounded w-full" />
                    <input name="contactNumber" placeholder="Contact Number" required className="border p-2 rounded w-full" />
                  </div>
                </div>

                {/* --- NATURE OF BUSINESS --- */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-700">
                    3. Nature of Business
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <label><input type="checkbox" name="businessNature" value="Manufacturing" /> Manufacturing</label>
                    <label><input type="checkbox" name="businessNature" value="Service" /> Service</label>
                    <label><input type="checkbox" name="businessNature" value="Trading" /> Trading</label>
                    <label><input type="checkbox" name="businessNature" value="Export/Import" /> Export/Import</label>
                    <label><input type="checkbox" name="businessNature" value="Others" /> Others</label>
                  </div>
                  <textarea name="businessDescription" placeholder="Brief Description of Products / Services" required className="border p-2 rounded w-full" />
                </div>

                {/* --- MEMBERSHIP FEE --- */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-700">
                    4. Membership Fee
                  </h3>
                  <select name="membershipCategory" required className="border p-2 rounded w-full">
                    <option value="">Select Membership Category</option>
                    <option>Manufacturing and Service Industries - ₹5000 (2 Years)</option>
                    <option>Traditional Craft-Based Artisan Units - ₹1000 (2 Years)</option>
                  </select>
                </div>

                {/* --- DECLARATION --- */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-700">
                    5. Declaration by the Applicant
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    I hereby declare that the information provided above is true and correct to the best of my knowledge.
                    I agree to abide by the rules and regulations of{" "}
                    <span className="font-semibold">RAJSME ENTERPRISES ASSOCIATION</span> and actively participate in its activities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <input name="date" type="date" required className="border p-2 rounded w-full" />
                    <input name="place" placeholder="Place" required className="border p-2 rounded w-full" />
                    <input name="signature" placeholder="Signature / Applicant Name" required className="border p-2 rounded w-full" />
                  </div>
                </div>

                {/* --- SUBMIT BUTTON --- */}
                <div className="text-center pt-6">
                  <Button type="submit" size="lg" disabled={loading} className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            ) : (
              // --- SUCCESS / THANK YOU SCREEN ---
              <div className="text-center py-16">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Thank You for Applying!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Your membership application has been submitted successfully.
                  Our team will review your details and get back to you shortly.
                </p>
                <Button
                  size="lg"
                  className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-8"
                  onClick={() => setSuccess(false)}
                >
                  Submit Another Application
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
