import React, { useEffect, useState } from 'react'
import { useDataNew } from '../Context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
    const {id} = useParams();//catch index
    const navigate = useNavigate();
    const {items, updateItem} = useDataNew();
    const [formData, setFormData] = useState({
        name: items[id].name,
        email: items[id].email,
        message: items[id].message,
    });
    useEffect(() => {
        if (id && items) {
            //Assuming your items have an 'id' property (can be number or string)
            const currentItem = items.find((item) => String(item.id) === String(id))

            if (currentItem) {
                setFormData({
                    name: currentItem.name || "",
                    email: currentItem.email || "",
                    message: currentItem.message || "",
                });
            }
        }
    }, [id, items]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //call your context function to update the global state
        if (updateItem) {
            console.log(formData)
            updateItem(id, formData);
        }
    
        //Redirect back
        navigate("/voter-list");
    };

  return (
    <div>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value= {formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            value= {formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value= {formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Save Changes
        </button>
      </form>
    </div>
    </div>
  )
}

export default EditContact