

const Sidebar = (props) => {
 const {handleToggleModel, data} = props;
  return (
    <div className="Sidebar">
      <div onClick={handleToggleModel}
      className="bgOverlay"></div>
      <div className="SidebarContain">
      <h2 className="title">{data?.title}</h2>
      <div>
        <p className="desc">{data?.date}</p>
        <p>{data?.explanation}</p>
      </div>
      <button onClick={handleToggleModel} >
      <i className="fa-solid fa-right-long"></i>
      </button>
      </div>
      
      
    </div>
  )
}

export default Sidebar
