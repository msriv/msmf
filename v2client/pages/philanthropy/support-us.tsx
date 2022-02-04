import Campaigns from "../../components/Client/Philanthropy/Campaigns";
import SupportStories from "../../components/Client/Philanthropy/SupportStories";
import ImageListItem from "../../components/Common/ImageListItem";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Common/Section";

const SupportUs = () => {
  return (
    <div>
      <Campaigns />
      <Section>
        <SectionTitle title={<b>Volunteer</b>} />
        <SectionContent>
          <p className="font-bold text-2xl text-black">
            We are committed to giving you the best experience possible and
            believe that the volunteer relationship is one of trust and mutual
            understanding.
          </p>
          <ImageListItem
            title="Why should I volunteer?"
            content={
              <>
                <p>
                  All our volunteers have their own motivations to fight for the
                  cause, but here are some of the reasons why you should sign up
                  today!
                </p>
                <ul>
                  <li>
                    {" "}
                    A chance to work in a friendly team, to make new friends and
                    meet a diverse group of people.
                  </li>
                  <li>
                    {" "}
                    The opportunity to make an invaluable contribution towards
                    the fight against cancer.
                  </li>
                  <li>
                    The time to develop your confidence and interpersonal
                    skills.
                  </li>
                  <li>
                    The ability to gain valuable work experience to add onto
                    your CV and to learn new skills.
                  </li>
                  <li>The chance to gain valuable retail experience.</li>
                </ul>
              </>
            }
            vector={{
              src: "/assets/images/Philanthropy/volunteering 1.png",
              alt: "Volunteer",
            }}
          />
          <ImageListItem
            title="Volunteer in our office"
            content="Support us by helping out with admin, donating your specialist skill or many things in between – we have the volunteer role that’s right for you."
            vector={{
              src: "/assets/images/Philanthropy/volunteering (1) 1.png",
              alt: "Volunteer",
            }}
          />
          <ImageListItem
            title="Volunteer at an event"
            content="From cheering people on at a race to helping promote an event, find out about volunteer opportunities near you."
            vector={{
              src: "/assets/images/Philanthropy/volunteering (2) 1.png",
              alt: "Volunteer",
            }}
          />
          <ImageListItem
            title="Internship"
            content="Find out how you can apply for our award-winning internship programme and start building your experience."
            vector={{
              src: "/assets/images/Philanthropy/working 1.png",
              alt: "Volunteer",
            }}
          />
          <ImageListItem
            title="Fundraising"
            content="Volunteer to help raise life-saving funds for the people around us to beat cancer sooner. Let them not fight alone."
            vector={{
              src: "/assets/images/Philanthropy/fundraiser (1) 1.png",
              alt: "Volunteer",
            }}
          />
          <div className="flex justify-start mt-12">
            <button className="msmf__cta-btn">Become a volunteer</button>
          </div>
        </SectionContent>
      </Section>
      <SupportStories />
    </div>
  );
};

export default SupportUs;
