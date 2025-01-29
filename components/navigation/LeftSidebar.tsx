import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border dark:shadow-non lg:w sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 max-sm:hidden">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
          asChild>
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="Account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/sign-up.svg"
              alt="Account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;

/* 
<section>
      <div className="bg-dark100_light850 flex h-screen w-16 flex-col items-center justify-between">
        <div className="flex h-16 w-full flex-col items-center justify-center">
          <button className="bg-dark200_light800 rounded-lg p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 text-light-900"
            />
          </button>
        </div>
      </div>
    </section>
     */
