"use client";

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export const FormSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export default function CreateAccount() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={isDarkMode ? 'bg-black text-white min-h-screen flex' : 'bg-white text-black min-h-screen flex'}>
      {/* Left Column: Testimonial */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-gray-900">
        <h1 className="text-4xl font-bold mb-6">Acme Inc</h1>
        <p className="italic text-lg text-gray-400 mb-4">
          “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”
        </p>
        <p className="font-semibold text-gray-400">Sofia Davis</p>
      </div>

      {/* Right Column: Form */}
      <div className="w-1/2 flex flex-col justify-center p-10">
        <button onClick={toggleMode} className="mb-4 self-end text-sm underline">
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

        <h2 className="text-3xl font-bold mb-6">Create an account</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Controller
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} id="password" type="password" placeholder="Password" className="mb-4" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 mb-4">
              Sign in with Email
            </Button>
          </form>
        </Form>

        <p className="text-center mb-4">OR CONTINUE WITH</p>

        {/* GitHub Login Button */}
        <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 mb-4">
          <i className="fab fa-github mr-2"></i> GitHub
        </Button>

        <p className="mt-6 text-xs text-center text-gray-500">
          By clicking continue, you agree to our{' '}
          <a href="#" className="underline">Terms of Service</a> and{' '}
          <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}