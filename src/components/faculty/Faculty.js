import React from 'react'
import styled from 'styled-components'
import SallyImg from '../../images/faculty/sally.jpg'
import AshleyImg from '../../images/faculty/ashley.jpg'
import VeronicaImg from '../../images/faculty/veronica.jpg'
import NickyImg from '../../images/faculty/nicky.jpg'
import AmandaImg from '../../images/faculty/amanda.jpg'
import SarahImg from '../../images/faculty/sarah.jpg'
import MeganImg from '../../images/faculty/megan.jpg'
import EdwinImg from '../../images/faculty/edwin.jpg'
import RoderickImg from '../../images/faculty/roderick.jpg'
import LeanneImg from '../../images/faculty/leanne.jpg'
import JenniferImg from '../../images/faculty/jennifer.jpg'
import AnnaImg from '../../images/faculty/anna.jpg'
// import GeriImg from '../../images/faculty/geri.jpg'
import PageImg from '../../images/faculty/page.jpg'
import './Faculty.css'

/* eslint-disable max-len */
const SallyImage = () => <img src={SallyImg} alt="Sally Hart" title="Sally Hart" />
const VeronicaImage = () => <img src={VeronicaImg} alt="Veronica Piller" title="Sally Hart" />
const AshleyImage = () => <img src={AshleyImg} alt="Ashley Geisler" title="Ashley Geisler" />
const NickyImage = () => <img src={NickyImg} alt="Nicky Coelho" title="Nicky Coelho" />
const AmandaImage = () => <img src={AmandaImg} alt="Amanda Jo Parks" title="Amanda Jo Parks" />
const LeanneImage = () => <img src={LeanneImg} alt="Leanne Higgins" title="Leanne Higgins" />
const JenniferImage = () => <img src={JenniferImg} alt="Jennifer Gage" title="Jennifer Gage" />
const SarahImage = () => <img src={SarahImg} alt="Sarah Gillespie" title="Sarah Gillespie" />
const MeganImage = () => <img src={MeganImg} alt="Megan Hillary" title="Megan Hillary" />
const EdwinImage = () => <img src={EdwinImg} alt="Edwin Roa" title="Edwin Roa" />
const RoderickImage = () => <img src={RoderickImg} alt="Roderick Davis" title="Roderick Davis" />
const AnnaImage = () => <img src={AnnaImg} alt="Anna Finan" title="Anna Finan" />
// const GeriImage = () => <img src={GeriImg} alt="Geri Carlson Sauls" title="Geri Carlson Sauls" />
const PageImage = () => <img src={PageImg} alt="Paige Werman" title="Paige Werman" />

const Instructor = styled.div`
  img {
    float: left;
    padding: 0 15px 10px 0;
    height: 190px;
    margin-top: 4px;
  }
  p {
    text-align: left;
    padding: 0;
    margin: 0;
  }
`

