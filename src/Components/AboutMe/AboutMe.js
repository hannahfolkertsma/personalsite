import Grid from '@mui/material/Grid';
import './AboutMe.css';

//little blurb and pic of me
// then buttons with links to linkedin, github, etsy
// grid at the bottom two rows of 3 images of things that i like 

function AboutMe() {
    return (
        <div>
            <Grid container spacing={1} id="maingrid">
                <Grid item xs={7}>
                <p>
                    Hello!
                </p>
                <p>
                    I'm a passionate app developer and UX designer with several years of industry and a love for art, music, and animals.
                </p>
                    <p>
                        The majority of my experience is in front end web and mobile development, but I also dabble in UX design.
                        I love to bring my creative side into my technical work. Check out my portfolio and resume to see some examples
                        of projects that I'm proud of!
                    </p>
                    <p>
                        Outside of work, I run a small Etsy shop where I sell crochet patterns and finished items. I have two rescue cats
                        who I adore, and an extensive record collection. You can probably find me at home doing art, playing video games, or cooking, 
                        or out playing tennis or boardgames with friends. 
                    </p>
                </Grid>

                <Grid item xs={3}>
                    <div style={{ "height": "100%", "width": "100%", "border": "solid 1px black" }} >

                        pic of me in here

                    </div>
                </Grid>

                
            </Grid>
           
                    
            
            </div>
        );
}

export default AboutMe;