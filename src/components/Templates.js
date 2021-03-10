const Templates = ({m}) => (
  <>
    <div className="template-card">
      <img src={m.url} alt={m.name} width={280} />
      <br />
      <h3>{m.name}</h3>
    </div>
    <style jsx="true">{`
      .template-card {
        width: 300px; 
        height: 100%;
        background: #fcfafc;
        border: 1px solid #ddd;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px 0;
      }
      h3 {
        font-weight: normal;
        padding: 0 15px ;
        text-align: center;
        margin: 15px 0;
      }
      img {
        padding: 10px;
      }
    `}</style>
  </>
);

export default Templates;

