"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function ContactForum({
  className,
  label = false,
}: {
  className?: string;
  label?: Boolean;
}) {
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
      className={cn(
        "mx-auto w-full max-w-md space-y-5 rounded-lg border border-white/10 p-6 tracking-wide shadow-xl backdrop-blur dark:bg-black/60",
        className,
      )}
    >
      {label ? (
        <h2 className="text-3xl font-medium">Get in touch</h2>
      ) : (
        <div className="pointer-events-none h-1" />
      )}

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
        <label className="mb-2 block text-sm">
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
            className=""
          />
          <Input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className=""
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
        variant={"outline"}
        disabled={status === "loading"}
        className="w-full rounded-sm text-current transition-all duration-150 ease-linear hover:tracking-tight"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
