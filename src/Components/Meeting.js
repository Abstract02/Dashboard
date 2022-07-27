import React from 'react'
import './Meeting.css'
import { BsThreeDotsVertical } from 'react-icons/bs'


function Meeting() {
    return (
        <>
            <div className='meeting'>
                <div className='meet'>
                    <p>30 minute call with client</p>
                    <BsThreeDotsVertical />
                </div>
                <h1>Project Discovery Call</h1>
                <p>Due on <strong>10:00 am</strong></p>
                <div className='meet_members'>
                    <div className='memb_img'>
                        <img className='image' src='https://media-exp1.licdn.com/dms/image/C5603AQEssSjceNl49w/profile-displayphoto-shrink_200_200/0/1581360559580?e=2147483647&v=beta&t=GuENsw0p2gN1IWLxUr5CgxD5Xt4w7k3UdGG-bDa0mDQ' />
                        <img className='image2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJV4AsiamIYdWFpXSvm6GVZ0CQUATdXneMw&usqp=CAU' />
                        <img className='image3' src='https://cdn.downtoearth.org.in/library/0.29257200_1599150541_profile_square.jpg' />
                        <img className='image4' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADZ2dmPj4+Kior09PTq6upkZGSioqKAgIBFRUUtLS3u7u6EhISRkZFBQUHNzc22trZ1dXXGxsY8PDwUFBSmpqa8vLzV1dUZGRni4uJZWVkNDQ0hISGbm5tPT0+dg5jtAAAGE0lEQVR4nO2d2YKzKgyA6y61UrfaRafz/m95zki12HFahSD+kO+6hUQgJGHb7RAEQRAEQRAEQRAEQRAEQRAEmU3olrFHon1ycn44JfuIeHHphroFAyBwa1I5f1OR2g10CynM4Zy+U45TMz0fdAu7nAs9ztKu50gvukVeQkaui9RjXEmmW/B53Px2UoGkKVLfo5R6flo0yeRvWv+mW/yP5L+GXhv5+WXKaoaX3I9+fY0qX13mBRzoi7gNLT9ZyqCkzcu/6Fata1iMG8ObP6wyb9z0xRZnyrF++3qpjGG937SOAeGk+7qLiRfev7hSyKb6asxJFsnY/CziSorB5JMl4z69J+udHDyuM2xjggwi6K/O9YhoA101V9GrOB11T49cA3qQnzvwNtKM2eCSRNDWPRy+XatxNA4ujBKT8DRgVEHps/geOqiiCoau+q2ogvfc+uoTdfHAbQhBNMQcZV93qrSatK+mVFrNBPFaNQ9fcmUPx39Ue1SfYDn06RBfeVUcfRxRGFhbR7Ryx+mHRLRSfYOC6w3+cl0VewXddarrcNdUsR8V685Q/ey7wlh8WNHr2lmG8LqSRY01KfhUUbF564e8jjxRuIaB60eDnsz0GrVrsKI8vUVVV8O3Jid44DFIlAVTVIsLPOJh6BSFxNnq3uEEj9lYSWIjYDmZo4qyF8AijVZFeurhrOlejz4oc99y3Vam52FtwPOoAStXbcpiHo/EBnQ/ZX00AS5VjERFP810+jKv3FTYU5acVZUXXQrLo35BFhnDFynFF7TrESicZoXIoI0NUTUFCcMMH4EqLtQXE/4FsEjFpswMw4P0kUM1M6wcAWQjFtpjpiliuEYMVMfVgsD1LLrJJuwbESIWhm1Cfw+W8IQSLAc1pD971/ZAZXlAUVQFGffeIP13FgtXssXcQN0Zlg6ESkZGIN/LB/VIYTVk3qnsuG5BgwpYDVmI0cqVwT7THUYgcA3vAB2MwPrcwBqGABFGt6IFZd7BNewmH+cqU8Klk6iGEghcw7orT+a0DQUODKE1DKU9tyPInPoEWkPmj0gsNBxAPbadAg09SY/rDDrd7xRoyGazs/D/U9CwYqdAQxZgiK81dL28AZQHXsNGylIE0pbqFXgNmbUXjfSZPJDrafAallIl1lLfZwp4DQMpn4QAuO5j4DVkwY+oa9oZGtBcvgINIxlT04kDulNOgYa+xIzGnD7Q9XIFGuYSrrMr7bj/USSohheJIkvgwGKnRMNQYkqLoX02JRoyayGWkvf+IQ3F4p9uOoTdX6JCw0R8Qoyg/W41Gjbis3aX5oHdiahCw255UyxZlsiFXlOo0DAVH0wnIZfm5r6BTc/5u58sXobonJrT0n91CBmp0dUPQiztcBImv/vnwvjXfyf7TBZ2G7quhvJNuLgRV9bwH2xDo8eh+bbU/PnQfJ/GfL/U/NjC/PjQ/Bjf/DyN+bk28/Ol5ue8LVi3MH/tyfz1Q/PXgM1fxzd/L4YF+2nM3xNl/r428/cmWrC/1Pw9wubv87Zgr7755y3MPzNjwbkn88+umX/+0IIzpOafA7bgLLf55/HNv1PBgnsxzL/bxIL7acy/Y8iCe6LMv+vLgvvaLLhzz/x7Ey24+9L8+0stuIPWgnuEzb8L2oL7vC24k92Ce/UteBvB/PctLHijxIJ3Zix4K8iC954seLPLgnfXLHg7z4L3Dy14w9KCd0gteEt2Z/57wDsL3nS24F1uC95W3w15VFh7Hj8LVZAXXQrXjEA6cvppb0DG0yT831dlnZzDs3+qMWBicF/diWTEyrgOsa3tHwHhJPu6ixnW8M51Bodso4M+CQtOOmdfL1UyrEcXThRb2hfRM9bRqbz53TXzKmfz+v0QUGdMQ8tPfS0oafPyL7q1/jkir17EddrIzy9TbRJecj9qX39ebWAC/MDN/yV1R9IUqe9RSj0/LZpk8jetv42dAh/JyHVSgfdcyXamvxlc6PGzThxHCnrwfx0O5/TXoJykSs+6187FCdyavFOzIrW7acs5k9AtY49E+6S7mMk5JfuIeHHpbnXWQxAEQRAEQRAEQRAEQRAEQZBN8h/0Az3tHDzQIQAAAABJRU5ErkJggg==' />
                    </div>
                    <button>+   invite</button>
                </div>
            </div>
        </>
    )
}

export default Meeting