import React from "react";
import { Media } from 'reactstrap';

class Reminder extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            reminders:[
                {
                    id:1,
                    title:'abc_birthday',
                    image:'image/rem.png',
                    description:'birthday',
                    date:15_02_2022,
                    time:10.00
                    
                
                },
                {
                    id:2,
                    title:'abc_birthday',
                    image:'image/r2.jpg',
                    description:'birthday',
                    date:16_02_2022,
                    time:10.00
                
                },
                {
                    id:3,
                    title:'abc_birthday',
                    image:'image/r3.jpg',
                    description:'birthday',
                    date:14_02_2022,
                    time:10.00
                
                },
                {
                    id:4,
                    title:'abc_birthday',
                    image:'image/r4.jpg',
                    description:'birthday',
                    date:1_02_2022,
                    time:10.00
                
                },
                {
                    id:5,
                    title:'abc_birthday',
                    image:'image/r5.jpg',
                    description:'birthday',
                    date:1_02_2022,
                    time:10.30
                
                },
            ],
        };
    }
render()
{
    const reminder_display = this.state.reminders.map((reminders)=>{
        return(
            <div key={reminders.id}>
                <Media tag="li">
                  <Media left middle>
                      <Media object src={reminders.image} alt={reminders.title} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{reminders.name}</Media>
                    <p>{reminders.description}</p>
                    <p>{reminders.date}</p>
                    <p>{reminders.time}</p>
                  </Media>
                </Media>
            </div>
            
        );
    });
    return(
        <div className="container">
            <div className="row">
              <Media list>
                  {reminder_display}
              </Media>
            </div>
            <div class="row col-12">
                <button>Add Reminder</button>
            </div>
        </div>
      
    )
}


}
export default Reminder;