
import './tree.css';

const TreeRender = ({treeData}) => {
    
    return (
        <>
                <ul>
            {
                treeData.map((item)=>                
                    <li className={item.text+item.id}>
                        <div>{ item.id}</div>
                        {
                            item.children && item.children.length ?
                            TreeRender(item.children)
                            :''
                        }
                    </li>
                )            
                
            }
            </ul>
        </>
    )
}

export default TreeRender;