/* eslint-disable react/prop-types */
import "./styles/Main.css";

export default function Main({ children }) {
  return <main>{children}</main>;
}

export function Table({ products, inputText, inputCheckbox }) {
  const row = [];
  let category = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(inputText.toLowerCase()) === -1)
      return;

    if (inputCheckbox && !product.stocked) return;

    if (product.category !== category) {
      category = product.category;
      row.push(
        <tr key={product.category}>
          <th colSpan="2">{category}</th>
        </tr>
      );
    }

    row.push(
      <tr className={product.stocked ? "" : "out-of-stock"} key={product.name}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>{row}</tbody>
    </table>
  );
}
