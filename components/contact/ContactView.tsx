"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  MailIcon,
} from "@/components/ui/Icons";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon size={18} />;
      case "linkedin":
        return <LinkedinIcon size={18} />;
      case "twitter":
        return <XIcon size={17} />;
      case "email":
        return <MailIcon size={18} />;
      default:
        return null;
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback if clipboard API fails
      setCopiedEmail(false);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Pre-fill mailto client link in background for real message delivery
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Centered Page Header */}
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            align="center"
            eyebrow="GET IN TOUCH"
            title="Let's Build Something Together"
            description="Have a question, opportunity, or interested in collaborating on full-stack or AI projects? Feel free to reach out."
          />
        </div>

        {/* Two-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Direct Info & Social Presence */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status & Availability Card */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Currently exploring Full-Stack Development and LLM Engineering roles. Whether you have a project idea, a position opening, or just want to connect, my inbox is always open.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-950 hover:underline truncate block"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email address"
                  className="p-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-950">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Connect Online
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {socialLinks
                  .filter((item) => item.icon !== "email")
                  .map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/70 text-xs font-semibold text-neutral-800 hover:text-neutral-950 transition-colors"
                    >
                      <span className="text-neutral-700">{getSocialIcon(item.icon)}</span>
                      <span>{item.name}</span>
                    </a>
                  ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500">
                  Fill in the form below and I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 py-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 max-w-sm mx-auto">
                    <h4 className="text-base font-bold text-emerald-950">
                      Message Prepared!
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Thank you, <span className="font-semibold">{formData.name}</span>. Your message was prepared for delivery to <span className="font-semibold">{profile.email}</span>.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 rounded-xl bg-white border border-emerald-300 text-xs font-semibold text-emerald-900 hover:bg-emerald-100 transition-colors cursor-pointer shadow-2xs"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-neutral-800"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Smith"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950/20 ${
                          errors.name
                            ? "border-rose-400 focus:border-rose-500"
                            : "border-neutral-200 focus:border-neutral-950"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-neutral-800"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950/20 ${
                          errors.email
                            ? "border-rose-400 focus:border-rose-500"
                            : "border-neutral-200 focus:border-neutral-950"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold text-neutral-800"
                    >
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Project collaboration / Role opportunity"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950/20 ${
                        errors.subject
                          ? "border-rose-400 focus:border-rose-500"
                          : "border-neutral-200 focus:border-neutral-950"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-neutral-800"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Pranav, I came across your portfolio and would like to discuss..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950/20 resize-y ${
                        errors.message
                          ? "border-rose-400 focus:border-rose-500"
                          : "border-neutral-200 focus:border-neutral-950"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 disabled:bg-neutral-400 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
