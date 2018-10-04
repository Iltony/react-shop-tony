import React from 'react'

const CardHeader = function({item}) {
    return (
        <div className="alert alert-info" role="alert">
                <h5 className="row">{`${item.id} - ${item.name}`}</h5>
                <h5 className="row text-right text-danger"><b>{item.price}</b></h5>
        </div>
        );
}

const CardBody = function({item}) {
    return (
    <div className="text-center mb-20" style={{margin:'15px'}} >
        <img 
            //src={item.image} 
            src="/public/loop01.jpg"
            className="img-rounded" 
            style={{maxWidth:'100%', maxHeight: '200px'}} 
            alt={item.name}>
        </img>
    </div>)
}

const Item = function({item}) {
    return (
        <div className="col-md-4 shadow p-3 mb-5 bg-white rounded">
            <CardHeader item={item}/>
            <CardBody item={item} />
        </div>
    );
} 



export default Item;