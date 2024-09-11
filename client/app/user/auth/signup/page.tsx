import React from "react";

export default function page() {
  return (
    <div>
      <section className="h-screen">
        <div className="h-full">
          {/* Left column container with background*/}
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>

            {/* Right column container */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form>
                {/* Sign in section */}
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 me-4 text-lg">Sign up with</p>

                  {/* Facebook */}
                  <button
                    type="button"
                    className="mx-1 inline-block h-9 w-9 rounded-full bg-primary p-2 text-white"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 400"
                      >
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>
                    </span>
                  </button>

                  {/* X */}
                  <button
                    type="button"
                    className="mx-1 inline-block h-9 w-9 rounded-full bg-primary p-2 text-white"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48z" />
                      </svg>
                    </span>
                  </button>

                  {/* LinkedIn */}
                  <button
                    type="button"
                    className="mx-1 inline-block h-9 w-9 rounded-full bg-primary p-2 text-white"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3c94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </span>
                  </button>
                </div>

                <div className="my-4 flex items-center">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                    Or
                  </p>
                </div>

                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none focus:text-primary dark:text-white"
                    placeholder="Username"
                  />
                </div>

                {/* Email input */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none focus:text-primary dark:text-white"
                    placeholder="Email address"
                  />
                </div>

                {/* Password input */}
                <div className="relative mb-6">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none focus:text-primary dark:text-white"
                    placeholder="Password"
                  />
                </div>

                {/* Remember me checkbox */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="block min-h-[1.5rem]">
                    <input
                      type="checkbox"
                      className="border-gray-400 h-[1.125rem] w-[1.125rem] appearance-none rounded border"
                    />
                    <label className="text-gray-700 ml-2">Remember me</label>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
