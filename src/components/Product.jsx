
import perfume1 from "../assets/images/perfume1.jpg";
import perfume2 from "../assets/images/perfume2.jpg";
import perfume3 from "../assets/images/perfume3.jpg";

const Product = () => {

return(

    <div className="container mx-auto gap-4 border-2 border-solid rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3">
         <div className="border-2 border-solid rounded-xl p-4 m-4 hover:bg-blue-200">
            <img src={perfume1} alt="" className="w-full "/>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit eius delectus aliquam. Dolor laboriosam aperiam minus vero similique, sint dicta fugit exercitationem nemo corrupti id possimus, 
               pariatur repudiandae eaque.</p>
         </div>
         <div  className="border-2 border-solid rounded-xl p-4 m-4  hover:bg-green-200">
          <img src={perfume2} alt="" className="w-full" />
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit eius delectus aliquam. Dolor laboriosam aperiam minus vero similique, sint dicta fugit exercitationem nemo corrupti id possimus, 
               pariatur repudiandae eaque.</p>
         </div>
         <div  className="border-2 border-solid rounded-xl p-4 m-4  hover:bg-pink-200">
           <img src={perfume3} alt="" className="w-full"/>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit eius delectus aliquam. Dolor laboriosam aperiam minus vero similique, sint dicta fugit exercitationem nemo corrupti id possimus, 
               pariatur repudiandae eaque.</p>
         </div>
      </div>
   </div>
);
};
export default Product;