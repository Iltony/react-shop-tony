import React from 'react'

const Header = function({item}) {
    return (
        <div className="alert alert-info" role="alert">
            <h3 className="col-xs-7">{`${item.id} - ${item.name}`}</h3>
            <h5 className="col-xs-4 text-danger"><b>{`Price: ${item.price}`}</b></h5>
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
        <div className="container col-md-4">
            <Header item={item}/>
            <CardBody item={item} />
        </div>
    );
} 



export default Item;