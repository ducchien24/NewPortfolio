import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
import './hero.scss';
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from 'helpers/data';
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

interface IProps {
    scrollToExperienceSection: () => void;
}
type TLanguage = "en" | "vi"
const HeroLeft = (props: IProps) => {

    const { t ,i18n} = useTranslation();
    const currentLanguage= (i18n.resolvedLanguage) as TLanguage

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const handleDownloadCV = () => {
        openInNewTab("https://drive.google.com/file/d/1nhaXoxozVgdN2kQc6zI8-9ftkueqkuqb/view?usp=drive_link")
    }
    return (
        <div className='hero-left'>
           {currentLanguage =="en" ?  <>
            <h3>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h3>
            <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                I'M &nbsp;
                <strong className="brand-red">{t("appHeader.brand")}</strong>
            </h3>
            </>:
            <>
             <h3>
             Chào mọi người!{" "}
             <span className="wave" role="img" aria-labelledby="wave">
                 👋🏻
             </span>
         </h3>
         <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                Tôi là &nbsp;
                <strong className="brand-red">{t("appHeader.brand")}</strong>
            </h3>
         </>
         }
          
            <Typewriter
                options={{
                    strings: [
                        "Front-end Developer",
                        "Designer",
                        "Freelancer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: "brand-green"
                }}
            />
            <div
                className="mt-md-6 mt-3 mb-md-5 mb-2"
            >
                <SocialMedia
                    // youtube={APP_DATA.YOUTUBE_URL}
                    facebook={APP_DATA.FACEBOOK_URL}
                    tiktok={APP_DATA.TIKTOK_URL}
                    // udemy={APP_DATA.UDEMY_URL}
                    github={APP_DATA.GIT_URL}
                    instagram={APP_DATA.INSTAGRAM_URL}
                />
            </div>
            <div className="d-md-flex d-none gap-4">
                <ResizeButton
                    onClick={props.scrollToExperienceSection}
                    btnText={t("heroSection.exp")}
                    btnIcons={<AiFillFire style={{ color: "orange" }} />}
                    btnStyle={{
                        background: "unset",
                        border: "1px solid var(--border-hero-right)",
                        color: "var(--text-white-1)",
                    }}
                />
                <ResizeButton
                    btnText={t("heroSection.cv")}
                    btnIcons={<MdFileDownload />}
                    onClick={handleDownloadCV}
                />

            </div>

        </div>
    )
}

export default HeroLeft;