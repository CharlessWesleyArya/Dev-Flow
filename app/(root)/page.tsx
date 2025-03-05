import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to create a new project in React?",
    description:
      "I am  new to React and I want to create a new project in React. Can anyone help me with this?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
      { _id: "3", name: "Frontend" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    downvotes: 2,
    answers: 3,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to create a new project in Angular?",
    description:
      "I am  new to Angular and I want to create a new project in Angular. Can anyone help me with this?",
    tags: [
      { _id: "1", name: "Angular" },
      { _id: "2", name: "JavaScript" },
      { _id: "3", name: "Frontend" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    downvotes: 2,
    answers: 3,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild>
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      {/* HomeFilter */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
