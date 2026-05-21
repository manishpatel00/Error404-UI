"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Send,
  Sparkles,
  Palette,
  Code2,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  Mail,
  Type,
  FileText,
  Link2,
} from "lucide-react";
import { cn } from "@/components/ui/cn";
import { submitRequest } from "./actions";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InputWrapper({
  children,
  icon: Icon,
  focused,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  focused?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-colors",
        "bg-zinc-50 dark:bg-zinc-900",
        focused
          ? "border-zinc-400 dark:border-zinc-500"
          : "border-zinc-200 dark:border-zinc-800"
      )}
    >
      <Icon className="h-5 w-5 text-zinc-400 dark:text-zinc-500 shrink-0" />
      {children}
    </div>
  );
}

function TextareaWrapper({
  children,
  icon: Icon,
  focused,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  focused?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex gap-3 px-4 py-3 rounded-xl border-2 transition-colors",
        "bg-zinc-50 dark:bg-zinc-900",
        focused
          ? "border-zinc-400 dark:border-zinc-500"
          : "border-zinc-200 dark:border-zinc-800"
      )}
    >
      <Icon className="h-5 w-5 text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
      {children}
    </div>
  );
}

const categories = [
  {
    id: "theme",
    label: "Themed",
    icon: Palette,
    description: "Movie, game, or pop culture inspired",
  },
  {
    id: "interactive",
    label: "Interactive",
    icon: Code2,
    description: "Games or interactive experiences",
  },
  {
    id: "creative",
    label: "Creative",
    icon: Lightbulb,
    description: "Unique and artistic designs",
  },
  {
    id: "minimal",
    label: "Minimal",
    icon: Sparkles,
    description: "Clean and simple aesthetics",
  },
];

export default function RequestPage() {
  const [formState, setFormState] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setFormState({ status: "loading", message: "" });
    formData.set("category", selectedCategory);

    const result = await submitRequest(formData);

    if (result.success) {
      setFormState({
        status: "success",
        message: result.message,
      });
      setSelectedCategory("");
    } else {
      setFormState({
        status: "error",
        message: result.message,
      });
    }
  }

  return (
    <main className="relative min-h-screen">
      <Container className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
              Got an idea for a
              <br />
              <span className="text-zinc-500">404 page?</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
              We&apos;re always looking for fresh ideas. Submit your request and we
              might build it for you!
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 sm:p-8 shadow-sm">
              {formState.status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 mb-4 sm:mb-6">
                    <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
                    Request Submitted!
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto mb-6 sm:mb-8">
                    {formState.message}
                  </p>
                  <Button
                    onClick={() =>
                      setFormState({ status: "idle", message: "" })
                    }
                    variant="secondary"
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form action={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-foreground">
                      Category
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setSelectedCategory(category.id)}
                          className={cn(
                            "relative flex flex-col items-start p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 text-left group",
                            selectedCategory === category.id
                              ? "border-zinc-900 dark:border-zinc-100 bg-zinc-50 dark:bg-zinc-900"
                              : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                          )}
                        >
                          <div
                            className={cn(
                              "h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center mb-2 sm:mb-3 transition-colors",
                              selectedCategory === category.id
                                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700"
                            )}
                          >
                            <category.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </div>
                          <span
                            className={cn(
                              "text-sm sm:text-base font-medium transition-colors",
                              selectedCategory === category.id
                                ? "text-foreground"
                                : "text-zinc-700 dark:text-zinc-300"
                            )}
                          >
                            {category.label}
                          </span>
                          <span className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 sm:mt-1 leading-tight">
                            {category.description}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground"
                    >
                      Your Name
                    </label>
                    <InputWrapper icon={User} focused={focusedField === "name"}>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className="flex-1 text-foreground placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm sm:text-base"
                      />
                    </InputWrapper>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <InputWrapper
                      icon={Mail}
                      focused={focusedField === "email"}
                    >
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="flex-1 text-foreground placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm sm:text-base"
                      />
                    </InputWrapper>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-foreground"
                    >
                      Template Title
                    </label>
                    <InputWrapper
                      icon={Type}
                      focused={focusedField === "title"}
                    >
                      <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        placeholder="e.g., Matrix-themed 404"
                        onFocus={() => setFocusedField("title")}
                        onBlur={() => setFocusedField(null)}
                        className="flex-1 text-foreground placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm sm:text-base"
                      />
                    </InputWrapper>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-foreground"
                    >
                      Describe Your Idea
                    </label>
                    <TextareaWrapper
                      icon={FileText}
                      focused={focusedField === "description"}
                    >
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        placeholder="Describe the theme, style, colors, animations, or any specific features you'd like to see..."
                        onFocus={() => setFocusedField("description")}
                        onBlur={() => setFocusedField(null)}
                        className="flex-1 text-foreground placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm sm:text-base resize-none"
                      />
                    </TextareaWrapper>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="reference"
                      className="block text-sm font-medium text-foreground"
                    >
                      Reference URL{" "}
                      <span className="text-zinc-400 dark:text-zinc-600 font-normal">
                        (optional)
                      </span>
                    </label>
                    <InputWrapper
                      icon={Link2}
                      focused={focusedField === "reference"}
                    >
                      <input
                        id="reference"
                        name="reference"
                        type="url"
                        placeholder="https://example.com/inspiration"
                        onFocus={() => setFocusedField("reference")}
                        onBlur={() => setFocusedField(null)}
                        className="flex-1 text-foreground placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm sm:text-base"
                      />
                    </InputWrapper>
                  </div>

                  {formState.status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <p className="text-sm">{formState.message}</p>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formState.status === "loading"}
                    className="w-full h-12 sm:h-14 text-sm sm:text-base font-semibold rounded-xl"
                  >
                    {formState.status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

        </div>
      </Container>
    </main>
  );
}
