import { FaSearch, FaChevronRight } from 'react-icons/fa';

const Blog = () => {
    const categories = ['Todo', 'Desarrollo Web', 'Aplicaciones Móvil', 'CRM'];

    const blogPosts = [
        {
            id: 1,
            title: 'Título del primer post',
            description: 'Descripción del primer post...',
            image: '/ruta/imagen1.jpg',
            alt: 'Imagen del primer post',
            date: '15 de marzo, 2023',
            category: 'Desarrollo Web'
        },
        {
            id: 2,
            title: 'Título del segundo post',
            description: 'Descripción del segundo post...',
            image: '/ruta/imagen2.jpg',
            alt: 'Imagen del segundo post',
            date: '22 de abril, 2023',
            category: 'Aplicaciones Móvil'
        },
    ];

    return (
        <div className="py-16 px-6 md:px-24 container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-blue mb-6 md:mb-0">Coco Blog</h2>

                <div className="relative w-full md:w-64 shadow-md shadow-gray-300">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full py-3 px-4 pr-10 bg-white text-brown focus:outline-none"
                    />
                    <FaSearch className="absolute right-3 top-3.5 text-blue" />
                </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-16">
                {categories.map((category) => (
                    <button
                        key={category}
                        className="bg-white px-6 py-3 text-blue font-bold shadow-md shadow-gray-300 hover:shadow-lg transition-all"
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white overflow-hidden hover:shadow-lg transition p-6">
                        <img
                            src={post.image}
                            alt={post.alt}
                            className="w-full h-96 object-contain"
                        />
                        <h3 className="text-xl font-bold text-blue mb-3 mt-6">{post.title}</h3>
                        <p className="text-brown text-justify font-roboto mb-6">
                            {post.description}
                        </p>

                        <div className="border-t border-white mb-4 pt-4 flex justify-between items-center">
                            <span className="text-blue text-sm font-roboto">{post.date}</span>
                            <button className="flex items-center text-blue group">
                                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    Leer más
                                </span>
                                <FaChevronRight className="ml-2 group-hover:ml-4 transition-all duration-300" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;