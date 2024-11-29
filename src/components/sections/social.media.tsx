import { FaFacebook } from "react-icons/fa6";
// import { SiUdemy } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
// import { SiYoutubeshorts } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface IProps {
    github :string;
    tiktok: string;
    facebook: string;
    instagram: string;
}
const SocialMedia = (props: IProps) => {
    const {  tiktok, facebook ,github, instagram } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
               <a href={github} target='_blank' className="highlight" title="Github">
                <FaGithub size={30} />
            </a>

            <a href={facebook} target='_blank' className="highlight" title="Facebook">
                <FaFacebook size={30} />
            </a>
            
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok">
                <FaTiktok size={30} />
            </a>
            <a href={instagram} target='_blank' className="highlight" title="Tiktok">
                <FaInstagram size={30} />
            </a>


        </div>
    )
}

export default SocialMedia;