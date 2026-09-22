"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Send, CheckCircle2, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "MVP Development",
    timeline: "1–2 Months",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);

    try {
      // Free Web3Forms / Formspree or custom API submission handler
      // Sends instant email notification to ashishjangde54@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "73a2f159-f6e0-4e6a-8cec-d993bbee3635",
          name: formData.name,
          email: formData.email,
          company: formData.company || "N/A",
          subject: `New Freelance Project Inquiry from ${formData.name}`,
          message: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Project Type: ${formData.projectType}
Timeline: ${formData.timeline}

Project Description:
${formData.description}
          `,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error("The inquiry service did not confirm delivery.");
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Your inquiry could not be sent right now. Please email me directly or try again in a moment.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCalendly = () => {
    window.open("https://calendly.com/ashishjangde54/new-meeting", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-left">
      <Card className="border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl shadow-2xl relative overflow-hidden text-white">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 -z-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <CardHeader className="pb-6 border-b border-zinc-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-white">
              Tell me about your product.
            </CardTitle>
            <CardDescription className="text-xs text-zinc-400 mt-1">
              Share the essentials and I&apos;ll reply with practical engineering feedback and clear next steps.
            </CardDescription>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpenCalendly}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all cursor-pointer shadow-2xs shrink-0 self-start sm:self-auto"
          >
            <Calendar className="size-3.5" /> Book a 30-min Call
          </motion.button>
        </CardHeader>

        <CardContent className="pt-6">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-12 text-center"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto">
                <CheckCircle2 className="size-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Project Inquiry Received!</h4>
              <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Your request was delivered, and I&apos;ll follow up by email after reviewing the project details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-emerald-400 underline hover:text-emerald-300 pt-2 cursor-pointer inline-block"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form id="contact-inquiry-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
              {submitError && (
                <Alert variant="destructive">
                  <AlertCircle aria-hidden="true" />
                  <AlertTitle>Message not sent</AlertTitle>
                  <AlertDescription>{submitError}</AlertDescription>
                </Alert>
              )}

              <FieldGroup className="gap-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="name" className="font-mono text-xs text-zinc-400">
                    Your Name <span className="text-emerald-400">*</span>
                    </FieldLabel>
                    <Input
                      id="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-10 border-zinc-800 bg-zinc-900/90 text-xs text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email" className="font-mono text-xs text-zinc-400">
                      Work Email <span className="text-emerald-400">*</span>
                    </FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-10 border-zinc-800 bg-zinc-900/90 text-xs text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="company" className="font-mono text-xs text-zinc-400">
                      Company / Startup
                    </FieldLabel>
                    <Input
                      id="company"
                      placeholder="e.g. Acme Health"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-10 border-zinc-800 bg-zinc-900/90 text-xs text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="projectType" className="font-mono text-xs text-zinc-400">
                      Project Type
                    </FieldLabel>
                    <Select
                      value={formData.projectType}
                      onValueChange={(val) => setFormData({ ...formData, projectType: val || "" })}
                    >
                      <SelectTrigger id="projectType" className="h-10 w-full cursor-pointer border-zinc-800 bg-zinc-900/90 text-xs text-white focus:border-emerald-500">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent className="border-zinc-800 bg-zinc-900 text-white shadow-xl">
                        <SelectGroup>
                          <SelectItem value="MVP Development" className="text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 focus:bg-emerald-500/20 focus:text-emerald-300 data-[highlighted]:bg-emerald-500/20 data-[highlighted]:text-emerald-300 cursor-pointer">MVP Development</SelectItem>
                          <SelectItem value="Full-Stack Web App" className="text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 focus:bg-emerald-500/20 focus:text-emerald-300 data-[highlighted]:bg-emerald-500/20 data-[highlighted]:text-emerald-300 cursor-pointer">Full-Stack Web App</SelectItem>
                          <SelectItem value="Backend Systems & APIs" className="text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 focus:bg-emerald-500/20 focus:text-emerald-300 data-[highlighted]:bg-emerald-500/20 data-[highlighted]:text-emerald-300 cursor-pointer">Backend Systems & APIs</SelectItem>
                          <SelectItem value="Infrastructure & DB" className="text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 focus:bg-emerald-500/20 focus:text-emerald-300 data-[highlighted]:bg-emerald-500/20 data-[highlighted]:text-emerald-300 cursor-pointer">Infrastructure & DB</SelectItem>
                          <SelectItem value="Technical Consultation" className="text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 focus:bg-emerald-500/20 focus:text-emerald-300 data-[highlighted]:bg-emerald-500/20 data-[highlighted]:text-emerald-300 cursor-pointer">Technical Consultation</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="timeline" className="font-mono text-xs text-zinc-400">
                    Preferred Timeline
                  </FieldLabel>
                  <Select
                    value={formData.timeline}
                    onValueChange={(val) => setFormData({ ...formData, timeline: val || "" })}
                  >
                    <SelectTrigger id="timeline" className="h-10 w-full cursor-pointer border-zinc-800 bg-zinc-900/90 text-xs text-white focus:border-emerald-500 sm:max-w-xs">
                      <SelectValue placeholder="Select a timeline" />
                    </SelectTrigger>
                    <SelectContent className="border-zinc-800 bg-zinc-900 text-white shadow-xl">
                      <SelectGroup>
                        <SelectItem value="2–4 Weeks" className="text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 focus:bg-emerald-500/20 focus:text-emerald-300 data-[highlighted]:bg-emerald-500/20 data-[highlighted]:text-emerald-300 cursor-pointer">2–4 Weeks</SelectItem>
                        <SelectItem value="1–2 Months" className="text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 focus:bg-emerald-500/20 focus:text-emerald-300 data-[highlighted]:bg-emerald-500/20 data-[highlighted]:text-emerald-300 cursor-pointer">1–2 Months</SelectItem>
                        <SelectItem value="3+ Months" className="text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 focus:bg-emerald-500/20 focus:text-emerald-300 data-[highlighted]:bg-emerald-500/20 data-[highlighted]:text-emerald-300 cursor-pointer">3+ Months</SelectItem>
                        <SelectItem value="Flexible / Not sure" className="text-zinc-200 hover:bg-emerald-500/20 hover:text-emerald-300 focus:bg-emerald-500/20 focus:text-emerald-300 data-[highlighted]:bg-emerald-500/20 data-[highlighted]:text-emerald-300 cursor-pointer">Flexible / Not sure</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="description" className="font-mono text-xs text-zinc-400">
                    What are you building? <span className="text-emerald-400">*</span>
                  </FieldLabel>
                  <Textarea
                    id="description"
                    required
                    rows={4}
                    placeholder="Describe your product vision, key features, target users, or existing tech stack..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="resize-none border-zinc-800 bg-zinc-900/90 text-xs text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </Field>
              </FieldGroup>
            </form>
          )}
        </CardContent>

        {!submitted && (
          <CardFooter className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[11px] text-zinc-400 font-mono">
              Direct 1-on-1 engineering response.
            </span>

            <Button
              form="contact-inquiry-form"
              type="submit"
              disabled={loading}
              className="bg-emerald-600 text-white hover:bg-emerald-500 rounded-full px-6 text-xs font-semibold cursor-pointer shadow-lg shadow-emerald-950/50"
            >
              {loading ? "Sending..." : "Send Project Inquiry"}
              <Send data-icon="inline-end" />
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