/* eslint-disable max-len */
const Faculty = () => (
  <div className="faculty-container">
    <Instructor>
      <SallyImage />
      <span className="bold instructor">Sally Hart | Owner, Director</span>
      <p>
        A former dancer with the Joffrey Ballet under the direction of Robert Joffrey. She performed at the grand
        opening of the Kennedy Center, with Kevin McKenzie, and in Joffrey Ballet classics Petrouchka, Trinity, Viva
        Vivaldi, and The Seasons.
      </p>
      <p>
        After her dance career, Mrs. Hart went on to become a professional make-up artist and worked on movie sets,
        runway shows, and for modeling agencies. Mrs. Hart began teaching ballet locally in 1992. She has produced many
        local dance productions. Sally has trained and mentored numerous students who have become professional dancers.
        Her unique curriculum includes a blend of English, Italian, and Russian technique.
      </p>
      <p>
        <span className="italic small quote">
          “If you are looking for a dance instructor for your fledgling child or aspiring professional, Mrs. Sally Hart
          is the teacher that you want to train with!”- Linda M. Kuchera-Gage, formerly with “American Ballet Theatre”
        </span>
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <VeronicaImage />
        <span className="bold instructor">Veronica Piller | Artistic Director, Instructor</span>
        Mrs. Piller is the founder and director of concorDance contemporary, a professional contemporary dance company.
        She formerly danced with the Charleston Ballet Theatre, San Diego Ballet, The Garage Contemporary Ballet,
        Charlottesville Ballet, and Keith Lee Dances.
      </p>
      <p>
        Veronica began her training with her mother, Sally Hart. She continued her dance education at the Virginia
        School of the Arts and the Joffrey Ballet School and was blessed to have been the recipient of many
        scholarships.
      </p>
      <p>
        Veronica has performed leading roles in{' '}
        <span className="italic">Cinderella, Paquita, Les Corsaire, Les Sylphedes, and Swan Lake</span>, and
        choreographers have created roles for her. Additional memorable performances include{' '}
        <span className="italic">
          The King and I with Ash Lawn Opera, with the Duke Ellington Orchestra, Maria in West Side Story, and Keith
          Lee’s Mama Rose.
        </span>
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <NickyImage />
        <span className="bold instructor">Nicky Coelho | Executive Director, Production Manager</span>
        Mrs. Coelho began training with her mother Sally Hart and has also studied with Virginia School of the Arts,
        Maryland Youth Ballet, and on scholarship at the Joffrey Ballet School. Nicky has danced with Charleston Ballet
        Theater, Robert Ivey Ballet, Mikerline Haitian Folkloric Dance Company, Dance Co, and James Sewell Ballet where
        she was also the Company Manager for two years. She recently appeared as a dancer in the film Only Dance Can
        Save Us which was featured in the Twin Cities Film Fest.
      </p>
      <p>
        Mrs. Coelho has taught at various ballet schools throughout the Twin Cities and was on faculty at the Reif
        Center Summer Intensive in Grand Rapids, MN for five years and directed the Intensive in Minneapolis in 2015.
        Nicky has been the production and stage manager for ABT since 2005 and has choreographed several full-length
        ballets and original works in the repertoire.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <AnnaImage />
        <span className="bold instructor">Anna Finan | School Coordinator, Instructor</span>
        Anna began her ballet training at the National Ballet School in Bytom, Poland. She studied the Vaganova
        technique with Elisabeth Lebik, former principal dancer of the Silesian State Opera. At the age of 14, she
        participated in the acclaimed international ballet competition, the Prix de Lausanne in Switzerland, where she
        reached the half- final and was offered full scholarship to study at the Hamburg Ballet School in Germany. There
        she fine-tuned her technique and artistry with Marianne Kruse, Kevin Haigen and Ingrid Glindemann. After
        graduating from the school, she joined the Hamburg Ballet company directed by the renowned American
        choreographer John Neumeier. There she performed group and soloist roles in his various classical and modern
        ballets such as The Nutcracker, Swan Lake, A Midsummer Night’s Dream, and The Little Mermaid as well as works
        from other choreographers like La Bayadere staged by N. Makarova and Jewels by G. Balanchine. Upon retiring from
        the stage, she pursued a second career, becoming a risk manager at Germany’s largest bank, Deutsche Bank AG.
        Yet, her love for movement never halted. She travelled to Thailand to became a certified Vinyasa Yoga instructor
        and, after moving to Charlottesville, VA with her husband and two boys in April 2016, she become NASM-certified
        personal trainer, Progressing Ballet Technique certified teacher and studied the American Ballet Theater
        National Training Curriculum in Pre-Primary though Level 3 with Franco De Vita and Raymond Lukens. She loves
        teaching dance and passing on her lifelong ballet experience.
      </p>
    </Instructor>
    <hr />
    <Instructor>
      <p>
        <JenniferImage />
        <span className="bold instructor">Jennifer Gage | Head of Communications</span>
        Jennifer recently moved to the area from Norfolk, VA, but it’s Chicago she called home where she taught for over
        20 years at many schools, including her own studio, NorthSide Dance Theater. Most of her classical foundation is
        from her training with Ballet Tennessee directors Anna and Barry Van-Cura in Cecchetti, Vaganova, and French
        styles. Her Urban Contemporary Jazz formula stems from her later training with Joel Hall Dancers where she was a
        company member, teacher, rehearsal assistant, and ballet mistress. Similar opportunities with Ballet Theater
        North and Ballet Entre Nous brought out Jennifer&#39;s passion for shaping her own company and productions and
        in 2002 created her own not-for-profit company, Alliance Dance Company. Over the 13 years they were active,
        Alliance grew into producing a 3 show season with their own festival creating over 100 choreographed pieces,
        including 18 productions and 15 full length story works! Jennifer is a huge believer in age appropriate/level
        appropriate and enjoys teaching with a positive and constructive philosophy.
      </p>
      <hr />
    </Instructor>
    <hr />

    {/* <Instructor>
      <p>
        <GeriImage />
        <span className="bold instructor">Geri Carlson Sauls | Instructor</span>Geri has been teaching dance for over 25
        years, and has choreographed, directed and performed in community and regional theater companies in Baton Rouge,
        the Bay area, and now in Virginia. She graduated from the American Tap Dance Institute teacher training program,
        and has attended several intensives such as the Dance Teacher Summit and the DC Tapfest. Choreography credits: A
        Chorus Line, The Producers (LiveArts), Once on This Island, Cabaret, Godspell (4CP), Once Upon a Mattress
        (University of Virginia) The Music Man (Cabrillo Stage), Director/choreographer credits: A Christmas Story, the
        Musical, Honk!, Annie (4CP), Newsies (DMR), 42nd Street, The Will Rogers Follies, Thoroughly Modern Millie, A
        Chorus Line. Professional performance credits include American Musical Theater San Jose (dance captain for 2
        shows) and Cabrillo Stage. Geri looks forward to continuing to teach to a new group of students both tap and
        jazz.
      </p>
      <hr />
    </Instructor> */}
    <Instructor>
      <p>
        <MeganImage />
        <span className="bold instructor">Megan Hillary | Instructor</span>Megan is a visual artist and theater director
        &amp; designer currently specializing in site- specific installations. A once-upon-a-dancer and violinist, Megan
        continued both while earning her degrees in the studio arts and technical theater design.  Traveling for the
        sake of these varied pursuits, positions ranged from a stint in Manhattan as technical director for Altered
        Stages to being the resident lighting designer for the East Hawaii Cultural Center, from working as a guest
        director within university theater departments to being a board member of the Ohio/Pennsylvania chapter of
        USITT. With installations up and down the east coast of the mainland, Megan now makes her home in
        Charlottesville as one of Live Arts&#39; directors and designers, a designer for 4CP, a teacher of dance,
        choreography, and acting at local ballet studios and for area schools&#39; mainstage productions, occasionally
        appearing for puppetry workshops for organizations like the Boys &amp; Girls Club and the Governor&#39;s School
        for Performing Arts. Planting interactive installations in local entities including McGuffey Art Center, The
        Bridge, FLOW, and the IX, Megan most recently presented in the group show &quot;Pandemonium: Postcards From The
        Edge&quot; through Chroma Art Lab and is currently developing an immersive piece with Kelli Shermeyer through a
        grant with the Lab in Performance Cultures &amp; Embodied Creative Practices, a working group funded by
        UVA&#39;s Institute for the Humanities and Global Culture. Having just completed a residency at McGuffey Art
        Center, she’s newly installed in a residency at the Bronze Foundry through Sept 2022. During the day, Megan runs
        downtown’s dance retail store, My Dance Shoppe.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <PageImage />
        <span className="bold instructor">Paige Werman | Instructor</span>Paige has been teaching dance for eleven years
        and Pilates for two years. She earned her BFA in dance from Fordham University/The Ailey School with a double
        major in environmental policy where she worked with renowned choreographers such as Ray Mercer, Stephanie
        Battenbland, Christopher Huggins, Yin Yue, Jae Man Joo, Brice Mousett, and many more. She has performed
        professionally with Neville Dance Theatre, Dolly Sfeir &amp; Dancers, Jack Tracy, Universal Orlando, Julie
        Petrusak, and more. She has taught dance for Mark Morris Dance Center, Ailey Arts In Education &amp; Community
        Programs, LEAP, and Marquis Studios in NY, and The Dance Company in Richmond. Paige earned her Comprehensive
        Pilates Certification at Balanced Pilates NYC and has taught for YvaYoga and TurnRVA, and currently teaches at
        TruPilates in Charlottesville and Niche Pilates in Richmond. She is currently pursuing a Master of Landscape
        Architecture and Master of Urban and Environmental Planning at UVA.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <AshleyImage />
        <span className="bold instructor">Ashley Geisler | Guest Instructor</span>
        Mrs. Geisler studied with the Old Dominion Ballet Company in Norfolk, Virginia, under the husband and wife team
        of Istvan and Nelli Ament.She spent her summers training with Nina Sakhnovskaya of the Vaganova Academy.
      </p>
      <p>
        During her tenure at ODU Ballet, Ashley performed the roles of Marzipan, Chinese, and Russian in The Nutcracker,
        and the lead roles in performances of Snow White and The Fairy Doll. After completing her undergraduate and
        graduate work in Russian Language and Literature at the University of Virginia, Mrs. Geisler returned to ballet
        at Albemarle Ballet Theatre. She has been teaching and choreographing at ABT since 2006 and has performed with
        concorDance contemporary.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <AmandaImage />
        <span className="bold instructor">Amanda Jo Parks | Guest Instructor</span>
        Mrs. Parks received her early dance training under the direction of Christine Meneer and then received a
        scholarship to study at the Dance Institute at the University of Akron. She spent summers training at the
        Pittsburgh Ballet Theatre, Pennsylvania Ballet, Chautauqua Dance Festival and Ballet Austin. Amanda performed
        professionally with the Pittsburgh Ballet, BalletMet, and the Ohio Ballet appearing in productions such as
        George Balanchine’s Rubies, Dwight Rhodens StrayLifeLushHorn, Ruthanna Boris’s Cakewalk, as well as in
        contemporary classics, such as Beauty and the Beast, Cleopatra, and countless Nutcrackers.
      </p>
      <p>
        Amanda went on to earn her undergraduate degree in journalism and then a PhD in political science from the
        Pennsylvania State University. She now enjoys teaching both ballet and political science but spends most of her
        time wrangling her three wild and delightful little boys.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <LeanneImage />
        <span className="bold instructor">Leanne Higgins | Guest Instructor</span>
        Leanne Higgins has a Master of Science in Exercise Physiology and a Doctorate in Education from the University
        of Delaware. She has been teaching group exercise for 30 years and began specializing in Pilates Mat work and
        Mat with props 18 years ago. With a background in gymnastics, dance, and eventually college cheerleading at the
        Pennsylvania State University, she found her passion in helping individuals discover physical strength and
        mental endurance through exercise. Leanne has taught Pilates for students, professional dancers, and adult
        participants at both the Mid-Atlantic Ballet in Newark, Delaware and First State Ballet Theater in Wilmington,
        Delaware. Leanne truly believes the mind can master the muscles and hopes to inspire students to believe in
        their own physical and emotional power through the practice of Pilates principles.{' '}
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <RoderickImage />
        <span className="bold instructor">Roderick Davis | Guest Instructor</span>Roderick Davis is the Musical Director
        and Lead Drummer of Ezibu Muntu African Dance Co. He was introduced to the dance company in 1994 by one of his
        mentors and original member of the Ezibu, Renee Knight. Roderick has been an active member of the company
        dedicating 20 plus years of studying and sharing his knowledge of West African Djembe music. Mr. Davis has a
        Bachelor’s of Science degree in Architectural Drafting &amp; Design from Virginia State University and an
        Advanced Certification in Principles of Engineering from Duke University. He has taught Technology Education,
        Pre-Engineering and Basic Architecture at MLK Middle School for 8 years, also starting a West African Music
        program after school at MLK Middle. Roderick is currently the Lead Teacher for Richmond Public School’s
        Governor’s Engineering Academy at RTC for 5 years now. He is also an adjunct professor of West African Djembe
        music and history at University of Richmond. He mentors under-served youth centered on teaching them West
        African music and drum repair. He also volunteers teaching music therapy to adults and children with various
        cognitive disabilities in Richmond and surrounding counties. Roderick J. Davis (Instrutor Balanço) began
        intensive training under the instruction of Mestre Panão in 2005 and within a year through hard work and
        dedication was able to bring Mestre Panão to his community to start Capoeira Resistência in Richmond, VA. For
        more than a decade Instrutor Balanço has studied and trained directly with, taught and traveled all over the US
        and Brazil with Mestre Panão. Through his dedication to training and his commitment to Capoeria Resistência and
        his Mestre, Balanço graduated to one of Mestre Panão&#39;s first American Instructors in 2015. He is continuing
        his training with Mestre Panão and is now teaching capoeira in Charlottesville, VA.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <SarahImage />
        <span className="bold instructor">Sarah Gillespie | Guest Instructor</span>
        Sarah is a tango instructor at ABT. Mrs. Gillespie began her dance training in classical ballet under Tristi Ann
        McMaster Robinson at her studio in Richmond Virginia. She continued studying ballet throughout high school and
        while at James Madison University where she earned her undergraduate degree in Spanish. Mrs. Gillespie’s love of
        Spanish led her to Buenos Aires Argentina where she discovered Argentine Tango in 2012. While living in Buenos
        Aires she studied privately with instructors Javier Rochwarger and Anabella Cruz Heck. After earning her Masters
        in Spanish Literature from Middlebury College in 2014, Mrs. Gillespie returned to Virginia and began teaching
        Spanish at the Miller School of Albemarle. Mrs. Gillespie is also a festival organizer, milonga host, and
        instructor at Charlottesville Tango.
      </p>
      <hr />
    </Instructor>
    <Instructor>
      <p>
        <EdwinImage />
        <span className="bold instructor">Edwin Roa | Guest Instructor</span>A native of Bogota, Colombia, Edwin O. Roa
        moved to the US in 1995. He is a professional dancer who has trained in multiple dance disciplines and he
        currently teaches ballroom dances at James Madison University. Edwin devoted his career to the study of partner
        dance. He has been involved in our dance community for over 20 years. Edwin currently resides in
        Charlottesville, VA, where he works as an independent dance instructor. He is the founder of The Dance Spot and
        Co-founder of the Charlottesville Salsa Club. His interest in music, cultures and the perspectives of partner
        dance have encouraged him to experiment and develop a method of teaching social partner dance called Zabor
        Dance.
      </p>
      <hr />
    </Instructor>
  </div>
)

export default Faculty
