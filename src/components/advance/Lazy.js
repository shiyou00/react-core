import React from 'react'

const Sku = React.lazy(() => import('./Sku'));

class Lazy extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Sku />
            </React.Suspense>
        </div>
    }
}

export default Lazy
