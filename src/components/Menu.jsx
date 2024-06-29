// src/Menu.jsx
import { useEffect, useState } from 'react';
import ListMenu from './ListMenu';

const initialMenuItems = [
  { id: 1, name: 'Pizza', price: 100, type: '主食' },
  { id: 2, name: 'Burger', price: 70, type: '主食' },
  { id: 3, name: 'Coke', price: 50, type: '飲料' },
];

function Menu({userMode}) {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [newItem, setNewItem] = useState({ name: '', price: '', type: '' });
  const [editItemId, setEditItemId] = useState(null);
  const [editItem, setEditItem] = useState({ name: '', price: '', type: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const clearMessage =()=>{
    setSuccess('');
    setError('');
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    // 判斷項目是否為空
    if (!newItem.name || !newItem.price || !newItem.type) {
      setError('所有項目皆為必填選項');
      return;
    }

    const id = menuItems.length ? menuItems[menuItems.length - 1].id + 1 : 1;
    setMenuItems([...menuItems, { ...newItem, id }]);
    setNewItem({ name: '', price: '', type: '' });
    setError(''); // 清除错误
    setSuccess('已成功添加');
  };

  const handleEditItem = (id) => {
    const item = menuItems.find(item => item.id === id);
    setEditItemId(id);
    setEditItem({ name: item.name, price: item.price, type: item.type });
  };

  const handleSaveEditItem = (e) => {
    e.preventDefault();

    // 验证字段是否为空
    if (!editItem.name || !editItem.price || !editItem.type) {
      setError('所有字段均为必填项。');
      return;
    }

    setMenuItems(menuItems.map(item =>
      item.id === editItemId ? { ...item, name: editItem.name, price: editItem.price, type: editItem.type } : item
    ));
    setEditItemId(null);
    setEditItem({ name: '', price: '', type: '' });
    setError(''); // 清除错误
  };

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  useEffect(()=>{
    const handleModalHide=()=>clearMessage();
    const modalElement = document.getElementById('addNewItem');
    modalElement.addEventListener('hidden.bs.modal', handleModalHide);

    return () => {
      modalElement.removeEventListener('hidden.bs.modal', handleModalHide);
    };
  }, []);

  return (
    <>
      {/* 新增菜單的模态框 */}
      <div id='addNewItem' className='modal fade' tabIndex={-1}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>新增菜單品項</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleAddItem}>
              <div className='modal-body'>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className='alert alert-success'>{success}</div>}
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="名稱"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="價格"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="類別"
                  value={newItem.type}
                  onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
                />
              </div>
              <div className='modal-footer'>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 编辑菜單的表单 */}
      {editItemId && (
        <form onSubmit={handleSaveEditItem}>
          {error && <div className="alert alert-danger">{error}</div>}
          <input
            type="text"
            placeholder="菜名"
            value={editItem.name}
            onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="價格"
            value={editItem.price}
            onChange={(e) => setEditItem({ ...editItem, price: parseFloat(e.target.value) })}
          />
          <input
            type="text"
            placeholder="類別"
            value={editItem.type}
            onChange={(e) => setEditItem({ ...editItem, type: e.target.value })}
          />
          <button type="submit">保存</button>
          <button type="button" onClick={() => setEditItemId(null)}>取消</button>
        </form>
      )}

      {/* 列出菜單项 */}
      <ListMenu
        userMode={userMode}
        items={menuItems}
        onEdit={handleEditItem}
        onDelete={handleDeleteItem}
      />
    </>
  );
}

export default Menu;
