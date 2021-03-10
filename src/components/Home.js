import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMemes, incPage, decPage} from '../redux/actions';
import Templates from './Templates';

const Home = () => {
  const dispatch = useDispatch();
  const memes = useSelector(state => state.memes.memes);
  const loading = useSelector(state => state.memes.loading);
  const error = useSelector(state => state.memes.error);
  const page = useSelector(state => state.pagination.page);

  useEffect(() => {
    dispatch(getMemes());
  }, [])

  if(!loading && !error && memes.success) {
    console.log(memes.data.memes[0].id);
    console.log((page-1)*12, (page*12-1));

    return (
      <>
        <div className="wrapper">
          {memes.data.memes.slice((page-1)*12, page*12).map(m => (
            <Templates m={m} key={m.id} />
          ))}
            <div className="buttons">
              <button onClick={() => dispatch(decPage(page))}
                disabled={page===1}
              >
                Prev Page
              </button>
              <span>{page}</span>
              <button onClick={() => dispatch(incPage(page))}
                disabled={page===9}
              >
                Next Page
              </button>
            </div>
        </div>
        <style jsx="true">{`
          .wrapper {
            display: flex; 
            justify-content: space-around; 
            align-items: center;
            flex-wrap: wrap; 
            padding: 10px;
          }
          .buttons {
            width: 220px;
            margin: 0 auto;
          }
          button {
            background: #eee;
            padding: 5px 10px;
            border: 1px solid #666;
            margin: 20px 10px;
            border-radius: 3px;
            cursor: pointer;
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      {loading && <p>Loading... </p>}
      {memes.length === 0 && !loading && <p>No memes available!</p>}
      {error && !loading && <p>{error}</p>}
    </>
  )
};

export default Home;
