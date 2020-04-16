import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, FormToggle } from '@wordpress/components';

const colourContainer = () => {
	registerBlockType('aimhigher/colour-container', {
		title: 'Coloured Container',
		icon: 'align-center',
		category: 'layout',
		attributes: {
			colour: {
				type: 'string',
				default: false
			},
			transparency: {
				type: 'boolean',
				default: false
			}
		},
		edit(props) {
			const colours = [
				{
					name: 'Aqua',
					slug: 'aqua',
					color: '#10bdc8',
				},
				{
					name: 'Purple',
					slug: 'purple',
					color: '#92278f',
				},
				{
					name: 'Grey',
					slug: 'grey',
					color: '#58595c'
				},
				{
					name: 'Black',
					slug: 'black',
					color: '#000000',
				},
				{
					name: 'White',
					slug: 'white',
					color: '#ffffff',
				},
			];

			let colour = props.attributes.colour,
			transparency = props.attributes.transparency,
			styles = {}
			
			if(colour) {
				styles = {'--background': colour }
			}

			console.log(props.attributes)

			return (
				<div className={`colour-container ${transparency && 'transparent'}`} style={styles}>
					{
						<InspectorControls>
							<h2>Colour settings</h2>
							<ColorPalette
								colors={colours}
								value={colour}
								disableCustomColors='true'
								onChange={ (e) => {
									props.setAttributes({colour: e})
								} }
							/>
							<h2>Background Transparency</h2>
							<FormToggle 
								checked={ transparency }
								onChange={ () => props.setAttributes({transparency: ! transparency}) } 
							/>
						</InspectorControls>
					}
					<InnerBlocks/>
				</div>
			);
		},
	
	save(props) {
		let colour = props.attributes.colour,
			transparency = props.attributes.transparency,
			styles = {}
			
			if(colour) {
				styles = {'--background': colour }
			}
		
		return (
			<div className={`colour-container ${transparency && 'transparent'}`} style={styles}>
				<InnerBlocks.Content/>
			</div>
		);

		},
	});
}

export default colourContainer
