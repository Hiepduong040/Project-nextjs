"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:8080"; // Adjust this URL if needed
  const router = useRouter();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: { email },
      });

      const user = response.data.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password,
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));

        alert(`Welcome ${user.username}!`);
        router.push("/")
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 text-gray-900 flex min-h-screen justify-center">
        <div className="m-0 flex max-w-screen-xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg">
          <div className="p-6 sm:p-12 lg:w-1/2 xl:w-5/12">
            <div></div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl font-extrabold xl:text-3xl">Sign in</h1>
              <div className="mt-8 w-full flex-1">
                {error && (
                  <p className="text-red-500 mb-4 text-center">{error}</p>
                )}
                <div className="flex flex-col items-center">
                  <button className="text-gray-800 focus:shadow-outline flex w-full max-w-xs items-center justify-center rounded-lg bg-indigo-100 py-3 font-bold shadow-sm transition-all duration-300 ease-in-out hover:shadow focus:shadow-sm focus:outline-none">
                    <div className="rounded-full bg-white p-2">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign in with Google</span>
                  </button>

                  <button className="text-gray-800 focus:shadow-outline mt-5 flex w-full max-w-xs items-center justify-center rounded-lg bg-indigo-100 py-3 font-bold shadow-sm transition-all duration-300 ease-in-out hover:shadow focus:shadow-sm focus:outline-none">
                    <div className="rounded-full bg-white p-1">
                      <svg className="w-6" viewBox="0 0 32 32">
                        <path
                          fillRule="evenodd"
                          d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign in with GitHub</span>
                  </button>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="text-gray-600 inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide">
                    Or sign in with e-mail
                  </div>
                </div>

                <form className="mx-auto max-w-xs" onSubmit={handleLogin}>
                  <input
                    className="bg-gray-100 border-gray-200 placeholder-gray-500 focus:border-gray-400 w-full rounded-lg border px-8 py-4 text-sm font-medium focus:bg-white focus:outline-none"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="bg-gray-100 border-gray-200 placeholder-gray-500 focus:border-gray-400 mt-5 w-full rounded-lg border px-8 py-4 text-sm font-medium focus:bg-white focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-gray-100 focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none"
                    disabled={loading}
                  >
                    <svg
                      className="-ml-2 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">
                      {loading ? "Signing In..." : "Sign In"}
                    </span>
                  </button>
                </form>
                <p className="text-gray-600 mt-6 text-center text-xs">
                  I agree to abide by templatana's{" "}
                  <a
                    href="#"
                    className="border-gray-500 border-b border-dotted"
                  >
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a
                    href="#"
                    className="border-gray-500 border-b border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden flex-1 bg-indigo-100 text-center lg:flex">
            <div
              className="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
