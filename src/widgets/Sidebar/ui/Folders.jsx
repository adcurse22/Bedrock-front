import { useState } from 'react';
import { getOption, setOption } from 'utils/options';
import { Button } from 'shared/components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { AiOutlineFolder, AiOutlinePlus } from 'react-icons/ai';
import styles from './Folders.module.scss';

const FOLDERS_LIST = [
    { id: '1', name: 'University' },
    { id: '2', name: 'Work' }
];

export function Folders() {
    const { user } = useSelector((state) => state.session);
    const [isOpenFolder, setIsOpenFolders] = useState(getOption(user?.id, 'openFolders', false));
    const handleFolderAccordionClick = () => {
        setIsOpenFolders((prev) => {
            setOption(user?.id, 'openFolders', !prev);
            return !prev;
        });
    };
    const handleCreateFolder = () => {
        console.log('Adding');
    };
    return (
        <div className={styles.folders}>
            <div className={clsx(styles.section_controller, isOpenFolder && styles.section_controller_shadow)}>
                <Button
                    onClick={handleFolderAccordionClick} 
                    projectType={!isOpenFolder ? 'sidebar-accordion' : 'sidebar-accordion-active'}>
                    <span className={clsx(!isOpenFolder && styles.active_accordion)}><IoIosArrowDown size={18} /></span>
                    Folders
                </Button>
                <Button
                    onClick={handleCreateFolder}
                    projectType="sidebar-create">
                    <AiOutlinePlus size={18} />
                </Button>
            </div>
            <ul className={clsx(styles.folders_list, isOpenFolder && styles.foldersShow)}>
                
                {isOpenFolder 
                    && (
                        <>
                            {FOLDERS_LIST.map(({ name, id }) => (
                                <li key={id}>
                                    <Button projectType="sidebar-folder">
                                        <AiOutlineFolder size={18} /> 
                                        {name}
                                    </Button>
                                </li>
                            ))}
                            {FOLDERS_LIST.map(({ name, id }) => (
                                <li key={id}>
                                    <Button projectType="sidebar-folder">
                                        <AiOutlineFolder size={18} /> 
                                        {name}
                                    </Button>
                                </li>
                            ))}
                            {FOLDERS_LIST.map(({ name, id }) => (
                                <li key={id}>
                                    <Button projectType="sidebar-folder">
                                        <AiOutlineFolder size={18} /> 
                                        {name}
                                    </Button>
                                </li>
                            ))}
                            {FOLDERS_LIST.map(({ name, id }) => (
                                <li key={id}>
                                    <Button projectType="sidebar-folder">
                                        <AiOutlineFolder size={18} /> 
                                        {name}
                                    </Button>
                                </li>
                            ))}
                            <li>
                                <Button projectType="sidebar-folder">
                                    <AiOutlineFolder size={18} /> 
                                    All categories
                                </Button>
                            </li>
                            {FOLDERS_LIST.map(({ name, id }) => (
                                <li key={id}>
                                    <Button projectType="sidebar-folder">
                                        <AiOutlineFolder size={18} /> 
                                        {name}
                                    </Button>
                                </li>
                            ))}
                        </>
                    )}
            </ul>
        </div>
    );
}
