import classNames from 'classnames'
import './Task.css'
import { FiTrash2 } from 'react-icons/fi'
import { useStore } from '../store'

const STATUS = 'PLANNED'

export default function Task({ title }) {
   const task = useStore((store) => store.tasks.find((task) => task.title === title))
   const setDraggedTask = useStore((store) => store.setDraggedTask)
   const deleteTask = useStore((store) => store.deleteTask)

   return (
      <div className='task' draggable onDragStart={() => setDraggedTask(task.title)}>
         <div>{task.title}</div>
         <div className='bottomWrapper'>
            <div>
               <FiTrash2 size={20} onClick={() => deleteTask(task.title)} />
            </div>
            <div className={classNames('status', task.state)}>{task.state}</div>
         </div>
      </div>
   )
}
