import {Component} from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
    }

    onChangeSalary = (e) => {
        console.log('Target', this.props.changeSalary())
        const salaryChange = e.target.value.slice(0, -1);
        const parent = e;
        console.log('PARENT', parent)
        this.props.changeSalary(salaryChange) //функция changeSalary пришла с компонента  EmployeesList
    }



    render() {
        const {name, salary, onDelete, onToggleProp, increase, rise, changeSalary} = this.props;


        let className = 'list-group-item d-flex justify-content-between'; //добавить класс like
        if(increase) {
            className += ' increase'
        }
        if(rise) {
            className += ' like'
        }

        return (
            <li className={className}>
            <span className="list-group-item-label"
                  onClick={onToggleProp}
                  data-toggle="rise"
            >{name}

            </span>
                <input type="text"
                       className="list-group-item-input"
                       defaultValue={salary + '$'}
                       onInput={changeSalary}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={onToggleProp}
                            data-toggle="increase"
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;