import WorkHolder from './WorkHolder'
import SYTE from '../assets/syte.png'
import TEZOS from '../assets/tezos.png'
import ME from '../assets/marcusevans.png'
import CODE from '../assets/coding.png'
import SHOE from '../assets/shoe.png'

const Work = () => {
  return (
    <div name='work' className='bg-primary w-full h-fit flex'>
      <div className='max-w-[600px] lg:max-w-[1000px] mx-auto'>
        <div className='pl-10 flex flex-col '>
          <div>
            <p className='text-4xl text-[#fff] font-semibold border-b-4 border-text inline'>
              Work
            </p>
            <p className='text-[#fff] py-4 text-md lg:text-xl duration-300'>
              Here is my prior intership/work experience:
            </p>
          </div>
        </div>
        <div className='w-full grid lg:grid-cols-2 gap-8 p-10 text-[#fff]'>
          <WorkHolder
            img={CODE}
            txt='Frelance Developer - Current'
            jobtxt='Working on small projects, websites, apps and scripts to familiarize myself with APIs and build my knowledge in the coding ecosystem.'
          />
          <WorkHolder
            img={SHOE}
            txt='Sneaker Reseller - Current'
            jobtxt='Worked with sneaker software companies to help customers use their software properly. Built relationships in the sneaker software and resale community.'
          />
          <WorkHolder
            img={SYTE}
            txt='SyteAI Sep 2020 - May 2021'
            jobtxt='Worked with professionals in a biz-dev environment to help target ads, research and analyze data, and help grow the company. Used tools such as Salesforce, linkedIn Navigator, SimilarWeb, & others while doing my work. 
            '
          />
          <WorkHolder
            img={TEZOS}
            txt='Tezos Feb 2021 - Jul 2021'
            jobtxt='Worked with professionals to help develop websites, marketing campaigns, and created slideshows to be presented to important figures in the blockchain community. Developed websites for Tezos in HTML, CSS, and Javascript.'
          />
          <WorkHolder
            img={ME}
            txt='Marcus Evans Jun 2019 - Aug 2020, Aug 2021 - Nov 2021'
            jobtxt='Worked alongside professionals to help create meetings between CEOs of fortune 500 companies and small startups in need of loans. Helped to close deals with smaller biotech companies in need of money. Closed first stage sales meetings with 73 companies which led to a 4% closing resulting in $140,000 for my company. 
            '
          />
        </div>
      </div>
    </div>
  )
}

export default Work
