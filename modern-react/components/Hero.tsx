"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroole = () => {
    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                find, book, or rent a car -- quickly and easily!
            </h1>

            <p className='hero__subtitle'>
                We have the best cars at the best prices. Just for you.
            </p>

            <CustomButton
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroole}
            />

        </div>
    </div>
  )
}

export default Hero