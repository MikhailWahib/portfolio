import { redirect } from "next/navigation";

const Page = () => {
  if (!process.env.RESUME_URL)
    return <div className="text-3xl text bg-red-600">Something went wrong</div>;

  redirect(process.env.RESUME_URL);
};

export default Page;
