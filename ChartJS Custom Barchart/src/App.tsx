import './App.css'
import { useState } from 'react';
import { BarChart } from './BarChart'

type DatasetOption = 'both' | 'basicSalary' | 'benefitsTaxFees';

const data = {
  US: {
    basicSalary: [125, 80, 40],
    benefitsTaxFees: [80, 50, 10],
  },
  EU: {
    basicSalary: [80, 60, 40],
    benefitsTaxFees: [35.44, 16, 10],
  },
};

function App() {
  const [selectedDataset, setSelectedDataset] = useState<DatasetOption>('both');

  const handleButtonClick = (dataset: 'basicSalary' | 'benefitsTaxFees') => {
    setSelectedDataset(prev => prev === dataset ? 'both' : dataset);
  };

  const getFilteredData = (region: 'US' | 'EU') => {
    const regionData = data[region];
    if (selectedDataset === 'both') {
      return regionData;
    } 
    else {
      return {
        basicSalary: selectedDataset === 'basicSalary' ? regionData.basicSalary : [],
        benefitsTaxFees: selectedDataset === 'benefitsTaxFees' ? regionData.benefitsTaxFees : [],
      };
    }
  };


  return (
    <div className="flex flex-col h-screen justify-center items-center gap-8">
      <div className="flex md:flex-row flex-col md:gap-8 gap-2 text-body2-dt ">
          <button 
            className={`flex flex-row items-center gap-2 w-fit px-3 py-2 rounded-lg transition-colors duration-200
            ${selectedDataset === 'basicSalary' ? 'custom-color1 text-white' 
            : 'hover:bg-gradient-to-br hover:from-[#f9bc37]/10 hover:to-[#f0c974]/10'}`}
            onClick={() => handleButtonClick('basicSalary')}
          >
              <div className="w-6 h-6 rounded-lg custom-color1"/>
              <p>Basic Salary</p>
          </button>
          <button 
            className={`flex flex-row items-center gap-2 w-fit px-3 py-2 rounded-lg transition-colors duration-200
            ${selectedDataset === 'benefitsTaxFees' ? 'custom-color2 text-white' 
            : 'hover:bg-gradient-to-br hover:from-[#9e37f9]/10 hover:to-[#b674f0]/10'}`}
            onClick={() => handleButtonClick('benefitsTaxFees')}
          >
              <div className="w-6 h-6 rounded-lg custom-color2"/>
              <p>Benefits, Tax & Fee</p>
          </button>
          <div className="flex flex-row items-center gap-2 w-fit ml-1">
              <p className="text-center text-body1-dt-bold">$</p>
              <p>US Dollar</p>
          </div>
      </div>
      <BarChart data={getFilteredData('US')} selectedDataset={selectedDataset}/>
    </div>
  )
}

export default App
