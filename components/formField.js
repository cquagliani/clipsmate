import React from 'react';

const FormField = ({ label, name, error, register, required, type = 'text' }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="block mb-2 text-light">
          {label}
        </label>
      </div>
      <input
        type={type}
        {...register(name, { required: `${label} is required` })}
        className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
      />
      {error && <p className="text-sm text-error text-lighter mt-2 ml-2">{error.message}</p>}
    </div>
  );
};

export default FormField;
