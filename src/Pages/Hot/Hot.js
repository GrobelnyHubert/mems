import React from 'react';
import Mems from '../../components/Mems/Mems';
import {useSelector} from 'react-redux';

const Hot = () => {
    const items = useSelector(state => state.mem.items);
    return (
        <>
        <h1>Sprawdź nejlepsze memy</h1>
        <div className='mems-grid'>
            {items.filter(item => (item.upvotes - item.downvotes) >= 5)
            .map((item) => (
                <Mems img={item.img} 
                key={item.id} 
                title={item.title} 
                id={item.id} 
                upvotes={item.upvotes} 
                downvotes={item.downvotes}
                favorite={item.favorite}
                />
            ))
            }
        </div>
        </>
    );
};

export default Hot;