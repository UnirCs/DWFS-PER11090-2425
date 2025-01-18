import React, { useState } from 'react';

const FoodSelection = ({ onBack, onConfirm }) => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [sizes, setSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const foods = [
    { id: 1, name: 'Palomitas de Maíz', price: 5, sizes: { small: 5, medium: 7, large: 9 } },
    { id: 2, name: 'Refresco', price: 3, sizes: { small: 3, medium: 4, large: 5 } },
    { id: 3, name: 'Nachos', price: 4 },
    { id: 4, name: 'Hot Dog', price: 6 },
    { id: 5, name: 'Chocolate', price: 2 },
  ];

  const toggleFood = (food) => {
    setSelectedFoods((prev) =>
      prev.includes(food.id)
        ? prev.filter((f) => f !== food.id)
        : [...prev, food.id]
    );
  };

  const handleSizeChange = (foodId, size) => {
    setSizes((prev) => ({
      ...prev,
      [foodId]: size,
    }));
  };

  const handleQuantityChange = (foodId, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [foodId]: quantity,
    }));
  };

  const calculateTotalCost = () => {
    return selectedFoods.reduce((total, foodId) => {
      const food = foods.find(f => f.id === foodId);
      const size = sizes[foodId];
      const quantity = quantities[foodId] || 1;
      const price = size ? food.sizes[size] : food.price;
      return total + price * quantity;
    }, 0);
  };

  const handleConfirm = () => {
    const totalCost = calculateTotalCost();
    onConfirm(totalCost);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1e1e1e', color: 'white', borderRadius: '10px' }}>
      <h2 style={{ color: '#f9a825' }}>Selecciona Alimentos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', margin: '20px 0' }}>
        {foods.map((food) => (
          <div
            key={food.id}
            style={{
              padding: '10px',
              backgroundColor: selectedFoods.includes(food.id) ? '#f9a825' : '#333',
              color: selectedFoods.includes(food.id) ? '#1e1e1e' : '#fff',
              borderRadius: '5px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div onClick={() => toggleFood(food)}>
              {food.name} - ${food.price}
            </div>
            {selectedFoods.includes(food.id) && food.sizes && (
              <div>
                <label>
                  <input
                    type="radio"
                    name={`size-${food.id}`}
                    value="small"
                    checked={sizes[food.id] === 'small'}
                    onChange={() => handleSizeChange(food.id, 'small')}
                  />
                  Pequeño
                </label>
                <label>
                  <input
                    type="radio"
                    name={`size-${food.id}`}
                    value="medium"
                    checked={sizes[food.id] === 'medium'}
                    onChange={() => handleSizeChange(food.id, 'medium')}
                  />
                  Mediano
                </label>
                <label>
                  <input
                    type="radio"
                    name={`size-${food.id}`}
                    value="large"
                    checked={sizes[food.id] === 'large'}
                    onChange={() => handleSizeChange(food.id, 'large')}
                  />
                  Grande
                </label>
              </div>
            )}
            {selectedFoods.includes(food.id) && (
              <div>
                <label>
                  Cantidad:
                  <input
                    type="number"
                    min="1"
                    value={quantities[food.id] || 1}
                    onChange={(e) => handleQuantityChange(food.id, parseInt(e.target.value, 10))}
                    style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
                  />
                </label>
              </div>
            )}
          </div>
        ))}
      </div>
      <button 
        onClick={handleConfirm}
        style={{
          backgroundColor: '#f9a825',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          color: '#1e1e1e',
          cursor: 'pointer',
          margin: '10px'
        }}
      >
        Confirmar Alimentos
      </button>
      <button 
        onClick={onBack}
        style={{
          backgroundColor: '#ccc',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          color: '#1e1e1e',
          cursor: 'pointer',
          margin: '10px'
        }}
      >
        Volver
      </button>
    </div>
  );
};

export default FoodSelection;