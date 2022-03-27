import { ReactNode } from "react";
import { ContentCard } from "../../components/Common/ContentCard";
import { Section, SectionContent } from "../../components/Common/Section";

const FacilitiesList: Array<{
  provider?: string;
  facilityName: string;
  aboutFacility?: string | ReactNode;
  thumbnail?: string;
}> = [
  {
    provider: "BioNEST",
    facilityName: "Artificial Intelligence and Machine Learning Lab",
    aboutFacility: (
      <>
        <p className="m-0 mb-2">
          <b>Machine Learning Equipment: </b> 2 - linux( ubuntu 20.04) GTX3080
          128GB 1TB SSD Machines and 1- Windows 10 GTX3090 128GB 1TB SSD
          Machine.{" "}
        </p>
        <p className="m-0 mb-2">
          <b>Microsoft Azure Cloud Services: </b> Machine learning, App server,
          SQL database, and cloud storage.
        </p>
        <p className="m-0 mb-2">
          <b>Printers: </b> 1 B/W Laserjet and 1 color inkjet.
        </p>
        <p className="m-0 mb-2">
          <b>Network: </b> 100 Mb/s with zero downtime (Ethernet and Wifi).
          (MSMF Network)
        </p>
        <p className="m-0 mb-2">
          <b>Graphic design equipment : </b> 3 - Windows 10 GTX3070 32GB 1TB HDD
          Machines for Graphical design such as CAD modeling, 3D scanning, etc.
        </p>
      </>
    ),
  },
  {
    provider: "BioNEST",
    facilityName: "Electronics Prototyping Lab",
  },
  {
    provider: "BioNEST",
    facilityName: "Fabrication Station",
    aboutFacility: (
      <>
        <p className="m-0 mb-2">
          <b>Machinex PCB milling machine: </b> 3 - Windows 10 GTX3070 32GB 1TB
          HDD Machines for Graphical design such as CAD modeling, 3D scanning,
          etc.
        </p>
        <p className="m-0 mb-2">
          <b>Machinex Laser stencil cutting machine: </b> 2-Axis Laser stencil
          cutting machine to cut stencils for components to be placed in the
          printed circuit boards.
        </p>
        <p className="m-0 mb-2">
          <b>Neoden 3V pick and place machine: </b> Computerized vision-based
          component placement to avoid manual error and reduce component placing
          time on the printed circuit board.
        </p>
        <p className="m-0 mb-2">
          <b>Reflow oven: </b> The custom profile-based reflow oven can melt and
          solder the solder paste in the circuit board giving a strong and
          stable electrical connection between the solder pads and the component
          leads.
        </p>
      </>
    ),
  },
  {
    facilityName: "Soldering Station",
    aboutFacility:
      "Temperature-controlled soldering machines, Temperature controlled hot air guns, Temperature controlled vacuum desoldering guns, and microscopes for advanced circuit soldering with both SMT and through-hole components.",
  },
  {
    facilityName: "Debugging Station",
    aboutFacility:
      "200MHz Digital Storage Oscilloscopes, 20MHz Arbitrary Function Generators, Digital LCR Meters, Power Supply, and Digital Scope for debugging the functioning and simulating small and large scale signals for the circuits.",
  },
  {
    facilityName: "Rapid Prototyping Lab",
  },
  {
    facilityName: "Makerbot Method 3D printer",
    aboutFacility: (
      <>
        <p>
          The FDM-based 3D printer can print PLA, ABS, Nylon, PETG, Carbon
          fiber, Stainless Steel and Titanium. With 0.01mm layer thickness, the
          printer can produce a very fine 3D printed finish. The secondary
          extruder can accommodate support material filament (PVA) which is easy
          to remove from complex structures and it dissolves in water
        </p>
        <p className="m-0 mb-2">
          <b>Build Volume: </b>15.2 L x 19 W x 19.6 H cm
          <b>Remote printing: </b>Available
        </p>
      </>
    ),
  },
  {
    facilityName: "Formlabs Form 3L 3D Printer",
    aboutFacility: (
      <>
        <p>
          The SLA-based 3D printer can print from standard, tough, flexible, and
          engineering-grade resins. The laser-controlled printer can give a fine
          resolution of the print in the scale of microns and has a great
          finish. The printer is accompanied by automatic washing and curing
          stations to clear excess resin from the surface of the print and also
          to cure the resin into a rigid solid part.
        </p>
        <p className="m-0 mb-2">
          <b>Build Volume: </b>33.5L × 20W × 30H cm
        </p>
        <p className="m-0 mb-2">
          <b>Remote printing: </b>Available
        </p>
      </>
    ),
  },
  {
    facilityName: "Artec 3D scanner",
    aboutFacility: (
      <>
        <p>
          The Artec 3D scanner can scan any physical object into a 3D model with
          a resolution of 10 microns. The minimum scanning distance is 0.4m and
          maximum scanning distance is 1m. The 3D model can be exported out to
          any CAD software file format.
        </p>
      </>
    ),
  },
  {
    facilityName: "Mechanical Prototyping Lab",
    aboutFacility: (
      <>
        <p>
          <b>ACE 3-axis CNC milling machine: </b>The 3-axis computer controlled
          vertical milling machine can create custom parts in metals with
          highest precision. The automatic tool changer addition can perform
          complete automated milling, drilling and finishing of any parts
          without the need to change the tools.
        </p>
        <p>
          <b>BANKA Lathe SpeedJet: </b> The manual lathe machine can perform
          rotary milling, drilling and finish operations. Effective for
          producing circular, cylindrical and spherical finishing.
        </p>
      </>
    ),
  },
];

const Facilities = () => {
  return (
    <Section>
      <SectionContent>
        {FacilitiesList.map((item, key) => (
          <ContentCard key={key}>
            {item.provider && (
              <p className="uppercase font-bold text-[#6A6A6A] m-0">
                {item.provider}
              </p>
            )}
            <p className="font-bold text-4xl my-2">{item.facilityName}</p>
            <p className="text-xl">{item.aboutFacility}</p>
            <img
              src={item.thumbnail}
              alt={item.facilityName}
              className="w-9/12 mx-auto"
            />
          </ContentCard>
        ))}
      </SectionContent>
    </Section>
  );
};

export default Facilities;
