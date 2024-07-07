// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="Passionate back-end developer working in the field since 2022, with specialty in Java and TypeScript, using frameworks like Spring Boot and Node.js to create scalable and efficient solutions."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/pravaler-photo.jpg" alt="Photo of me at Pravaler"/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my technical expertise, I have strong leadership, teamwork, and time management skills. Outside of work, I enjoy staying active through gym workouts and exploring new technologies."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of development is planning the architecture of a project. From database design to implementing Clean Architecture, I enjoy creating robust and scalable backend systems."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'calendar-alt', 		name: 'Development Since 2022', 		type: 'fad' },
	{ key: 'sitemap', 			name: 'Microservices architecture', 	type: 'fad' },
	{ key: 'robot', 			name: 'Test automation', 	type: 'fad' },
	{ key: 'users-cog', 			name: 'Requirements gathering', 	type: 'far' },
	{ key: 'layer-group', 		name: 'Clean Code', 	type: 'fad' },
	{ key: 'code-branch', 		name: 'Code versioning', 		type: 'fad' },
]