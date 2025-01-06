"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { Textarea } from "@/components/ui/textarea";
import ToastErrorMessage from "@/components/common/toast-error-message";

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email("This is not a valid email."),
  "job-title": z.string().min(3, {
    message: "Job title must be at least 3 characters.",
  }),
  message: z.string().min(3, {
    message: "Message must be at least 3 characters.",
  }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export function ContactForm({ lang }: { lang: string }) {
  const [loading, setLoading] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  const t = useTranslations("contact");

  const defaultValues = {
    name: "",
    email: "",
    "job-title": "",
    message: "",
  };

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  async function onSubmit(data: FormSchemaType) {
    setLoading(true);
    try {
      const targetUrl =
        lang === "en"
          ? "https://api.form-data.com/f/c5zpyru1kzimpu3696ybl"
          : "https://api.form-data.com/f/scwbyukgrfktihhosxsdl";
      await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setSubmitSuccessful(true);
      setLoading(false);
      toast.success(t("formSuccessMessage"));
    } catch (error) {
      setSubmitSuccessful(false);
      setLoading(false);
      toast.error(
        <ToastErrorMessage>Error while submiting the form</ToastErrorMessage>
      );
    }
  }

  useEffect(() => {
    if (submitSuccessful) {
      form.reset(defaultValues);
      setSubmitSuccessful(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitSuccessful]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("name")}</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email")}</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="job-title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("jobTitle")}</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>{t("message")}</FormLabel>
              <FormControl>
                <Textarea rows={6} className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription className="mt-4 text-xs text-gray-500">
                {t.rich("rule", {
                  link: (chunks) => (
                    <Link
                      className="text-primary-600 hover:underline"
                      href="/privacy-policy"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </FormDescription>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          loading={loading}
          size={"sm"}
          className={cn(
            "w-full transition ease-in-out duration-300 ",
            !form.formState.isValid && "opacity-25 cursor-not-allowed"
          )}
          disabled={!form.formState.isValid || loading}
        >
          {!loading && <>{t("submitButton")}</>}
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
