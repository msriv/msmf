import Layout from "../../componentsNew/Layout";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../componentsNew/Section";
import { API_URL } from "../../lib/constants";
import Image from "next/image";
import Button from "../../design-system/Button";

const Portfolios = () => (
  <Layout>
    <Section>
      <SectionTitle type={"subsection"}>
        <p>
          Our <span className="font-inter-semibold">Incubatees</span>
        </p>
      </SectionTitle>
      <SectionContent></SectionContent>
    </Section>
  </Layout>
);

export default Portfolios;
