import { Card, CardContent } from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { targetRoles } from "../data/portfolioData.js";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 border-y border-rose-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.86fr_1.14fr] md:items-start md:py-20">
        <SectionHeading
          eyebrow="About"
          title="I bring a business-systems perspective to digital design."
          description="I am currently studying Information Systems for Business Performance at UCC, where I am building skills in business decision support, systems analysis, databases, analytics, digital governance and IT project management. I am especially interested in roles where I can improve digital journeys, organise information clearly and help teams design better user-facing services."
        />

        <Card className="rounded-[2rem] border-rose-100 bg-[#fff8fb] shadow-sm shadow-rose-100/70">
          <CardContent className="p-7">
            <h3 className="text-xl font-extrabold text-slate-950">Role fit</h3>
            <p className="mt-3 leading-7 text-slate-700">
             I am best suited to teams that value curiosity, clear communication, structured thinking and a willingness to learn across data, information systems, operations and business.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {targetRoles.map((role) => <div key={role} className="border-l-4 border-rose-300 bg-white px-4 py-3 text-sm font-extrabold text-slate-800">{role}</div>)}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
