import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

//Server Configurations
const PORT = 3100

//get DIR name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express object
const app = express();

//Body parser middleware
//app.use(express.urlencoded({extended:false}));

//Add static folder for templates & assets
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

//Run the server
app.listen(PORT, () => {
    console.log (`Server is running on port http://localhost:${PORT}`);
})

export default app;