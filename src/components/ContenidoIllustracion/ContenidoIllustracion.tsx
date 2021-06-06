import React, { Dispatch, FC, SetStateAction } from 'react'
import { Content } from '../StylesComponents/ContentStyles'
import CloseIcon from '@material-ui/icons/Close';

interface PropsIllustracion {
    verTodos:Function
}

const ContenidoIllustracion:FC<PropsIllustracion> = ({verTodos}:PropsIllustracion):JSX.Element => {
    
   

    return (
        <Content color={"#56C596"}>
                <div className="row">
                    <div className="col-xs-1-12">
                        <div onClick={()=>verTodos()}>
                        <CloseIcon color="action" style={{
                                paddingRight: "30px",
                                float: "right"
                        }}/>
                        </div>
                    </div>
                </div>
        </Content>
    )
}

export default ContenidoIllustracion
