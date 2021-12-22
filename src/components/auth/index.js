import { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';

export const Auth = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="auth__box-container mt-5">
      {toggle ? (
        <Login handleToggle={handleToggle} />
      ) : (
        <Register handleToggle={handleToggle} />
      )}
    </div>
  );
};
