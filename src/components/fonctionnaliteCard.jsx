import './styles/card.css'
import FONCTIONNALITES from '../data/fonctionnalites.json'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function FonctionnaliteCards() {
  
    return (
    <>
        {FONCTIONNALITES.map((F, index) => (

        <Card key={index} sx={{ maxWidth: 345 }} className='Card'>

            <CardMedia

                component="img"
                alt="green iguana"
                image={F.image}

                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {F.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {F.text}
                </Typography>
            </CardContent>

        </Card>

        ))}
    </>
  )
}

