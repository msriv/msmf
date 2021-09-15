import Carousel from "../../componentsNew/Carousel"
import CarouselCTA from "../../componentsNew/CarouselCTA"
import Button from "../../design-system/Button"
import { Section, SectionTitle, SectionContent } from "../../componentsNew/Section"
import PhilanthropyCard from "../../componentsNew/Cards/PhilanthropyCard"
import CampaignCard from "../../componentsNew/Cards/CampaignCard"

const Index = () => {

  const imageList = ["/assets/images/Philanthropy/Banner.png", "/assets/images/Philanthropy/Banner2.png"]

  return (
    <div>
      <div id="landing-carousel" className="w-11/12 mx-auto relative">
        <Carousel autoScroll imageList={imageList}/>
        <div className="absolute top-32 left-32">
          <div className="space-y-4">
          <p className="text-5xl font-rubik-medium py-2 px-6 bg-guardsman-red w-max text-white"> Join the battle, </p>
          <p className="text-5xl font-rubik-medium py-2 px-6 bg-guardsman-red w-max text-white"> Because Cancer cannot be fought alone </p>
          </div>
          <div className="my-8">
            <CarouselCTA>Donate</CarouselCTA>
          </div>
        </div>
      </div>
      <Section>
        <SectionTitle type="subSection">
          Our <b>Programs</b>
        </SectionTitle>
        <SectionContent>
          <div className="flex flex-col items-center">
            <div className="flex space-x-5 justify-center">
              <PhilanthropyCard title="Nutritional Support" image={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} />
              <PhilanthropyCard title="Drug Discount" image={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} />
              <PhilanthropyCard title="Support for Medical Care" image={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} />
              <PhilanthropyCard title="Ecosystem For Children - Pediatric Oncology Wing" image={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} />
            </div>
            <div className="mt-14">
              <Button type="click">Learn More</Button>
            </div>
          </div>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle type="subSection">
          Our <b>Latest Campaigns</b>
        </SectionTitle>
        <SectionContent>
          <div className="flex flex-col items-center">
            <div className="flex space-x-5 justify-center">
              <CampaignCard {...{
                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                title: "Support Rohit Patil",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. ",
                goal: 50000000, 
                achieved: 27624330,
                daysLeft: 23,
                supporters: 10539
              }} />
              <CampaignCard {...{
                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                title: "Support Rajesh",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. ",
                goal: 50000000, 
                achieved: 37624330,
                daysLeft: 23,
                supporters: 10539
              }} />
              <CampaignCard {...{
                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                title: "Support Suraj Shetty",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. ",
                goal: 50000000, 
                achieved: 48624330,
                daysLeft: 23,
                supporters: 10539
              }} />
            </div>
          </div>
        </SectionContent>
      </Section>
    </div>
  )
  
}

export default Index;