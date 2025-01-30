import './App.css'

import { FrappeProvider } from 'frappe-react-sdk'
import { IconProvider } from './contexts/IconContexts'

import NavBar from './components/NavBar'
import SideMenu from './components/SideMenu'
import MosaicContainer from './components/MosaicContainer'

export default function App() {
  return (
	<FrappeProvider>
	<IconProvider>
		<div className="App">
			<SideMenu />
			<div id="innerApp">
				<NavBar />
				<MosaicContainer />
			</div>
		</div>
	</IconProvider>
	</FrappeProvider>
  )
}