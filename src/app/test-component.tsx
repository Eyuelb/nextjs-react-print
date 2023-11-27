import React from 'react';

type Props = {
  data?: any;
};

const TestComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
 
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Invoice #{data?.invoiceNumber || '001'}
          </div>
          <p className="mt-2 text-gray-600">{data?.invoiceDate || 'Date: 2023-11-27'}</p>
          <p className="mt-2 text-gray-600">{data?.dueDate || 'Due Date: 2023-12-10'}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-800">Billing Details</h2>
        <p className="mt-2 text-sm text-gray-600">{data?.customerName || 'Customer Name'}</p>
        <p className="mt-2 text-sm text-gray-600">{data?.customerAddress || 'Customer Address'}</p>
        {/* Add more customer details as needed */}
      </div>
      <div className="border-t border-gray-300"></div>
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-800">Items</h2>
        {/* Map through invoice items and display them */}
        {data?.items?.map((item: any, index: number) => (
          <div key={index} className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">{item.description}</span>
            <span className="text-sm text-gray-600">{item.amount}</span>
          </div>
        ))}
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <span className="text-lg font-semibold text-gray-800">Total</span>
          <span className="text-lg font-semibold text-gray-800">{data?.total || '$0.00'}</span>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
