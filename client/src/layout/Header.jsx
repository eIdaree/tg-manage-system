import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { useTelegram } from '../hooks/useTelegram';
import Button from '../components/Button';
const {tg,onClose} = useTelegram();




const Header = () =>  {
    return (
    <nav>
      <Link to='/'>KazManageSystem</Link>
      <Button onClick={onClose}>X</Button>
    </nav>
    )
  
}

export default Header