import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardCard from '../shared/DashboardCard';
import { BarChart3 } from '../icons/Icons';
import { GROWTH_DATA } from '../../constants';

const GrowthChartCard: React.FC = () => {
  return (
    <div className="px-4">
        <DashboardCard title="Baby's Growth Chart" icon={<BarChart3 className="w-6 h-6 text-success" />} ctaText="Add Data">
        <p className="text-sm text-gray-600 mb-4">Weight-for-Age (Boys, 0-6 months)</p>
        <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
            <LineChart
                data={GROWTH_DATA}
                margin={{
                top: 5, right: 20, left: -10, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" label={{ value: 'Age (months)', position: 'insideBottom', offset: -5 }} tick={{fontSize: 12}}/>
                <YAxis label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft' }} tick={{fontSize: 12}} />
                <Tooltip />
                <Legend wrapperStyle={{fontSize: "12px"}}/>
                <Line type="monotone" dataKey="weight" name="Baby's Weight" stroke="#ff6b9d" strokeWidth={3} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="percentile50" name="50th Percentile" stroke="#47a9eb" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="percentile3" name="3rd Percentile" stroke="#ff9800" strokeDasharray="5 5" />
            </LineChart>
            </ResponsiveContainer>
        </div>
        </DashboardCard>
    </div>
  );
};

export default GrowthChartCard;