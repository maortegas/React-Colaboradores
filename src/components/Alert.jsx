import {Alert as AlertB } from 'react-bootstrap';

const Alert = ({mensaje, variant}) => {
  return (
    <>
        <AlertB variant={variant}>
            {mensaje}
        </AlertB>
    </>
  )
}

export default Alert