import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import kumu from '../../public/assets/kumu.png';
import the from '../../public/assets/theclothing.png';
import biyaheros from '../../public/assets/biyaheroes.png';
import blumr from '../../public/assets/blumr.png';
import auggie from '../../public/assets/auggiefontanilla.png';
import distort from '../../public/assets/distort.png';
import crimson from '../../public/assets/crimson.png';
import Navigation from '../navigation/index.js';

export default function Home() {
    return (
        <div className="mx-10">
            <Head>
                <title>Vinse Viñalon - Works</title>
            </Head>
            <Navigation />
            <main className={styles.mainworks}>
                <h1>WORKS</h1>
                <div className="grid grid-rows-3 justify-center px-15">
                    <div className="row-span-3 w-96 max-sm:w-80">
                        <h1>www.kumu.live</h1>
                        <p className="italic text-xs">WEB ENGINEER II</p>
                        <p className="text-xs my-3">
                            Kumu is a filipino community platform where you can
                            hangout, explore the many livestreams the community
                            has to offer, meet, chat and have fun with other
                            filipinos.
                        </p>
                        <div className="col-span-2">
                            <Image
                                src={kumu}
                                width={500}
                                height={500}
                                alt="kumu"
                            />
                        </div>
                        <br />
                        <ul className="list-disc">
                            <p className="text-xs">
                                <strong>CONTRIBUTIONS</strong>
                            </p>
                            <li className="text-xs">
                                Responsible for migrating the platform from
                                Single Page Application to Server-Side Rendering
                                for better performance using ReactJS. Also led
                                the implementation of ESLint and standardization
                                module import for better and readable codes.
                            </li>
                            <li className="text-xs">
                                Develop the majority of the features from
                                browse, search and video streams functionality
                                while creating re-usable components for every
                                feature. Also construct the tracking
                                functionality using segment.io for user
                                analytics.
                            </li>
                            <li className="text-xs">
                                Fixing and debugging issues from all major
                                browsers and creating unit test cases using
                                react testing library while making use of CI/CD
                                process for a smooth development and deployment
                                workflow.
                            </li>
                            <li className="text-xs">
                                Creating technical analysis and documentations
                                for every features and collaborating with the
                                Designers, QA’s and Back-End Developers to
                                execute and follow all the requirements needed
                                for every ticket.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <p className="text-xs">
                        TECHNOLOGIES : HTML, CSS, Javascript, ReactJS and NodeJS
                    </p>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-" />
                <div className="grid grid-rows-3 justify-center px-15">
                    <div className="row-span-3 w-96 max-sm:w-80">
                        <h1>www.theclothing-twpm.com</h1>
                        <p className="text-xs my-3">
                            THE Clothing is an independent local clothing brand.
                            Based in Cubao, Quezon City. THE Clothing represents
                            the subculture in the Philippines from music, art,
                            surfing and skateboarding.
                        </p>
                        <div className="col-span-2">
                            <Image
                                src={the}
                                width={500}
                                height={500}
                                alt="theclothing"
                            />
                        </div>
                        <br />
                        <ul className="list-disc">
                            <p className="text-xs">
                                <strong>CONTRIBUTIONS</strong>
                            </p>
                            <li className="text-xs">
                                Build the official e-commerce for the brand to
                                sell their product, post contents and setup the
                                delivery and payment system for the brand.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <p className="text-xs">
                        TECHNOLOGIES : Shopify, Liquid, HTML, CSS, Javascript
                    </p>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-" />
                <div className="grid grid-rows-3 justify-center px-15">
                    <div className="row-span-3 w-96 max-sm:w-80">
                        <h1>www.biyaheroes.com</h1>
                        <p className="italic text-xs">SENIOR WEB DEVELOPER</p>
                        <p className="text-xs my-3">
                            Biyaheroes is a web application booking service for
                            local travelers covering both land and sea trips to
                            key areas in the country.
                        </p>
                        <div className="col-span-2">
                            <Image
                                src={biyaheros}
                                width={500}
                                height={500}
                                alt="biyaheros"
                            />
                        </div>
                        <br />
                        <ul className="list-disc">
                            <p className="text-xs">
                                <strong>CONTRIBUTIONS</strong>
                            </p>
                            <li className="text-xs">
                                My main focus for Biyaheroes is to develop and
                                design the front-end application that will allow
                                the user to engage more and have a smooth
                                experience using the application.
                            </li>
                            <li className="text-xs">
                                Implemented unit test cases for the every
                                features and fixing the majority issues from
                                every major browsers.
                            </li>
                            <li className="text-xs">
                                Collaborating with the transport partners for
                                customizing and executing the needed features
                                for the dashboard.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <p className="text-xs">
                        TECH STACK : HTML, CSS, Javascript, AngularJS, NodeJS,
                        MongoDB
                    </p>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-" />
                <div className="grid grid-rows-3 justify-center px-15">
                    <div className="row-span-3 w-96 max-sm:w-80">
                        <h1>www.blumr.com</h1>
                        <p className="italic text-xs">JUNIOR WEB DEVELOPER</p>
                        <p className="text-xs my-3">
                            Blumr is a real-time video and messaging app
                            allowing users its users to experience life as it
                            happens and bringing them much closer to reality.
                        </p>
                        <div className="col-span-2">
                            <Image
                                src={blumr}
                                width={500}
                                height={500}
                                alt="blumr"
                            />
                        </div>
                        <br />
                        <ul className="list-disc">
                            <p className="text-xs">
                                <strong>CONTRIBUTIONS</strong>
                            </p>
                            <li className="text-xs">
                                My role at Blumr is to develop and create new
                                functionality that will enhance the user
                                experience.
                            </li>
                            <li className="text-xs">
                                Collaborating with Designers, QA’s and Back-End
                                Developers for creating the major
                                functionalities and submitting the necessary
                                requirement for every features.
                            </li>
                            <li className="text-xs">
                                Other roles I’ve experienced is fixing and
                                debugging issues from the major browsers.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <p className="text-xs">
                        TECH STACK : HTML, CSS, Javascript, BackboneJS and
                        NodeJS
                    </p>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-" />
                <div className="grid grid-rows-3 justify-center px-15">
                    <div className="row-span-3 w-96 max-sm:w-80">
                        <h1>www.auggiefontanilla.ph</h1>
                        <p className="text-xs my-3">
                            Auggie Fontanilla is a multi-faceted individual
                            having experience in fields such as
                            entrepreneurship, event and logistics, education and
                            most notably art. He draws inspiration from icons of
                            Americana tattoo, gangs and prison meshed with
                            Filipino religious heritage.
                        </p>
                        <div className="col-span-2">
                            <Image
                                src={auggie}
                                width={500}
                                height={500}
                                alt="auggiefontanilla"
                            />
                        </div>
                        <br />
                        <ul className="list-disc">
                            <p className="text-xs">
                                <strong>CONTRIBUTIONS</strong>
                            </p>
                            <li className="text-xs">
                                Created a portfolio and e-commerce website to
                                sell the clients artworks, merchandize and post
                                the clients latest contents.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <p className="text-xs">
                        TECH STACK : Shopify, Liquid, HTML, CSS, Javascript
                    </p>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-" />
                <div className="grid grid-rows-3 justify-center px-15">
                    <div className="row-span-3 w-96 max-sm:w-80">
                        <h1>www.distortmonsters.com</h1>
                        <p className="text-xs my-3">
                            Heavily influenced by elements of skateboarding, and
                            punk rock, Distort Monsters is a street artist
                            primarily known for his colorful characters with
                            bold outlines and multilinear textures. His works
                            are often narrative, and introspective in nature,
                            with his monsters being a visual representation of
                            his thoughts and emotions.
                        </p>
                        <div className="col-span-2">
                            <Image
                                src={distort}
                                width={500}
                                height={500}
                                alt="distortmonsters"
                            />
                        </div>
                        <br />
                        <ul className="list-disc">
                            <p className="text-xs">
                                <strong>CONTRIBUTIONS</strong>
                            </p>
                            <li className="text-xs">
                                Created a portfolio and e-commerce website to
                                sell the clients artworks, merchandize and post
                                the clients latest contents.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <p className="text-xs">
                        TECH STACK : Shopify, Liquid, HTML, CSS, Javascript
                    </p>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-" />
                <div className="grid grid-rows-3 justify-center px-15">
                    <div className="row-span-3 w-96 max-sm:w-80">
                        <h1>www.crimsonrivertattoo.com</h1>
                        <p className="text-xs my-3">
                        Crimson River Tattoo is a private tattoo studio based in Quezon, City. The private studio focus on minimal and aesthetic tattoo design.
                        </p>
                        <div className="col-span-2">
                            <Image
                                src={crimson}
                                width={500}
                                height={500}
                                alt="distortmonsters"
                            />
                        </div>
                        <br />
                        <ul className="list-disc">
                            <p className="text-xs">
                                <strong>CONTRIBUTIONS</strong>
                            </p>
                            <li className="text-xs">
                                Created a customer booking system for the clients website. This feature is for all the customers that want to book a schedule for a tattoo service.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <p className="text-xs">
                        TECH STACK : Shopify, Liquid, HTML, CSS, Javascript
                    </p>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-" />
            </main>
        </div>
    );
}
