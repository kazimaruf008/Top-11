import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min'
import Data from '../../data/fakeData.json'
import Cart from '../Cart/Cart';
import Player from '../Player/Player';

const Body = () => {
    const [player, setPlayer] = useState(Data);
    const [cart, setCart] = useState([])
    const handelAddPlayer = (player) => {
        const newPlayer = [...cart, player]
        setCart(newPlayer)
    }

    return (
        <div>
            <div className="row">
                <div className="col-9">    
                    {
                        player.map(player => 
                        <Player
                            key={player.id}
                            handelAddPlayer={handelAddPlayer}
                            player={player}>                        
                        </Player>)
                    }
                </div>
                <div className='col-3 cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Body;
