import {useDispatch} from 'react-redux';
import {closeEditor} from '../redux/actions';

const Editor = ({meme}) => {
  const dispatch = useDispatch();

  console.log(meme);

return (
  <>
  <p className="editor-modal">
    <span>
      Editing {meme.name}...
    </span>
    <button onClick={() => dispatch(closeEditor())}>close</button>
 </p>
      <style jsx="true">{`
      .editor-modal {
        display: grid;
        place-items: center;
        position: fixed;
        width: 370px;
        height: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 5px;
        box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.5);
        padding: 20px;
      }
      `}</style>
  </>
)};

export default Editor;
