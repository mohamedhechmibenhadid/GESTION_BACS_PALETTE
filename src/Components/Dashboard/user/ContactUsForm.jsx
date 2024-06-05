import './ContactUsForm.css'
import Textarea from '@mui/joy/Textarea';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Button from '@mui/joy/Button';

export default function ContactUsForm(){


    return (
        <div>
            <div className='ContacUsBox'>
            <div className="ContacUsMessage">
                <h1 className='ContactUsHeader' > Creation d'utilisateur</h1>

      <FormControl className='InputContact'>
        <FormLabel>Nom</FormLabel>
        <Input type='text' name='Nom' variant="plain" />
        <FormHelperText></FormHelperText>
      </FormControl>

      <FormControl className='InputContact'>
        <FormLabel>Matricule</FormLabel>
        <Input type='text' name='Matricule' variant="plain" />
      </FormControl>

      <FormControl className='InputContact'>
        <FormLabel>Mail</FormLabel>
        <Input type='email' name='Mail' variant="plain" />
      </FormControl>
      <FormControl className='InputContact'>
        <FormLabel>Password</FormLabel>
        <Input type='Password' name='Password' variant="plain" />
      </FormControl>

      <FormControl className='InputContact'>
        <FormLabel>Groupe Name</FormLabel>
        <Input type='text' name='GroupeName' variant="plain" />
      </FormControl>

            <Button type="submit">Submit</Button>

            </div>
            </div>
        </div>
    )
}
