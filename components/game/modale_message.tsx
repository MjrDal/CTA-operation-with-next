"use client";

import { messageAction } from "@/actions/message";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { MessageSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props {
  id: string;
  messages: {
    id: string;
    message: string;
  }[];
}

export const ModaleMessages: React.FC<Props> = ({ id, messages }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof MessageSchema>>({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      message: "",
      generation: [id],
    },
  });
  function onSubmit(values: z.infer<typeof MessageSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    startTransition(() => {
      messageAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
    // router.push("/settings/caserne");
  }

  return (
    <div className="w-full">
      <div>
        <h2>Messages:</h2>
        {messages.length == 0 ? (
          <p>pas de messages à affiché</p>
        ) : (
          <ScrollArea>
            {messages.map((message) => (
              <div key={message.id}>
                {message.message}
                <Separator className="" />
              </div>
            ))}
          </ScrollArea>
        )}
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="message"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Ajouter un message</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
