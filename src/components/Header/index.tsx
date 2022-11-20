import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/react.svg'
import { NavLink } from 'react-router-dom'

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
