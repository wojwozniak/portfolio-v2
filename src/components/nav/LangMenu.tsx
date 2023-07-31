import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { US, PL, DE } from 'country-flag-icons/react/3x2'
import { useEffect, useState } from 'react'

type FlagMapType = {
    [key: string]: React.ReactElement;
};

const Flag = ({ currentLang } : { currentLang: string }) => {

    const flagMap:FlagMapType = {
        EN: <US title="United States of America" className="nav__flag" />,
        PL: <PL title="Poland" className="nav__flag" />,
        DE: <DE title="Germany" className="nav__flag" />
    };

    const flagToRender = flagMap[currentLang] || null;

    return flagToRender;
};

const LangMenu = ({ language, setLanguage } : { language: string, setLanguage: React.Dispatch<React.SetStateAction<string>> }) => {

    const [currentLang, setCurrentLang] = useState(language);
    const [openLangMenu, setOpenLangMenu] = useState(false);

    const updateOpenLangMenu = () => {
        setOpenLangMenu(!openLangMenu);
    }

    useEffect(() => {
      setLanguage(currentLang);
    }, [currentLang]);
    

    return (
        <div className='nav__lang' onClick={updateOpenLangMenu}>
            <Flag currentLang={currentLang} />

            {openLangMenu && 
            <ul className='nav__lang__menu'>
                <li className='nav__lang__menu__item' onClick={() => setCurrentLang('EN')}>English</li>
                <li className='nav__lang__menu__item' onClick={() => setCurrentLang('PL')}>Polski</li>
                <li className='nav__lang__menu__item' onClick={() => setCurrentLang('DE')}>Deutsch</li>
            </ul>
            }

            { openLangMenu
            ? <AiOutlineDown size="10px" className='nav__chevron' />
            : <AiOutlineUp size="10px" className='nav__chevron' /> }
        </div>
    )
}

export default LangMenu