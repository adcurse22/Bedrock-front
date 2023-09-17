import { useState } from "react";
import styles from './style.module.css';

function Tree({tree}) {
    const [treeData, setTreeData] = useState(tree);
    const [isOpen, setIsOpen] = useState(false);
    function handleButtonClick() {
        setIsOpen(prev => !prev);
    }
    return (
        <>
            <div className={styles.cell_holder}>
                <button className={styles.cell} onClick={handleButtonClick}>
                    <p>{treeData.id}</p>
                </button>
                {
                    isOpen &&
                    <div className={styles.details_holder}>
                        <p className={styles.details_text}>{treeData.text}</p>
                    </div>
                }
            </div>
            {
                
            }
        </>
    )
};

export default Tree;