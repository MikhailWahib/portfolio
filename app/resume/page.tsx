import LinkBtn from "@/components/link-btn";
import { redirect } from "next/navigation";

const Page = () => {
  if (!process.env.RESUME_URL)
    return (
      <div className="flex justify-center flex-col gap-5 h-screen items-center text-3xl text-primary">
        <p className="block">Something Went Wrong</p>
        <LinkBtn href="/" title="Go Back" />
      </div>
    );

  redirect(process.env.RESUME_URL);
};

export default Page;
