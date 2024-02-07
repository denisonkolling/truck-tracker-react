import { TileLayer } from 'react-leaflet';
import { MapContainerStyled, MarkerStyled, PopupStyled } from './styles';

const Map = ({ positions, center }) => {
	return (
		<MapContainerStyled center={center} zoom={13}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a
					href="https://www.openstreetmap.org/copyright">&nbsp;OpenStreetMap&nbsp;</a> contributors'
			/>

			{positions.map((vehicle, index) => {
				return (
					<MarkerStyled
						position={[vehicle.latitude, vehicle.longitude]}
						key={index}>
						<PopupStyled>
							<p>
								<strong>Plate</strong> {vehicle.license_plate}
								<br />
								<strong>Ignition {vehicle.ignition ? 'On' : 'Off'}</strong>
								<strong>Speed</strong> {vehicle.speed}
								<br />
							</p>
						</PopupStyled>
					</MarkerStyled>
				);
			})}
		</MapContainerStyled>
	);
};
export default Map;
