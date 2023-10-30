import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme.context";

function ContactCards ({cards}) {

  const {theme} = useContext(ThemeContext);

    return (
        <>
            {
                cards.map((card)=>(
                    <div key={card.id} className="column is-3">{/*Dinamic content start here*/}
                        <div className={"card contact-card-"+theme}>
                          <div className="card-image has-text-centered" style={{margin: "auto", paddingTop: "2rem", cursor: "pointer"}}>
                            <a href={card.contactLink}><img src={card.contactImage} alt={card.contact}
                              style={{width: "100px", height: "100px"}}/></a>
                          </div>
                          <div className="card-content has-text-centered">
                            <div className="content">
                              <h3 className={"is-size-3 mb-5 text-color-primary-"+theme}><span className={"text-color-primary-"+theme}>{card.contact}</span></h3>
                              <p className="is-size-6 has-text-weight-normal">{card.contactInfo}</p>
                            </div>
                            <div className={"copy-btn-"+theme} name="copyText">
                              <p className="copy-text" ><i className="fa-regular fa-clipboard"></i> Copy</p>
                            </div>
                          </div>
                        </div>
                    </div>
                ))   
            }
        </>
    );
}

export default ContactCards;