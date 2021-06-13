import React, { Dispatch, FC, SetStateAction } from 'react'
import { Content } from '../StylesComponents/ContentStyles'
import CloseIcon from '@material-ui/icons/Close';

interface PropsIllustracion {
    handleClose:Function
}

const ContenidoIllustracion:FC<PropsIllustracion> = ({handleClose}:PropsIllustracion):JSX.Element => {
    
   

    return (
        <Content color={"#56C596"}>
                <div className="row">
                    <div className="col-xs-1-12" data-text="illustracion" onClick={(e)=>handleClose(e)}>
                        <div className="cursor" data-text="illustracion" onClick={(e)=>handleClose(e)}>
                        <CloseIcon color="action" style={{
                                paddingRight: "30px",
                                float: "right"
                        }}
                        data-text="illustracion" onClick={(e)=>handleClose(e)}
                        />
                        </div>
                    </div>
                </div>
        </Content>
    )
}

export default ContenidoIllustracion
