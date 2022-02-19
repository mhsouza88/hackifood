import React, { useEffect } from 'react'
import {
	FaReceipt,
	FaDonate,
	FaHandHoldingUsd,
	FaExchangeAlt,
	FaBarcode,
	FaSignOutAlt,
	FaCog,
	FaShoppingCart,
	FaMoneyBill
} from 'react-icons/fa'

import { Container, MenuItem } from './styles'

function Menu({ closeMenu }) {
	const { pathname } = useLocation()
	const { settings } = useSettings()

	useEffect(() => {}, [pathname])

		return (
			<Container>
				<ul key='1'>
					{customMenus.includes('Extrato') && (
						<MenuItem
							menucolor={settings.colors.primary}
							textcolor={settings.colors.text}
							active={pathname.includes('/transaction')}
							onClick={() => closeMenu()}
						>
								<FaReceipt size={23} />
								extrato
						</MenuItem>
					)}

					{customMenus.includes('Depositar') && (
						<MenuItem
							menucolor={settings.colors.primary}
							textcolor={settings.colors.text}
							active={pathname.includes('/deposit')}
							onClick={() => closeMenu()}
						>
								<FaDonate size={23} />
							depositar
						</MenuItem>
					)}

					{customMenus.includes('Transferir') && (
						<MenuItem
							menucolor={settings.colors.primary}
							textcolor={settings.colors.text}
							active={pathname.includes('/transfer')}
							onClick={() => closeMenu()}
						>
								<FaExchangeAlt size={23} />
								transferir
						</MenuItem>
					)}

					{customMenus.includes('Pagar') && (
						<MenuItem
							menucolor={settings.colors.primary}
							textcolor={settings.colors.text}
							active={pathname.includes('/payment')}
							onClick={() => closeMenu()}
						>
								<FaBarcode size={23} />
							pagar
						</MenuItem>
					)}

					{customMenus.includes('Cobrar') && (
						<MenuItem
							menucolor={settings.colors.primary}
							active={pathname.includes('/charges')}
							textcolor={settings.colors.text}
							onClick={() => closeMenu()}
						>
								<FaHandHoldingUsd size={23} />
								cobrar
						</MenuItem>
					)}

					{customMenus.includes('Configurações') && (
						<MenuItem
							menucolor={settings.colors.primary}
							textcolor={settings.colors.text}
							active={
								pathname.includes('/settings') ||
								pathname.includes('reset-4digit') ||
								pathname.includes('documents')
							}
							onClick={() => closeMenu()}
						>
								<FaCog size={23} />
								configuracoes
						</MenuItem>
					)}

					{customMenus.includes('Loja') && (
						<MenuItem
							menucolor={settings.colors.primary}
							textcolor={settings.colors.text}
							active={pathname.includes('/store')}
							onClick={() => closeMenu()}
						>
								<FaShoppingCart size={23} />
							loja online
						</MenuItem>
					)}

					{customMenus.includes('Saque') && (
						<MenuItem
							menucolor={settings.colors.primary}
							textcolor={settings.colors.text}
							active={pathname.includes('/withdraw')}
							onClick={() => closeMenu()}
						>
								<FaMoneyBill size={23} />
							saque
						</MenuItem>
					)}
					{customMenus.includes('Pix') && (
						<MenuItem
							menucolor={settings.colors.primary}
							textcolor={settings.colors.text}
							active={pathname.includes('/pix')}
							onClick={() => closeMenu()}
						>
								<div
									style={{
										width: 23,
										height: 23,
										marginLeft: '-6px',
										marginRight: '5px'
									}}
								>
									<PixIcon color='#707070' />
								</div>
							Pix
						</MenuItem>
					)}
				</ul>

				<ul key='2'>
					<MenuItem>
							<FaSignOutAlt color='#000000' size={23} />
							<div style={{ color: 'black' }}>sair</div>
					</MenuItem>
				</ul>
			</Container>
		)
	
}

export default Menu