"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useState } from "react";
import { toast } from "react-toastify";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Ce champ est nécessaire" }),
  lastName: z.string().min(1, { message: "Ce champ est nécessaire" }),
  email: z.string().email({ message: "Email invalide" }),
  confirmEmail: z.string().email({ message: "Email invalide" }),
  message: z.string().min(1, { message: "Ce champ est nécessaire" }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // setIsLoading(true);
    // emailjs
    //   .sendForm(
    //     "service_ydo16fc",
    //     "template_p1swnr6",
    //     formRef.current as HTMLFormElement,
    //     "qBO3LD8BynnNJI19X"
    //   )
    //   .then(
    //     () => {
    //       toast.success("Message sent succesfully!", {
    //         position: "top-center",
    //         autoClose: 3000,
    //       });
    //       form.reset();
    //     },
    //     () => {
    //       toast.error("Something went wrong!", {
    //         position: "top-center",
    //         autoClose: 3000,
    //       });
    //     }
    //   )
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-8 rounded-2xl drop-shadow-sm max-w-lg mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-800">Me Contacter</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom *</FormLabel>
                <FormControl>
                  <Input
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    placeholder="Prénom"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom *</FormLabel>
                <FormControl>
                  <Input
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    placeholder="Nom"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail *</FormLabel>
                <FormControl>
                  <Input
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    placeholder="E-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirmEmail"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmez l’e-mail *</FormLabel>
                <FormControl>
                  <Input
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    placeholder="Confirmez l’e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Commentaire ou message *</FormLabel>
              <FormControl>
                <Textarea
                  className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                  placeholder="Votre message..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full justify-end">
          <Button
            className="bg-[#bf677d] hover:bg-[#bf677d] cursor-pointer text-white font-semibold py-2 px-4 rounded-md shadow-md"
            type="submit"
          >
            Envoyer
          </Button>
        </div>
      </form>
    </Form>
  );
}
