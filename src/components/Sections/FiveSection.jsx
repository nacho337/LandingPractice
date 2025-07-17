import { useState } from 'react';
import data from '../../data.json';

function FiveSection() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(input));
  };

  const handleButtonClick = () => {
    if (isValidEmail && email) {
      window.location.href = `mailto:call@nexusfood.com ?subject=Contact&body=Email contact: ${email}`;
      setEmail('');
    } else {
      alert(data['section-seven'].error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-12 px-8 gap-2">
      <p className="text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {data['section-seven'].title}
      </p>
      <div className="flex flex-col sm:flex-row items-center mt-4 gap-2 sm:gap-4 ">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="bg-[#F4F4F4] text-black p-3 px-5 border-solid border border-[#CFCFCF] placeholder-black"
          placeholder={data['section-seven'].input_placeholder}
        />
        <button
          className="bg-primary text-white p-3 px-10"
          onClick={handleButtonClick}
        >
          {data['section-seven'].button}
        </button>
      </div>
      {!isValidEmail && email !== '' && (
        <p className="text-red-500 text-sm mt-2">
          {data['section-seven'].error}
        </p>
      )}
    </div>
  );
}

export default FiveSection;