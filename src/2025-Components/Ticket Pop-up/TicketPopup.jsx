import "./TicketPopup.css";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import ticketBuyImage from '../../Images/About Section image 3.jpeg';

export default function TicketPopup() {

    const handleClose = () => {
        document.querySelector('.TicketPopup_2025_main').style.display = 'none';
    };

    return (
        <div className='TicketPopup_2025_main fixed top-0 left-0 h-[100dvh] w-[100dvw] bg-black bg-opacity-65 flex justify-center items-center z-50'>
            {/* <img src={ticketBuyImage} loading="eager"  className=' max-w-[500px]'/> */}
            <div className='TicketPopup_2025_main_div relative flex justify-center items-end w-[700px] mx-4 p-3 rounded-xl h-[500px] '>
                <button onClick={handleClose} className='absolute top-2 right-2'>
                    <IoIosCloseCircleOutline className=' w-8 h-8' color='white' />
                </button>

                <a href="https://www.district.in/tedxdavv-mar28-2025/event" target="_blank" className=' bg-red-600 rounded-md transition-all duration-300 ease-out hover:scale-110 shadow-xl -mb-[80px] shadow-black text-white text-[20px] font-black  px-4 py-2'>     
                    BUY NOW!!
                </a>
            </div>
        </div>
    );
}