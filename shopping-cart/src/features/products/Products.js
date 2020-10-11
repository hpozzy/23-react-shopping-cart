import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts, selectProducts } from "./productsSlice"
import { selectCart, additem, subitem } from "../cart/cartSlice"

export function Products() {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)
  const [activeModal, setActiveModal] = useState(true)

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  function handleClick() {
    setActiveModal(false)
    if (!activeModal) {
      setActiveModal(true)
    }
  }

  function handleClick2() {
    setActiveModal(false)
  }

  let prices = cart.map((item) => item.price)

  function sum(num1, num2) {
    return num1 + num2
  }
  let total = prices.reduce(sum, 0)

  let quantity = cart.map((item) => {
    return item.length
  })

  return (
    <div>
      <div className="container">
        <div className="col1"></div>

        <div className="col2">
          <div className="sideBar">
            <h4>Sizes:</h4>
            <button className="sizeButtons">XS</button>
            <button className="sizeButtons">S</button>
            <button className="sizeButtons">M</button>
            <button className="sizeButtons">ML</button>
            <button className="sizeButtons">L</button>
            <button className="sizeButtons">XL</button>
            <button className="sizeButtons">XXL</button>
            <p className="sideBarSentence">
              Leave a star on Github if this repository was useful
            </p>
            <div className="star-btn">
              <a className="star-widget" href="#">
                <i class="far fa-star"></i> Star
              </a>
              <a className="likes-widget" href="#">
                1,513
              </a>
            </div>
          </div>
        </div>
        <div className="col3">
          <div className="col3-row1">
            <p>{products.length} Product(s) found.</p>
            <div className="selectBy">
              Order by{" "}
              <select className="selectDown" id="cars" form="carform">
                <option value="select">Select</option>
                <option value="lowest">Lowest to Highest</option>
                <option value="highest">Highest to Lowest</option>
              </select>
            </div>
          </div>

          <div className="col3-row2">
            {products.map((item) => (
              <div
                onClick={() => dispatch(additem(item))}
                className="products"
                key={item.id}
                style={{ backgroundImage: `url(${item.img.normal})` }}
              >
                <div>
                  {item.isFreeShipping ? (
                    <div className="free-shipping"> Free shipping</div>
                  ) : null}
                </div>
                <div className="item-title">{item.title}</div>
                <div className="item-price">
                  <div>${item.price.toFixed(2)}</div>
                  <div>
                    {" "}
                    or {item.installments} x $
                    {(item.price / item.installments).toFixed(2)}
                  </div>
                </div>

                <div>
                  <button onClick={handleClick2} className="addToCart">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col4"></div>
      </div>

      <div className={!activeModal ? "shoppingCart" : "hidden-shoppingCart"}>
        <button className="cartTopRight" onClick={handleClick}>
          <i className="far fa-shopping-cart"></i>
        </button>

        {/* start of interior cart  */}

        <div className="interiorCart">
          <div className="headerCart">
            <h2>
              Cart <span className="cartAmount">{cart.length}</span>{" "}
              <i className="far fa-shopping-cart"></i>
            </h2>
          </div>

          <div className="items-in-cart">
            {cart.map((item) => (
              <div className="cart-products-layout">
                <div
                  onClick={() => dispatch(subitem(item.id))}
                  className="cart-item-delete"
                ></div>
                <img className="products2" src={item.img.thumb} />

                <div className="cart-products-layout-2">
                  <p>{item.title}</p>
                  <p className="item-style">{item.style}</p>
                  <p>Quantity:{item.quantity} </p>
                </div>

                <div className="cart-products-layout-3">
                  <p>
                    {item.currencyFormat}
                    {item.price.toFixed(2)}
                  </p>
                  <div>
                    <button className="item-quantity-btn disabled">-</button>{" "}
                    <button className="item-quantity-btn">+</button>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="checkoutTotal">
            <div className="subtotal">
              <div className="subtotal-a">Subtotal</div>
              <div className="subtotal-b"> ${total.toFixed(2)}</div>
            </div>

            <div className="checkoutButton">
              <button className="checkoutButton2">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
