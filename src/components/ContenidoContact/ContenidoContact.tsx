import React, { FC } from 'react'
import { Content } from '../StylesComponents/ContentStyles'
import CloseIcon from '@material-ui/icons/Close';

interface PropsContent {
    handleClose:Function
}

const ContenidoContact:FC<PropsContent> = ({handleClose}:PropsContent):JSX.Element => {
    return (
        <Content color={"#56C596"}>
        <div className="row">
            <div className="col-xs-1-12">
                <div className="cursor" data-text="contacto" onClick={(e)=>handleClose(e)}>
                <CloseIcon color="action" style={{
                        paddingRight: "30px",
                        float: "right"
                }}
                data-text="contacto" onClick={(e)=>handleClose(e)}
                />
                </div>
            </div>
        </div>
</Content>
)
    
}

export default ContenidoContact
