import { useState } from 'react';
import { Button } from 'shared/components';
import { getOption, setOption } from 'utils/options';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { MdOutlineNotes } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './Categories.module.scss';

const CATEGORIES_LIST = [
    { id: '1', name: 'University' },
    { id: '2', name: 'Work' }
];

export function Categories() {
    const { user } = useSelector((state) => state.session);
    const [isOpenCategories, setIsOpenCategories] = useState(getOption('openCategories', true));
    const handleFolderAccordionClick = () => {
        setIsOpenCategories((prev) => {
            setOption(user?.id, 'openCategories', !prev);
            return !prev;
        });
    };
    return (
        <div className={clsx(styles.categories, isOpenCategories && styles.active_categories)}>
            <div className={clsx(styles.section_controller, isOpenCategories && styles.section_controller_shadow)}>
                <Button
                    onClick={handleFolderAccordionClick} 
                    projectType={!isOpenCategories ? 'sidebar-accordion' : 'sidebar-accordion-active'}>
                    <span className={clsx(!isOpenCategories && styles.active_accordion)}>
                        <IoIosArrowDown size={18} />
                    </span>
                    Categories
                </Button>
                <Button
                    projectType="sidebar-create">
                    <AiOutlinePlus size={18} />
                </Button>
            </div>
            <ul className={styles.folders_list}>
                {isOpenCategories && CATEGORIES_LIST.map(({ name, id }) => (
                    <li key={id}>
                        <Link to={`/note/${id}`}>
                            <MdOutlineNotes size={18} /> 
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
