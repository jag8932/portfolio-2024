
export const SideCard = (info) => {
    return (
       <div className="side-card">
            <a href={info.link} className="Card-Link" rel="noreferrer" target="_blank">
            <img src={info.img} alt={info.title}></img>
            </a>
            <div className="side-card-text">
                <h2>{info.title}</h2>
                <p>{info.text}</p>
            </div>
       </div> 
    )
}