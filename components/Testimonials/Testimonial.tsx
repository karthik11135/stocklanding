'use client';
import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: '100%', opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <h1 className="text-5xl text-white text-start mb-10 font-light">
        Testimonial Section{' '}
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </motion.div>
  );
};

export default Testimonial;

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
    img: '/levine.jpg',
  },
  {
    quote:
      "Saved me hours of trip planning and coordination.  Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'Ton Perkin',
    title: 'Hamlet',
    img: '/bob.jpg',
  },
  {
    quote: 'Easy to use and makes sharing itineraries with friends a breeze!',
    name: 'Paul',
    title: 'A Dream Within a Dream',
    img: '/madaline.jpg',
  },
  {
    quote: 'This app transformed how I plan and organize my trips!',
    name: 'Gregory Mendoza',
    title: 'Pride and Prejudice',
    img: '/alex.jpg',
  },
  {
    quote:
      'The apps recommendations made our trip unforgettable I cant imagine planning another trip without it. It was a big fish. ',
    name: 'Herman Melville',
    title: 'Edd W',
    img: '/lora.jpg',
  },
];
