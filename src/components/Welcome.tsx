import React from "react";

interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return (
    <div>
      <h1>Olá, {name}!</h1>
      <p>Seja bem-vindo!</p>
    </div>
  );
};

export default Welcome;
