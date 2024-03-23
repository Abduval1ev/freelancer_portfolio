import axios from 'axios'
import React from 'react'
import style from '../../sass/blocks/productCard.module.scss'
import { Link } from 'react-router-dom'

export default function ProjectProductCard() {
    const [product, setProduct] = React.useState([])

    React.useEffect(() => {
        axios.get(`http://localhost:9000/products`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <React.Fragment>
            <Link to={`/project/:id${product.id}`}>
                {
                    product.map(product => {
                        return (
                            <div key={product.id} className={style.product_card}>
                                <img
                                    className={style.card_img}
                                    src={process.env.PUBLIC_URL
                                        + '/ui/' +
                                        product.image}
                                    alt="Image"
                                />
                                <h1 className={style.card_title}>
                                    {product.title}
                                </h1>
                                <p
                                    className={style.card_descriptions}>
                                    {product.descriptions}
                                </p>
                            </div>
                        )
                    })
                }
            </Link>
        </React.Fragment>
    )
}
