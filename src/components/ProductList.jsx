import React, { useEffect, useState } from 'react'; // Импортируйте useState и useEffect
import './ProductList.css'
import cartImage from './Cart2.png';
import Loader from './Loader'; // Импортируйте компонент Loader


// Массив с данными о продуктах
const products = [
  {
    id: 1,
    title: "Forsining 8238",
    price: "1000",
    banner: "https://s3-alpha-sig.figma.com/img/596d/8bfe/2f86510fe9db3cfb2e59f7def9879658?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MhqbYlUpKHtS1x-qqVUYHeeKS1e0fEQIdaahBRZ2CR8WQjb2s9P1pS90V9c~ctqfAwkbu42UZeMH2ZzQQB1admCp70fXQTIBFVwp3Ebvg8e60ybMQV8YH9p5rMb86u2dRKEipxb8poZLnpUlnfjVctIzXdS4KPABYJ~Et3i9ip9G3Rj5USdu5LPk7RGmuVwc0W25X87i8qX4UaA~tmbIyncq0c2EhDaoj~rzQLahLYwHl3ZxA4t2BC9HalnfXQpbnGRsEIXlAsw9zQXJqwqjEdKDWDxEle8TWJmDWpxCXQNJnz3J7zMSMWaCfJo06tXr7zdc3qvqZFQSG7Y~mj9bqA__"
  },
  {
    id: 2,
    title: "Восток Европа",
    price: "9000",
    banner: "https://s3-alpha-sig.figma.com/img/94fb/7474/c076afdfa37a760bdd3c9a31f33258bc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPDA~IxQfW~EDUGMr2Eod7HEujNYxXRYc4by1yFLZx6yq5A7Qt2qxFFoE7Dk2enARlMoFTZFaHVoTPUVUjif~yEKeVVegbYbKIAkgWWivLQlUrQ97rz0MOFPgQxbgc0nqDWXgL~Rz2lx7zzUdVyaDt159JMF6Vokk8QdVAY7mcYpDDM4Ol4kCs2m-uwQpBX3fyCU2jVQIM-zurC1mkAODFZnZdTbBzHAlHCLFsy0pm9ikjOqmBRjTs648tnRIVer-Elo-5ncu6x80gterDsVG43fZSbd5K2ItwerrgnF-udIfo~AziR9LT8v~KBtSccJm8gJsWfXk4vp1880xVtwCQ__"
  },
  {
    id: 3,
    title: "OLEVS 19182375",
    price: "5000",
    banner: "https://s3-alpha-sig.figma.com/img/c107/b84c/e14115641f91d3c5034f6e80f054f258?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKv-mNo~J0qXDtR17uyOobfy9Db6kkU90Y-BNABcxOllXPQh0zQ8gQWqQ-XMUryMLYiXE6GNo9WHxNKcUeIWMNCB93PLyNSzCVADVkoJaOp~Ir8f72OxF~bDZnh2LnkclKKr16zuQHw8Hftz7EgBg6Uy93Mjv7j3HQ~aY0akb3tfELv7WM6i8o1kCGAVaX2KWEDbT3CMlFGQ-GXnQnEdrsnOm0rxyb7jNlUkbZQOt20K8lZAv81PDnJAfQG5noscetwo2jOgPeUY1zzBwrwcZBBn7brDzARrBFtXcu3Ljqy5L5ZDy23VFHytX1pTvw1EiSbiuLy5tWsQOOFqeWnp4g__"
  },
  {
    id: 4,
    title: "Forsining 8238",
    price: "1000",
    banner: "https://s3-alpha-sig.figma.com/img/596d/8bfe/2f86510fe9db3cfb2e59f7def9879658?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MhqbYlUpKHtS1x-qqVUYHeeKS1e0fEQIdaahBRZ2CR8WQjb2s9P1pS90V9c~ctqfAwkbu42UZeMH2ZzQQB1admCp70fXQTIBFVwp3Ebvg8e60ybMQV8YH9p5rMb86u2dRKEipxb8poZLnpUlnfjVctIzXdS4KPABYJ~Et3i9ip9G3Rj5USdu5LPk7RGmuVwc0W25X87i8qX4UaA~tmbIyncq0c2EhDaoj~rzQLahLYwHl3ZxA4t2BC9HalnfXQpbnGRsEIXlAsw9zQXJqwqjEdKDWDxEle8TWJmDWpxCXQNJnz3J7zMSMWaCfJo06tXr7zdc3qvqZFQSG7Y~mj9bqA__"
  },
  {
    id: 5,
    title: "Восток Европа",
    price: "9000",
    banner: "https://s3-alpha-sig.figma.com/img/94fb/7474/c076afdfa37a760bdd3c9a31f33258bc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPDA~IxQfW~EDUGMr2Eod7HEujNYxXRYc4by1yFLZx6yq5A7Qt2qxFFoE7Dk2enARlMoFTZFaHVoTPUVUjif~yEKeVVegbYbKIAkgWWivLQlUrQ97rz0MOFPgQxbgc0nqDWXgL~Rz2lx7zzUdVyaDt159JMF6Vokk8QdVAY7mcYpDDM4Ol4kCs2m-uwQpBX3fyCU2jVQIM-zurC1mkAODFZnZdTbBzHAlHCLFsy0pm9ikjOqmBRjTs648tnRIVer-Elo-5ncu6x80gterDsVG43fZSbd5K2ItwerrgnF-udIfo~AziR9LT8v~KBtSccJm8gJsWfXk4vp1880xVtwCQ__"
  },
  {
    id: 6,
    title: "OLEVS 19182375",
    price: "5000",
    banner: "https://s3-alpha-sig.figma.com/img/c107/b84c/e14115641f91d3c5034f6e80f054f258?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKv-mNo~J0qXDtR17uyOobfy9Db6kkU90Y-BNABcxOllXPQh0zQ8gQWqQ-XMUryMLYiXE6GNo9WHxNKcUeIWMNCB93PLyNSzCVADVkoJaOp~Ir8f72OxF~bDZnh2LnkclKKr16zuQHw8Hftz7EgBg6Uy93Mjv7j3HQ~aY0akb3tfELv7WM6i8o1kCGAVaX2KWEDbT3CMlFGQ-GXnQnEdrsnOm0rxyb7jNlUkbZQOt20K8lZAv81PDnJAfQG5noscetwo2jOgPeUY1zzBwrwcZBBn7brDzARrBFtXcu3Ljqy5L5ZDy23VFHytX1pTvw1EiSbiuLy5tWsQOOFqeWnp4g__"
  }
];


const ProductList = () => {
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
  
    useEffect(() => {
      // Эмулируем загрузку данных
      const timer = setTimeout(() => {
        setLoading(false); // Устанавливаем состояние загрузки в false через 2 секунды
      }, 2000);
      
      return () => clearTimeout(timer); // Очищаем таймер при размонтировании
    }, []);
  
    if (loading) {
      return <Loader />; // Показать индикатор загрузки
    }

    return (
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">   
            <div className="product-image-container">
              <img src={product.banner} alt={product.title} className="product-image" />
              <div className="overlay">
                <img src={cartImage} alt="Cart Icon" className="cart-icon" />
              </div>
            </div>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p> 
          </div>
        ))}
      </div>
    );
};
  
export default ProductList;
