import React from 'react'

const CardHeader = function({item}) {
    return (
        <div className="container text-center pt-3 justify-content" key={item.id}>
            <h6 className="row">{`${item.id} - ${item.name}`}</h6>
            <h4 className="row text-center text-danger"><b>{item.price}</b></h4>
        </div>
        );
}

const CardBody = function({item}) {
    return (
    <div className="text-center" style={{margin:'15px'}} key={item.id}>
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
        <div className="col-md-4 shadow card border-dark mtb-5">
            <CardHeader item={item}/>
            <CardBody item={item} />
        </div>
    );
} 



export default Item;