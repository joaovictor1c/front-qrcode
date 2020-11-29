import React from 'react';

import { Link } from 'react-router-dom';
import {TiShoppingCart} from "react-icons/ti";
import {BsList} from 'react-icons/bs';
import { Container, Content, Profile } from './styles';

function Header() {

  return (
    <Container>
      <Content>

        <nav>
          <Link to="/dashboard">  </Link>
          <BsList size={30} />
        </nav>

        <aside>
          <Profile>
            <div>
              <Link to="/" onClick={()=> 
                localStorage.clear()
                
              }>Sair</Link>
            </div>
          </Profile>
        </aside>
       
      </Content>
    </Container>
  );
}

export default Header;
