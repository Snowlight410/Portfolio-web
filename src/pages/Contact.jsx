import React from "react";

const Contact = () => {
  return (
    <div class="grid w-[100%] text-center ">
      <div class=" h-72 flex items-center justify-center">
        <div class="flex flex-col max-w-4xl items-center justify-center">
          <div class="  text-4xl font-bold">Contact Us</div>
          <div class="m-2  ">
            Contact us by filling this contact form.
          </div>
        </div>
      </div>
      <div class="bg-white h-auto flex justify-center">
        <div class="h-auto bg-white -mt-20 w-[80%] md:w-1/2 text-stone-700 font-medium shadow-lg">
          <div class="m-4 font-bold">Your E-mail Address </div>
          <input
            placeholder="admin@tailwind.org "
            class="border-2  px-2 border-gray-400 h-10 w-3/4 text-gray-400 rounded"
          />
          <div class="m-4 font-bold">Subject </div>
          <input class="border-2 px-2 border-gray-400 h-10 w-3/4 text-gray-400 rounded" />
          <div class="m-4 font-bold">How can we help? </div>
          <input class="border-2  px-2 border-gray-400 h-20 w-3/4 text-gray-400 rounded" />
          <div>
          <button class="bg-gray-800 text-center p-2 m-4 text-white w-max font-normal hover:bg-gray-700 cursor-pointer">
            SEND
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
