import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type InquiryField = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  rows?: number;
  full?: boolean;
};

type InquiryFormProps = {
  fields: InquiryField[];
  successMessage: string;
  submitLabel: string;
};

export function InquiryForm({ fields, successMessage, submitLabel }: InquiryFormProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setMessage(successMessage);
  }

  return (
    <form className="form-shell" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} className={field.full ? "field-shell md:col-span-2" : "field-shell"}>
            <span className="text-xs uppercase tracking-data text-muted-foreground">{field.label}</span>
            {field.rows ? (
              <textarea
                id={field.id}
                name={field.name}
                rows={field.rows}
                placeholder={field.placeholder}
                className="field-input min-h-[140px] resize-y"
              />
            ) : (
              <input
                id={field.id}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                placeholder={field.placeholder}
                className="field-input"
              />
            )}
          </label>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          {submitLabel}
        </Button>
        <p className="text-sm leading-6 text-muted-foreground">{message}</p>
      </div>
    </form>
  );
}
