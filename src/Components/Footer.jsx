

const Footer = (props) => {
  const {handleToggleModel, data } = props;
  return (
    <div className='Footer'>
      <div className="bgGradiant"></div>
      <div>
        
        <h1>APOD Project</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModel}>
      <i className="fa-solid fa-circle-info"></i>
      </button>
    </div>
  )
}

export default Footer
