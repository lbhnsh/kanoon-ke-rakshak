import React, { useState } from 'react';

  const sectors = {
    'Banking / Finance': [
      { title: 'Deed of Hypothecation HP', link: 'https://lawrato.com/experts/legaldocuments/Deed-of-Hypothecation-HP-LawRato4.docx' },
      { title: 'Loan Agreement', link: 'https://lawrato.com/experts/legaldocuments/Loan-Agreement-LawRato3.docx' },
      { title: 'Loan Agreement with Security', link: 'https://lawrato.com/experts/legaldocuments/Loan-Agreement-with-Security-LawRato2.docx' },
      { title: 'Cheque Bounce Notice Format', link: 'https://lawrato.com/experts/legaldocuments/Cheque-Bounce-Notice-Format-LawRato.docx' },
      { title: 'Legal Notice for Recovery of Money', link: 'https://lawrato.com/experts/legaldocuments/Legal-Notice-for-Recovery-of-Money-LawRato.docx' }
    ],
    'Bonds': [
      { title: 'Simple Money Bond', link: 'https://lawrato.com/experts/legaldocuments/Simple-Money-Bond-LawRato2.docx' },
      { title: 'Bond and Bail bond under CrPC 1973 after Arrest under a Warrant', link: 'https://lawrato.com/experts/legaldocuments/Bond-and-Bail-bond-under-CrPC-1973-after-Arrest-under-a-Warrant-LawRato.docx' },
      { title: 'Employee Bond for Non Compete', link: 'https://lawrato.com/experts/legaldocuments/Employee-Bond-for-Non-Compete-LawRato3.docx' },
      { title: 'Bond to Secure the Performance of a Contract', link: 'https://lawrato.com/experts/legaldocuments/Bond-to-Secure-the-Performance-of-a-Contract-LawRato2.docx' },
      { title: 'Security Bond by a Surety', link: 'https://lawrato.com/experts/legaldocuments/Security-Bond-by-a-Surety-LawRato2.docx' },
      { title: 'Security Bond for grant of Succession Certificate', link: 'https://lawrato.com/experts/legaldocuments/Security-Bond-for-grant-of-Succession-Certificate-LawRato2.docx' }
    ],
    'Civil': [],
    'Contracts': [
      { title: 'Lease Deed (for a term of years) Rent Agreement', link: 'https://lawrato.com/experts/legaldocuments/Lease-Deed-(for-a-term-of-years)-Rent-Agreement-LawRato3.docx' },
      { title: 'Deed of lease (for a term in perpetuity)', link: 'https://lawrato.com/experts/legaldocuments/Deed-of-lease-(for-a-term-in-perpetuity)-LawRato2.docx' },
      { title: 'Leave and License Agreement', link: 'https://lawrato.com/experts/legaldocuments/Leave-and-License-Agreement-LawRato2.docx' },
      { title: 'Simple Mortgage Deed', link: 'https://lawrato.com/experts/legaldocuments/Simple-Mortgage-Deed-LawRato2.docx' },
      { title: 'Agreement for Sale of a House (Sale Agreement)', link: 'https://lawrato.com/experts/legaldocuments/Agreement-for-Sale-of-a-House-(Sale-Agreement)-LawRato2.docx' }
    ],
    'Corporate / Business': [
      { title: 'Agreement between Independent Contractor and Service Provider', link: 'https://lawrato.com/experts/legaldocuments/Agreement-between-Independent-Contractor-and-Service-Provider-LawRato3.docx' },
      { title: 'Business Services Agreement', link: 'https://lawrato.com/experts/legaldocuments/Business-Services-Agreement-LawRato3.docx' },
      { title: 'Confidential Information and Non-Disclosure Agreement NDA', link: 'https://lawrato.com/experts/legaldocuments/Confidential-Information-and-Non-Disclosure-Agreement-NDA-LawRato3.docx' },
      { title: 'Employee Service Agreement', link: 'https://lawrato.com/experts/legaldocuments/Employee-Service-Agreement-LawRato4.docx' },
      { title: 'Franchise Agreement', link: 'https://lawrato.com/experts/legaldocuments/Franchise-Agreement-LawRato2.docx' },
      { title: 'Memorandum of Understanding MOU', link: 'https://lawrato.com/experts/legaldocuments/Memorandum-of-Understanding-MOU-LawRato3.docx' },
      { title: 'Articles of Association for Public Companies', link: 'https://lawrato.com/experts/legaldocuments/Articles-of-Association-for-Public-Companies-LawRato2.docx' },
      { title: 'Formation Agreement to Convert a Partnership into a Limited Company', link: 'https://lawrato.com/experts/legaldocuments/Formation-Agreement-to-Convert-a-Partnership-into-a-Limited-Company-LawRato2.docx' },
      { title: 'Joint Venture / Share Holder’s Agreement', link: 'https://lawrato.com/experts/legaldocuments/Joint-Venture--Share-Holder’s-Agreement-LawRato3.docx' },
      { title: 'Shareholders Agreement', link: 'https://lawrato.com/experts/legaldocuments/Shareholders-Agreement-LawRato2.docx' }
    ],
    'Criminal': [
      { title: 'Anticipatory Bail Petition Application Format (Sessions Court & High Court)', link: 'https://lawrato.com/experts/legaldocuments/Anticipatory-Bail-Petition-Format-LawRato.docx' }
    ],
    'Divorce / Family Law': [
      { title: 'Deed of family settlement for division of properties left by a deceased between son and daughters where son pays money to daughters', link: 'https://lawrato.com/experts/legaldocuments/Deed-of-family-settlement-for-division-of-properties-left-by-a-deceased-between-son-and-daughters-where-son-pays-money-to-daughters-LawRato2.docx' },
      { title: 'Separation Agreement between Husband and Wife', link: 'https://lawrato.com/experts/legaldocuments/Separation-Agreement-between-Husband-and-Wife-LawRato2.docx' }],
  // Add other sectors with their respective results
};

const CardLayout = () => {
  const [selectedSector, setSelectedSector] = useState(null);

  const handleSectorClick = (sector) => {
    setSelectedSector(sector);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.keys(sectors).map((sector, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 cursor-pointer" onClick={() => handleSectorClick(sector)}>
          <p className="text-xl font-bold text-gray-800 mb-4">{sector}</p>
        </div>
      ))}
      {selectedSector && (
        <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
          {sectors[selectedSector].map((item, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-600">{item.link}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardLayout;