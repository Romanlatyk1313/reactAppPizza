import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIdCategories } from '../redux/sort/selectors';
import { setCategories } from '../redux/sort/slice';



export const Categories: React.FC = React.memo(
  () => {
    const idCategories = useSelector(selectIdCategories);
    const dispatch = useDispatch();
   
    const categories = ['Всі', "М'ясні", 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];
  
    return (
      <div className="categories">
        <ul>
          {categories.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  dispatch(setCategories(i));              
                }}
                className={idCategories === i ? 'active' : ''}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
) 


