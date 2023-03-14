import React, { useEffect, useState } from 'react';
import { RegularKeyFramesEnum, MenuItems } from '../utils/enums';
import { Resume } from './Resume';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const ContentMenu = ({visuals}) => {
    const [menuItems, setMenuItems] = useState()
    const [selectedMenu, setSelectedMenu] = useState();
    
    const resetChoice = () => {
        setSelectedMenu();
    }

    const subMenus = { 
        [MenuItems.Resume]: <Resume reset={resetChoice} />,
        [MenuItems.Projects]: <Projects reset={resetChoice} />,
        [MenuItems.Contact]: <Contact reset={resetChoice} />
    }

    const changeMenu = (choice) => {
        const ItemPicked = subMenus[choice]
        setSelectedMenu(ItemPicked)
    };

    useEffect(() => {
        if (visuals) {
            setTimeout((() => {
                const jsxElements = (
                    <div id={`menu${RegularKeyFramesEnum.FadeIn}`}>    
                        <div id={`resume${RegularKeyFramesEnum.ResumeGlow}`}>
                            <h1 onClick={() => changeMenu(MenuItems.Resume)}>Resume</h1>
                        </div>

                        <div id={`projects${RegularKeyFramesEnum.ProjectGlow}`}>
                            <h1 onClick={() => changeMenu(MenuItems.Projects)}>Projects</h1>
                        </div>
                    
                        <div id={`contact${RegularKeyFramesEnum.ContactGlow}`}>
                            <h1 onClick={() => changeMenu(MenuItems.Contact)}>Contact</h1>
                        </div>
                    </div>    
                )
                setMenuItems(jsxElements)
            }), 2000)
        }
        else {
            const jsxElements = (
                <div id={`menu`}>    
                    <div id={`resume`}>
                        <h1 onClick={() => changeMenu(MenuItems.Resume)}>Resume</h1>
                    </div>

                    <div id={`projects`}>
                        <h1 onClick={() => changeMenu(MenuItems.Projects)}>Projects</h1>
                    </div>
                    
                    <div id={`contact`}>
                        <h1 onClick={() => changeMenu(MenuItems.Contact)}>Contact</h1>
                    </div>
                </div>    
            )
            setMenuItems(jsxElements)
        }
    }, [visuals])

    return (
        <div id='contentHolder'>   
            {!selectedMenu ? menuItems : selectedMenu}
        </div>
    )
}