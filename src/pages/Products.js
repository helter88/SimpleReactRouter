import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Products List</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
