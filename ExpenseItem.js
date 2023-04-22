import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetail';
import './ExpenseItem.css'
function ExpenseItem(props){
    //const ExpenseDate=new Date(2021,2,28);
    //const ExpenseTitle='Car Insurance';
    //const ExpenseAmount='$300.43';
    //const month=props.date.toLocaleString('en-US',{month:'long'});
   // const day=props.date.toLocaleString('en-us',{day:'2-digit'});
    //const year=props.date.getFullYear();
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
        </div>
    );
}
export default ExpenseItem;
/*
import './ExpenseItem.css'
function ExpenseItem(){
    const ExpenseDate=new Date(2021,2,28);
    const ExpenseTitle='Car Insurance';
    const ExpenseAmount='$300.43';
    return(
        <div className="expense-item">
            <div>{ExpenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{ExpenseTitle}</h2>
                <div className="expense-item__price">{ExpenseAmount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;
*/