import React, { FC } from 'react'
import {Content} from '../StylesComponents/ContentStyles'
import CloseIcon from '@material-ui/icons/Close';

interface PropsContent {
    handleClose:Function
}


const ContenidoProyectos:FC<PropsContent> = ({handleClose}:PropsContent):JSX.Element => {
    return (
        <Content color={"#7BE495"} >
            <div className="row">
            <div className="col-xs-1-12">
                <div className="cursor" data-text="frontEnd" onClick={(e)=>handleClose(e)}>
                <CloseIcon color="action" style={{
                        paddingRight: "30px",
                        float: "right"
                }}
                data-text="frontEnd" onClick={(e)=>handleClose(e)}
                />
                </div>
            </div>
        </div>
        </Content>
        
    )
}

export default ContenidoProyectos
