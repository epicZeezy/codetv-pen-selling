"use client";

import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { CheckoutHeader } from "@/components/layout/CheckoutHeader";
import { Button } from "@/components/ui/Button";
import { penVariants, type PenVariantId } from "@/content/checkout";
import { cn } from "@/lib/cn";
import { FormEvent, useMemo, useState } from "react";

type FormFields = {
  fullName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

const emptyForm: FormFields = {
  fullName: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

const inputClass =
  "w-full border border-border bg-background px-4 py-3 font-body text-sm text-text transition-colors focus:border-accent focus:outline-none";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function CheckoutPage() {
  const [selectedPenId, setSelectedPenId] = useState<PenVariantId | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields | "pen", string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  const selectedPen = useMemo(
    () => penVariants.find((pen) => pen.id === selectedPenId) ?? null,
    [selectedPenId],
  );

  const subtotal = selectedPen ? selectedPen.price * quantity : 0;
  const total = subtotal;

  const updateField = (field: keyof FormFields, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormFields | "pen", string>> = {};

    if (!selectedPen) {
      nextErrors.pen = "Select a pen to continue.";
    }

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (!form.street.trim()) nextErrors.street = "Street address is required.";
    if (!form.city.trim()) nextErrors.city = "City is required.";
    if (!form.state.trim()) nextErrors.state = "State is required.";
    if (!form.zip.trim()) nextErrors.zip = "Zip code is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <CheckoutHeader />
      <main className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h1 className="font-display text-3xl font-bold text-text md:text-4xl">
            Checkout
          </h1>
          <p className="mt-3 max-w-xl text-muted">
            Pick your pen, enter shipping details, and place your order. No
            payment needed — this is a demo.
          </p>

          {submitted && selectedPen ? (
            <div className="mt-10 border border-border bg-surface p-8 md:p-10">
              <div className="flex flex-col items-center text-center">
                <CheckCircleIcon className="text-accent" />
                <p className="mt-4 font-display text-2xl font-semibold text-text">
                  Order received. Your pen is on the way.
                </p>
              </div>
              <OrderSummary
                className="mt-8"
                penName={selectedPen.name}
                unitPrice={selectedPen.price}
                quantity={quantity}
                subtotal={subtotal}
                total={total}
              />
            </div>
          ) : (
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
              <div className="space-y-10">
                <section>
                  <h2 className="font-display text-xl font-semibold text-text">
                    Choose your pen
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {penVariants.map((pen) => {
                      const isSelected = selectedPenId === pen.id;

                      return (
                        <button
                          key={pen.id}
                          type="button"
                          onClick={() => {
                            setSelectedPenId(pen.id);
                            setErrors((current) => {
                              if (!current.pen) return current;
                              const next = { ...current };
                              delete next.pen;
                              return next;
                            });
                          }}
                          className={cn(
                            "border bg-surface p-5 text-left transition-colors",
                            isSelected
                              ? "border-accent ring-1 ring-accent"
                              : "border-border hover:border-accent/50",
                          )}
                        >
                          <p className="font-display font-semibold text-text">
                            {pen.name}
                          </p>
                          <p className="mt-2 text-sm text-muted">{pen.desc}</p>
                          <p className="mt-4 font-mono text-sm text-accent">
                            {formatPrice(pen.price)}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                  {errors.pen ? (
                    <p className="mt-2 font-mono text-xs text-highlight">
                      {errors.pen}
                    </p>
                  ) : null}
                </section>

                <section>
                  <h2 className="font-display text-xl font-semibold text-text">
                    Quantity
                  </h2>
                  <div className="mt-4 inline-flex items-center border border-border bg-surface">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      className="px-4 py-3 font-mono text-lg text-text transition-colors hover:bg-background disabled:opacity-40"
                      disabled={quantity <= 1}
                      onClick={() =>
                        setQuantity((current) => Math.max(1, current - 1))
                      }
                    >
                      −
                    </button>
                    <span className="min-w-12 px-4 text-center font-mono text-sm">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      className="px-4 py-3 font-mono text-lg text-text transition-colors hover:bg-background disabled:opacity-40"
                      disabled={quantity >= 10}
                      onClick={() =>
                        setQuantity((current) => Math.min(10, current + 1))
                      }
                    >
                      +
                    </button>
                  </div>
                </section>

                <section>
                  <h2 className="font-display text-xl font-semibold text-text">
                    Shipping details
                  </h2>
                  <form className="mt-4 space-y-4" onSubmit={handleSubmit} noValidate>
                    <Field
                      id="fullName"
                      label="Full Name"
                      value={form.fullName}
                      error={errors.fullName}
                      onChange={(value) => updateField("fullName", value)}
                    />
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      value={form.email}
                      error={errors.email}
                      onChange={(value) => updateField("email", value)}
                    />
                    <Field
                      id="street"
                      label="Street"
                      value={form.street}
                      error={errors.street}
                      onChange={(value) => updateField("street", value)}
                    />
                    <div className="grid gap-4 sm:grid-cols-3">
                      <Field
                        id="city"
                        label="City"
                        value={form.city}
                        error={errors.city}
                        onChange={(value) => updateField("city", value)}
                      />
                      <Field
                        id="state"
                        label="State"
                        value={form.state}
                        error={errors.state}
                        onChange={(value) => updateField("state", value)}
                      />
                      <Field
                        id="zip"
                        label="Zip"
                        value={form.zip}
                        error={errors.zip}
                        onChange={(value) => updateField("zip", value)}
                      />
                    </div>
                    <Button type="submit" variant="primary" className="w-full sm:w-auto">
                      Place Order →
                    </Button>
                  </form>
                </section>
              </div>

              <aside className="border border-border bg-surface p-6 md:p-8 lg:sticky lg:top-24">
                <h2 className="font-display text-xl font-semibold text-text">
                  Order summary
                </h2>
                <OrderSummary
                  className="mt-4"
                  penName={selectedPen?.name ?? "No pen selected"}
                  unitPrice={selectedPen?.price ?? 0}
                  quantity={quantity}
                  subtotal={subtotal}
                  total={total}
                  showPlaceholder={!selectedPen}
                />
              </aside>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
};

function Field({ id, label, value, error, type = "text", onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(inputClass, "mt-2", error && "border-highlight")}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 font-mono text-xs text-highlight">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type OrderSummaryProps = {
  penName: string;
  unitPrice: number;
  quantity: number;
  subtotal: number;
  total: number;
  className?: string;
  showPlaceholder?: boolean;
};

function OrderSummary({
  penName,
  unitPrice,
  quantity,
  subtotal,
  total,
  className,
  showPlaceholder = false,
}: OrderSummaryProps) {
  return (
    <div className={cn("space-y-3 font-mono text-sm", className)}>
      <div className="flex justify-between gap-4 text-muted">
        <span>{penName}</span>
        <span>{showPlaceholder ? "—" : formatPrice(unitPrice)}</span>
      </div>
      <div className="flex justify-between gap-4 text-muted">
        <span>Quantity</span>
        <span>{quantity}</span>
      </div>
      <div className="flex justify-between gap-4 text-muted">
        <span>Subtotal</span>
        <span>{showPlaceholder ? "—" : formatPrice(subtotal)}</span>
      </div>
      <div className="flex justify-between gap-4 text-muted">
        <span>Shipping</span>
        <span>Free on all orders</span>
      </div>
      <div className="border-t border-border pt-3">
        <div className="flex justify-between gap-4 font-display text-lg font-semibold text-text">
          <span>Total</span>
          <span>{showPlaceholder ? "—" : formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}
