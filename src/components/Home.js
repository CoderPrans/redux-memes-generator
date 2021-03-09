import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMemes} from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const memes = useSelector(state => state.memes.memes);
  const loading = useSelector(state => state.memes.loading);
  const error = useSelector(state => state.memes.error);

  useEffect(() => {
    dispatch(getMemes());
  }, [])

  if(!loading && !error && memes.success) {
    console.log(memes.data.memes[0].id);

    return (
      <>
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '20px'}}>
          {memes.data.memes.map(m => (
            <p key={m.id} style={{textAlign: 'center'}}>
              {m.name}
              <br />
              <img src={m.url} alt={m.name} width={300} />
            </p>
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      {loading && <p>Loading... </p>}
      {memes.length === 0 && !loading && <p>No memes available!</p>}
      {error && !loading && <p>{error}</p>}
    </>
)};

export default Home;
