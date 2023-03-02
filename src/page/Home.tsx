import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import {Categories, Pagination, PizzaBlock, Skeleton, Sort, sortList, PageError} from '../components/imports/index';

import { useNavigate } from 'react-router-dom';


import { useAppDispatch } from '../redux/store';
import { selectSearch } from '../redux/search/selectors';
import { selectSortDate } from '../redux/sort/selectors';
import { selectDatePizza } from '../redux/pizza/selectors';
import { fetchPizzas } from '../redux/pizza/slice';
import { setFilters } from '../redux/sort/slice';


export type ParamsLink = {
idCategories: string;
page: string;
sortProperty: string;
}

 const Home: React.FC = () => {
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const search = useSelector(selectSearch);
  const { sortName, idCategories, page } = useSelector(selectSortDate);
  const { items, status } = useSelector(selectDatePizza);

  const categories = idCategories > 0 ? idCategories : '';
  const sort = sortName.sortProperty;

  const dispatch = useAppDispatch();
  
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isSearch.current) {
      
      dispatch(fetchPizzas({ sort, categories: String(categories), page: String(page) }));
    }

    window.scrollTo(0, 0);

    isSearch.current = false;
  }, [idCategories, sortName.sortProperty, page]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        idCategories: idCategories,
        sortProperty: sortName.sortProperty,
        page: page,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [idCategories, sortName.sortProperty, page]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as ParamsLink;

      
      const sortName = sortList.find((obj) => obj.sortProperty === params.sortProperty);


dispatch(setFilters({
  idCategories:Number(params.idCategories || 0),
  page: Number(params.page),
  sortName: sortName || sortList[0] ,
 }))

      isSearch.current = true;
    }
  }, []);

 

  const pizzas = items
    .filter((obj: any) => {
      if (obj.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((pizza: any) => {
      return <PizzaBlock key={pizza.id} {...pizza} />;
    });

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Всі піци</h2>
        <div className="content__items">
          {status === 'error' ? <PageError /> : <>{status === 'loading' ? skeletons : pizzas}</>}
        </div>

        <Pagination />
      </div>
    </>
  );
};
export default Home;
