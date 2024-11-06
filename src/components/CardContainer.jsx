import { useState } from 'react';

const CardContainer = ({ children }) => {
  const [layout, setLayout] = useState('column'); 

  const handleLayoutChange = (event) => {
    setLayout(event.target.value);
  };

  return (
    <div>
      <label htmlFor="layout-select">Disposición:</label>
      <select id="layout-select" value={layout} onChange={handleLayoutChange}>
        <option value="column">Columnas</option>
        <option value="row">Filas</option>
      </select>
      
      <div className={`card-container ${layout}`}>
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
