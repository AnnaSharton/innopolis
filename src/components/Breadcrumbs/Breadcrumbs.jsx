import React from 'react';
import './Breadcrumbs.css';
import items from "./breadCrambsData";

// в качестве свойства нужно передать список ссылок
function Breadcrumbs() {

    return ( 
        <nav className="navigation">
            {items.map((item) => { 

                    return ( 
                        <span key={item.title.toString()}>
                            <a className="a" href={item.link}>{item.title}</a>
                            <span className={`${item.id===items.length ? "lastBreadcrumb" : ""}`}>&nbsp;&gt;&nbsp;</span>
                        </span>
                    )
                
            })}
        </nav>
    );
    
}
export default Breadcrumbs;