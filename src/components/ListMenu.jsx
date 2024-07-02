// src/ListMenu.jsx
import React from 'react';

function ListMenu({ items, onEdit, onDelete, userMode }) {
  // 首先按照 type 属性分组菜单项
  const groupedItems = {};
  items.forEach(item => {
    if (!groupedItems[item.type]) {
      groupedItems[item.type] = [];
    }
    groupedItems[item.type].push(item);
  });

  return (
    <>
      {Object.keys(groupedItems).map(type => (
        <div key={type} className="row">
          <h2 className='text-center my-2'>{type}</h2>
          <hr/>
          {groupedItems[type].map(menuItem=>(
            <div key={menuItem.id} className='col-lg-4 col-md-6 col-8 mx-md-0 mx-auto'>
              <div className='card'>
                <div className='card-body'>
                  <h3 className='card-title text-center'>{menuItem.name}</h3>
                  <div className='card-text'>
                    <p className='text-secondary'>{menuItem.intro}</p>
                    <p>價格:{menuItem.price}</p>
                    <form className='d-sm-flex justify-content-center text-center'>
                      <div className='col-12 col-sm-6'>
                        <select className='form-select'>
                          <option>請選擇數量</option>
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                          <option value='6'>6</option>
                          <option value='7'>7</option>
                          <option value='8'>8</option>
                          <option value='9'>9</option>
                          <option value='10'>10</option>
                        </select>
                      </div>
                      <button className='btn btn-primary mt-1 mt-sm-0 ms-2'>加入購物車</button>
                    </form>
                    {userMode === 'Admin' && (
                      <div className='container mt-1 d-flex justify-content-center'>
                        <button className='me-1 btn btn-warning' onClick={() => onEdit(menuItem.id)} data-bs-toggle='modal' data-bs-target='#editItem'>編輯</button>
                        <button className='me-1 btn btn-danger' onClick={() => onDelete(menuItem.id)} >刪除</button>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default ListMenu;
