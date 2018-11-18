import React from 'react'
//import { CardHeader, CardBody } from "./item";

export const CardHeader = function({item}) {
    return (
        <div className="container bg-dark text-center mt-5 p-4 rounded shadow" key={item.id}>
            <h6 className="row text-white">{`${item.id} - ${item.name}`}</h6>
            <h4 className="row text-center text-danger"><b>{item.price}</b></h4>
        </div>
        );
}

export const CardBody = function({item}) {
    return (
    <div className="text-center" style={{margin:'15px'}} key={item.id}>
        <img 
            //src={item.image} 
            src="/public/loop01.jpg"
            className="img-rounded" 
            style={{maxWidth:'95%', maxHeight: '450px'}} 
            alt={item.name}>
        </img>
    </div>)
}

const FullItem = function({item}) {
    return (
        <div className="container-fluid shadow card">
            <CardHeader item={item}/>
            <CardBody item={item} />
        </div>
    );
} 



export default FullItem;