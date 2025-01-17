import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="h1-bold">Welcome to Next Js</h1>
    </div>
  );
};

export default Home;
