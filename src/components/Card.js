import React, {useState} from 'react';
import EditTask  from '../modals/EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
   const [modal, setModal] = useState(false);


  const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#c1d5ef"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#e3f1d4"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#c3f1d4"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#c6bdbd"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#dfafd6"
    },
    {
        primaryColor : "#141619",
        secondaryColor : "#a8d6df"
    }
  ]

  const toggle = () => {
    setModal(!modal);
  }

  const updateTask = (obj) => {
    updateListArray(obj, index)
  }

  const handleDelete = () => {
    deleteTask(index)
  }

  return (
    <div className='card-wrapper mr-5'>
        <div className='card-top' style={{"background-color": colors[index%6].primaryColor}}></div>
        <div className='task-holder'>
            <span className='card-header' style={{"background-color": colors[index%6].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
            <p className='mt-3'>{taskObj.Description}</p>

            <div style={{'position': 'absolute', 'right': '20px', 'bottom': '20px'}}>
                <i class='far fa-edit mr-3' style={{'color' : colors[index%6].primaryColor, 'cursor': 'pointer'}} onClick = {() => setModal(true)}></i>
                <i class='fas fa-trash-alt' style={{'color' : colors[index%6].primaryColor, 'cursor': 'pointer'}} onClick = {handleDelete}></i>
            </div>

        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj} />
    </div>

  );

};

export default Card
