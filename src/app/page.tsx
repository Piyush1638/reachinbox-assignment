
import Sidebar from "@/components/Sidebar";
import LoggedInNavbar from "@/components/LoggedInNavbar";
import AllInbox from "@/components/AllInbox";
import LeadDetailsActivities from "@/components/LeadDetailsActivities";
import Emails from "@/components/Emails";
import DeleteEmail from "@/components/DeleteEmail";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex">
      <Sidebar />
      <div className="w-full overflow-y-hidden">
        <LoggedInNavbar />
        <section className="w-[96%] flex h-full relative top-[64px] ml-[56px]">
          <AllInbox />
          <Emails />
          <LeadDetailsActivities />
        </section>
        <DeleteEmail />
      </div>
    </main>
  );
}
