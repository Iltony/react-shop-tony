import React from 'react'

const CardHeader = function({item}) {
    return (
        <div className="container text-center">
            <h6 className="row col-md-12">{`${item.id} - ${item.name}`}</h6>
            <h4 className="row text-right text-danger"><b>{item.price}</b></h4>
        </div>
        );
}

const CardBody = function({item}) {
    return (
    <div className="text-center" style={{margin:'15px'}} >
        <img 
            //src={item.image} 
            src="/public/loop01.jpg"
            className="img-rounded" 
            style={{maxWidth:'95%', maxHeight: '200px'}} 
            alt={item.name}>
        </img>
    </div>)
}

const Item = function({item}) {
    return (
        <div className="col-md-4 shadow mb-1 px-6 bg-light rounded">
            <CardHeader item={item}/>
            <CardBody item={item} />
        </div>
    );
} 



export default Item;