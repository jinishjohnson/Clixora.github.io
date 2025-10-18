import Portfolio from "@/components/Portfolio/Portfolio";
import Title from "@/components/ui-components/Title/Title";

export default function services() {
  return (
    <>
    <Title title="Protfolio" subtitle="What We Offer" description="I offer a wide range of services to help you achieve your goals. I am available for hire and can work on any project you have in mind. Let's work together to bring your ideas to life!" />
    <div className="container mx-auto px-4 py-8"> 
      <Portfolio />
    </div>
    </>
  )
}