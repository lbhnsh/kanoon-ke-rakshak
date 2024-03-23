import React from 'react';
import { Link } from 'react-router-dom';

const sectors = {
  'Banking / Finance': 'https://lawrato.com/legal-documents/banking-finance-legal-forms',
  'Bonds': 'https://lawrato.com/legal-documents/bonds-legal-forms',
  'Civil': 'https://lawrato.com/legal-documents/civil-legal-forms',
  'Contracts': 'https://lawrato.com/legal-documents/contracts-legal-forms',
  'Corporate / Business': 'https://lawrato.com/legal-documents/corporate-business-legal-forms',
  'Criminal': 'https://lawrato.com/legal-documents/criminal-legal-forms',
  'Divorce / Family Law': 'https://lawrato.com/legal-documents/divorce-family-law-legal-forms',
  'Labour & Consumer Court': 'https://lawrato.com/legal-documents/labour-consumer-court-legal-forms',
  'Power of Attorney': 'https://lawrato.com/legal-documents/power-of-attorney-legal-forms',
  'Property': 'https://lawrato.com/legal-documents/property-legal-forms',
  'Trademark & Copyright (IPR)': 'https://lawrato.com/legal-documents/trademark-copyright-ipr-legal-forms',
  'Trusts': 'https://lawrato.com/legal-documents/trusts-legal-forms',
  'Will': 'https://lawrato.com/legal-documents/will-legal-forms'
};

const CardLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(sectors).map(([title, link]) => (
        <div key={title} className="bg-white rounded-lg shadow-lg p-6">
          <Link to={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-gray-800 mb-4 hover:text-blue-600">{title}</Link>
          <p className="text-gray-600">{link}</p>
        </div>
      ))}
    </div>
  );
};

export default CardLayout;