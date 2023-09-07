import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
          name: 'Assignment 1',
          uv: 60,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Assignment 2',
          uv: 55,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Assignment 3',
          uv: 58,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Assignment 4',
          uv: 60,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Assignment 5',
          uv: 56,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Assignment 6',
          uv: 55,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Assignment 7',
          uv: 60,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
          <AreaChart
          width={1300}
          height={600}
          data={data}
          margin={{
            top: 90,
            right: 30,
            left: 30,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
    );
};

export default Statistics;