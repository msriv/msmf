import {DataTypes, dbConnection} from '../services/db';

const IncubationModel = () => {
  const {STRING, BOOLEAN} = DataTypes;
  const incubatee = dbConnection.define('Incubatee', {
    orgName: {type: STRING, allowNull: false},
    applicantName: {type: STRING, allowNull: false},
    email: {type: STRING, allowNull: false},
    phoneNumber: {type: STRING, allowNull: false},
    linkedInProfile: {type: STRING, allowNull: false},
    alternateContact: {type: STRING, allowNull: false},
    stage: {type: STRING, allowNull: false},
    isNonProfit: {type: BOOLEAN, allowNull: false},
    mcaRegistration: {type: BOOLEAN, allowNull: false},
    incorporationYear: {type: STRING, allowNull: false},
    headquarters: {type: STRING, allowNull: false},
    sector: {type: STRING, allowNull: false},
    subSector: {type: STRING, allowNull: false},
    customerProblem: {type: STRING, allowNull: false},
    solution: {type: STRING, allowNull: false},
    solutionBetter: {type: STRING, allowNull: false},
    primaryBeneficiary: {type: STRING, allowNull: false},
    milestone: {type: STRING, allowNull: false},
    reasonToIncubate: {type: STRING, allowNull: false},
    earlierFunds: {type: BOOLEAN, allowNull: false},
    totalEarlierFunds: {type: STRING, allowNull: false},
    anyPatent: {type: BOOLEAN, allowNull: false},
    aboutPatent: {type: STRING, allowNull: false},
    otherDetails: {type: STRING, allowNull: false},
    pitchDeck: {type: STRING, allowNull: false},
    logo: {type: STRING, allowNull: false},
    gdpr: {type: BOOLEAN, allowNull: false},
  });
  incubatee.sync();
  return incubatee;
};

export {IncubationModel};
