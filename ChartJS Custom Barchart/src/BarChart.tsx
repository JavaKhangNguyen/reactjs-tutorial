import React, {useState, useRef, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartDataLabels);

type DatasetOption = 'both' | 'basicSalary' | 'benefitsTaxFees';

interface BarChartProps {
  data: {
    basicSalary: number[];
    benefitsTaxFees: number[];
  };
  selectedDataset: DatasetOption;
}
interface PrevData {
  basicSalary: number[];
  benefitsTaxFees: number[];
}

export const BarChart: React.FC<BarChartProps> = ({ data, selectedDataset}) => {
  const labels = ["USA", "Latin America", "TalentX"];
  const chartRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prevData, setPrevData] = useState<PrevData>({ basicSalary: [], benefitsTaxFees: [] });

  const basicSalaryData = selectedDataset === 'both' || selectedDataset === 'basicSalary' ? data.basicSalary : [];
  const benefitsTaxFeesData = selectedDataset === 'both' || selectedDataset === 'benefitsTaxFees' ? data.benefitsTaxFees : [];
  const totalValues = selectedDataset === 'both' 
  ? basicSalaryData.map((val, idx) => val + (benefitsTaxFeesData[idx] || 0))
  : selectedDataset === 'basicSalary' ? basicSalaryData : benefitsTaxFeesData;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Basic Salary",
        data: basicSalaryData,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
          gradient.addColorStop(0.0155, "#F9BC37");
          gradient.addColorStop(0.9845, "#F0C974");
          return gradient;
        },
        stack: "stack1",
        barThickness: isMobile ? 66 : 159,
        borderRadius: selectedDataset === 'basicSalary' ? 16 : 0,
        datalabels: {
          display: selectedDataset === 'basicSalary'
        },
      },
      {
        label: "Benefits, Tax & Fees",
        data: benefitsTaxFeesData,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
          gradient.addColorStop(0.0155, "#9E37F9");
          gradient.addColorStop(0.9845, "#B674F0");
          return gradient;
        },
        stack: "stack1",
        barThickness: isMobile ? 66 : 159,
        borderRadius: 16,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000, 
      easing: 'easeInOutQuad'
    },
    transitions: {
      active: {
        animation: {
          duration: 1000, 
          easing: 'easeOutQuad',
        },
      },
    },
    scales: {
     x: {
      stacked: true,
      ticks: {
        font: {
          size: 16,
          family: "sans-serif",
          weight: 'bold',
        }
      }, 
      grid:{
        display: false
      }
     },
     y: {
        min: 0,
        max: 250,
        stacked: true,
        beginAtZero: true,
        ticks: {
          stepSize: 50,
          font: {
            size: isMobile ? 14 : 18,
            family: "sans-serif",
            weight: 'normal',
          },
          callback: (value: number) => {
            return `$${(value * 1000).toLocaleString()}`;
          },
        },
     }
    },
    plugins: {
      legend: { 
        display: false 
      },
      tooltip :{
        enabled: true,
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.raw * 1000;
            return `${label}: $${value.toLocaleString()}`;
          }
        }
      },
      datalabels: {
        display: true,
        anchor: "end",
        align: "top",
        offset: 2,
        formatter: (value: any, context: any) => {
          const index = context.dataIndex;
          return `$${(totalValues[index] * 1000).toLocaleString()}`;
        },
        font: {
          size: isMobile ? 14 : 18,
          family: "sans-serif",
          weight: 'bold',
        },
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // PrevData is redundant but this will ensure the borderRadius for the first dataset when it is triggered
  useEffect(() => {
    setPrevData({ basicSalary: basicSalaryData, benefitsTaxFees: benefitsTaxFeesData });
  }, [selectedDataset]);

  return (
    <div className="w-full max-w-4xl p-4 md:px-16">
      <div className="h-96">
        <Bar ref={chartRef} data={chartData} options={options as any}/>
      </div>
    </div>
  );
};
