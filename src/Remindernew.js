import React from "react";
import { Media,Form,FormGroup,Label,Input,Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
class Reminder extends React.Component {
    constructor(props){
        super(props);
        this.state ={
           selectDate: new Date(),
           title:'',
           description:'',
           date:''
          
        
    }
    this.onDateChange = this.onDateChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
}   
onDateChange(date) {
    this.setState({
      selectDate: date
    })
  }

  onSubmitForm(event) {
    event.preventDefault();
    alert("Reminder added" +JSON.stringify(this.state))
  } 
  render() {
    return (
      <div className="container calendarApp mt-5">
        <Form onSubmit={ this.onSubmitForm }>
         <FormGroup row>
            
              
              <Label htmlFor="title">Title</Label> 
              <Input type="text"class="form-control"></Input> 
              
              </FormGroup>
             <FormGroup row>
              <Label htmlFor="desciption">Description</Label>
              <Input type="text" class="form-control"></Input>
              </FormGroup>
              
              <FormGroup row>
              <Label htmlFor="date">Date and Time</Label>
              <DatePicker
                    class="form-control"
                    selected={ this.state.selectDate }
                    onChange={ this.onDateChange }
                    name="selectDate"
                    showTimeSelect
                    timeIntervals={30}
                    timeFormat="HH:mm"
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
                
                </FormGroup>
              <Button className="btn btn-primary">Show Date</Button>
            
        </Form>
      </div>
    );
  }
  
}
export default Reminder;