import * as React from 'react'
import { hot } from 'react-hot-loader'

import * as styles from './index.scss'
import Handler from './Handler'
import Browse from './Browse'

function SocketDebugger() {
    return (
        <div className={styles.container}>
            <Handler />
            <Browse />
        </div>
    )
}

export default hot(module)(SocketDebugger)
