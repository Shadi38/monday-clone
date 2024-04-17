import blankAvatar from "../images/altPicture.png"

const AvatarDisplay = ({ticket})=>{
    return(
        <div className="avatar-container">
            <div className="imgg-container">
              <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'photo of' + ticket.owner} />
            </div> 
            
        </div>
    )
    }
    export default AvatarDisplay