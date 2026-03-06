import React, { useEffect, useState } from 'react';
import { RegularKeyFramesEnum, MenuItems } from '../utils/enums';
import { Resume } from './Resume';
import { Projects } from './Projects';
import { Contact } from './Contact';

const DEFAULT_CONTACT = (<h1>Contact</h1>);
const DEFAULT_PROJECTS = (<h1>Projects</h1>);
const DEFAULT_RESUME = (<h1>Resume</h1>);

export const ContentMenu = ({visuals}) => {
    const [contact, setContact] = useState('');
    const [projects, setProjects] = useState('');
    const [resume, setResume] = useState('');
    const [choice, setChoice] = useState();
    let jsxMenuElements;

    if (visuals) {
        jsxMenuElements = (
                <div id={`menu${RegularKeyFramesEnum.FadeIn}`}>    
                    <div id={`resume${RegularKeyFramesEnum.ResumeGlow}`} onClick={() => setChoice(MenuItems.Resume)}>
                        {resume ? resume : DEFAULT_RESUME}
                    </div>

                    <div id={`projects${RegularKeyFramesEnum.ProjectGlow}`} onClick={() => setChoice(MenuItems.Projects)}>
                        {projects ? projects : DEFAULT_PROJECTS}
                    </div>
                
                    <div id={`contact${RegularKeyFramesEnum.ContactGlow}`} onClick={() => setChoice(MenuItems.Contact)}>
                        {contact ? contact : DEFAULT_CONTACT}
                    </div>
                </div>    
            )
    } else {
        jsxMenuElements = (
            <div id={`menu`}>    
                <div id={`resume`} onClick={() => setChoice(MenuItems.Resume)}>
                    {resume ? resume : DEFAULT_RESUME}
                </div>

                <div id={`projects`} onClick={() => setChoice(MenuItems.Projects)}>
                    {projects ? projects : DEFAULT_PROJECTS}
                </div>
                
                <div id={`contact`} onClick={() => setChoice(MenuItems.Contact)}>
                    {contact ? contact : DEFAULT_CONTACT}
                </div>
            </div>    
        )
    }

    const resetChoice = (itemToReset) => {
        if (itemToReset === MenuItems.Contact) {
            setContact(DEFAULT_CONTACT);
        }
        if (itemToReset === MenuItems.Projects) {
            setProjects(DEFAULT_PROJECTS);
        }
        if (itemToReset === MenuItems.Resume) {
            setResume(DEFAULT_RESUME);
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
            if (MenuItems.Contact === choice) {
                setContact(<Contact reset={resetChoice} />);
            }
            if (MenuItems.Projects === choice) {
                setProjects(<Projects reset={resetChoice} />);
            }
            if (MenuItems.Resume === choice) {
                setResume(<Resume reset={resetChoice} />);
            }
    }, [choice])

    return (
        <div id='contentHolder'>   
            {jsxMenuElements}
        </div>
    )
}