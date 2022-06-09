import React from 'react';
import {useSelector} from 'react-redux';
import Mems from '../../components/Mems/Mems';

const Home = () => {
    const items = useSelector(state => state.mem.items);
    return (
        <>
        <h1>Sprawdź wszystkie memy</h1>
        <div className='mems-grid'>
            {items.map((item) => (
                <Mems 
                img={item.img} 
                title={item.title} 
                key={item.id} 
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

export default Home;