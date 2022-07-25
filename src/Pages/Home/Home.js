import React from 'react';
import personSVG from '../../Assets/person.svg'

const Home = () => {
    return (
        <div>

            <header class="bg-white dark:bg-gray-800">
                <nav class="border-t-4 border-blue-500">
                    <div class="container flex items-center justify-between px-6 py-3 mx-auto">
                        <div>
                            <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Mizan</a>
                        </div>

                        <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </nav>

                <div class="container px-6 py-16 mx-auto">
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2">
                            <div class="lg:max-w-lg">
                                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">I'm <span class="text-blue-500">available</span> to work with you! </h1>

                                <div class="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">

                                    <a className='btn btn-outline mx-auto' href="https://mizanbd.netlify.app" target='_blank' rel='noreferrer noopener'>Portfolio</a>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img class="w-full h-full max-w-md" src={personSVG} alt="#" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;