import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const topQuestions = [
  {
    _id: "1",
    title: "How to create a new project in Next.js?",
  },
  {
    _id: "2",
    title: "How to deploy a Next.js app to Vercel?",
  },
  {
    _id: "3",
    title: "How to create a new project in Next.js?",
  },
  {
    _id: "4",
    title: "How to deploy a Next.js app to Vercel?",
  },
  {
    _id: "5",
    title: "How to create a new project in Next.js?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "React",
    questions: 1000,
  },
  {
    _id: "2",
    name: "Next.js",
    questions: 800,
  },
  {
    _id: "3",
    name: "TypeScript",
    questions: 700,
  },
  {
    _id: "4",
    name: "JavaScript",
    questions: 600,
  },
  {
    _id: "5",
    name: "React Native",
    questions: 500,
  },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border flec sticky right-0 top-0 h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="curosor-pointer flex items-center justify-between gap-7">
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="Chevron Right"
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
