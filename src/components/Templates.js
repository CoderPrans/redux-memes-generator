import {useDispatch} from 'react-redux';
import {editMeme} from '../redux/actions';

const Templates = ({m, i}) => {
  const dispatch = useDispatch();

  return (
  <>
    <div 
      className="template-card"
      onClick={() => dispatch(editMeme(i))}
    >
      <img src={m.url} alt={m.name} width={280} />
      <br />
      <h3>{m.name}</h3>
    </div>
    <style jsx="true">{`
      .template-card {
        width: 300px; 
        height: 100%;
        background: #fefefe;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px 0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        cursor: pointer;
      }
      .template-card:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }
      h3 {
        font-weight: normal;
        padding: 0 15px ;
        text-align: center;
        margin: 0 15px 25px 15px;
      }
      img {
        padding: 10px;
      }
    `}</style>
  </>
)};

export default Templates;

