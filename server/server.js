const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const hbs = exphbs.create();
const PORT = 3030;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('assets'));
app.get('/*', (req, res) => {
	const baseAssetUrl = `${req.protocol}://${req.get('host')}`;
	res.render('home', {
		layout: false,
		reactSrc: `${baseAssetUrl}/js/ui.bundle.js`,
		cssPath: `${baseAssetUrl}/js/main.css`
	});
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
