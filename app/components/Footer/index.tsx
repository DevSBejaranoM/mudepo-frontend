const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-around items-center flex-wrap">
                <div className="m-4 text-center">
                    <h3 className="font-bold">Contacto</h3>
                    <p>futboltinamar@gmail.com</p>
                    <p>Síguenos <a href="https://facebook.com" className="text-blue-500">Facebook</a></p>
                </div>
                <div className="m-4 text-center">
                    <img src="/images/logo.png" alt="Logo" className="h-12 mx-auto" />
                </div>
                <div className="m-4 text-center">
                    <h3 className="font-bold">Información</h3>
                    <p><a href="#" className="text-blue-500">Aviso Legal</a></p>
                    <p><a href="#" className="text-blue-500">Cookies</a></p>
                </div>
            </div>
            <div className="text-center mt-4 border-t border-gray-700 pt-2 flex justify-between mx-36">
                <p>Copyright © 2019 - 2024 Liga Tinamar</p>
                <p>Diseño DigitalServi</p>
            </div>
        </footer>
    );
};

export default Footer;
