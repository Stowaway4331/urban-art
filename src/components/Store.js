import "../component-styles/Store.scss";
import art1 from "../assets/images/artworks/383x215/art1.webp";
import art2 from "../assets/images/artworks/383x215/art2.webp";
import art3 from "../assets/images/artworks/383x215/art3.webp";
import art4 from "../assets/images/artworks/383x215/art4.webp";
import art5 from "../assets/images/artworks/383x215/art5.webp";
import art6 from "../assets/images/artworks/383x215/art6.webp";

const Store = () => {
  // Put this in a database and get it from there
  const artworks = [
    {
      id: "1",
      img: art1,
      name: "I'm an artwork",
      price: 155,
      bestSellerStatus: true,
      saleStatus: true,
      newArrivalStatus: true,
    },
    {
      id: "2",
      img: art2,
      name: "I'm an artwork",
      price: 155,
      bestSellerStatus: true,
      saleStatus: true,
      newArrivalStatus: true,
    },
    {
      id: "3",
      img: art3,
      name: "I'm an artwork",
      price: 100,
      bestSellerStatus: true,
      saleStatus: true,
      newArrivalStatus: true,
    },
    {
      id: "4",
      img: art4,
      name: "I'm an artwork",
      price: 73.259,
      bestSellerStatus: true,
      saleStatus: true,
      newArrivalStatus: true,
    },
    {
      id: "5",
      img: art5,
      name: "I'm an artwork",
      price: 155,
      bestSellerStatus: true,
      saleStatus: true,
      newArrivalStatus: true,
    },
    {
      id: "6",
      img: art6,
      name: "I'm an artwork",
      price: 155.458,
      bestSellerStatus: true,
      saleStatus: true,
      newArrivalStatus: true,
    },
  ];

  const GridItems = ({
    id,
    img,
    name,
    price,
    bestSellerStatus,
    saleStatus,
    newArrivalStatus,
  }) => {
    return (
      <div className="grid-item" key={id}>
        <img src={img} alt={`art pic of ${name}`} />
        <div className="art-name">{name}</div>
        <div className="price">{`$${price.toFixed(2)}`}</div>
        {(bestSellerStatus &&
          (() => {
            <div className="status">Best Seller</div>;
          })) ||
          (saleStatus &&
            (() => {
              <div className="status">Sale</div>;
            })) ||
          (newArrivalStatus &&
            (() => {
              <div className="status">New Arrival</div>;
            }))}
        <button className="add-to-cart">Add to cart</button>
      </div>
    );
  };

  const Grid = ({ n }) => {
    return <>{artworks.slice(0, n).map(GridItems)}</>;
  };

  return (
    <div className="Store">
      <div className="title">
        <div className="common-heading">artworks.</div>
        <div className="common-desc">
          download & print. bring street art into you home.
        </div>
      </div>
      <div className="grid">
        <Grid n={6} />
      </div>
    </div>
  );
};

export default Store;
