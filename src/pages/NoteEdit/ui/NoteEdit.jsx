import { useParams } from 'react-router-dom';
import { TextEditor } from 'widgets/TextEditor';
import styles from './NoteEdit.module.scss';

export function NoteEdit() {
    const { id } = useParams();  
    return (
        <div className={styles.note_edit}>
            <TextEditor />
        </div>
    );
}
