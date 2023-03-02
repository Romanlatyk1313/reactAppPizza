import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '../../redux/sort/selectors';
import { setPage } from '../../redux/sort/slice';


import s from './Pagination.module.scss'

export const Pagination: React.FC = () => {

  const page = useSelector(selectPage)
  const dispatch = useDispatch()


    return (
      
      <ReactPaginate
      
        className={s.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => dispatch(setPage(event.selected+1))}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        forcePage={page-1}
      />
        
    )
} 

