import { __ } from '@wordpress/i18n';
import { loadEditorAssets } from '@wordpress/lazy-editor/assets';

export const route = {
	async beforeLoad() {
		// The content reads the editor's globals as soon as it loads.
		await loadEditorAssets();
	},
	title: () => __( 'Fonts' ),
};
