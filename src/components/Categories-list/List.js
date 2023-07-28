import React from 'react';
import './list.styles.css'

const List = ({getCategory}) => {
    const categoriesList = [
        { key: 'TRANSPORTATION', value: 'Transportation' },
        { key: 'ENTERTAINMENT', value: 'Entertainment' }      
    ] 
    const lastElement = categoriesList[categoriesList.length - 1];  
    return (
        <div>
            <h5 className="catHeading">Categories</h5>
            {categoriesList.map((elem) => {
                return (
                    elem === lastElement ? 
                    <div className="lastCategory" key={elem.key}>
                        <a href="#" className="catLink" onClick={() => getCategory(elem.value)}>{elem.value}</a>
                    </div> :
                    
                    <div className="categories" key={elem.key}>
                        <a href="#" className="catLink" onClick={() => getCategory(elem.value)}>{elem.value}</a>
                    </div> 
                     
                )})}
                
                         <h5 className="recently">Recently viewed</h5> 
                     
        </div>
    )
}
export default List;