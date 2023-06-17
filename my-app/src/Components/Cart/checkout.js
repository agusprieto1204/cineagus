const SuccessCheckout = () => {

    const [order, setOrder] = useState(null)

    const [loading, setLoading] = useState(true)

    const params = useParams()

    useEffect(() => {
        getOrderDetail(params.id)
            .then((orderExistInDB) => {
                if (orderExistInDB) {
                    setOrder(orderExistInDB)
                }
            })
            .catch((error) => {
                console.log(error)
            })
        setLoading(false)
    }, [params, setOrder])

    return (
        <>
            {
                order &&
                <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-4 rounded relative font-mono">
                    <h2 className="mb-4 text-lg text-center">Gracias por su compra! Confirmamos que su numero de orden es : {order.id} </h2>
                    <p className="mb-4 px-4">Generada en la siguiente fecha: {order.createdAt.toDate().toLocaleString("en-US")}</p>
                    <p className="mb-4 px-4">Nombre y Apellido: {order.firstName} {order.lastName}</p>
                    <p className="mb-4 px-4">Email: {order.email}</p>
                    <p className="font-semibold px-4">Pronto estaremos en contacto para realizar la entrega de su pedido. Muchas gracias!</p>
                </div>
            }

            {
                !order && !loading &&
                <div className="bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3 rounded text-center">
                    <p>Cargando detalles de la orden:</p>
                    <p>CiBB01tC4pCpHa... </p>
                    <p>Si este proceso tarda más de 5 segundos, por favor verifique que su número de orden sea el correcto.</p>
                </div>
            }

        </>
    )
}

export default SuccessCheckout