import React from 'react';
import { SallyImage, AshleyImage, VeronicaImage, AmandaImage } from './Images';
import './styles/Faculty.css';


const Faculty = () => (
    <div className='faculty-container'>
        <div className='bios'>
            <SallyImage />
            <p>
                Director <span className='bold'>Sally Hart</span>, formerly danced with the Joffrey Ballet under the direction of
                Robert Joffrey. She performed at the grand opening of the Kennedy Center, with Kevin McKenzie, and in Joffrey Ballet
                classics Petrouchka, Trinity, Viva Vivaldi, and The Seasons.
            </p>
            <p>
                After her dance career, Mrs. Hart went on to become a professional make-up artist and did work on movie sets, runway
                shows, and for modeling agencies. Mrs. Hart began teaching ballet locally in 1992. She has produced many local dance
                productions. Sally has trained and mentored numerous students who have become professional dancers. Her unique curriculum includes
                a blend of English, Italian, and Russian technique.
            </p>
            <p>
                <span className='italic bold'>“If you are looking for a dance instructor for your fledgling child or aspiring professional, Mrs.
            Sally Hart is the teacher that you want to train with!”- Linda M. Kuchera-Gage, formerly with “American Ballet Theatre”</span>
            </p>
        </div>
        <hr />
        <div className='bios'>
            <p>
                <AshleyImage />
                <span className='bold'>Ashley Geisler</span> is an instructor and choreographer at ABT, who has danced with concorDance
                contemporary. Mrs. Geisler studied with the Old Dominion Ballet Company in Norfolk, Virginia, under the husband and
                wife team of Istvan and Nelli Ament.She spent her summers training with Nina Sakhnovskaya of the Vaganova Academy.
            </p>
            <p>
                During her tenure at ODU Ballet, Ashley performed the roles of Marzipan, Chinese, and Russian in The Nutcracker,
                and the lead roles in performances of Snow White and The Fairy Doll. After completing her undergraduate and graduate
                work in Russian Language and Literature at the University of Virginia, Mrs. Geisler returned to ballet at Albemarle
                Ballet Theatre. She has been teaching and choreographing at ABT since 2006.
            </p>
        </div>
        <hr />
        <div className='bios'>
            <p>
                <VeronicaImage />
                <span className='bold'>Veronica Piller</span> is the artistic director, as well as an instructor and choreographer at
                ABT. Mrs. Piller is the founder and director of concorDance contemporary, a professional contemporary dance company. She
                formerly danced with the Charleston Ballet Theatre, San Diego Ballet, The Garage Contemporary Ballet, Charlottesville
                Ballet, and Keith Lee Dances.
            </p>
            <p>
                Veronica began her training with her mother, Sally Hart. She continued her dance education at the Virginia School of the
                Arts and the Joffrey Ballet School and was blessed to have been the recipient of many scholarships.
            </p>
            <p>Veronica has performed leading roles in <span className='italic'>Cinderella, Paquita, Les Corsaire, Les Sylphedes, and Swan Lake</span>, and choreographers have created roles for her. Additional memorable performances include <span className='italic'>The King and I wiith Ash Lawn Opera, with the Duke Ellington Orchestra, Maria in West Side Story, and Keith Lee’s Mama Rose.</span>
            </p>
        </div>
        <hr />
        <div className='bios'>
            <p>
                <AmandaImage />
                <span className='bold'>Amanda Jo Parks</span> received her early dance training under the direction of Christine Meneer and then received a scholarship to study at the Dance Institute at the University of Akron. She spent summers training at the Pittsburgh Ballet Theatre, Pennsylvania Ballet, Chautauqua Dance Festival and Ballet Austin. Amanda performed professionally with the Pittsburgh Ballet, BalletMet, and the Ohio Ballet appearing in productions such as George Balanchine’s Rubies, Dwight Rhoden’s StrayLifeLushHorn, Ruthanna Boris’s Cakewalk, as well as in contemporary classics, such as Beauty and the Beast, Cleopatra, and countless Nutcrackers.
            </p>
            <p>
                Amanda went on to earn her undergraduate degree in journalism and then a PhD in political science from the Pennsylvania State University. She now enjoys teaching both ballet and political science but spends most of her time wrangling her three wild and delightful little boys.
            </p>
        </div>
        <hr />
    </div>
)
export default Faculty;