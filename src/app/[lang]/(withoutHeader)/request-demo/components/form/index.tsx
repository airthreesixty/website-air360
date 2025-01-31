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
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Link, useRouter } from "@/i18n/routing";
import ToastErrorMessage from "@/components/common/toast-error-message";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email("This is not a valid email."),
  "job-title": z.string().min(3, {
    message: "Job title must be at least 3 characters.",
  }),
  message: z.string().optional(),
  terms: z.boolean().refine((val) => val === true),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export function RequestDemoForm({ lang }: { lang: string }) {
  const [loading, setLoading] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const router = useRouter();

  const t = useTranslations("request-demo");
  const defaultValues = {
    name: "",
    email: "",
    "job-title": "",
    message: "",
    terms: false,
  };

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  async function onSubmit(data: FormSchemaType) {
    setLoading(true);
    const targetUrl =
      lang === "en"
        ? "https://api.form-data.com/f/maxbqln43gps853piaiwy"
        : "https://api.form-data.com/f/drwe35duuwb2jjt8fuagda";
    try {
      await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setSubmitSuccessful(true);
      setLoading(false);
      router.push("/thank-you-for-the-demo-request");
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitSuccessful]);

  return (
    <div className="p-6 space-y-4 lg:space-y-6 md:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-black-600 md:text-2xl dark:text-white">
        {t("title")}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>{t("message")}</FormLabel>
                <FormControl>
                  <Textarea rows={4} className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="font-light text-xs text-gray-500 dark:text-gray-300">
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
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            loading={loading}
            size={"sm"}
            className={cn(
              "w-full transition ease-in-out duration-300",
              !form.formState.isValid && "opacity-25 cursor-not-allowed"
            )}
            disabled={!form.formState.isValid || loading}
          >
            {!loading && <>{t("cta")}</>}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default RequestDemoForm;
