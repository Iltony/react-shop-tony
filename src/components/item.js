import React from 'react'

const CardHeader = function({item}) {
    return (
        <div className="alert alert-info" role="alert">
            <div className="row">
            <h5 className="col-md-10">{`${item.id} - ${item.name}`}</h5>
            <h5 className="col-md-2 text-right text-danger"><b>{item.price}</b></h5>
            </div>
        </div>
        );
}

const CardBody = function({item}) {
    return (
    <div className="text-center mb-20" style={{margin:'15px'}} >
        <img src={item.image} 
            className="img-rounded" 
            style={{maxWidth:'100%', maxHeight: '200px'}} 
            alt={item.name}>
        </img>
    </div>)
}

const Item = function({item}) {
    return (
        <div className="container col-md-4 shadow p-3 mb-5 bg-white rounded">
            <CardHeader item={item}/>
            <CardBody item={item} />
        </div>
    );
} 



export default Item;