import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


 const PizzaInfo: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string,
    name: string,
    price: number,
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const item = await axios.get(`https://63d12055120b32bbe8f1be01.mockapi.io/items/` + id);

        setPizza(item.data);
      } catch {
        alert('error serviss');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>'...загрузка'</>;
  }

  return (
    <div>
      <div>
        <img src={pizza.imageUrl} />
      </div>
      <div>
        <h2>{pizza.name}</h2>
        <h3>{pizza.price}</h3>
      </div>
    </div>
  );
};

export default PizzaInfo;
