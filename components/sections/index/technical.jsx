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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	const firstJobDate = new Date('2022-07-01');
	const currentDate = new Date();
	const experienceYears = currentDate.getFullYear() - firstJobDate.getFullYear();
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Dynamic Background"
							icon={[ 'fat', 'lightbulb' ]}
							copy="With a strong foundation in backend development and a passion for innovation, I bring a versatile approach to each project, constantly evolving to embrace cutting-edge industry trends."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software I love to work with" 
							copy={`With over ${experienceYears} years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time.`}
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I find great fulfillment in solving intricate coding challenges, specializing in back-end solutions and APIs. Each project presents a chance for me to innovate and deliver high-quality solutions, leveraging my expertise and passion for software development."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
    { "key": "vscode", "name": "VSCode", "type": "devicon" },
    { "key": "intellij", "name": "IntelliJ", "type": "devicon" },
    { "key": "eclipse", "name": "Eclipse", "type": "devicon" },
    { "key": "postman", "name": "Postman", "type": "fas" },
    { "key": "insomnia", "name": "Insomnia", "type": "fas" },
    { "key": "dbeaver", "name": "DBeaver", "type": "fas" },
    { "key": "mysql-workbench", "name": "MySQL Workbench", "type": "fas" },
    { "key": "oracle-sql-developer", "name": "Oracle SQL Developer", "type": "fas" },
    { "key": "azure-devops", "name": "Azure DevOps", "type": "devicon" },
	{ "key": "jira", "name": "Jira", "type": "devicon" }
];

const tech = [
    { "key": "java", "name": "Java", "type": "devicon" },
    { "key": "spring", "name": "Spring Boot", "type": "devicon" },
    { "key": "junit", "name": "JUnit", "type": "devicon" },
    { "key": "nodejs", "name": "Node.js", "type": "devicon" },
    { "key": "nestjs", "name": "NestJS", "type": "devicon" },
	{ "key": "jest", "name": "Jest", "type": "devicon" },
    { "key": "typescript", "name": "TypeScript", "type": "devicon" },
    { "key": "kotlin", "name": "Kotlin", "type": "devicon" },
    { "key": "csharp", "name": "C#", "type": "devicon" },
    { "key": "dot-net", "name": ".NET", "type": "devicon" },
    { "key": "php", "name": "PHP", "type": "devicon" },
    { "key": "azure", "name": "Azure Cloud", "type": "devicon" },
    { "key": "amazonwebservices", "name": "AWS", "type": "devicon" },
    { "key": "docker", "name": "Docker", "type": "devicon" },
    { "key": "kubernetes", "name": "Kubernetes", "type": "devicon" },
    { "key": "rabbitmq", "name": "RabbitMQ", "type": "devicon" },
    { "key": "apachekafka", "name": "Kafka", "type": "devicon" },
    { "key": "postgresql", "name": "PostgreSQL", "type": "devicon" },
    { "key": "microsoftsqlserver", "name": "SQL Server", "type": "devicon" },
    { "key": "mysql", "name": "MySQL", "type": "devicon" },
    { "key": "oracle", "name": "Oracle Database", "type": "devicon" },
    { "key": "git", "name": "Git", "type": "devicon" }
];