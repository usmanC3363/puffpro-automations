"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactForum() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [minDate, setMinDate] = useState("");

  // Restrict to today or future dates
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Simple regex-based email validation
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        toast.success("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          plan: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      setStatus("error");
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md space-y-5 rounded-2xl border border-white/10 p-6 shadow-xl backdrop-blur dark:bg-black/60"
    >
      <h2 className="text-3xl font-semibold">Get in touch</h2>

      <Input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        name="email"
        placeholder="Your Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        name="phone"
        placeholder="Phone (optional)"
        type="tel"
        value={form.phone}
        onChange={handleChange}
      />
      <Input
        name="plan"
        placeholder="Plan of Interest"
        value={form.plan}
        onChange={handleChange}
      />

      <div>
        <label className="mb-2 block text-sm font-medium">
          Preferred Date & Time{" "}
          <span className="text-xs opacity-50">
            (click the icon to set time and date)
          </span>
        </label>
        <div className="flex gap-3">
          <Input
            name="date"
            type="date"
            min={minDate}
            value={form.date}
            onChange={handleChange}
            className="focus:border-mycolors-purple focus:ring-mycolors-purple w-1/2 cursor-pointer border-white/20 bg-white/5 dark:[filter:invert(1)_brightness(7)]"
          />
          <Input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className="focus:border-mycolors-purple focus:ring-mycolors-purple w-1/2 cursor-pointer border-white/20 bg-white/5 dark:[filter:invert(1)_brightness(7)]"
          />
        </div>
      </div>

      <Textarea
        name="message"
        placeholder="Optional Message"
        value={form.message}
        onChange={handleChange}
      />

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full transition-all duration-150 ease-linear hover:bg-mycolors-secondary/90 hover:tracking-tight"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
