"use client"

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import miImagen from '../../public/ferre_logo.png';
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function CreateAccount() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div>
        <Image src={miImagen} alt="Logo" width={150} height={150}/>
      </div>
      <div className="w-full max-w-md">
        {/* <h1 className="text-2xl font-bold mb-2 text-center">Ingresa a tu cuenta</h1> */}
        <p className="text-sm text-gray-500 mb-6 text-center">Ingresa tus credenciales de administrador</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <label htmlFor="email">Email</label>
                    <FormControl>
                      <Input {...field} id="email" placeholder="Email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <label htmlFor="password">Password</label>
                    <FormControl>
                      <Input {...field} id="password" type="password" placeholder="Password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Sign in with Email
            </Button>
          </form>
        </Form>

        <p className="mt-6 text-xs text-center text-gray-500">
          By clicking continue, you agree to our{' '}
          <a href="#" className="underline">Terms of Service</a> and{' '}
          <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}