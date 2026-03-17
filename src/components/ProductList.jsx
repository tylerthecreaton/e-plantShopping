import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { plants } from '../data/plants';
import { addToCart } from '../features/cart/CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartMap = useSelector((state) => state.cart.items);

  const groupedPlants = useMemo(() => {
    return plants.reduce((acc, plant) => {
      if (!acc[plant.category]) {
        acc[plant.category] = [];
      }
      acc[plant.category].push(plant);
      return acc;
    }, {});
  }, []);

  return (
    <>
      <Navbar />
      <main className="products-page">
        <h2>Our Houseplants</h2>
        {Object.entries(groupedPlants).map(([category, items]) => (
          <section key={category} className="plant-category">
            <h3>{category}</h3>
            <div className="plant-grid">
              {items.map((plant) => {
                const inCart = Boolean(cartMap[plant.id]);
                return (
                  <article key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h4>{plant.name}</h4>
                    <p className="price">${plant.price}</p>
                    <button
                      disabled={inCart}
                      onClick={() => dispatch(addToCart(plant))}
                      type="button"
                    >
                      {inCart ? 'Added' : 'Add to Cart'}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
