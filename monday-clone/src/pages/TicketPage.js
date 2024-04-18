import { useState} from 'react'

const TicketPage = ()=>{
    const [formData,setFormData]=useState({
        status: 'not started',
        progress: 0,
        timeStamp: new Date().toISOString()
    })
   
    const editMode = false;

    const handleSubmit = () =>{
        console.log('submited')
    }
    
    const handleChange =(e) => {
       const value = e.target.value
       const name = e.target.name

       setFormData((prevState)=>({
            ...prevState,
            [name]: value 
       }))
       
    }

    return(
        <div className="ticket">
            <h1>{editMode ? 'Update your ticket' : 'Create a ticket'}</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}> 
                   <section>
                      <label htmlFor="title">Title</label>
                      <input
                         id="title"
                         name="title"
                         type="text"
                         onChange={handleChange}
                         required='true'
                         value={formData.title}>

                      </input>

                      <label htmlFor="description">Description</label>
                      <input
                         id="description"
                         name="description"
                         type="text"
                         onChange={handleChange}
                         required='true'
                         value={formData.description}></input>

                   </section>
                </form>

            </div>
        </div>
    )
    }
    export default TicketPage