import React from 'react';
import Menu from '../components/Menu';

function Home({userMode}) {

    return (
        <div className='container'>
            <div className='row'>
                <h1 className={userMode==='Admin'? 'col-sm-8':''}>菜單Menu</h1>
                {userMode === 'Admin' && (
                    <div className='col-sm-4 position-relative'>
                        <button className='btn btn-primary position-absolute bottom-0 end-0 me-3 mb-1' data-bs-toggle='modal' data-bs-target='#addNewItem'>新增菜單</button>
                    </div>
                )}
                <hr/>
            </div>
            <Menu userMode={userMode}/>
        </div>
    );
};

export default Home;
