import { Link } from 'react-router-dom';
import emptyImg from '../assets/img/empty-cart.png'

export const CartEmpty: React.FC = () => {


    return (
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Кошик порожній 😕</h2>
            <p>
            Найімовірніше, ви не замовляли ще піцу.<br />
               Щоб замовити піцу, перейди на головну сторінку.
            </p>
            <img src={emptyImg} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Повернутися назад</span>
            </Link>
          </div>
        </div>
      </div>
   
    )
}
