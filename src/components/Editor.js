import {useSelector, useDispatch} from 'react-redux';
import {closeEditor, submitCaption} from '../redux/actions';

const modalStyle = `
   .editor-modal {
      display: grid;
      place-items: center;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #efefef;
      border-radius: 5px;
      box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.5);
      padding: 20px;
    }
    .close-btn {
      margin: 10px;
      position: absolute;
      top: 0px;
      right: 1px;
      background: orangered;
      color: white;
      font-weight: bold;
    }
    @media screen and (max-width: 400px) {
      .editor-modal {
        max-height: 500px;
        overflow: auto;
      }
    }
    @media screen and (min-width: 400px) {
      .img-wrapper {
        max-height: 500px;
        overflow: auto;
      }
    }
`;

const Editor = ({meme}) => {
  const dispatch = useDispatch();
  const response = useSelector(state => state.editor.response);
  const uploading = useSelector(state => state.editor.uploading);
  const uploadError = useSelector(state => state.editor.uploadError);

  console.log(meme);

  const handleSubmit = e => {
    e.preventDefault(); 
    let formdata = new FormData(e.target);
    formdata.append('template_id', meme.id);
    formdata.append('username', 'PranavBhaskar');
    formdata.append('password', 'pransmemer');
    dispatch(submitCaption(formdata));
  }

  if (uploading) {
    return (
      <>
      <div className="editor-modal">
        <span style={{padding: '22px'}}>Uploading...</span>
      <button className="close-btn" onClick={() => dispatch(closeEditor())}>X</button>
      </div>
      <style jsx="true">{modalStyle}</style>
      </>
    )
  }

  if (!uploading && !uploadError && response) {
    return (
      <>
    <div className="editor-modal">
      <a rel="noreferrer" href={response.data.url} target="_blank">Uploaded!! Check it out</a>
        <br />
          <div className="img-wrapper">
       <img alt={meme.name} width={280} src={response.data.url} />
         </div>
      <button className="close-btn" onClick={() => dispatch(closeEditor())}>X</button>
     </div>
        <style jsx="true">{modalStyle}</style>
      </>
    )
  }

  if (!uploading && !response && uploadError) {
    return (
      <>
      <div className="editor-modal">
        <p>ERROR!</p>
        <p>{uploadError}</p>
    <button className="close-btn" onClick={() => dispatch(closeEditor())}>X</button>
      </div>
        <style jsx="true">{modalStyle}</style>
      </>
    )
  }

return (
  <>
  <div className="editor-modal">
    <span style={{marginBottom: '10px'}}>
      {meme.name}
    </span>
      <div className="editor">
        <div className="img-wrapper">
        <img alt={meme.name} src={meme.url} width={280} />
          </div>
          <form className="form" onSubmit={e => handleSubmit(e)}>
            {new Array(meme.box_count).fill(0).map((b,i) => (
              <input key={i} name={`text${i}`} placeholder={`text${i}`} required />
            ))}
          <button disabled={uploading} className="submit-btn" type="submit">Submit</button>
        </form>
      </div>
    <button className="close-btn" onClick={() => dispatch(closeEditor())}>X</button>
 </div>
      <style jsx="true">{`
      ${modalStyle}
      .editor {
        display: flex; 
        flex-wrap: wrap;
      }
      .form {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      input {
        margin: 8px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 3px;
      }
      .submit-btn {
        background: #2B669A;
        color: white;
        width: 80px;
        font-size: 17px;
      }
      `}</style>
  </>
)};

export default Editor;
