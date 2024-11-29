import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import NavBar from "../_components/navbar";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";

interface HomePageProps {
  searchParams: {
    month: string;
  };
}

const HomePage = async ({ searchParams: { month } }: HomePageProps) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const monthInvaild = !month || !isMatch(month, "MM");
  if (monthInvaild) {
    redirect("?month=01");
  }

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>

        <SummaryCards month={month} />
      </div>
    </>
  );
};

export default HomePage;
