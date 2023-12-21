import PublicLayout from "@/components/Layout";
import ProjectTabs from "@/components/home/ProjectTabs";
import ReiviewCard from "@/components/home/ReiviewCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <PublicLayout>
        <div className="w-full h-[70vh] relative" >
          <Image
            className="-z-10 absolute top-0 left-0 right-0 bottom-0 object-cover"
            src="/header.avif"
            alt="Open Lms Header"
            quality={100}
            fill
          />
          <div className="absolute shadow-xl p-8 top-1/4 left-20 w-80 bg-white " >
            <h2 className="text-3xl font-semibold capitalize " >Knowledge for your future self</h2>
            <p className="mt-2 text-sm p-1" >Learn skills from real-world experts from around the globe. Get courses from ₹499 through Dec 21.</p>
          </div>
        </div>
        <div className="py-8" >
          <h2 className="text-4xl font-semibold" >A broad selection of courses</h2>
          <p className="mt-2 text-lg font-light p-1" >Choose from over 210,000 online video courses with new additions published every month</p>
          <ProjectTabs />
        </div>
        <div className="py-8" >
          <h2 className="text-2xl font-semibold" >How learners like you are achieving their goals</h2>
          <ReiviewCard />
        </div>
      </PublicLayout>

    </>
  )
}
