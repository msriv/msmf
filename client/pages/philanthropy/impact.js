import Layout from "../../componentsNew/Layout";
import Quote from "../../componentsNew/Quote";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../componentsNew/Section";

const Index = () => (
  <Layout>
    <Section>
      <SectionContent>
        <div className="flex items-center justify-between">
          <div className="w-5/12">
            <Quote
              quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry. Lorem Ipsum is simply."
              author="Amit Narayan"
            />
          </div>
          <div className="w-5/12 mx-auto">
            <div
              style={{ width: 600, height: 407 }}
              className=" bg-silver-600"
            ></div>
          </div>
        </div>
      </SectionContent>
    </Section>
    <Section>
      <SectionTitle type="section">
        Our <b>Mission</b>
      </SectionTitle>
      <SectionContent>
        <div className="flex justify-between">
          <div
            style={{ width: "350px", height: "339px" }}
            className="bg-silver-600"
          ></div>
          <div
            style={{ width: "350px", height: "339px" }}
            className="bg-silver-600"
          ></div>
          <div
            style={{ width: "350px", height: "339px" }}
            className="bg-silver-600"
          ></div>
        </div>
      </SectionContent>
    </Section>
    <Section>
      <SectionTitle type="section">
        Our <b>Values</b>
      </SectionTitle>
      <SectionContent>
        <div className="flex justify-between">
          <div
            style={{ width: "350px", height: "339px" }}
            className="bg-silver-600"
          ></div>
          <div
            style={{ width: "350px", height: "339px" }}
            className="bg-silver-600"
          ></div>
          <div
            style={{ width: "350px", height: "339px" }}
            className="bg-silver-600"
          ></div>
        </div>
      </SectionContent>
    </Section>
  </Layout>
);

export default Index;
