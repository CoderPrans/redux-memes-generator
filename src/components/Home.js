import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMemes, incPage, decPage} from '../redux/actions';
import Templates from './Templates';
import Editor from './Editor';

const Home = () => {
  const dispatch = useDispatch();
  const memes = useSelector(state => state.memes.memes);
  const loading = useSelector(state => state.memes.loading);
  const error = useSelector(state => state.memes.error);
  const page = useSelector(state => state.pagination.page);
  const toEdit = useSelector(state => state.editor.editing);

  useEffect(() => {
    dispatch(getMemes());
  }, [])

  if(!loading && !error && memes.success) {
    console.log(memes.data.memes[0].id);
    console.log((page-1)*12, (page*12-1));

    return (
      <>
        <div className="wrapper">
          {memes.data.memes.slice((page-1)*12, page*12).map((m, i) => (
            <Templates m={m} i={i} key={m.id} />
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
            {toEdit!==null && <Editor meme={memes.data.memes[(page-1)*12+toEdit]} />}
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
            width: 240px;
            margin: 0 auto;
          }
          button {
            background: #fefefe;
            padding: 5px 10px;
            font-size: 16px;
            border: none;
            margin: 20px 10px;
            border-radius: 3px;
            cursor: pointer;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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
