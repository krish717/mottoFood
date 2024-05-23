import React from 'react';
import { CON_URL } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemList = ({ itemsData }) => {
    const dispatch = useDispatch();

    const showToastMessage = () => {
        toast.success(
            <div className="custom-toast">
                <div className="custom-toast-message">Item Added Successfully!</div>
            </div>, {
            position: "top-center",
            className: 'custom-toast'
        });
    };

    const handleAddItem = (item) => {
        showToastMessage();
        dispatch(addItem(item));
    };

    return (
        <div className='item-det'>
            <style jsx>{`
                .custom-toast {
                    background-color: #333; /* Dark background color */
                    color: #fff; /* White text color */
                    border-radius: 8px;
                    padding: 1px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .custom-toast .custom-toast-icon {
                    width: 24px;
                    height: 24px;
                    background-color: #4caf50; /* Example icon background color */
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    margin-right: 8px;
                }

                .custom-toast .custom-toast-message {
                    flex-grow: 1;
                    margin-left: 8px;
                }
            `}</style>
            {itemsData.map((item) =>
                <div key={item?.card?.info?.id} className='item-card-details'>
                    <div>
                        <span>{item?.card?.info?.name}</span>
                        <div>Rs.{item?.card?.info?.price / 100}</div>
                    </div>
                    <div className='item-card-details2'>
                        <img src={CON_URL + item?.card?.info?.imageId} alt="Item" />
                        <div className='btns'>
                            <button className='add-btn add-btn11' onClick={() => handleAddItem(item)}>Add</button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default ItemList;
