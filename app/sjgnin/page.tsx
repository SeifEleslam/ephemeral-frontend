"use client";
import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    // Implement form submission logic here (e.g., send data to server)
    // Check user credentials and handle successful/failed login
    console.log(data);
    alert("Form Submitted!"); // Replace with actual logic
    // Optionally redirect to a different page after successful login
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="container mx-auto max-w-sm p-4 bg-white rounded-lg shadow-md">
        <Head>
          <title>Sign In</title>
        </Head>
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: 8,
              })}
              className={`rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember-me"
              className="h-5 w-5 rounded text-blue-600 focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm font-medium">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Sign In
          </button>
          <a
            href="/forgot-password"
            className="text-blue-500 hover:text-blue-700 text-sm mt-4"
          >
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signin;
