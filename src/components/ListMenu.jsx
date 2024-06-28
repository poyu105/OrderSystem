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
        <div key={type} className="container">
          <h2>{type}</h2>
          <ul>
            {groupedItems[type].map(menuItem => (
              <li key={menuItem.id}>
                {menuItem.name} - ${menuItem.price}
                {userMode === 'Admin' && (
                  <>
                    <button onClick={() => onEdit(menuItem.id)}>編輯</button>
                    <button onClick={() => onDelete(menuItem.id)}>刪除</button>
                  </>)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default ListMenu;
