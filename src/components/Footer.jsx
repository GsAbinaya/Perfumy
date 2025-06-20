


const Footer = () => {
    return(
<div className="container mx-auto p-4 gap-4 m-4 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
         <h1 className="text-3xl font-bold mb-2">Perfumy</h1>
        </div>
        <div>
         <ul>
            <li>Aboutus</li>
            <li>Careers</li>
            <li>Contacts</li>
            <li>FAQS</li>
            <li>Returns</li>
            <li>Shippings</li>
         </ul>
        </div>
        <div>
         <ul>
            <li className="hover:underline cursor:pointer">Instagram</li>
            <li className="hover:underline cursor:pointer">Facebook</li>
            <li className="hover:underline cursor:pointer">Linkedin</li>
         </ul>
        </div>
        <div>
         <h3 className="font-semibold">All Rights Reserved 2025.</h3>
        </div>
      </div>
   </div>
    );
};
export default Footer;