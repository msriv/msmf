import Layout from "../../components/Layout";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../components/Section";
import { BASE_API_URL } from "../../lib/constants";
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
