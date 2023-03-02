import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortName } from '../redux/sort/selectors';
import { setSort } from '../redux/sort/slice';
import { SortItems, SortPropertyEnum } from '../redux/sort/types';

export const sortList: SortItems[]  = [
  { name: 'популярності', sortProperty: SortPropertyEnum.RATING },
  { name: 'ціні', sortProperty: SortPropertyEnum.PRICE },
  { name: 'алфавіту', sortProperty: SortPropertyEnum.TITLE },
];

// https://63c9329b320a0c4c9542e5a2.mockapi.io/items

export const Sort: React.FC = React.memo(
  () => {
    const sortName = useSelector(selectSortName);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  
  
    const sortRef = React.useRef<HTMLDivElement>(null);
  
    React.useEffect(() => {
      const handelClickOutside = (event:MouseEvent) => {
       
        if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
          setOpen(false);
        }
      };
  
      document.body.addEventListener('click', handelClickOutside);
  
      return () => {
        document.body.removeEventListener('click', handelClickOutside);
      };
    }, []);
  
    const clickSortName = (i: SortItems) => {
      console.log('clickSortName');
      
      setOpen(!open);
      dispatch(setSort(i));
    };
  
    return (
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортування за:</b>
          <span onClick={() => setOpen(!open)}>{sortName.name}</span>
        </div>
        {open && (
          <div className="sort__popup">
            <ul>
              {sortList.map((obj, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      clickSortName(obj);
                    }}
                    className={sortName.sortProperty === obj.sortProperty ? 'active' : ''}>
                    {obj.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
) 
